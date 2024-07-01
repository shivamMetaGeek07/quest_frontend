import React from 'react'

const PointsParlor = () => {
  return (
	<div className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="w-96 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
    <div className="flex justify-between items-center p-4 bg-blue-50">
      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-blue-200">
        <img src="https://img.freepik.com/premium-photo/memoji-beautiful-girl-woman-white-background-emoji_826801-6872.jpg?w=740" alt="Profile Picture" className="w-full h-full object-cover" />
      </div>
      <div className="ml-4 text-left">
        <p className="text-gray-700 font-semibold">username.fam</p>
        <div className="bg-gray-200 rounded-full h-2.5 w-32 mt-1">
          <div className="bg-green-500 h-2.5 rounded-full" ></div>
        </div>
        <p className="text-sm text-gray-500 mt-1">Points Bar</p>
      </div>
    </div>
    <div className="flex justify-between gap-4 p-4 bg-white">
        <div className='w-60 h-20 bg-blue-300'></div>
		<div className='w-60 h-20 bg-blue-300'></div>
		<div className='w-60 h-20 bg-blue-300'></div>
		<div className='w-60 h-20 bg-blue-300'></div>
		<div className='w-60 h-20 bg-blue-300'></div>

    </div>
  </div>
</div>



  )
}

export default PointsParlor