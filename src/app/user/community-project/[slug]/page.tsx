"use client";

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCommunity } from '../../../../redux/reducer/communitySlice';
import { RootState, AppDispatch } from '../../../../redux/store';
import { faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';

export default function FeedItemPage ( { params }: { params: { slug: string; }; } )
{
  const id = params.slug;
  const dispatch = useDispatch<AppDispatch>();
  const { data: community, loading, error } = useSelector( ( state: RootState ) => state.community );

  useEffect( () =>
  {
    dispatch( fetchCommunity( id ) );
  }, [ dispatch, id ] );

  if ( loading )
  {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
          <p className="mt-4 text-xl font-semibold text-gray-700">Loading...</p>
        </div>
      </div>
    );
  }

  if ( error )
  {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center p-8 bg-white rounded-lg shadow-md">
          <svg className="mx-auto h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h1 className="mt-4 text-2xl font-bold text-gray-800">Error</h1>
          <p className="mt-2 text-gray-600">{ error }</p>
          <button
            onClick={ () => dispatch( fetchCommunity( id ) ) }
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if ( !community )
  {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center p-8 bg-white rounded-lg shadow-md">
          <svg className="mx-auto h-16 w-16 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
          <h1 className="mt-4 text-2xl font-bold text-gray-800">No Community Found</h1>
          <p className="mt-2 text-gray-600">We couldn't find the community you're looking for.</p>
          <button
            onClick={ () => window.history.back() }
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-500 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-gray-300 rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-64 bg-blue-600">
            <img
              src={ `https://dummyimage.com/1200x400/000/fff&text=${ community.title[ 0 ] }` }
              alt={ community.title }
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
              <h1 className="text-4xl font-bold text-white mb-2">{ community.title }</h1>
              <p className="text-xl text-gray-200">{ community.members?.length || 0 } Members</p>
            </div>
          </div>

          <div className="p-6">
            <p className="text-lg text-gray-700 mb-6">{ community.description }</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">Ecosystems</h2>
                <div className="flex flex-wrap gap-2">
                  { community.ecosystem.map( ( eco, index ) => (
                    <span key={ index } className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      { eco }
                    </span>
                  ) ) }
                </div>
              </div>

              <div>
                <div
                  className="flex gap-2"
                >

                  <h2 className="text-2xl font-semibold text-blue-600 mb-4">Community Stats</h2>
                  <button
                    // onclick send the user to add-quest url endpoint
                    onClick={ () => window.location.href = `/add-quest/${id}`
                    }
                    className="px-4 py-2 mb-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
                  >

                    Create A New Quest

                  </button>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-blue-800">{ community.quests?.length || 0 }</p>
                  <p className="text-gray-600">Active Quests</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-semibold text-gray-800 mt-12 mb-6">Active Quests</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          { community.quests?.map( ( questId ) => (
            <Link href={ `/quest/${ questId }` } key={ questId }>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="bg-blue-100 h-40 flex items-center justify-center">
                  <span className="text-6xl text-blue-500">🏆</span>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Quest #{ questId }</h3>
                  <p className="text-gray-600">Click to view quest details</p>
                </div>
              </div>
            </Link>
          ) ) }
        </div>
      </div>
    </div>
  );
}