"use client"
import React, { useEffect } from 'react'
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoryEcosystem } from '@/redux/reducer/communitySlice';

   const Page = () => {
    
  return (
    <div className="bg-[#111111] pt-[5rem] h-screen font-[ProFontWindows]">
      <div className=" items-center flex ">
        <div className="flex flex-row text-xl    items-center justify-around m-auto ">
          <div className=" p-3 ">
            <div className="image-container h-[10rem] w-36 items-center flex">
              <img
                src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
                alt=""
                className="styled-image "
              />
            </div>
          </div>
          <div className="flex w-[21rem]   m-1 flex-col  items-center">
            <div className="flex  flex-row items-center justify-between  w-full m-auto">
              <div className="text-4xl">LINEA</div>
              <div className="text-xs bg_Div_Container  bg-[#1d1a28] p-2 rounded-lg pl-6">
                392K Participants
              </div>
            </div>

            <hr className="h-[1px] my-2  border-[0.5px] w-full border-dashed bg-black " />
            <div className="flex  flex-row text-sm gap-2 justify-between w-full m-auto">
              <div className=" flex">Desc: </div>
              <div className=" text-wrap  text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elitorem
                ipsu{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="  flex flex-row text-gray-500 text-xl w-[36rem] h-32 bg-[#111111] shadow-lg shadow-[#0d0d0d]  items-center  m-auto">
            <div className="flex items-center">
          <div className="bg_Div_half h-[8rem] w-[16rem] items-center flex ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
            >
              <g clip-path="url(#clip0_148_5547)">
                <path
                  d="M80.0005 92.0017H75.9996V96.0034H80.0005V92.0017Z"
                  fill="#E0AB0D"
                />
                <path
                  d="M68.0003 84.0007H63.9994V87.9999H68.0003V84.0007Z"
                  fill="#F2B80C"
                />
                <path
                  d="M36.0006 56.0014H31.9997V60.0005H36.0006V56.0014Z"
                  fill="#FAD529"
                />
                <path
                  d="M24.0004 48.0004H19.9995V51.9996H24.0004V48.0004Z"
                  fill="#FAD835"
                />
                <path
                  d="M24.0004 92.0017H19.9995V96.0034H24.0004V92.0017Z"
                  fill="#FACE00"
                />
                <path
                  d="M31.9997 80.0016V76.0024H36.0006V72.0006V68.0015V64.0023V60.0005H31.9997V64.0023V68.0015H28.0013V72.0006V76.0024V80.0016H24.0004V84.0007V87.9999V92.0017H28.0013H31.9997V87.9999H36.0006V84.0007H31.9997V80.0016Z"
                  fill="#FACE00"
                />
                <path
                  d="M32.0022 56.0014H28.0013V60.0005H32.0022V56.0014Z"
                  fill="#FACE00"
                />
                <path
                  d="M28.0013 51.9996H24.0004V56.0014H28.0013V51.9996Z"
                  fill="#FACE00"
                />
                <path
                  d="M20.002 48.0004H16.0011V51.9996H20.002V48.0004Z"
                  fill="#FACE00"
                />
                <path
                  d="M43.9999 24.0002V27.9994V32.0011H40.0015V36.0003V39.9995H36.0006H31.9997H28.0013H24.0004H19.9995H16.0011H12.0002H7.99933V44.0013H12.0002V48.0004H16.0011V44.0013H19.9995H24.0004H28.0013H31.9997H36.0006H40.0015H43.9999V48.0004H40.0015H36.0006H31.9997H28.0013V51.9996H31.9997H36.0006V56.0014H40.0015V60.0005V64.0023V68.0015V72.0006V76.0024H36.0006V80.0016V84.0007H40.0015V80.0016H43.9999V76.0024H48.0008V72.0006V68.0015V64.0023V60.0005V56.0014V51.9996V48.0004V44.0013V39.9995V36.0003V32.0011V27.9994V24.0002V20.001H43.9999V24.0002Z"
                  fill="#FACE00"
                />
                <path
                  d="M48.0008 8.00094V12.0001V16.0019V20.001V24.0002V27.9994V32.0011V36.0003V39.9995V44.0013V48.0004V51.9996V56.0014V60.0005V64.0023V68.0015V72.0006V76.0024H51.9992V72.0006V68.0015V64.0023V60.0005V56.0014V51.9996V48.0004V44.0013V39.9995V36.0003V32.0011V27.9994V24.0002V20.001V16.0019V12.0001V8.00094V3.99917H48.0008V8.00094Z"
                  fill="#F8C505"
                />
                <path
                  d="M83.9989 39.9995H80.0005H75.9996H72.0012H68.0003H63.9994H60.001V36.0003V32.0011H56.0001V27.9994V24.0002V20.001H51.9992V24.0002V27.9994V32.0011V36.0003V39.9995V44.0013V48.0004V51.9996V56.0014V60.0005V64.0023V68.0015V72.0006V76.0024H56.0001V80.0016H60.001V84.0007H63.9994H68.0003V87.9999V92.0017H72.0012H75.9996V87.9999V84.0007V80.0016H72.0012V76.0024V72.0006V68.0015H68.0003V64.0023V60.0005H72.0012V56.0014H75.9996H80.0005V51.9996H83.9989V48.0004H87.9998V44.0013H92.0007V39.9995H87.9998H83.9989Z"
                  fill="#F6BB0C"
                />
                <path
                  d="M31.9997 80.0016V84.0007H36.0006V80.0016V76.0024H31.9997V80.0016Z"
                  fill="white"
                />
                <path
                  d="M36.0006 64.0023V68.0015V72.0006V76.0024H40.0015V72.0006V68.0015V64.0023V60.0005V56.0014H36.0006V60.0005V64.0023Z"
                  fill="white"
                />
                <path
                  d="M31.9997 56.0014H36.0006V51.9996H31.9997H28.0013V56.0014H31.9997Z"
                  fill="white"
                />
                <path
                  d="M36.0006 44.0012H31.9997H28.0013H24.0004H19.9995H16.0011V48.0004H19.9995H24.0004V51.9996H28.0013V48.0004H31.9997H36.0006H40.0015H43.9999V44.0012H40.0015H36.0006Z"
                  fill="white"
                />
                <path
                  d="M75.9996 96.0008V99.8049V100H80.0005H83.9989V97.052V96.0008V92.0017H80.0005V96.0008H75.9996Z"
                  fill="black"
                />
                <path
                  d="M19.9995 92.0017H16.0011V93.8673V96.0008V100H19.9995H24.0004V98.928V96.0008H19.9995V92.0017Z"
                  fill="black"
                />
                <path
                  d="M72.0012 92.0017H68.0003V96.0008H72.0012H75.9996V92.0017H72.0012Z"
                  fill="black"
                />
                <path
                  d="M24.0004 92.0017V96.0008H28.0013H31.9997V92.0017H28.0013H24.0004Z"
                  fill="black"
                />
                <path
                  d="M68.0003 87.9999H63.9994V91.9991H68.0003V87.9999Z"
                  fill="black"
                />
                <path
                  d="M36.0006 87.9999H31.9997V91.9991H36.0006V87.9999Z"
                  fill="black"
                />
                <path
                  d="M24.0004 87.9999V84.0007V80.0016H19.9995V84.0007V87.9999V92.0017H24.0004V87.9999Z"
                  fill="black"
                />
                <path
                  d="M75.9996 87.9999V92.0017H80.0005V87.9999V84.0007V80.0016H75.9996V84.0007V87.9999Z"
                  fill="black"
                />
                <path
                  d="M64.0019 84.0007H60.001V87.9999H64.0019V84.0007Z"
                  fill="black"
                />
                <path
                  d="M40.0015 84.0007H36.0006V87.9999H40.0015V84.0007Z"
                  fill="black"
                />
                <path
                  d="M60.001 80.0016H56.0001V84.0033H60.001V80.0016Z"
                  fill="black"
                />
                <path
                  d="M44.0024 80.0016H40.0015V84.0033H44.0024V80.0016Z"
                  fill="black"
                />
                <path
                  d="M51.9992 76.0024H48.0008H43.9999V80.0016H48.0008H51.9992H56.0001V76.0024H51.9992Z"
                  fill="black"
                />
                <path
                  d="M28.0013 76.0024V72.0006V68.0015H24.0004V72.0006V76.0024V80.0016H28.0013V76.0024Z"
                  fill="black"
                />
                <path
                  d="M72.0012 76.0024V80.0016H75.9996V76.0024V72.0006V68.0015H72.0012V72.0006V76.0024Z"
                  fill="black"
                />
                <path
                  d="M31.9997 64.0023V60.0005H28.0013V64.0023V68.0015H31.9997V64.0023Z"
                  fill="black"
                />
                <path
                  d="M68.0003 64.0023V68.0015H72.0012V64.0023V60.0005H68.0003V64.0023Z"
                  fill="black"
                />
                <path
                  d="M72.0012 56.0014V60.0005H75.9996H80.0005V56.0014H75.9996H72.0012Z"
                  fill="black"
                />
                <path
                  d="M28.0013 56.0014H24.0004V60.0005H28.0013V56.0014Z"
                  fill="black"
                />
                <path
                  d="M84.0014 51.9996H80.0005V56.0014H84.0014V51.9996Z"
                  fill="black"
                />
                <path
                  d="M19.9995 51.9996H16.0011V56.0014H19.9995H24.0004V51.9996H19.9995Z"
                  fill="black"
                />
                <path
                  d="M87.9998 48.0004H83.9989V51.9996H87.9998V48.0004Z"
                  fill="black"
                />
                <path
                  d="M16.0011 48.0004H12.0002V51.9996H16.0011V48.0004Z"
                  fill="black"
                />
                <path
                  d="M92.0007 44.0012H87.9998V48.0004H92.0007V44.0012Z"
                  fill="black"
                />
                <path
                  d="M7.99933 44.0012V48.0004H9.99978H12.0002V44.0012H7.99933Z"
                  fill="black"
                />
                <path
                  d="M94.0011 36.0003H92.0007H87.9998H83.9989H80.0005H75.9996H72.0012H68.0003H63.9994V32.0011H60.001V36.0003V39.9995H63.9994H68.0003H72.0012H75.9996H80.0005H83.9989H87.9998H92.0007V44.0013H94.0011H96.0016V39.9995H100V36.0003H96.0016H94.0011Z"
                  fill="black"
                />
                <path
                  d="M12.0002 39.9995H16.0011H19.9995H24.0004H28.0013H31.9997H36.0006H40.0015V36.0003V32.0011H36.0006V36.0003H31.9997H28.0013H24.0004H19.9995H16.0011H12.0002H9.99975H7.9993H4.0009H0V39.9995H4.0009V44.0013H7.9993V39.9995H12.0002Z"
                  fill="black"
                />
                <path
                  d="M43.9999 27.9994V24.0002V20.001H40.0015V24.0002V27.9994V32.0011H43.9999V27.9994Z"
                  fill="black"
                />
                <path
                  d="M56.0001 27.9994V32.0011H60.001V27.9994V24.0002V20.001H56.0001V24.0002V27.9994Z"
                  fill="black"
                />
                <path
                  d="M48.0008 16.0019V12.0001V8.00094V3.99917H43.9999V8.00094V12.0001V12.0808V16.0019V20.001H48.0008V16.0019Z"
                  fill="black"
                />
                <path
                  d="M51.9992 12.0001V16.0019V20.001H56.0001V16.0019V12.0808V12.0001V8.00094V3.99917H51.9992V8.00094V12.0001Z"
                  fill="black"
                />
                <path d="M51.9992 0H48.0008V3.99917H51.9992V0Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_148_5547">
                  <rect width="100" height="100" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <div className="flex   flex-col w-2/4  gap-3 p-2 justify-start   ">
            <div className="text-sm flex flex-row justify-between ">
              <div className="text-white">Noob :</div>
              <div>+1 Quests</div>
            </div>
            <div className="text-sm flex flex-row justify-between ">
              <div className="text-white">Maxi :</div>
              <div>+1 Quests</div>
            </div>
            <div className="text-sm flex flex-row justify-between ">
              <div className="text-white">Enthusiast :</div>
              <div>+1 Quests</div>
            </div>
          </div>
          <div className="flex   flex-row text-sm gap-5 justify-end w-full m-auto">
            <div className=" text-right w-52  ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elitorem ipsu{" "}
            </div>
          </div>
          </div>
          
        </div>
      </div>
      <hr className="h-[1px] my-2 items-center m-auto border-[0.5px] w-3/4 border-dashed bg-violet-800 " />

      {/* map the ecosytem */}
      <div className="flex flex-col lg:flex-row gap-4 my-7 overflow-hidden">
        <div className="outer-div flex hover:bg-[#8c71ff] hover:text-[#111111] border-[#282828] border p-1 flex-col m-auto justify-center w-[22rem]">
          <div className="flex flex-row text-xl items-center justify-around m-auto">
            <div className="p-1">
              <div className="image-container h-[5rem] w-[5rem] items-center flex">
                <img
                  src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
                  alt=""
                  className="styled-image"
                />
              </div>
              <div className="bg_Div_Down h-[2rem] mt-2 bg-gray-800" />
            </div>
            <div className="flex flex-col">
              <div className="flex w-[15rem] m-1 flex-col items-center">
                <div className="flex bg_eco_div border-b-4 border-[#8c71ff] pt-6 bg-[#1d1a28] flex-row items-center justify-between w-full m-auto">
                  <div className="text-lg ml-3">Alpha Hub</div>
                  <div className="text-xs flex flex-row rounded-lg pl-6">
                    <div className="flex m-2 items-center flex-col">
                      <span>214</span>
                      <span>Quests</span>
                    </div>
                    <div className="flex m-2 items-center flex-col">
                      <span>7701</span>
                      <span>Followers</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-end gap-x-1">
                <div className="eco_box w-5 h-5 bg-[#8c71ff]" />
                <div className="eco_box w-5 h-5 bg-[#8c71ff]" />
                <div className="eco_box w-5 h-5 bg-[#8c71ff]" />
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-row text-sm m-3 justify-between w-full">
              <span className="flex descText">Desc:</span>
              <span className="text-gray-600 descdata text-wrap">
                Lorem ipsum, dolor sit amet consectetur adipisicing elitorem
                ipsum, dolor sit amet consectetur.
              </span>
            </div>
          </div>
        </div>
        <div className="outer-div flex hover:bg-[#8c71ff] hover:text-[#111111] border-[#282828] border p-1 flex-col m-auto justify-center w-[22rem]">
          <div className="flex flex-row text-xl items-center justify-around m-auto">
            <div className="p-1">
              <div className="image-container h-[5rem] w-[5rem] items-center flex">
                <img
                  src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
                  alt=""
                  className="styled-image"
                />
              </div>
              <div className="bg_Div_Down h-[2rem] mt-2 bg-gray-800" />
            </div>
            <div className="flex flex-col">
              <div className="flex w-[15rem] m-1 flex-col items-center">
                <div className="flex bg_eco_div border-b-4 border-[#8c71ff] pt-6 bg-[#1d1a28] flex-row items-center justify-between w-full m-auto">
                  <div className="text-lg ml-3">Alpha Hub</div>
                  <div className="text-xs flex flex-row rounded-lg pl-6">
                    <div className="flex m-2 items-center flex-col">
                      <span>214</span>
                      <span>Quests</span>
                    </div>
                    <div className="flex m-2 items-center flex-col">
                      <span>7701</span>
                      <span>Followers</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-end gap-x-1">
                <div className="eco_box w-5 h-5 bg-[#8c71ff]" />
                <div className="eco_box w-5 h-5 bg-[#8c71ff]" />
                <div className="eco_box w-5 h-5 bg-[#8c71ff]" />
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-row text-sm m-3 justify-between w-full">
              <span className="flex descText">Desc:</span>
              <span className="text-gray-600 descdata text-wrap">
                Lorem ipsum, dolor sit amet consectetur adipisicing elitorem
                ipsum, dolor sit amet consectetur.
              </span>
            </div>
          </div>
        </div>
        <div className="outer-div flex hover:bg-[#8c71ff] hover:text-[#111111] border-[#282828] border p-1 flex-col m-auto justify-center w-[22rem]">
          <div className="flex flex-row text-xl items-center justify-around m-auto">
            <div className="p-1">
              <div className="image-container h-[5rem] w-[5rem] items-center flex">
                <img
                  src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
                  alt=""
                  className="styled-image"
                />
              </div>
              <div className="bg_Div_Down h-[2rem] mt-2 bg-gray-800" />
            </div>
            <div className="flex flex-col">
              <div className="flex w-[15rem] m-1 flex-col items-center">
                <div className="flex bg_eco_div border-b-4 border-[#8c71ff] pt-6 bg-[#1d1a28] flex-row items-center justify-between w-full m-auto">
                  <div className="text-lg ml-3">Alpha Hub</div>
                  <div className="text-xs flex flex-row rounded-lg pl-6">
                    <div className="flex m-2 items-center flex-col">
                      <span>214</span>
                      <span>Quests</span>
                    </div>
                    <div className="flex m-2 items-center flex-col">
                      <span>7701</span>
                      <span>Followers</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-end gap-x-1">
                <div className="eco_box w-5 h-5 bg-[#8c71ff]" />
                <div className="eco_box w-5 h-5 bg-[#8c71ff]" />
                <div className="eco_box w-5 h-5 bg-[#8c71ff]" />
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-row text-sm m-3 justify-between w-full">
              <span className="flex descText">Desc:</span>
              <span className="text-gray-600 descdata text-wrap">
                Lorem ipsum, dolor sit amet consectetur adipisicing elitorem
                ipsum, dolor sit amet consectetur.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
