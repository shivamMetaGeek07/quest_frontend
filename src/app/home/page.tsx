"use client";
import React, { useState } from "react";
import { useRouter } from 'next/navigation'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
interface data {
	id: Number,
	profilePic: string,
	title: string,
	description: string,
}
interface bounti {
	image: string,
	name: string,
	description: string,
}

const Home = () => {
	const router = useRouter()
	const [userData, setUserData] = useState<data[]>([
		{
			id: 1,
			profilePic: "https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=600",
			title: "Ven Disel",
			description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, aliquid.",

		},
		{
			id: 2,
			profilePic: "https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=600",
			title: "Michel",
			description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, aliquid.",

		},
		{
			id: 3,
			profilePic: "https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=600",
			title: "Ranvijay",
			description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, aliquid.",

		},
		{
			id: 4,
			profilePic: "https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=600",
			title: "Raj",
			description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, aliquid.",

		},
		{
			id: 5,
			profilePic: "https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=600",
			title: "Masumiyat Anna",
			description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, aliquid.",

		},
		{
			id: 6,
			profilePic: "https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=600",
			title: "Vinay raj",
			description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, aliquid.",

		},
		{
			id: 7,
			profilePic: "https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=600",
			title: "Priyanka",
			description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, aliquid.",

		},
		{
			id: 8,
			profilePic: "https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=600",
			title: "Rajveer",
			description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, aliquid.",

		},
		{
			id: 9,
			profilePic: "https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=600",
			title: "Vikram",
			description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, aliquid.",

		},

	])
	const [label, setLabel] = useState([
		{
			profilePic: "https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=600",
			title: "Ven Disel",
			description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, aliquid.",

		},
		{
			profilePic: "https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=600",
			title: "Michel",
			description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, aliquid.",

		},
		{
			profilePic: "https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=600",
			title: "Ranvijay",
			description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, aliquid.",

		},
		{
			profilePic: "https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=600",
			title: "Raj",
			description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, aliquid.",

		},
		{
			profilePic: "https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=600",
			title: "Masumiyat Anna",
			description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, aliquid.",

		},
		{
			profilePic: "https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=600",
			title: "Vinay raj",
			description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, aliquid.",

		},
		{
			profilePic: "https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=600",
			title: "Priyanka",
			description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, aliquid.",

		},
		{
			profilePic: "https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=600",
			title: "Rajveer",
			description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, aliquid.",

		},
		{
			profilePic: "https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=600",
			title: "Vikram",
			description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, aliquid.",

		},
	])

	const [bounties, setBounties] = useState([
		{
			image: "https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=600",
			name: "first",
			description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, aliquid."
		},
		{
			image: "https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=600",
			name: "first",
			description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, aliquid."
		},
		{
			image: "https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=600",
			name: "first",
			description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, aliquid."
		}
	])

	//slider
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			  slidesToShow: 3,
			  slidesToScroll: 1,
			  infinite: true,
			  dots: true
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 1,
			  initialSlide: 2
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  }
		]
	  };

	return (
		<div className="container mx-auto  bg-white ">
			{/* user profile  */}
			<div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full relative">
        <Slider {...settings}>
          {userData.map((user, index) => (
            <div key={index} className="p-2">
              <div className="border border-gray-300 shadow-lg p-4 text-center hover:border-blue-800 relative bg-blue-50 rounded-3xl overflow-hidden w-full transform transition-transform duration-300 hover:scale-105 mx-auto h-full">
                <div className="w-full h-20 bg-blue-200 absolute top-0 left-0 z-0"></div>
                <div className="w-24 h-24 mx-auto mb-2 mt-1 relative z-10">
                  <img className="w-full h-full object-cover rounded-full border-4 border-slate-500" src={user.profilePic} alt={user.title} />
                </div>
                <h1 className="text-xl font-bold text-gray-800 mb-2 z-20 relative">{user.title}</h1>
                <div className="flex justify-between z-20 relative">
                  <h1 className="text-md font-medium text-gray-600 mt-2">Rank</h1>
                  <h1 className="text-lg font-medium text-gray-600 mt-1">Badges Earned</h1>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
			{/* ecoSystem lebal */}
			<div className="flex overflow-x-auto  scrollbar-hide  gap-6 p-4">
				{userData.map((data, index) => (
					<div key={index} className="  flex-none w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/4">
						<div className="bg-blue-50 border border-gray-300 shadow-lg p-4 rounded-2xl overflow-hidden hover:shadow-xl transform transition-transform duration-300 hover:border-blue-900 hover:scale-105">
							<div className="h-40">
								<img
									className="w-full h-full object-cover rounded-xl"
									src={data.profilePic}
									alt=""
								/>
							</div>
							<div className="mt-4">
								<h3 className="text-lg font-semibold text-gray-800">{data.title}</h3>
								<p className="text-sm text-gray-600 mt-1">{data.description}</p>

							</div>
						</div>
					</div>
				))}
			</div>


			<div className="flex overflow-x-auto  scrollbar-hide  gap-6 p-4">
				{userData.map((data, index) => (
					<div key={index} className="  flex-none w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/4">
						<div className="bg-blue-50 border border-gray-300 shadow-lg p-4 rounded-2xl overflow-hidden hover:shadow-xl transform transition-transform duration-300 hover:border-blue-900 hover:scale-105">
							<div className="h-40">
								<img
									className="w-full h-full object-cover rounded-xl"
									src={data.profilePic}
									alt=""
								/>
							</div>
							<div className="mt-4">
								<h3 className="text-lg font-semibold text-gray-800">{data.title}</h3>
								<p className="text-sm text-gray-600 mt-1">{data.description}</p>

							</div>
						</div>
					</div>
				))}
			</div>


			<div className="flex overflow-x-auto  scrollbar-hide  gap-6 p-4">
				{userData.map((data, index) => (
					<div key={index} className="  flex-none w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/4">
						<div className="bg-blue-50 border border-gray-300 shadow-lg p-4 rounded-2xl overflow-hidden hover:shadow-xl transform transition-transform duration-300 hover:border-blue-900 hover:scale-105">
							<div className="h-40">
								<img
									className="w-full h-full object-cover rounded-xl"
									src={data.profilePic}
									alt=""
								/>
							</div>
							<div className="mt-4">
								<h3 className="text-lg font-semibold text-gray-800">{data.title}</h3>
								<p className="text-sm text-gray-600 mt-1">{data.description}</p>

							</div>
						</div>
					</div>
				))}
			</div>


			<div className="flex overflow-x-auto  scrollbar-hide  gap-6 p-4">
				{userData.map((data, index) => (
					<div key={index} className="  flex-none w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/4">
						<div className="bg-blue-50 border border-gray-300 shadow-lg p-4 rounded-2xl overflow-hidden hover:shadow-xl transform transition-transform duration-300 hover:border-blue-900 hover:scale-105">
							<div className="h-40">
								<img
									className="w-full h-full object-cover rounded-xl"
									src={data.profilePic}
									alt=""
								/>
							</div>
							<div className="mt-4">
								<h3 className="text-lg font-semibold text-gray-800">{data.title}</h3>
								<p className="text-sm text-gray-600 mt-1">{data.description}</p>

							</div>
						</div>
					</div>
				))}
			</div>

			<div className="flex overflow-x-auto  scrollbar-hide  gap-6 p-4">
				{userData.map((data, index) => (
					<div key={index} className="  flex-none w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/4">
						<div className="bg-blue-50 border border-gray-300 shadow-lg p-4 rounded-2xl overflow-hidden hover:shadow-xl transform transition-transform duration-300 hover:border-blue-900 hover:scale-105">
							<div className="h-40">
								<img
									className="w-full h-full object-cover rounded-xl"
									src={data.profilePic}
									alt=""
								/>
							</div>
							<div className="mt-4">
								<h3 className="text-lg font-semibold text-gray-800">{data.title}</h3>
								<p className="text-sm text-gray-600 mt-1">{data.description}</p>

							</div>
						</div>
					</div>
				))}
			</div>

			<div className="flex  flex-wrap justify-between gap-6 p-4">
				{bounties.map((data, index) => (
					<div key={index} className="  flex-none w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/4">
						<div className="bg-blue-50 border border-gray-300 shadow-lg p-4 rounded-2xl overflow-hidden hover:shadow-xl transform transition-transform duration-300 hover:border-blue-900 hover:scale-105">
							<div className="h-40">
								<img
									className="w-full h-full object-cover rounded-xl"
									src={data.image}
									alt=""
								/>
							</div>
							<div className="mt-4">
								<h3 className="text-lg font-semibold text-gray-800">{data.name}</h3>
								<p className="text-sm text-gray-600 mt-1">{data.description}</p>
								<button className="mt-4 p-1 bg-blue-900 hover:bg-blue-800 text-white text-sm rounded transition duration-300 ease-in-out">
									Click
								</button>
							</div>
						</div>
					</div>
				))}
			</div>





			<div onClick={() => router.push('/points-parlor')} className="fixed bottom-2 p-2 text-center cursor-pointer w-full h-12 sm:h-10 bg-opacity-75 bg-blue-400 rounded-lg shadow-md">
				<h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Points Parlor</h3>
			</div>

		</div>

	);
};

const NextArrow = (props:any) => {
	const { className, style, onClick } = props;
	return (
	  <div
		className={className}
		style={{
		  ...style,
		height:"30px",
		width:"30px",
		  display: 'block',
		  background: 'blue',
		  borderRadius: '50%',
		  right: '100px',
		  zIndex: '2',
		  transform: 'translateY(-50%)'
		}}
		onClick={onClick}
	  />
	);
  };
  
  const PrevArrow = (props:any) => {
	const { className, style, onClick } = props;
	return (
	  <div
		className={className}
		style={{
		  ...style,
		  display: 'block',
		  background: 'blue',
		  borderRadius: '50%',
		  left: '100px',
		  zIndex: '2',
		  transform: 'translateY(-50%)'
		}}
		onClick={onClick}
	  />
	);
  };
  
  
export default Home;
