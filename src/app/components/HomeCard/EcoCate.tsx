import Image from "next/image";
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
    id: 2,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/e7a3/836a/438a569c2d6cd682b7589631ad6972fe?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XU78~OIbIye1V8EM3Y1N5bMaxabGdhqvQqnEDM9m1ZSwFO~VekaCHXRUDDq8q6Aj8O7zc2WB~ICeLtw6j29aBO3fDgsujw2yHXay3jWSLZhULnzDB38cjzhnXgnd3bBqmSj9VYF~ID9qeyQiZFyHYYtjMVR-uBmrVWFTdUGnyGLPwuWmaSI6OjP0NIsWaG4HM23vqM-Q0xUUsPp4sNDZRmATP4LqYxsiFIeAyqVJ9~V9FvfkyxddiEOq2gcj4TXJhSu9XTv9jDr98XzCXfV-yv3j5~8To78KbLvGLHqq4sq0trCinwfTMqGuSDT-06dmk88QVwPldQRMabcf745Fyg__",
    title: "NFT",
  },
  {
    id: 3,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/e7a3/836a/438a569c2d6cd682b7589631ad6972fe?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XU78~OIbIye1V8EM3Y1N5bMaxabGdhqvQqnEDM9m1ZSwFO~VekaCHXRUDDq8q6Aj8O7zc2WB~ICeLtw6j29aBO3fDgsujw2yHXay3jWSLZhULnzDB38cjzhnXgnd3bBqmSj9VYF~ID9qeyQiZFyHYYtjMVR-uBmrVWFTdUGnyGLPwuWmaSI6OjP0NIsWaG4HM23vqM-Q0xUUsPp4sNDZRmATP4LqYxsiFIeAyqVJ9~V9FvfkyxddiEOq2gcj4TXJhSu9XTv9jDr98XzCXfV-yv3j5~8To78KbLvGLHqq4sq0trCinwfTMqGuSDT-06dmk88QVwPldQRMabcf745Fyg__",
    title: "NFT",
  },
  {
    id: 4,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/e7a3/836a/438a569c2d6cd682b7589631ad6972fe?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XU78~OIbIye1V8EM3Y1N5bMaxabGdhqvQqnEDM9m1ZSwFO~VekaCHXRUDDq8q6Aj8O7zc2WB~ICeLtw6j29aBO3fDgsujw2yHXay3jWSLZhULnzDB38cjzhnXgnd3bBqmSj9VYF~ID9qeyQiZFyHYYtjMVR-uBmrVWFTdUGnyGLPwuWmaSI6OjP0NIsWaG4HM23vqM-Q0xUUsPp4sNDZRmATP4LqYxsiFIeAyqVJ9~V9FvfkyxddiEOq2gcj4TXJhSu9XTv9jDr98XzCXfV-yv3j5~8To78KbLvGLHqq4sq0trCinwfTMqGuSDT-06dmk88QVwPldQRMabcf745Fyg__",
    title: "NFT",
  },
  {
    id: 5,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/e7a3/836a/438a569c2d6cd682b7589631ad6972fe?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XU78~OIbIye1V8EM3Y1N5bMaxabGdhqvQqnEDM9m1ZSwFO~VekaCHXRUDDq8q6Aj8O7zc2WB~ICeLtw6j29aBO3fDgsujw2yHXay3jWSLZhULnzDB38cjzhnXgnd3bBqmSj9VYF~ID9qeyQiZFyHYYtjMVR-uBmrVWFTdUGnyGLPwuWmaSI6OjP0NIsWaG4HM23vqM-Q0xUUsPp4sNDZRmATP4LqYxsiFIeAyqVJ9~V9FvfkyxddiEOq2gcj4TXJhSu9XTv9jDr98XzCXfV-yv3j5~8To78KbLvGLHqq4sq0trCinwfTMqGuSDT-06dmk88QVwPldQRMabcf745Fyg__",
    title: "NFT",
  },
];

