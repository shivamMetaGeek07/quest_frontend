"use client";
import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const CreateCommunity = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [logo, setLogo] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [canProceed, setCanProceed] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
   
    const newCommunity = { title, description, logo, category, ecosystem: "tech"};
    console.log(newCommunity)
    try {
      const response = await axios.post( `${ process.env.NEXT_PUBLIC_SERVER_URL }/community/`, newCommunity );
      console.log(response.data.msg)
      alert( `${ response.data.msg} `)

      // Clear form
      setTitle("");
      setDescription("");
      setLogo("");
      setCategory("");
    } catch (error) {
      console.error("Error creating community:", error);
    }
  };

  
  return (
    <div
      className="min-h-screen bg-slate-500 flex items-center justify-center cursor-pointer"
      // onClick={() => window.history.back()}
    >
      <div
        className={`fixed top-0 left-0 h-full bg-gradient-to-r from-blue-100 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "45%", overflowY: "auto" }}
      >
        {/* <Navbar/> */}
        <div className="relative bg-[#282828] p-10 shadow-xl w-full h-full overflow-y-auto">
          <h1 className="text-3xl font-bold mb-4 text-white">
            Let's create your community together
          </h1>
          <p className="text-neutral-300">
            Our users like to know more about a community before they get
            involved. Please include any information they may need.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-5 mt-10">
              <label className="block text-white font-semibold">Logo</label>
              <div className="relative">
                <input
                  type="file"
                  onChange={() => {}}
                  className="file:bg-zinc-700 text-neutral-300 file:rounded-full file:text-white file:border-none file:p-1 file:px-3 file:font-light  w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 cursor-pointer transition-colors duration-300 font-light  bg-[#282828]"
                  required
                />
                <p className="text-neutral-300">
                  Recommended size is 256x256px
                </p>
              </div>
            </div>
            <div className="mb-5">
              <label className="block text-white font-semibold">Title</label>
              <input
                type="text"
                value={title}
                placeholder="Name of your community"
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 text-white bg-[#282828]"
                required
              />
            </div>
            <div className="mb-5">
              <label className="block text-white font-semibold">
                Description
              </label>
              <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 text-white bg-[#282828]"
                rows={4}
              />
            </div>

            {/* Conditional section */}
            <div className="mb-5">
              <p className="block text-white font-semibold mb-2">
                Is your project blockchain related?
              </p>
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setCanProceed(true)}
                  className={
                    " bg-[#282828] text-white py-2 px-4 rounded-lg hover:bg-gray-500 transition-colors duration-300 "
                  }
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={() => setCanProceed(false)}
                  className={
                    "bg-[#282828] text-white py-2 px-4 rounded-lg hover:bg-gray-500 transition-colors duration-300 "
                  }
                >
                  No
                </button>
              </div>
            </div>
            {canProceed && (
              <div className="mb-5">
                <label className="block text-white font-semibold">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors duration-300 text-white bg-[#282828]"
                >
                  <option value="">Select a category</option>
                  <option value="Technology">Technology</option>
                  <option value="Science">Science</option>
                  <option value="Education">Education</option>
                  <option value="Health">Health</option>
                  <option value="Finance">Finance</option>
                </select>
              </div>
            )}

            <div className="flex justify-start mt-6 space-x-4">
              <button
                type="button"
                // onClick={() => setIsOpen(false)}
                onClick={() => window.history.back()}
                className=" text-white py-2 px-4 bg-white/10  rounded-lg transition-colors duration-300 shadow-lg"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={!canProceed}
                className={`bg-white/10 text-white px-10 py-4 rounded-lg   ${
                  !canProceed ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Create community
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateCommunity;