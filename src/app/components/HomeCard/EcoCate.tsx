import React from "react";

interface Data {
  id: number;
  image: string;
  backgroundImage: string;
  icons: string[];
}

interface EcoData {
  id: number;
  imageUrl: string;
  title: string;
}

const EcoData: EcoData[] = [
  {
    id: 1,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/e7a3/836a/438a569c2d6cd682b7589631ad6972fe?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XU78~OIbIye1V8EM3Y1N5bMaxabGdhqvQqnEDM9m1ZSwFO~VekaCHXRUDDq8q6Aj8O7zc2WB~ICeLtw6j29aBO3fDgsujw2yHXay3jWSLZhULnzDB38cjzhnXgnd3bBqmSj9VYF~ID9qeyQiZFyHYYtjMVR-uBmrVWFTdUGnyGLPwuWmaSI6OjP0NIsWaG4HM23vqM-Q0xUUsPp4sNDZRmATP4LqYxsiFIeAyqVJ9~V9FvfkyxddiEOq2gcj4TXJhSu9XTv9jDr98XzCXfV-yv3j5~8To78KbLvGLHqq4sq0trCinwfTMqGuSDT-06dmk88QVwPldQRMabcf745Fyg__",
    title: "NFT",
  },
  {
    id: 1,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/e7a3/836a/438a569c2d6cd682b7589631ad6972fe?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XU78~OIbIye1V8EM3Y1N5bMaxabGdhqvQqnEDM9m1ZSwFO~VekaCHXRUDDq8q6Aj8O7zc2WB~ICeLtw6j29aBO3fDgsujw2yHXay3jWSLZhULnzDB38cjzhnXgnd3bBqmSj9VYF~ID9qeyQiZFyHYYtjMVR-uBmrVWFTdUGnyGLPwuWmaSI6OjP0NIsWaG4HM23vqM-Q0xUUsPp4sNDZRmATP4LqYxsiFIeAyqVJ9~V9FvfkyxddiEOq2gcj4TXJhSu9XTv9jDr98XzCXfV-yv3j5~8To78KbLvGLHqq4sq0trCinwfTMqGuSDT-06dmk88QVwPldQRMabcf745Fyg__",
    title: "NFT",
  },
  {
    id: 1,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/e7a3/836a/438a569c2d6cd682b7589631ad6972fe?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XU78~OIbIye1V8EM3Y1N5bMaxabGdhqvQqnEDM9m1ZSwFO~VekaCHXRUDDq8q6Aj8O7zc2WB~ICeLtw6j29aBO3fDgsujw2yHXay3jWSLZhULnzDB38cjzhnXgnd3bBqmSj9VYF~ID9qeyQiZFyHYYtjMVR-uBmrVWFTdUGnyGLPwuWmaSI6OjP0NIsWaG4HM23vqM-Q0xUUsPp4sNDZRmATP4LqYxsiFIeAyqVJ9~V9FvfkyxddiEOq2gcj4TXJhSu9XTv9jDr98XzCXfV-yv3j5~8To78KbLvGLHqq4sq0trCinwfTMqGuSDT-06dmk88QVwPldQRMabcf745Fyg__",
    title: "NFT",
  },
  {
    id: 1,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/e7a3/836a/438a569c2d6cd682b7589631ad6972fe?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XU78~OIbIye1V8EM3Y1N5bMaxabGdhqvQqnEDM9m1ZSwFO~VekaCHXRUDDq8q6Aj8O7zc2WB~ICeLtw6j29aBO3fDgsujw2yHXay3jWSLZhULnzDB38cjzhnXgnd3bBqmSj9VYF~ID9qeyQiZFyHYYtjMVR-uBmrVWFTdUGnyGLPwuWmaSI6OjP0NIsWaG4HM23vqM-Q0xUUsPp4sNDZRmATP4LqYxsiFIeAyqVJ9~V9FvfkyxddiEOq2gcj4TXJhSu9XTv9jDr98XzCXfV-yv3j5~8To78KbLvGLHqq4sq0trCinwfTMqGuSDT-06dmk88QVwPldQRMabcf745Fyg__",
    title: "NFT",
  },
  {
    id: 1,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/e7a3/836a/438a569c2d6cd682b7589631ad6972fe?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XU78~OIbIye1V8EM3Y1N5bMaxabGdhqvQqnEDM9m1ZSwFO~VekaCHXRUDDq8q6Aj8O7zc2WB~ICeLtw6j29aBO3fDgsujw2yHXay3jWSLZhULnzDB38cjzhnXgnd3bBqmSj9VYF~ID9qeyQiZFyHYYtjMVR-uBmrVWFTdUGnyGLPwuWmaSI6OjP0NIsWaG4HM23vqM-Q0xUUsPp4sNDZRmATP4LqYxsiFIeAyqVJ9~V9FvfkyxddiEOq2gcj4TXJhSu9XTv9jDr98XzCXfV-yv3j5~8To78KbLvGLHqq4sq0trCinwfTMqGuSDT-06dmk88QVwPldQRMabcf745Fyg__",
    title: "NFT",
  },
];

