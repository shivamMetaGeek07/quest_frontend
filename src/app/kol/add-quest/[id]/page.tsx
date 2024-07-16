"use client";

import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createQuest1, Reward } from '../../../../redux/reducer/questSlice';
import { RootState, AppDispatch } from '../../../../redux/store';
import { useParams, useRouter } from 'next/navigation';
import { useProtectedRoute } from '@/utils/privateRoute';
import { notify } from '@/utils/notify';

function CreateQuest ()
{
  useProtectedRoute( "kol" );

  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector( ( state: RootState ) => state.quest );

  const [ title, setTitle ] = useState<string>( '' );
  const [ description, setDescription ] = useState<string>( '' );
  const [ rewards ] = useState<Reward[]>( [
    { type: 'xp', value: 0 },
    { type: 'coin', value: 0 }
  ] );

  const { id: communityId } = useParams();

  const handleRewardChange = useCallback( ( index: number, value: number ) =>
  {
    rewards[ index ].value = value;
  }, [ rewards ] );
  
  console.log(rewards)

  const handleSubmit = useCallback( async ( e: React.FormEvent ) =>
  {
    e.preventDefault();
    try
    {
      const newQuest = { title, description, type: 'DAILY', status: 'NOT_STARTED', rewards, communityId };

      const resultAction = await dispatch( createQuest1( newQuest ) );

      if ( createQuest1.fulfilled.match( resultAction ) )
      {
        notify( "success",'Quest created successfully' );
        setTitle( '' );
        setDescription( '' );
        router.push( `/kol/quest/${ resultAction.payload.newQuest._id }` );
      } else
      {
        notify( "error",'Failed to create quest' );
      }
    } catch ( err )
    {
      console.error( 'Error creating quest:', err );
    }
  }, [ title, description, rewards, communityId, dispatch, router ] );

  return (
    <div className="min-h-screen text-black bg-gradient-to-r from-black via-slate-900 to-slate-900 flex flex-col items-center justify-center py-10 px-5">
      <div className="bg-gradient-to-r from-slate-900 to-black mt-10 p-10 rounded-xl shadow-xl w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-purple-700">Create New Quest</h1>
        <form onSubmit={ handleSubmit }>
          <div className="mb-5">
            <label className="block text-gray-300 font-semibold">Title</label>
            <input
              type="text"
              value={ title }
              onChange={ ( e ) => setTitle( e.target.value ) }
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-300 bg-gray-800 text-white"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-300 font-semibold">Description</label>
            <textarea
              value={ description }
              onChange={ ( e ) => setDescription( e.target.value ) }
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-300 bg-gray-800 text-white"
              rows={ 4 }
              required
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-300 font-semibold">Rewards</label>
            { rewards.map( ( reward, index ) => (
              <div key={ index } className="flex items-center mt-2">
                <label htmlFor="type"
                className="w-1/2 px-4 py-2 border rounded-l-lg bg-gray-800 text-white"
                
                >
                  {reward.type}
                </label>
               
                <input
                  type="number"
                  // value={ reward.value }
                  onChange={ ( e ) => handleRewardChange( index, +e.target.value ) }
                  placeholder="Value"
                  className="w-1/2 px-4 py-2 border rounded-r-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-300 bg-gray-800 text-white"
                  required
                />
              </div>
            ) ) }
          </div>
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-300 shadow-lg"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateQuest;