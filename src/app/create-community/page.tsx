"use client"
import React, { useState } from 'react';
import axios from 'axios';

const CreateCommunity = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [logo, setLogo] = useState<string>('');
  const [category, setCategory] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newCommunity = { title, description, logo, category };
    try {
      await axios.post('/api/communities', newCommunity); // Adjust the endpoint as needed
      // Clear form
      setTitle('');
      setDescription('');
      setLogo('');
      setCategory('');
    } catch (error) {
      console.error('Error creating community:', error);
    }
  };
60
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 flex flex-col items-center justify-center py-10 px-5">
      <div className="bg-white mt-10 p-10 rounded-xl shadow-xl w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Create New Community</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block text-gray-700 font-semibold">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 font-semibold">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
              rows={4}
            />
          </div>
          <div className="mb-5">
  <label className="block text-gray-700 font-semibold">Logo</label>
  <div className="relative">
    <input
      type="file"
      onChange={()=>{}}
      className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-300 file:mr-4 file:py-2 file:px-4 file:rounded-l-md file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
      required
    />
  </div>
</div>
          <div className="mb-5">
            <label className="block text-gray-700 font-semibold">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
            >
              <option value="">Select a category</option>
              <option value="Technology">Technology</option>
              <option value="Science">Science</option> 
              <option value="Education">Education</option>
              <option value="Health">Health</option>
              <option value="Finance">Finance</option>
            </select>
          </div>
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-blue-500 text-white w-full py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 shadow-lg"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCommunity;
