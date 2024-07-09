import { updateUserProfile } from '@/redux/reducer/authSlice';
import { AppDispatch, RootState } from '@/redux/store';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ModalForm = () => {
  const router=useRouter();
    const dispatch = useDispatch<AppDispatch>();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const  user = useSelector((state: RootState) => state.login.user);
  const [formData, setFormData] = useState({
    bgImage: user?.bgImage || '',
    bio: user?.bio || '',
    nickname: user?.nickname || '',
    image: user?.image || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const resultAction = await dispatch(updateUserProfile(formData));
    if (updateUserProfile.fulfilled.match(resultAction)) {
      router.refresh(); // Reload the current page
      setIsModalVisible(false)
    }
  };
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <div>
      <button
        onClick={toggleModal}
        className="block text-white bg-blue-700 hover:bg-blue-800   focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 m-3 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        update profile
      </button>

      {isModalVisible && (
        <div
          id="static-modal"
          tabIndex={-1}
          aria-hidden="true"
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        > <button
        type="button"
        onClick={toggleModal}
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <span className="sr-only">Close modal</span>
      </button>
          <div className="relative text-gray-800 p-4 w-full max-w-2xl max-h-full">
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded">
      <div className="mb-4">
        <label htmlFor="bgImage" className="block text-sm font-medium text-gray-700">Background Image URL</label>
        <input
          type="text"
          id="bgImage"
          name="bgImage"
          value={formData.bgImage}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Bio</label>
        <textarea
          id="bio"
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="nickname" className="block text-sm font-medium text-gray-700">Nickname</label>
        <input
          type="text"
          id="nickname"
          name="nickname"
          value={formData.nickname}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      {/* <div className="mb-4">
        <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image URL</label>
        <input
          type="text"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div> */}

      <button
        type="submit"
        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Update Profile
      </button>
    </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalForm;
