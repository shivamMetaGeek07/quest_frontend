"use client";

// import type { Metadata } from "next"; 
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";


interface data {
  _id: number;
  title: string;
  description: string;
  imageUrl: string;
}

function FeedCard({ _id, title, description, imageUrl }: data) {
  const words = description.split(" ");
  const isLongContent =
    (window.innerWidth < 600 && words.length > 50) || words.length > 100;
  const maxWords = window.innerWidth < 700 ? 20 : 100;
  const shortDescription = isLongContent
    ? words.slice(0, maxWords).join(" ") + "..."
    : description;

  return (
    <div className='bg-white/15 hover:bg-white/25 hover:scale-x-105  rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-1000 ease-in-out flex flex-col md:flex-row'>
      <div className='md:w-1/3 h-48 md:h-auto overflow-hidden'>
        <img
          className='w-full h-full object-cover'
          src={imageUrl}   
          alt={`image ${_id}`}
        />
      </div>              
      <div className='p-5 md:w-2/3 flex flex-col justify-between'>
        <div>
          <h3 className='text-2xl font-medium mb-3 text-center md:text-start'>
            {title}
          </h3>
          <p className='text-neutral-300 mb-2'>{shortDescription}</p>
        </div>    
        <div className='mt-2 flex justify-end'>
          <Link
            href={`/feed/${_id}`}
            className='text-white hover:bg-gradient-to-br focus:ring-4 focus:outline-none bg-gray-900 shadow-sm hover:bg-slate-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2  '
              >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}



export default function Feed() {
  interface Feed {
    _id: number;
    title: string;
    description: string;
    imageUrl: string;
  }
  const [feedItems, setFeedItems] = useState<Feed[]>([]);
  const [ loading, setLoading ] = useState<Boolean>( true );
  useEffect(() => {
    getFeeds();
   
  }, []);

  const getFeeds = async () =>
  {
    try
    {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL }/feed`);
      setFeedItems(response.data.feeds);
      setLoading(false)
    } catch (error) {
      console.log('error in getting feed :-',error)
    }
  };  
  
  return (
    <div className='feed lg:mx-20'>
       <div className='lg:10 mt-6 mx-32'>
          <h2 className='lg:text-4xl  text-2xl font-medium'>Daily Feed</h2>
        </div>
      <div className='max-w-7xl mx-auto px-4 py-8'>

        <div className='lg:mx-20 space-y-6'>
          {feedItems?.map((item) => (
            <FeedCard key={item._id} {...item} />     
          ))}

        </div>
      </div>
    </div>
  );
}