const data: Data[] = [
  {
    id: 1,
    image:
      "https://s3-alpha-sig.figma.com/img/f552/4d41/04db94e08ab24469fae629b971461e47?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bBlrSkLYS0a4wAJqyWmXHHtJDpeF6wYVskmtfpDUYSjY8qi7pTx9UY3l40frqVJNChtx0sBAAcgX46kdPF8B2yaOsbWHUQQB8DSqTnJz0WFeB038L2R7WETv03~uBGYEE7hfyYmNqNmzHPN-5-9OPrxV0BwzEP9MKDesSvkLunAMdTzauw7GSDo9UbEdPQTpHYLz4jGhlCZ8wm1Vmhs2Qh2gib97pI7BkPu7q5NrGxxAlapx5ILaMEDKAlAMuXVlZ8t4Bd3oUm9v26lNwQYKqoFX9adp29Vg-qgizYxVGbVBWS18vGXJDsYtPKSG9HPalWVys661nDXsHLsG-sWEww__",
    backgroundImage:
      "https://s3-alpha-sig.figma.com/img/eebc/98f9/46df3b847cc86d00bc3d47e6ddc025ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I7YcPXyjPu6KpvZdEuyOAgnvPzZdbGBxSco1FkJ-UVVt5hoM1bkc27WRyEcI5GOy-bwuWLh8yCj-yMg7Aqgw~JKiFY8pENoFXr7xEO00E9s9GaOKV9WV5vvgg65XTefCGLqQN9MeT480~62tZQRo4EimMX-NVnWl3hWoDDmilpuJdhNiENwoMbCHlF8t2SOix0uXdqL27R7unP~~OsEahdmeQvTpYBKgGZcyU9vggmylg7AyKZjE3php2ZEJFpTpW4TEUcT3VsfmwrwjJxGYfXrD17UaoLcGa4bPNmUgqKtkz0Y6s5Lbnn1R8bA3wKG9W21-7RQGBqyJTnRs42vDMA__",
    icons: ["⭐", "🍎", "⬆️"],
  },
  {
    id: 2,
    image:
      "https://s3-alpha-sig.figma.com/img/949b/b0b5/8fe4beaa42c3a2dac01371ab43658b6b?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O4h3Eh9wTTgTpIBcTBoOf8LkwbA28S4IDOoyDUuULs5HtV~IwRIdFjZmyFQXk8xbClv~4vw1ArZNwwB19GSeWyMHKUO9yNJ5AyeUfA0YqUW5Mqq-sM95AUAhHkDYa-n61lLhVnz-9LDDkfFUuRjqjgto3xc~lHyyQJBIQTx297eQ16ghTH4HZ3GsOt4lzNW~29UUbEB02K-JIjbb9jiWNVtFHFqlfA2JaEQTWSvIDJv6ptwko3t7iBmVzDSOOxRlVExsVwZKVZXI0-09rojhEqxEcrGUaHLr995pfPfTY0wrU4EhMdZPN0IbZGt0gQERQlv6VV522TIa2P-mJVbiNw__",
    backgroundImage:
      "https://s3-alpha-sig.figma.com/img/eebc/98f9/46df3b847cc86d00bc3d47e6ddc025ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I7YcPXyjPu6KpvZdEuyOAgnvPzZdbGBxSco1FkJ-UVVt5hoM1bkc27WRyEcI5GOy-bwuWLh8yCj-yMg7Aqgw~JKiFY8pENoFXr7xEO00E9s9GaOKV9WV5vvgg65XTefCGLqQN9MeT480~62tZQRo4EimMX-NVnWl3hWoDDmilpuJdhNiENwoMbCHlF8t2SOix0uXdqL27R7unP~~OsEahdmeQvTpYBKgGZcyU9vggmylg7AyKZjE3php2ZEJFpTpW4TEUcT3VsfmwrwjJxGYfXrD17UaoLcGa4bPNmUgqKtkz0Y6s5Lbnn1R8bA3wKG9W21-7RQGBqyJTnRs42vDMA__",
    icons: ["⭐", "🍎", "⬆️"],
  },
  {
    id: 3,
    image:
      "https://s3-alpha-sig.figma.com/img/8b59/9b0c/17269b22e70aacecf94bcf52eb04b833?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AKui5g889ScrxyvP7gpvS5IdnsFHxwsxblD4lhcqmObHfsIRyZmXIIrPQDVSezRc1f9PzCTFdWtbLqM~eBb1qMcIyfGyDKTh8nqGfaKUCXHTAnyVL31Fo2RwL28eO8ySifv0yfbcivcRSQpR0bCZw1sCMN9X1vykZ~D4za69th-RkE67tYIjfjOseGNHzM6NUaIeXSnRvRr0Ls~CeJd7FU0UtZoCHyZAhx3org1Sulk4IxDbUpKSjtjmKPeUQzJApVSCqU6~v7U17ZmlxkqeAUIKZ~VvnfrgoVaCiEK95U3fMYTbHUQiSioXu2VZRIUzva0iw1EArUlD9dwiyJqSnA__",
    backgroundImage:
      "https://s3-alpha-sig.figma.com/img/eebc/98f9/46df3b847cc86d00bc3d47e6ddc025ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I7YcPXyjPu6KpvZdEuyOAgnvPzZdbGBxSco1FkJ-UVVt5hoM1bkc27WRyEcI5GOy-bwuWLh8yCj-yMg7Aqgw~JKiFY8pENoFXr7xEO00E9s9GaOKV9WV5vvgg65XTefCGLqQN9MeT480~62tZQRo4EimMX-NVnWl3hWoDDmilpuJdhNiENwoMbCHlF8t2SOix0uXdqL27R7unP~~OsEahdmeQvTpYBKgGZcyU9vggmylg7AyKZjE3php2ZEJFpTpW4TEUcT3VsfmwrwjJxGYfXrD17UaoLcGa4bPNmUgqKtkz0Y6s5Lbnn1R8bA3wKG9W21-7RQGBqyJTnRs42vDMA__",
    icons: ["⭐", "🍎", "⬆️"],
  },
  {
    id: 4,
    image:
      "https://s3-alpha-sig.figma.com/img/82f5/550b/ce707281ecf1cfe66aa2cd9fbf7451a5?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JQZNgbRxMsNkvwpimdUwcuvbR4VPphWfCuDv1fZBjZt-A7Prq-u1RVfpn5nP-WTPBMpnrzrvVUVw8sqZLcCiySFdB3etOY4fDkVOFQov9Z1vyUytO83TFruf1NwjQVSV97Uq7GYE5lpyuIxh-Xdqa4g2IrVKBBqh0rOBRPpUI2UjxUslk9ZZydleT0JRCKF20jXOebvTIjg3QrzFLkxhtumj4baKIlg3HxU~9L4r5RTApq7tEfIPs1SI~m0h7ZRB6HAZ4PsdYej1C-ifDFSe4tVoYfW4EpVD-DCVo0UyJiMWnYUryOR4FDuxiuRLJJ3xI-WNbU5eojKHMYXBeX1-bA__",
    backgroundImage:
      "https://s3-alpha-sig.figma.com/img/eebc/98f9/46df3b847cc86d00bc3d47e6ddc025ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I7YcPXyjPu6KpvZdEuyOAgnvPzZdbGBxSco1FkJ-UVVt5hoM1bkc27WRyEcI5GOy-bwuWLh8yCj-yMg7Aqgw~JKiFY8pENoFXr7xEO00E9s9GaOKV9WV5vvgg65XTefCGLqQN9MeT480~62tZQRo4EimMX-NVnWl3hWoDDmilpuJdhNiENwoMbCHlF8t2SOix0uXdqL27R7unP~~OsEahdmeQvTpYBKgGZcyU9vggmylg7AyKZjE3php2ZEJFpTpW4TEUcT3VsfmwrwjJxGYfXrD17UaoLcGa4bPNmUgqKtkz0Y6s5Lbnn1R8bA3wKG9W21-7RQGBqyJTnRs42vDMA__",
    icons: ["⭐", "🍎", "⬆️"],
  },
  {
    id: 5,
    image:
      "https://s3-alpha-sig.figma.com/img/944e/15fa/50022b01798505039b52ab7f7614a9a0?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H6S4ICjFwlAYTbIftaJIbpXQuwNSrUv6PzLDugk0nxfwrsiDjO46lzcUyyJdIRhYwLUJ9h3SYCBM33YGbPs4PtMF~pt240SXAOPaJa7bGI59aqaDlwVK6jJDDYo0oJX9WUfbc~3PBWKaOiQ15SvMp7XFGv6WONaGO0i~8VFced7zDS5DrxQnffYGMJxMfIulzruncqrX4VxJ8vlbgH6h9O4WTL4EtNPT8cHGftPRwMhRcKTxi28FGDrYd4RHZGVOWvHV4TCOh5lLPJISB3QdgTOwQzS4If9SmmM9rCp7sHd7TnEctfI9cfX207CwRffT1g-iTjGRODY6FG1PYk~1YQ__",
    backgroundImage:
      "https://s3-alpha-sig.figma.com/img/eebc/98f9/46df3b847cc86d00bc3d47e6ddc025ab?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I7YcPXyjPu6KpvZdEuyOAgnvPzZdbGBxSco1FkJ-UVVt5hoM1bkc27WRyEcI5GOy-bwuWLh8yCj-yMg7Aqgw~JKiFY8pENoFXr7xEO00E9s9GaOKV9WV5vvgg65XTefCGLqQN9MeT480~62tZQRo4EimMX-NVnWl3hWoDDmilpuJdhNiENwoMbCHlF8t2SOix0uXdqL27R7unP~~OsEahdmeQvTpYBKgGZcyU9vggmylg7AyKZjE3php2ZEJFpTpW4TEUcT3VsfmwrwjJxGYfXrD17UaoLcGa4bPNmUgqKtkz0Y6s5Lbnn1R8bA3wKG9W21-7RQGBqyJTnRs42vDMA__",
    icons: ["⭐", "🍎", "⬆️"],
  },
];

