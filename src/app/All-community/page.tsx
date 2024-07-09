"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const page: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const [ecosystem, setEcosystem] = useState<string>('');
  const [category, setCategory] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/community/get`, {
        search,
        ecosystem,
        category: category.split(',').map((cat) => cat.trim()), // Splitting categories by comma and trimming whitespace
      });
      console.log('Communities:', response.data);
    } catch (error) {
      console.error('Failed to fetch communities:', error);
    }
  };
  const getData=async()=>{
  const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/community/get`, {
    withCredentials: true,
  });
  console.log(response.data.communities);
}

  useEffect(()=>{
    getData()
  },[2])
  return (
    <form  onSubmit={handleSubmit}>
      <div>
        <label htmlFor="search">Search:</label>
        <input
        className='text-black'
          type="text"
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="ecosystem">Ecosystem:</label>
        <input
        className='text-black'
          type="text"
          id="ecosystem"
          value={ecosystem}
          onChange={(e) => setEcosystem(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="category">Category (comma separated):</label>
        <input
        className='text-black'
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <button type="submit">Search</button>
    </form>
  );
};

export default page;
