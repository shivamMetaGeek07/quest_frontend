"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";
  
interface FeedItem {
  id:string
  title: string;
  description: string;
  imageUrl: string;
}

export default function FeedItemPage({ params }: { params: { id: string } }) {
  const id = params.id
  const [item, setItem] = useState<FeedItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {     
    getFeed();
  }, [id]);

  

  const getFeed = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${ process.env.NEXT_PUBLIC_SERVER_URL }/feed/${id}`);
        setItem(response.data.feed)
     
    } catch (err) {
      setError("Failed to fetch feed data");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!item) return <div>Feed item not found</div>;

  return (
    <div className='max-w-4xl mx-auto px-4 py-8'>
      <img
        src={item.imageUrl}
        alt={`image ${item.id}`}
        className='w-full h-64 object-cover mb-4'
      />
      <h1 className='text-3xl font-bold mb-4'>{item.title}</h1>
      <p className='text-gray-700 mb-4'>{item.description}</p>
      <Link href='/user/feed' className='text-cyan-500 hover:text-blue-800'>
        Back to Feed
      </Link>
    </div>
  );
}