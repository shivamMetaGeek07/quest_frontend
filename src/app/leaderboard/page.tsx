"use client";
import UserTable from "@/app/components/table/userTable";
import { users, columns } from "./data";
import type { User, Column } from "./data";
import Image from "next/image";
import Ractangle4 from "../../../public/Asset/Rectangle4.png";
const GlobalLeaderboard = () => {
  return (
    <div className="w-[80%] mx-auto">
      <div>leaderboard</div>

      {/* top3 */}
      <section>
        <div className="my-4 flex items-center gap-8 justify-center">
          <div className="bg-black">
            <div className="pb-[2rem] bg-black">
              <div className="w-[22rem] h-[12rem] border rank-box border-white realative overflow-visible">
                <div className="w-full h-full innerbox flex justify-center items-center gap-2">
                  <div className="w-1/2 border-yellow-200">
                    <div className="w-[9rem] mx-auto h-[12rem] bottom-trapezium">
                      <img
                        className=" w-full h-full "
                        style={{ padding: "2.5rem 0rem 0rem 0.5rem" }}
                        src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
                        alt="rank2 image"
                      />
                    </div>
                  </div>
                  <div className="w-1/2 border flex flex-col justify-center items-end">
                    <div className=""></div>
                    <div className="">
                      <div className="border text-center">Crypronage</div>
                      <div className=" border flex gap-2 justify-center items-center">
                        <div className="border p-2">12343</div>
                        <div className="border p-2"> 123</div>
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
      <section>
        {/* <div className="my-4 flex items-center gap-2 justify-center">
              <div className="">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="11" viewBox="0 0 15 11" fill="none">
  <path d="M0.5 1H5.98652L14.5 10" stroke="#FA00FF" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M5.5 5L10.5 10" stroke="#FA00FF" strokeLinecap="round"/>
</svg>
              </div>
              <div className="listOfFriends">List of Friends</div>
            </div> */}
        <div className="userTable">
          <UserTable<User> data={users} columns={columns} rowsPerPage={5} />
        </div>
      </section>
    </div>
  );
};

export default GlobalLeaderboard;