const data: Data[] = [
  {
    id: 1,
    image:
      "https://s3-alpha-sig.figma.com/img/8b59/9b0c/17269b22e70aacecf94bcf52eb04b833?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AKui5g889ScrxyvP7gpvS5IdnsFHxwsxblD4lhcqmObHfsIRyZmXIIrPQDVSezRc1f9PzCTFdWtbLqM~eBb1qMcIyfGyDKTh8nqGfaKUCXHTAnyVL31Fo2RwL28eO8ySifv0yfbcivcRSQpR0bCZw1sCMN9X1vykZ~D4za69th-RkE67tYIjfjOseGNHzM6NUaIeXSnRvRr0Ls~CeJd7FU0UtZoCHyZAhx3org1Sulk4IxDbUpKSjtjmKPeUQzJApVSCqU6~v7U17ZmlxkqeAUIKZ~VvnfrgoVaCiEK95U3fMYTbHUQiSioXu2VZRIUzva0iw1EArUlD9dwiyJqSnA__",
    backgroundImage:
      "https://s3-alpha-sig.figma.com/img/eebc/98f9/46df3b847cc86d00bc3d47e6ddc025ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I7YcPXyjPu6KpvZdEuyOAgnvPzZdbGBxSco1FkJ-UVVt5hoM1bkc27WRyEcI5GOy-bwuWLh8yCj-yMg7Aqgw~JKiFY8pENoFXr7xEO00E9s9GaOKV9WV5vvgg65XTefCGLqQN9MeT480~62tZQRo4EimMX-NVnWl3hWoDDmilpuJdhNiENwoMbCHlF8t2SOix0uXdqL27R7unP~~OsEahdmeQvTpYBKgGZcyU9vggmylg7AyKZjE3php2ZEJFpTpW4TEUcT3VsfmwrwjJxGYfXrD17UaoLcGa4bPNmUgqKtkz0Y6s5Lbnn1R8bA3wKG9W21-7RQGBqyJTnRs42vDMA__",
    icons: ["⭐", "🍎", "⬆️"],
  },
  {
    id: 1,
    image:
      "https://s3-alpha-sig.figma.com/img/8b59/9b0c/17269b22e70aacecf94bcf52eb04b833?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AKui5g889ScrxyvP7gpvS5IdnsFHxwsxblD4lhcqmObHfsIRyZmXIIrPQDVSezRc1f9PzCTFdWtbLqM~eBb1qMcIyfGyDKTh8nqGfaKUCXHTAnyVL31Fo2RwL28eO8ySifv0yfbcivcRSQpR0bCZw1sCMN9X1vykZ~D4za69th-RkE67tYIjfjOseGNHzM6NUaIeXSnRvRr0Ls~CeJd7FU0UtZoCHyZAhx3org1Sulk4IxDbUpKSjtjmKPeUQzJApVSCqU6~v7U17ZmlxkqeAUIKZ~VvnfrgoVaCiEK95U3fMYTbHUQiSioXu2VZRIUzva0iw1EArUlD9dwiyJqSnA__",
    backgroundImage:
      "https://s3-alpha-sig.figma.com/img/eebc/98f9/46df3b847cc86d00bc3d47e6ddc025ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I7YcPXyjPu6KpvZdEuyOAgnvPzZdbGBxSco1FkJ-UVVt5hoM1bkc27WRyEcI5GOy-bwuWLh8yCj-yMg7Aqgw~JKiFY8pENoFXr7xEO00E9s9GaOKV9WV5vvgg65XTefCGLqQN9MeT480~62tZQRo4EimMX-NVnWl3hWoDDmilpuJdhNiENwoMbCHlF8t2SOix0uXdqL27R7unP~~OsEahdmeQvTpYBKgGZcyU9vggmylg7AyKZjE3php2ZEJFpTpW4TEUcT3VsfmwrwjJxGYfXrD17UaoLcGa4bPNmUgqKtkz0Y6s5Lbnn1R8bA3wKG9W21-7RQGBqyJTnRs42vDMA__",
    icons: ["⭐", "🍎", "⬆️"],
  },
  {
    id: 1,
    image:
      "https://s3-alpha-sig.figma.com/img/8b59/9b0c/17269b22e70aacecf94bcf52eb04b833?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AKui5g889ScrxyvP7gpvS5IdnsFHxwsxblD4lhcqmObHfsIRyZmXIIrPQDVSezRc1f9PzCTFdWtbLqM~eBb1qMcIyfGyDKTh8nqGfaKUCXHTAnyVL31Fo2RwL28eO8ySifv0yfbcivcRSQpR0bCZw1sCMN9X1vykZ~D4za69th-RkE67tYIjfjOseGNHzM6NUaIeXSnRvRr0Ls~CeJd7FU0UtZoCHyZAhx3org1Sulk4IxDbUpKSjtjmKPeUQzJApVSCqU6~v7U17ZmlxkqeAUIKZ~VvnfrgoVaCiEK95U3fMYTbHUQiSioXu2VZRIUzva0iw1EArUlD9dwiyJqSnA__",
    backgroundImage:
      "https://s3-alpha-sig.figma.com/img/eebc/98f9/46df3b847cc86d00bc3d47e6ddc025ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I7YcPXyjPu6KpvZdEuyOAgnvPzZdbGBxSco1FkJ-UVVt5hoM1bkc27WRyEcI5GOy-bwuWLh8yCj-yMg7Aqgw~JKiFY8pENoFXr7xEO00E9s9GaOKV9WV5vvgg65XTefCGLqQN9MeT480~62tZQRo4EimMX-NVnWl3hWoDDmilpuJdhNiENwoMbCHlF8t2SOix0uXdqL27R7unP~~OsEahdmeQvTpYBKgGZcyU9vggmylg7AyKZjE3php2ZEJFpTpW4TEUcT3VsfmwrwjJxGYfXrD17UaoLcGa4bPNmUgqKtkz0Y6s5Lbnn1R8bA3wKG9W21-7RQGBqyJTnRs42vDMA__",
    icons: ["⭐", "🍎", "⬆️"],
  },
  {
    id: 1,
    image:
      "https://s3-alpha-sig.figma.com/img/8b59/9b0c/17269b22e70aacecf94bcf52eb04b833?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AKui5g889ScrxyvP7gpvS5IdnsFHxwsxblD4lhcqmObHfsIRyZmXIIrPQDVSezRc1f9PzCTFdWtbLqM~eBb1qMcIyfGyDKTh8nqGfaKUCXHTAnyVL31Fo2RwL28eO8ySifv0yfbcivcRSQpR0bCZw1sCMN9X1vykZ~D4za69th-RkE67tYIjfjOseGNHzM6NUaIeXSnRvRr0Ls~CeJd7FU0UtZoCHyZAhx3org1Sulk4IxDbUpKSjtjmKPeUQzJApVSCqU6~v7U17ZmlxkqeAUIKZ~VvnfrgoVaCiEK95U3fMYTbHUQiSioXu2VZRIUzva0iw1EArUlD9dwiyJqSnA__",
    backgroundImage:
      "https://s3-alpha-sig.figma.com/img/eebc/98f9/46df3b847cc86d00bc3d47e6ddc025ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I7YcPXyjPu6KpvZdEuyOAgnvPzZdbGBxSco1FkJ-UVVt5hoM1bkc27WRyEcI5GOy-bwuWLh8yCj-yMg7Aqgw~JKiFY8pENoFXr7xEO00E9s9GaOKV9WV5vvgg65XTefCGLqQN9MeT480~62tZQRo4EimMX-NVnWl3hWoDDmilpuJdhNiENwoMbCHlF8t2SOix0uXdqL27R7unP~~OsEahdmeQvTpYBKgGZcyU9vggmylg7AyKZjE3php2ZEJFpTpW4TEUcT3VsfmwrwjJxGYfXrD17UaoLcGa4bPNmUgqKtkz0Y6s5Lbnn1R8bA3wKG9W21-7RQGBqyJTnRs42vDMA__",
    icons: ["⭐", "🍎", "⬆️"],
  },
  {
    id: 1,
    image:
      "https://s3-alpha-sig.figma.com/img/8b59/9b0c/17269b22e70aacecf94bcf52eb04b833?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AKui5g889ScrxyvP7gpvS5IdnsFHxwsxblD4lhcqmObHfsIRyZmXIIrPQDVSezRc1f9PzCTFdWtbLqM~eBb1qMcIyfGyDKTh8nqGfaKUCXHTAnyVL31Fo2RwL28eO8ySifv0yfbcivcRSQpR0bCZw1sCMN9X1vykZ~D4za69th-RkE67tYIjfjOseGNHzM6NUaIeXSnRvRr0Ls~CeJd7FU0UtZoCHyZAhx3org1Sulk4IxDbUpKSjtjmKPeUQzJApVSCqU6~v7U17ZmlxkqeAUIKZ~VvnfrgoVaCiEK95U3fMYTbHUQiSioXu2VZRIUzva0iw1EArUlD9dwiyJqSnA__",
    backgroundImage:
      "https://s3-alpha-sig.figma.com/img/eebc/98f9/46df3b847cc86d00bc3d47e6ddc025ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I7YcPXyjPu6KpvZdEuyOAgnvPzZdbGBxSco1FkJ-UVVt5hoM1bkc27WRyEcI5GOy-bwuWLh8yCj-yMg7Aqgw~JKiFY8pENoFXr7xEO00E9s9GaOKV9WV5vvgg65XTefCGLqQN9MeT480~62tZQRo4EimMX-NVnWl3hWoDDmilpuJdhNiENwoMbCHlF8t2SOix0uXdqL27R7unP~~OsEahdmeQvTpYBKgGZcyU9vggmylg7AyKZjE3php2ZEJFpTpW4TEUcT3VsfmwrwjJxGYfXrD17UaoLcGa4bPNmUgqKtkz0Y6s5Lbnn1R8bA3wKG9W21-7RQGBqyJTnRs42vDMA__",
    icons: ["⭐", "🍎", "⬆️"],
  },
];

