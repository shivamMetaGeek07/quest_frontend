"use client";
import UserTable from "@/app/components/table/userTable";
import { users, columns } from "./data";
import { User, Column } from "./data";
import { useEffect,useState } from "react";
import axios from "axios";
import Image from "next/image";

const GlobalLeaderboard = () => {
  const [data,setdata]=useState<User[]>([])
  const getLeaderBoard = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/user/leaderboard/usersBycoins`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data =  response.data;
      setdata(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getLeaderBoard();
  }, []);

  return (
    <div className="w-[80%] mx-auto">
      <div>leaderboard</div>

      {/* top3 */}
      <section className="w-full">
        <div className="my-4 flex items-center gap-8 justify-center">
          <div className="flex flex-col sm:flex-row gap-2 m-auto w-full justify-center  sm:justify-between">
          <div className=" p-[1px] sm:w-[22rem] sm:h-[12rem] w-[17rem] h-[8rem]  bg-[#282828] outer_leader_div">
              <div className="sm:w-[22rem] sm:h-[12rem] w-[17rem] h-[8rem]  rank-box  ">
                <div className="w-full h-full innerbox flex justify-center pt-2 sm:pt-[26px] items-center ">
                    <div className="sm:w-[11rem] w-[130px] pt-2 sm:pt-0 mx-auto h-[114px] sm:h-[10rem] pl-0 ">
                      <Image
                        className=" w-full h-full "
                        // style={{ padding: "2.5rem 0rem 0rem 0.5rem" }}
                        src="https://pics.craiyon.com/2023-11-12/iRznbtVdTBGaKNpMe9ZGFg.webp"
                        alt="rank2 image"
                      />
                  </div>
                  <div className=" flex flex-col   m-auto justify-center items-end">
                      <div className=" w-full justify-center m-auto text-lg sm:text-xl text-center sm:my-2">Crypronage</div>
                    <div className="">
                      <div className="  flex gap-2 justify-center items-center">
                        <div className="bg-violet-500/25 px-2 border-l-2 text-sm sm:text-lg  border-[#8c71ff]">12343</div>
                        <div className="bg-violet-500/25 px-2 border-l-2 text-sm sm:text-lg border-[#8c71ff]"> 123</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              <div className="my-16 p-[1px] sm:w-[22rem] sm:h-[12rem] w-[17rem] h-[8rem]  bg-[#282828] outer_leader_div">
              <div className="sm:w-[22rem] sm:h-[12rem] w-[17rem] h-[8rem]  rank-box  ">
                <div className="w-full h-full innerbox flex justify-center pt-2 sm:pt-[26px] items-center ">
                    <div className="sm:w-[11rem] w-[130px] pt-2 sm:pt-0 mx-auto h-[114px] sm:h-[10rem] pl-0 ">
                      <Image
                        className=" w-full h-full "
                        // style={{ padding: "2.5rem 0rem 0rem 0.5rem" }}
                        src="https://play-lh.googleusercontent.com/Sb5od0gQvJyuevITuUZ5Ko46WqFEBjPZlT7xIMfGWfbyaGCqF0nCXPJTa-poWuwSu-8=w540-h302-rw"
                        alt="rank2 image"
                      />
                  </div>
                  <div className=" flex flex-col   m-auto justify-center items-end">
                      <div className=" w-full justify-center m-auto text-lg sm:text-xl text-center sm:my-2">Crypronage</div>
                    <div className="">
                      <div className="  flex gap-2 justify-center items-center">
                        <div className="bg-violet-500/25 px-2 border-l-2 text-sm sm:text-lg  border-[#8c71ff]">12343</div>
                        <div className="bg-violet-500/25 px-2 border-l-2 text-sm sm:text-lg border-[#8c71ff]"> 123</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              <div className=" p-[1px] sm:w-[22rem] sm:h-[12rem] w-[17rem] h-[8rem]  bg-[#282828] outer_leader_div">
              <div className="sm:w-[22rem] sm:h-[12rem] w-[17rem] h-[8rem]  rank-box  ">
                <div className="w-full h-full innerbox flex justify-center pt-2 sm:pt-[26px] items-center ">
                    <div className="sm:w-[11rem] w-[130px] pt-2 sm:pt-0 mx-auto h-[114px] sm:h-[10rem] pl-0 ">
                      <Image
                        className=" w-full h-full "
                        // style={{ padding: "2.5rem 0rem 0rem 0.5rem" }}
                        src="https://cdn.openart.ai/uploads/image_M4XWz-9Q_1686943712284_512.webp"
                        alt="rank2 image"
                      />
                  </div>
                  <div className=" flex flex-col   m-auto justify-center items-end">
                      <div className=" w-full justify-center m-auto text-lg sm:text-xl text-center sm:my-2">Crypronage</div>
                    <div className="">
                      <div className="  flex gap-2 justify-center items-center">
                        <div className="bg-violet-500/25 px-2 border-l-2 text-sm sm:text-lg  border-[#8c71ff]">12343</div>
                        <div className="bg-violet-500/25 px-2 border-l-2 text-sm sm:text-lg border-[#8c71ff]"> 123</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div> 
            </div>
        </div>
      </section>
      {/* leaderboard table */}
      <section className="w-full flex flex-col justify-center items-center">

      <div className="flex flex-row justify-center my-2 gap-3 text-pink-950 text-5xl">
        - - - - - - - - - - -  
      </div>

        {/* <div className="my-4 flex items-center gap-2 justify-center">
              <div className="">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="11" viewBox="0 0 15 11" fill="none">
  <path d="M0.5 1H5.98652L14.5 10" stroke="#FA00FF" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M5.5 5L10.5 10" stroke="#FA00FF" strokeLinecap="round"/>
</svg>
              </div>
              <div className="listOfFriends">List of Friends</div>
            </div> */}
        <div className="w-[90%] lg:w-[60%] flex userTable justify-center items-center bg-[#040404] ">
          <UserTable<User> data={users} columns={columns} rowsPerPage={5} />
        </div>
      </section>
    </div>
  );
};

export default GlobalLeaderboard;