const EcoCate: React.FC = () => {
  return (
    <div className="lg:mx-20 sm:mx-16 ">
      <div className="flex items-center gap-1 mt-8 lg:mx-0 sm:mx-6 mx-6">
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
                    <Image
                      src={item.image}
                      alt="Profile"
                      className="w-16 h-16 object-cover rounded-full"
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
                opacity="0.8"
                d="M25 0.5H4C1.79086 0.5 0 2.29086 0 4.5V26.875C0 28.877 1.62297 30.5 3.625 30.5H4.59167H24.4083H25.375C27.377 30.5 29 28.877 29 26.875V4.5C29 2.29086 27.2091 0.5 25 0.5Z"
                fill="#5538CE"
              />
              <path
                d="M5.55329 26.5377L4 26.5377C1.79086 26.5377 -2.51477e-07 24.7469 -3.48042e-07 22.5377L-1.1365e-06 4.5C-1.23306e-06 2.29086 1.79086 0.500002 4 0.500002L25 0.500001C27.2091 0.500001 29 2.29086 29 4.5L29 22.5377C29 24.7469 27.2091 26.5377 25 26.5377L23.4467 26.5377C22.3623 26.5377 21.3244 26.978 20.5708 27.7576L19.0991 29.2801C18.3454 30.0597 17.3075 30.5 16.2231 30.5L12.7769 30.5C11.6925 30.5 10.6546 30.0597 9.90094 29.2801L8.42925 27.7576C7.67558 26.978 6.63767 26.5377 5.55329 26.5377Z"
                fill="#5538CE"
              />
              <path
                d="M18 15.0862V15.9138H14.9214V19H14.0786V15.9138H11V15.0862H14.0786V12H14.9214V15.0862H18Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        {/* pending */}
        <div>
          <div className="relative sm:mx-10 lg:mx-0 mx-10 ">
            <div className="flex items-center gap-1 pt-1  absolute bottom-6 left-0 lg:mt-0 sm:pt-10 ">
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
              <div>
                <h1 className="font-thin text-gray-400 ">Categories</h1>
              </div>
            </div>
            <div className="relative  items-center ">
              <div className="absolute bottom-0 ">
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

              <div className="absolute top-0 left-40 ">
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
                    strokeOpacity="0.4"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="  grid items-center  lg:grid-cols-5 sm:grid-cols-5 sm:mx-10 lg:gap-8 grid-cols-3  mt-16  shadow-2xl rounded-md mx-10 lg:mx-auto  basis-[50%]">
            {EcoData.map((card) => (
              <div
                key={card.id}
                className="cate flex items-center mb-4 lg:mb-0"
              >
                <div className="text-center">
                  <div className="image-container h-[6rem] w-[6rem]">
                    <Image
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
