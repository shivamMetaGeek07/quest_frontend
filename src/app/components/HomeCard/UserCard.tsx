import Image from "next/image";
import React from "react";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  profileImage: string;
  rank: number;
  icons: string[];
}

export const users: User[] = [
  {
    id: 1,
    firstName: "Sepehr",
    lastName: "Babaei",
    profileImage:
      "https://s3-alpha-sig.figma.com/img/2db9/1474/b28b9e0de47ba66f512284e8c268d3b3?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZVonAq~Tg7xQlI2YfflYr3hbywarktCkvt6~5tUduM2El03o8Q5TliszORUN3sL9WUIW8O1wA8qkl0z3Y26FCw9inQow80yGVBe~ksxIedATrq2jQlGg1DhgL2sKVN8S75epr2uiBlzotN4Kzydtqu-28aOzqadAXpVjz84yRhHhXOvSyGG5gay2EwHgj3rh~IHd9Q7Q2otvQMJG1Z9eKFS5uh1YGlnm75d6-natBpx8D7b4t-NBbmAQ~EltefGoB9SNdzGrmzMhr6tS9ZFyOdi6AJp38eHnx7OHbveGtTqNGC2XUdKBhnhRv0YlY8nFOkFQQfnOXkpTFGY0wumb7Q__",
    rank: 2,
    icons: ["🍎", "⭐", "⭐"],
  },
  {
    id: 1,
    firstName: "Sepehr",
    lastName: "Babaei",
    profileImage:
      "https://s3-alpha-sig.figma.com/img/2db9/1474/b28b9e0de47ba66f512284e8c268d3b3?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZVonAq~Tg7xQlI2YfflYr3hbywarktCkvt6~5tUduM2El03o8Q5TliszORUN3sL9WUIW8O1wA8qkl0z3Y26FCw9inQow80yGVBe~ksxIedATrq2jQlGg1DhgL2sKVN8S75epr2uiBlzotN4Kzydtqu-28aOzqadAXpVjz84yRhHhXOvSyGG5gay2EwHgj3rh~IHd9Q7Q2otvQMJG1Z9eKFS5uh1YGlnm75d6-natBpx8D7b4t-NBbmAQ~EltefGoB9SNdzGrmzMhr6tS9ZFyOdi6AJp38eHnx7OHbveGtTqNGC2XUdKBhnhRv0YlY8nFOkFQQfnOXkpTFGY0wumb7Q__",
    rank: 2,
    icons: ["🍎", "⭐", "⭐"],
  },
  {
    id: 1,
    firstName: "Sepehr",
    lastName: "Babaei",
    profileImage:
      "https://s3-alpha-sig.figma.com/img/2db9/1474/b28b9e0de47ba66f512284e8c268d3b3?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZVonAq~Tg7xQlI2YfflYr3hbywarktCkvt6~5tUduM2El03o8Q5TliszORUN3sL9WUIW8O1wA8qkl0z3Y26FCw9inQow80yGVBe~ksxIedATrq2jQlGg1DhgL2sKVN8S75epr2uiBlzotN4Kzydtqu-28aOzqadAXpVjz84yRhHhXOvSyGG5gay2EwHgj3rh~IHd9Q7Q2otvQMJG1Z9eKFS5uh1YGlnm75d6-natBpx8D7b4t-NBbmAQ~EltefGoB9SNdzGrmzMhr6tS9ZFyOdi6AJp38eHnx7OHbveGtTqNGC2XUdKBhnhRv0YlY8nFOkFQQfnOXkpTFGY0wumb7Q__",
    rank: 2,
    icons: ["🍎", "⭐", "⭐"],
  },
  {
    id: 1,
    firstName: "Sepehr",
    lastName: "Babaei",
    profileImage:
      "https://s3-alpha-sig.figma.com/img/2db9/1474/b28b9e0de47ba66f512284e8c268d3b3?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZVonAq~Tg7xQlI2YfflYr3hbywarktCkvt6~5tUduM2El03o8Q5TliszORUN3sL9WUIW8O1wA8qkl0z3Y26FCw9inQow80yGVBe~ksxIedATrq2jQlGg1DhgL2sKVN8S75epr2uiBlzotN4Kzydtqu-28aOzqadAXpVjz84yRhHhXOvSyGG5gay2EwHgj3rh~IHd9Q7Q2otvQMJG1Z9eKFS5uh1YGlnm75d6-natBpx8D7b4t-NBbmAQ~EltefGoB9SNdzGrmzMhr6tS9ZFyOdi6AJp38eHnx7OHbveGtTqNGC2XUdKBhnhRv0YlY8nFOkFQQfnOXkpTFGY0wumb7Q__",
    rank: 2,
    icons: ["🍎", "⭐", "⭐"],
  },
];

const UserCard: React.FC = () => {
  return (
    <div>
      <div className="lg:mx-20 sm:mx-20 mx-10 mt-10 flex items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="11"
          viewBox="0 0 16 11"
          fill="none"
        >
          <path
            d="M1 1H6.48652L15 10"
            stroke="#FA00FF"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M6 5L11 10" stroke="#FA00FF" strokeLinecap="round" />
        </svg>
        <div>
          <p>User Profile</p>
        </div>
      </div>


      <div className="grid sm:mx-10 lg:mx-0 mx-5 gap-6 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pt-8">
        {users.map((user) => (
          <div
            key={user.id}
            className="main outer-home  border border-gray-700 bg-black p-4 sm:p-6 rounded shadow-lg group"
          >
            <div className="rounded-md flex">
              <div className="flex-col justify-center ">

              <div className="image-container h-20 w-20 items-center flex">
              <img
                src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
                alt=""
                className="styled-image"
              />
            </div>

            <div className="bg_Div_Down-h h-[2rem] mt-2  bg-[#281a28]" />
              </div>

              <div className="flex-1 ml-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div
                      className=" font-bold"
                      style={{ letterSpacing: "5px" }}
                    >
                      {user.firstName.toUpperCase()}
                    </div>
                    <div
                      className=" font-bold tracking-widest ml-4"
                      style={{ letterSpacing: "5px" }}
                    >
                      {user.lastName.toUpperCase()}
                    </div>
                  </div>
                  <div className="text-purple-500  home-rank font-bold text-lg">
                    #{user.rank}
                  </div>
                </div>
                <hr className="border-gray-700 my-2 mt-5" />
                <div className="z-10 flex items-center space-x-3 mt-6">
                  {user.icons.map((icon, index) => (
                    <div
                      key={index}
                      className="bg-[#8C71FF] home-inner-bg clip-trapezium-top-right px-4"
                    >
                      <span role="img" aria-label="Icon">
                        {icon}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center ">
              <h1 className="text-white/30" style={{ letterSpacing: "11px" }}>
                {" "}
                . . . . . . . . .{" "}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserCard;
