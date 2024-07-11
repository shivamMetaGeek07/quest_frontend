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
    <div className="lg:mx-10 mx-10">
      <div className="grid gap-6 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pt-8">
        {users.map((user) => (
          <div
            key={user.id}
            className="main border border-gray-700 bg-black p-4 sm:p-6 rounded shadow-lg group "
          >
            <div className="rounded-md flex">
              <div className="flex-col justify-center ">
                <div
                  className="relative w-20 h-20 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://s3-alpha-sig.figma.com/img/3819/a7cb/c20c4848e655e9cfcdff376ab06beb97?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i2LYBODSDWCYiV4CAcf1a-e4zcSAh-ycxu1v6Nj5LCak7-DkzD65XXjoCy2po5d-4FmnAEFMR697ufNw3moNBxTK3rxmwj29w2afmuiNpLhN-QdLwzUZiPErcep9DHhYTYsKIBuimcxMXxSQ1Aw200kMG2PeG78Cm8mEFJCDT6pLCu7-kygKuUbWrbuNc6443CEdcgj3ebsyrswAP0bCYz4j8i6zGaktUleZGmV-mV4fgggy0fDxOpNxPNqhFOtewiE65XTUEvGla5j3uYt2plN0MiDJOOwDyg9BWnZUX6ngmk22wk9IBnmF2jMVz-mGoWPTdfC-9gQPEjcIv1OOtQ__')",
                  }}
                >
                  <div className="absolute w-[30px] h-[15px]  bg-black clip-trapezium-bottom-left"></div>
                  <div className="absolute w-[30px] h-[15px] bg-black clip-trapezium-bottom-right"></div>
                </div>

                <div className="bg-[#4e1c4f] relative w-20 h-10 mt-1">
                  <div className="h-1/4 bg-black">
                    <div className="absolute w-[30px] h-[10px] bg-[#4e1c4f] clip-trapezium-top-left"></div>
                    <div className="absolute w-[30px] h-[10px] bg-[#4e1c4f] clip-trapezium-top-right"></div>
                  </div>
                  <div className="h-3/4  "></div>
                </div>
              </div>

              <div className="flex-1 ml-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div
                      className="text-white font-bold"
                      style={{ letterSpacing: "5px" }}
                    >
                      {user.firstName.toUpperCase()}
                    </div>
                    <div
                      className="text-white font-bold tracking-widest ml-4"
                      style={{ letterSpacing: "5px" }}
                    >
                      {user.lastName.toUpperCase()}
                    </div>
                  </div>
                  <div className="text-purple-500 font-bold text-lg">
                    #{user.rank}
                  </div>
                </div>
                <hr className="border-gray-700 my-2 mt-5" />
                <div className="flex items-center space-x-3 mt-6">
                  {user.icons.map((icon, index) => (
                    <div
                      key={index}
                      className="bg-[#8C71FF] clip-trapezium-top-right px-4"
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
