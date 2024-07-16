import Image from "next/image";
import React, { useEffect,useState } from "react";
import axios from 'axios'
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
      "https://s3-alpha-sig.figma.com/img/3819/a7cb/c20c4848e655e9cfcdff376ab06beb97?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kytIkT~Kh4j2WJMhRvUDNU~~K~-wHLFXG068vwEVUwJ5UNgnUnjQY7hSx2P5wY6DXFNlepOxFGu5Jawmlwe3srZeNh41kG6LLxK9LQfW0LvIqP07hj~uMYIHSK8nz6G9TX1DIsbtfzvU6T5H3qv6WYIU8u4cLzjyY~k0UgJ6vyXxO4QcthD7zAXLmiTVu0KcwIlZs0FFpYlbi-eG-guiRXsYdYldrNcijVQQ71KoAbJPCS4H1RIqiJPRTG-rd1b4Mc13aw0D9F~k3q0F~BMJtu6j3sbEqIEi88hh~2oCczRCAhnWGB6y8n1aItKgC0Lse9gYLeUt9pC9zteazteEMA__",
    rank: 2,
    icons: ["🍎", "⭐"],
  },
  {
    id: 2,
    firstName: "John",
    lastName: "Doe",
    profileImage:
      "https://s3-alpha-sig.figma.com/img/7f77/41ea/f632cb48038956a2ea33794434eb9fa4?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IQI663-kRTMpyCr7Dn4NT4hrJLvc5L80rC1Kx~8j9LNCU6LWggfVbuMElJV94RBj6P~kPDSnh~I~TQhc7OJlArSTh-zbIY7Vlkfer5bBgG5hUtfG6AMy1-vqZbv5WeihXoxX7vRTO2xNzGuPBzHyMOJXxnyuD34Vsa4Jjvz26Nw8EoRGratnKfmj5WvaufF9XqIRqJh55Tn9exiaQebsMaJfaEKXZ0hl2qrN22qcuW07q8BInQadIaf3j7AkEgCF~K7HZ0sLd-JKGTc6XJu3q0n8dBiyU3kKAdLMBtw0MCH0BYJfmE5g53V5GtxJd9~Fmk2GrHvrh5UWxVuhbVOcZg__",
    rank: 34,
    icons: ["🍎", "⭐", "⭐"],
  },
  {
    id: 1,
    firstName: "Sepehr",
    lastName: "Babaei",
    profileImage:
      "https://s3-alpha-sig.figma.com/img/d62a/495d/c6e33ceded05405f4526a090185d1e30?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=frPbulJ-KRSVijhxnYgjLQSONy7m02aLqticQ2~PWtoYnxzMU1oopdFXM5FSSdC2p5FKusVbf1OP~YP9blE6CTU14J79P2cOmgrQ-WJ3YrBB8Z5fpzCLGct9JWtBJKXdl8IwxqR5e80CqFeqDeSPDo7wsGl7Xqpop3QdaivvJgKhSibJMnIxHjS~0j8ZdxoVh2FSbhoMT-PyRuDeDa6rBxaSdWYNbD~656MO048AoH3Y0~TtnhUJe-FZ5hYnmdgVtfR-nImpVTCob6cwvzATGJFL0vvY0H6khKu9dghwmA8qwtPVVW8~qQrjW9fYMsITtzpdETrH7mIkhID7LOCP4Q__",
    rank: 556,
    icons: ["🍎", "⭐", "⭐"],
  },
  {
    id: 3,
    firstName: "Jane",
    lastName: "Smith",
    profileImage:
      "https://s3-alpha-sig.figma.com/img/2db9/1474/b28b9e0de47ba66f512284e8c268d3b3?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZVonAq~Tg7xQlI2YfflYr3hbywarktCkvt6~5tUduM2El03o8Q5TliszORUN3sL9WUIW8O1wA8qkl0z3Y26FCw9inQow80yGVBe~ksxIedATrq2jQlGg1DhgL2sKVN8S75epr2uiBlzotN4Kzydtqu-28aOzqadAXpVjz84yRhHhXOvSyGG5gay2EwHgj3rh~IHd9Q7Q2otvQMJG1Z9eKFS5uh1YGlnm75d6-natBpx8D7b4t-NBbmAQ~EltefGoB9SNdzGrmzMhr6tS9ZFyOdi6AJp38eHnx7OHbveGtTqNGC2XUdKBhnhRv0YlY8nFOkFQQfnOXkpTFGY0wumb7Q__",
    rank: 2,
    icons: ["🍎", "⭐", "⭐"],
  },
  {
    id: 4,
    firstName: "Sepehr",
    lastName: "Babaei",
    profileImage:
      "https://s3-alpha-sig.figma.com/img/2db9/1474/b28b9e0de47ba66f512284e8c268d3b3?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZVonAq~Tg7xQlI2YfflYr3hbywarktCkvt6~5tUduM2El03o8Q5TliszORUN3sL9WUIW8O1wA8qkl0z3Y26FCw9inQow80yGVBe~ksxIedATrq2jQlGg1DhgL2sKVN8S75epr2uiBlzotN4Kzydtqu-28aOzqadAXpVjz84yRhHhXOvSyGG5gay2EwHgj3rh~IHd9Q7Q2otvQMJG1Z9eKFS5uh1YGlnm75d6-natBpx8D7b4t-NBbmAQ~EltefGoB9SNdzGrmzMhr6tS9ZFyOdi6AJp38eHnx7OHbveGtTqNGC2XUdKBhnhRv0YlY8nFOkFQQfnOXkpTFGY0wumb7Q__",
    rank: 2,
    icons: ["🍎", "⭐", "⭐"],
  },
];

const UserCard = () => {
//  const [data,setdata]=useState([]);
//   const getLeaderBoard = async () => {
//     try {
//       const response = await axios.get(
//         `${process.env.NEXT_PUBLIC_SERVER_URL}/user/getAllUser`,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       const data =  response.data;
//       setdata(data);
//       console.log("all user d",data);
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   useEffect(() => {
//     getLeaderBoard();
//   }, []);

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
                src={user.profileImage}
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
