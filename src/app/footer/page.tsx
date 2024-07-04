import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white  py-20">
      <div className="flex  justify-around gap-10 mx-10 ">
        <div className="mt-10 w-full md:w-1/2  pr-4">
          <div className="mb-4">
            <Image
              src='https://flowbite.com/docs/images/logo.svg'
              alt='Flowbite Logo'
              width={50}
              height={50}
            />
          </div>
          <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio asperiores aperiam sapiente maiores! Tenetur hic alias inventore nihil repellat facilis.</p>
        </div>
        <div className="mt-10 w-full md:w-2/3 flex flex-wrap justify-between">
          <div className="mb-6 w-full md:w-1/3">
            <h2 className="font-bold text-lg mb-3">Learn</h2>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-gray-200">Blog</a></li>
              <li><a href="#" className="hover:text-gray-200">Documentation</a></li>
              <li><a href="#" className="hover:text-gray-200">API Docs</a></li>
            </ul>
          </div>
          <div className="mb-6 w-full md:w-1/3">
            <h2 className="font-bold text-lg mb-3">Get Started</h2>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-gray-200">Login</a></li>
              <li><a href="#" className="hover:text-gray-200">Create a Community</a></li>
              <li><a href="#" className="hover:text-gray-200">Become a Partner</a></li>
            </ul>
          </div>
          <div className="mb-6 w-full md:w-1/3">
            <h2 className="font-bold text-lg mb-3">Resources</h2>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-gray-200">About</a></li>
              <li><a href="#" className="hover:text-gray-200">Career</a></li>
              <li><a href="#" className="hover:text-gray-200">Email us</a></li>
              <li><a href="#" className="hover:text-gray-200">Contact support</a></li>
              <li><a href="#" className="hover:text-gray-200">Cookies preference</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
