"use client";
import { fetchUserData } from '@/redux/reducer/auth';
import { AppDispatch, RootState } from '@/redux/store';
import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';

type Props = {}
interface KolsData {
    
    name: string;
    userName: string;
    role: string;
    bio: string;
    imageUrl: string;
    upVotes: number;
    downVotes: number;
    socialLinks: {
      linkedin: string;
      youtube: string;
      facebook: string;
      instagram: string;
      twitter: string;
    };
  }
  const sampleKol: KolsData = {
    name: "John Doe",
    userName: "johndoe",
    role: "Content Creator",
    bio: "Passionate about technology and education.",
    imageUrl: "https://randomuser.me/api/portraits/men/65.jpg",
    upVotes: 150,
    downVotes: 10,
    socialLinks: {
      linkedin: "https://linkedin.com/in/johndoe",
      youtube: "https://youtube.com/johndoe",
      facebook: "https://facebook.com/johndoe",
      instagram: "https://instagram.com/johndoe",
      twitter: "https://twitter.com/johndoe",
    },
  };

const kolsProfile = (props: Props) => {
  const dispatch=useDispatch<AppDispatch>();
    const [kol, setKol] = useState<KolsData>({
        name: "",
        userName: "",
        role: "",
        bio: "",
        imageUrl: "",
        upVotes: 0,
        downVotes: 0,
        socialLinks: {
          linkedin: "",
          youtube: "",
          facebook: "",
          instagram: "",
          twitter: "",
        },
      });
    const user=  useSelector( ( state: RootState ) =>state.login.user);
    const loading = useSelector((state: RootState) => state.login.loading);
    useEffect(() => {
   
    dispatch(fetchUserData())
    setKol(sampleKol);
    }, [dispatch]);

    if (loading) {
      return <><div className='mt-25 text-3xl relative text-red-600'>Loading...</div>;</>
    }
    if (!user) {
      return <><div className='mt-25 text-3xl relative text-red-600'>Not data available..</div>;</>
    }
  
    
  
  return<>    
   { user && user?.discordInfo && (
    <div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <div className="col-span-4 sm:col-span-3">
              <div className="bg-white shadow rounded-lg p-6">
                <div className="flex flex-col items-center">
                  <img
                    src={user.image}
                    className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                  ></img>
                  <h1 className="text-xl font-bold text-gray-700">{user.displayName}</h1>
                </div>
  
                <div className="flex flex-col">
                  <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                    {user.displayName}
                  </span>
                  <p className="text-gray-700 mb-4 text-sm ">
                    {user.rank}
                  </p>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <span className="text-2xl font-bold text-black">{kol.upVotes}</span>
                  <button className="p-2 border rounded-full bg-green-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  </button>
                  <span className="font-bold text-2xl text-black">{kol.downVotes}</span>
                  <button className="p-2 border rounded-full bg-red-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>
                <div className="justify-center space-x-4">
                  <h3 className="font-semibold text-start mt-3 text-black">
                    Follow me on
                  </h3>
                  {/* <SocialLinks links={kol.socialLinks} /> */}
                </div>
              </div>
            </div>
            <div className="col-span-4 sm:col-span-9">
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">About Me</h2>
                <p className="text-gray-700">
                  {/* {user.aboutMe || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est vitae tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit egestas suscipit. Nunc finibus vel ante id euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam erat volutpat. Nulla vulputate pharetra tellus, in luctus risus rhoncus id."} */}
                </p>
                <h3 className="font-semibold text-center mt-3 -mb-2">
                  Find me on
                </h3>
                {/* <SocialLinks links={kol.socialLinks} /> */}
                <h2 className="text-xl font-bold mt-6 mb-4">Experience</h2>
                {/* {user.experiences.map((exp, index) => (
                  <div key={index} className="mb-6">
                    <div className="flex justify-between flex-wrap gap-2 w-full">
                      <span className="text-gray-700 font-bold">{exp.position}</span>
                      <p>
                        <span className="text-gray-700 mr-2">at {exp.company}</span>
                        <span className="text-gray-700">{exp.years}</span>
                      </p>
                    </div>
                    <p className="mt-2">{exp.description}</p>
                  </div>
                ))} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}
</>
}

export default kolsProfile