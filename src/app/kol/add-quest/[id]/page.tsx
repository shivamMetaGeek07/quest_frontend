"use client";

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createQuest, createQuest1, Reward } from '../../../../redux/reducer/questSlice';
import { RootState, AppDispatch } from '../../../../redux/store';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import { useProtectedRoute } from '@/utils/privateRoute';

function CreateQuest ()
{
  useProtectedRoute("kol");

  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector( ( state: RootState ) => state.quest );

  const [ title, setTitle ] = useState<string>( '' );
  const [ description, setDescription ] = useState<string>( '' );
  const [ rewards, setRewards ] = useState<Reward[]>( [ { type: '', value: 0 } ] );

  const communityId = useParams();

  // const communityId  = id?.id;  
  
  const handleRewardChange = ( index: number, field: 'type' | 'value', value: string | number ) =>
    {
      const newRewards = rewards.map( ( reward, i ) =>
        i === index ? { ...reward, [ field ]: value } : reward
    );
    setRewards( newRewards );
  };
  
  const addReward = () =>
    {
      setRewards( [ ...rewards, { type: '', value: 0 } ] );
    };
    
    const removeReward = ( index: number ) =>
  {
    const newRewards = rewards.filter( ( _, i ) => i !== index );
    setRewards( newRewards );
  };
  


  const handleSubmit = async ( e: React.FormEvent ) =>
    {
    console.log("comunityId",communityId);
    e.preventDefault();
    try
    {
      const newQuest = { title, description, type: 'DAILY', status: 'NOT_STARTED', rewards, communityId:communityId.id };

      const resultAction = await dispatch( createQuest1( newQuest ) );
      
      if ( createQuest1.fulfilled.match( resultAction ) )
        {
          alert( 'Quest created successfully' );
          // Clear form
          setTitle( '' );
          setDescription( '' );
          setRewards( [ { type: '', value: 0 } ] );
        // console.log( resultAction.payload.newQuest._id )
        // Redirect to community page
        router.push( `/kol/quest/${resultAction.payload.newQuest._id}` );
        
      } else
      {
        alert( 'Failed to create quest' );
      }
    } catch ( err )
    {
      console.error( 'Error creating quest:', err );
    }
  };

  return (
    <div className="min-h-screen text-black bg-gradient-to-r from-purple-100 to-purple-300 flex flex-col items-center justify-center py-10 px-5">
      <div className="bg-white mt-10 p-10 rounded-xl shadow-xl w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-purple-700">Create New Quest</h1>
        <form onSubmit={ handleSubmit }>
          <div className="mb-5">
            <label className="block text-gray-700 font-semibold">Title</label>
            <input
              type="text"
              value={ title }
              onChange={ ( e ) => setTitle( e.target.value ) }
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-300"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 font-semibold">Description</label>
            <textarea
              value={ description }
              onChange={ ( e ) => setDescription( e.target.value ) }
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-300"
              rows={ 4 }
              required
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 font-semibold">Rewards</label>
            { rewards.map( ( reward, index ) => (
              <div key={ index } className="flex items-center mt-2">
                <input
                  type="text"
                  value={ reward.type }
                  onChange={ ( e ) => handleRewardChange( index, 'type', e.target.value ) }
                  placeholder="Reward Type"
                  className="w-1/2 px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-300"
                  required
                />
                <input
                  type="number"
                  value={ reward.value }
                  onChange={ ( e ) => handleRewardChange( index, 'value', +e.target.value ) }
                  placeholder="Value"
                  className="w-1/2 px-4 py-2 border rounded-r-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-300"
                  required
                />
                <button
                  type="button"
                  onClick={ () => removeReward( index ) }
                  className="ml-2 bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition-colors duration-300"
                >
                  Remove
                </button>
              </div>
            ) ) }
            <button
              type="button"
              onClick={ addReward }
              className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              Add Reward
            </button>
          </div>
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition-colors duration-300 shadow-lg"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateQuest;