const EcoCate: React.FC = () => {
  return (
    <div className="lg:mx-16 sm:mx-16">
      <div className="flex items-center gap-1 mt-8">
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
          <p>Ecosystems</p>
        </div>
      </div>
      <div className="eco&cat flex flex-col lg:flex-row gap-10 ">
        <div className="Main grid gap-4 mx-8 sm-mx-8 lg:mx-0 grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 pt-6 lg:basis-[50%]">
          {data.map((item) => (
            <div key={item.id} className="card p flex gap-1">
              <div className="card bg-black w-28 h-28 border border-gray-700 flex items-center justify-center relative">
                <div className="w-full h-full relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-10"
                    style={{ backgroundImage: `url(${item.backgroundImage})` }}
                  ></div>
                  <div className="relative flex items-center justify-center w-full h-full">
                    <img
                      src={item.image}
                      alt="Profile"
                      className="w-20 h-20 object-cover rounded-full"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="5"
                  height="5"
                  viewBox="0 0 4 4"
                  fill="none"
                >
                  <path d="M4 0.5L0.5 0.5L0.5 4" stroke="white" />
                </svg>
              </div>
              </div>
             
              <div className="icon flex flex-col justify-start gap-2 bg-white/10 h-24 w-8 icon-clip">
                {item.icons.map((icon, index) => (
                  <span key={index} className="text">
                    {icon}
                  </span>
                ))}
              </div>
            </div>
          ))}
          <div className="flex items-center cursor-pointer ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="31"
              viewBox="0 0 29 31"
              fill="none"
            >
              <path
                d="M1 1H6.48652L15 10"
                stroke="white"
                strokeOpacity="0.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 5L11 10"
                stroke="white"
                strokeOpacity="0.3"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* pending */}
        <div>
          <div className="">
            <div className="flex items-center gap-1 pt-1  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="11"
                viewBox="0 0 16 11"
                fill="none"
              >
                <path
                  d="M1 1H6.48652L15 10"
                  stroke="white"
                  stroke-opacity="0.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 5L11 10"
                  stroke="white"
                  stroke-opacity="0.3"
                  stroke-linecap="round"
                />
              </svg>
              <div>
                <h1 className="font-thin text-gray-400">Categories</h1>
              </div>
            </div>
            <div className="relative  items-center hidden lg:block">
              <div className="absolute bottom-0 left-0 hidden lg:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="6"
                  viewBox="0 0 4 5"
                  fill="none"
                >
                  <path d="M0 4L3.5 4L3.5 0.5" stroke="#FA00FF" />
                </svg>
              </div>

              <div className="absolute top-0 left-40 hidden lg:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="6"
                  viewBox="0 0 5 4"
                  fill="none"
                >
                  <path d="M4.5 3.5L1 3.5L1 4.17371e-08" stroke="#FA00FF" />
                </svg>
              </div>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="160"
                  height="59"
                  viewBox="0 0 160 59"
                  fill="none"
                >
                  <path
                    d="M159 0.5L114 45.5H23L10.5 58H0"
                    stroke="white"
                    stroke-opacity="0.4"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="grid items-center  lg:grid-cols-5 sm:grid-cols-5 sm:mx-10 lg:gap-10 grid-cols-3  mt-16  shadow-2xl rounded-md mx-10 lg:mx-auto  basis-[50%]">
            {EcoData.map((card) => (
              <div
                key={card.id}
                className="cate flex items-center mb-4 lg:mb-0"
              >
                <div className="text-center">
                  <div className="image-container h-[6rem] w-[6rem]">
                    <img
                      src={card.imageUrl}
                      alt={card.title}
                      className="styled-image"
                    />
                  </div>

                  <h1
                    className=" mt-1 text-center"
                    style={{ letterSpacing: "20px" }}
                  >
                    {card.title}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default EcoCate;
