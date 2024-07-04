"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
type Props = {};

const CommunityDataPage = (props: Props) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [ecosystems, setEcosystems] = useState<string[]>([]);
  const [description, setDescription] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [newEcosystem, setNewEcosystem] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    console.log(categories, ecosystems, description);
    if (token) {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/updateCommunityData`,
          { categories, ecosystems, description },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        console.log("Community created:", response.data.community);
        setNewCategory("");
        setNewEcosystem("");
        // router.push('/dashboard');
      } catch (error) {
        console.error("Error creating community:", error);
      }
    } else {
      console.error("Token not found");
      router.push("/admin/login");
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/getCommunityData`
        );
        setEcosystems(response.data.ecosystems);
        setCategories(response.data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }
    fetchCategories();
  }, [])

  return (
    <div className="h-screen bg-gray-900">
      <div className="flex justify-center mb-6 p-4 py-6">
        < h2 className="text-4xl font-bold text-white">Edit Community MetaData</h2>
      </div>
      <div className="flex justify-center items-start text-white p-4 gap-4">
        <div className="w-1/2 border justify-center items-center p-4 rounded-md bg-gray-800">
          <h2 className="text-2xl text-center p-2">Categories</h2>
          <div>
            <ul className="p-4">
              {categories.map((category) => (
                <li key={category}>{category}</li>
              ))}
            </ul>
          </div>
        </div>
        < div className="w-1/2 border justify-center items-center p-4 rounded-md bg-gray-800">
          <h2 className="text-2xl text-center p-2" >Ecosystem</h2>
          <div>
            <ul className="p-4">
              {ecosystems.map((ecosystem) => (
                <li key={ecosystem}>{ecosystem}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <form
        className="mx-auto bg-gray-900 p-8"
        onSubmit={handleSubmit}
      >
        {/* <div className="mb-5">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-white "
          >
            Description
          </label>
          <textarea
            id="description"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here"
          ></textarea>
        </div> */}
        <div className="mb-5">
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Category
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder="New Category"
              className="rounded-lg border border-gray-300 p-2 text-sm"
            />
            <button
              className="bg-blue-500 rounded-3xl px-4 py-2 text-white text-sm"
              type="button"
              onClick={() => {
                setCategories([...categories, newCategory]);
                setNewCategory("");
              }}
            >
              Add
            </button>
          </div>
          {
            categories.length > 0 &&

            <div className="mt-2 bg-gray-700 rounded-2xl p-1">
              <div className="flex gap-2 flex-wrap">
                {categories.map((category, index) => (
                  <div key={index} className="bg-white rounded-full">
                    <input
                      type="text"
                      value={category}
                      onChange={(e) => {
                        const newCategories = [...categories];
                        newCategories[index] = e.target.value;
                        setCategories(newCategories);
                      }}
                      className="w-20 rounded-full  px-2 py-1 text-sm"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setCategories(categories.filter((_, i) => i !== index));
                      }}
                      className="text-sm p-2"
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
            </div>
          }
        </div>

        <div className="mb-5">
          <label
            htmlFor="ecosystem"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Ecosystem
          </label>
          <div className="w-full flex gap-2">
            <input
              type="text"
              value={newEcosystem}
              onChange={(e) => setNewEcosystem(e.target.value)}
              placeholder="New Ecosystem"
              className="rounded-lg border border-gray-300 p-2 text-sm"
            />
            <button
              className="bg-blue-500 rounded-3xl px-4 py-2 text-white text-sm"
              type="button"
              onClick={() => {
                setEcosystems([...ecosystems, newEcosystem]);
                setNewEcosystem("");
              }}
            >
              Add
            </button>
          </div>
          {
            ecosystems.length > 0 &&
            <div className="mt-2 bg-gray-700 rounded-2xl p-1">
              <div className="flex gap-2 flex-wrap">
                {ecosystems.map((ecosystem, index) => (
                  <div key={index} className="bg-white rounded-full">
                    <input
                      type="text"
                      value={ecosystem}
                      onChange={(e) => {
                        const newEcosystems = [...ecosystems];
                        newEcosystems[index] = e.target.value;
                        setEcosystems(newEcosystems);
                      }}
                      className="w-20 rounded-full  px-2 py-1 text-sm"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setEcosystems(ecosystems.filter((_, i) => i !== index));
                      }}
                      className="text-sm p-2"
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
            </div>
          }

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

export default CommunityDataPage;
