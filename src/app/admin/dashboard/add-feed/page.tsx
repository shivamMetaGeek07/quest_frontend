"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { describe } from 'node:test';

const AddFeedPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    author: '',
    imageUrl: '',
    summary: ''
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    console.log(e.target)
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));

    console.log(formData);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    // e.preventDefault();
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/add-feed`,
          {
            ...formData
          },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        console.log('Blog feed created:', response.data.blogFeed);
        // router.push('/dashboard');
      } catch (error) {
        console.error('Error creating blog feed:', error);
      }
    }
    else{
      console.error('Token not found');
      router.push('/admin/login');
    }
  };

  return (
  <div className="h-screen bg-gray-950">
      <form
        className="mx-auto bg-gray-900 p-8"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-center mb-6">
        < h2 className="text-2xl font-bold text-white">Add Feed</h2>
      </div>

        <div className="mb-5">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-white "
          >
            Title
          </label>
          <input name="title" type="text" id="title" value={formData.title} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="title" required />
        </div>
        <div className="mb-5">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-white "
          >
            Description
          </label>
          <textarea
            id="description"
            rows={4}
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here"
            required
          ></textarea>
        </div>

        <div className="mb-5">          
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload file</label>
          {/* for url */}
          <input type='string' name='imageUrl' className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" onChange={handleChange}  required/>
          {/* for file upload*/}
          {/* <input id="file_input" name='imageUrl' onChange={handleChange} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" type="file" required/> */}
        </div>

        <div className="mb-5">
          <label htmlFor='author' className="block mb-2 text-sm font-medium text-white ">Author</label>
          <input
            type="text"
            id="author"
            value={formData.author}
            onChange={handleChange}
            name="author"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="summary"
            className="block mb-2 text-sm font-medium text-white "
          >
            summary
          </label>
          <textarea
            id="summary"
            rows={4}
            name='summary'
            value={formData.summary}
            onChange={handleChange}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddFeedPage;
