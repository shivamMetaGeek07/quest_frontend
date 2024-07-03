"use client";

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCommunity } from '../../../redux/reducer/communitySlice';
import { RootState, AppDispatch } from '../../../redux/store';
import { faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FeedItemPage ( { params }: { params: { slug: string; }; } )
{
  const id = params.slug;
  const dispatch = useDispatch<AppDispatch>();
  const temp = useSelector( ( state: RootState ) => console.log(state) );
  
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
        <div className="Main div container mx-auto px-4">

            <h1 className="text-2xl sm:text-3xl font-bold text-center text-[#4169E1] mt-0 mb-5">
                { community.title }
            </h1>

            <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="md:w-2/5 flex flex-col items-center md:items-start">
                    <img
                        src={ `https://dummyimage.com/600x400/000/fff&text=${ community.title[ 0 ] }` }
                        alt={ community.title }
                        className="rounded-full w-48 h-48 sm:w-64 sm:h-64 object-cover mb-4"
                    />
                    { community.members && community.members.length > 0 && (
                        <div className="flex justify-center md:justify-start mt-4 relative ml-7">
                            { community.members.slice( 0, 8 ).map( ( memberId, index ) => (
                                <img
                                    key={ memberId }
                                    src={ `https://dummyimage.com/40x40/000/fff&text=${ index + 1 }` }
                                    alt={ `Member ${ index + 1 }` }
                                    className="w-8 h-8 rounded-full object-cover border-2 border-white -mr-2"
                                    title={ `Member ${ index + 1 }` }
                                />
                            ) ) }
                            { community.members.length > 8 && (
                                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs font-semibold">
                                    +{ community.members.length - 8 }
                                </div>
                            ) }
                        </div>
                    ) }
                </div>

                <div className="md:w-3/5">
                    <p className="text-lg">{ community.description }</p>
                </div>
            </div>


            <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-3/4">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">

                    </div>
                        <h1
                            className="text-2xl sm:text-3xl font-bold text-center text-[#4169E1] mb-4"
                        
                        >EcoSystems</h1>
                    <div className="space-y-4">
                        { community.ecosystem.map( ( eco, index ) => (
                            <div key={ index } className="bg-slate-400 p-3 rounded-md text-white text-center hover:bg-blue-400 duration-300 hover:animate-pulse cursor-pointer">
                                { eco }
                            </div>
                        ) ) }
                    </div>
                </div>  
                <div className="lg:w-1/4 space-y-4">
                    <div className="shadow-lg flex items-center justify-center h-28 bg-slate-200 rounded-md hover:bg-slate-400 duration-300 hover:animate-pulse cursor-pointer">
                        <h1
                            className="text-2xl sm:text-3xl font-bold text-center text-[#416
                            9F] hover:text-white duration-300 hover:animate-pulse cursor-pointer"
                        >
                            00:45:09
                        </h1>
                    </div>
                    <div className="shadow-lg flex items-center justify-center h-44 bg-slate-200 rounded-md hover:bg-slate-400 duration-300 hover:animate-pulse cursor-pointer">
                        <p className="text-2xl sm:text-3xl font-bold text-center text-[#416
                            9F] hover:text-white duration-300 hover:animate-pulse cursor-pointer">
                            About reward pool
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

