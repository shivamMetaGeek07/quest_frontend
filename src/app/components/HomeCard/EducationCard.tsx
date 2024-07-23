import Image from "next/image";
import React from "react";
interface EducationData {
  imageUrl: string;
  smallImageUrl: string;
  title: string;
  description1: string;
  description2: string;
  description3: string;
  description4: string;
}
interface KolData {
  imageUrl: string;
  smallImageUrl: string;
  title: string;
  description1: string;
  description2: string;
  description3: string;
  description4: string;
}

const educationData: EducationData[] = [
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/acb9/32bf/b481a3a08bea2f6b1039c9581c8ed7d8?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q3y~7wTX4z6d1ge4agt8Y3eafh~Uq2~r9FH8GhQwBz5RbUsidw21GHwKewD-uF~cKxidMnmDpY6b6k~jWDisNm33b5a0yCUgXHK9xh8V3eX3wECbMYxnShCkUQdXYY~mPRIn8NtMAqQ6o5ZpWKVjX6H6aFi1DPonX0uTYu8nC1lZnWxqSPNJLwrg5s1zxG8ysAsgDiGM2is1KWYeQzCoHwfdU1CTxZvp8hH6ZE2VdiAUyAjME8hWGwZzSoNduNn2F7BoxDYVJdYuX1Cgjrgx0~Ls0gedpt7i-9tgyOmz-eBtIqDHh3ktwjfgdlkBv85qSSXYxTlidYusn3CfG9qaxQ__",
    smallImageUrl:
      "https://s3-alpha-sig.figma.com/img/b9d2/e44d/b3d7744b85dd5e8422da709a3ea970ee?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WjMdCjGpgMn9td83crKxhXK051iVMADovLU9Vy9FZOBByZwPVKNBoKUOCOAvdSGqUZ2kwOomwMFtapdqnMCgyHAGDINhbL8ZA3lkZYfDW7z63Xs9akrDAL3-2CKscuXbt7wQ84JznoWgnjG59X7qG7Xe02qyUfEGYLUQF8PaIGHKdqqKL2H5ydEqyN-3x-ygVUyeX80nTCn12811B4NrfkE5lYnQidKrNUacacNgG~lRXc~XuPSzU6Cx4~msJWkzlcNJToTWcU-nCve7h6b13iQRtAuriA36g5cHhlpQVlyvshbsjKbVk9X97Ppwcc5AGju-OdkPoF3NMb~E8dQCmg__",
    title: "TOKYO BEAST",
    description1: "Tokyo",
    description2: "Beastokyo",
    description3: "Beast",
    description4: "Alpha M...",
  },
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/acb9/32bf/b481a3a08bea2f6b1039c9581c8ed7d8?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q3y~7wTX4z6d1ge4agt8Y3eafh~Uq2~r9FH8GhQwBz5RbUsidw21GHwKewD-uF~cKxidMnmDpY6b6k~jWDisNm33b5a0yCUgXHK9xh8V3eX3wECbMYxnShCkUQdXYY~mPRIn8NtMAqQ6o5ZpWKVjX6H6aFi1DPonX0uTYu8nC1lZnWxqSPNJLwrg5s1zxG8ysAsgDiGM2is1KWYeQzCoHwfdU1CTxZvp8hH6ZE2VdiAUyAjME8hWGwZzSoNduNn2F7BoxDYVJdYuX1Cgjrgx0~Ls0gedpt7i-9tgyOmz-eBtIqDHh3ktwjfgdlkBv85qSSXYxTlidYusn3CfG9qaxQ__",
    smallImageUrl:
      "https://s3-alpha-sig.figma.com/img/b9d2/e44d/b3d7744b85dd5e8422da709a3ea970ee?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WjMdCjGpgMn9td83crKxhXK051iVMADovLU9Vy9FZOBByZwPVKNBoKUOCOAvdSGqUZ2kwOomwMFtapdqnMCgyHAGDINhbL8ZA3lkZYfDW7z63Xs9akrDAL3-2CKscuXbt7wQ84JznoWgnjG59X7qG7Xe02qyUfEGYLUQF8PaIGHKdqqKL2H5ydEqyN-3x-ygVUyeX80nTCn12811B4NrfkE5lYnQidKrNUacacNgG~lRXc~XuPSzU6Cx4~msJWkzlcNJToTWcU-nCve7h6b13iQRtAuriA36g5cHhlpQVlyvshbsjKbVk9X97Ppwcc5AGju-OdkPoF3NMb~E8dQCmg__",
    title: "TOKYO BEAST",
    description1: "Tokyo",
    description2: "Beastokyo",
    description3: "Beast",
    description4: "Alpha M...",
  },
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/acb9/32bf/b481a3a08bea2f6b1039c9581c8ed7d8?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q3y~7wTX4z6d1ge4agt8Y3eafh~Uq2~r9FH8GhQwBz5RbUsidw21GHwKewD-uF~cKxidMnmDpY6b6k~jWDisNm33b5a0yCUgXHK9xh8V3eX3wECbMYxnShCkUQdXYY~mPRIn8NtMAqQ6o5ZpWKVjX6H6aFi1DPonX0uTYu8nC1lZnWxqSPNJLwrg5s1zxG8ysAsgDiGM2is1KWYeQzCoHwfdU1CTxZvp8hH6ZE2VdiAUyAjME8hWGwZzSoNduNn2F7BoxDYVJdYuX1Cgjrgx0~Ls0gedpt7i-9tgyOmz-eBtIqDHh3ktwjfgdlkBv85qSSXYxTlidYusn3CfG9qaxQ__",
    smallImageUrl:
      "https://s3-alpha-sig.figma.com/img/b9d2/e44d/b3d7744b85dd5e8422da709a3ea970ee?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WjMdCjGpgMn9td83crKxhXK051iVMADovLU9Vy9FZOBByZwPVKNBoKUOCOAvdSGqUZ2kwOomwMFtapdqnMCgyHAGDINhbL8ZA3lkZYfDW7z63Xs9akrDAL3-2CKscuXbt7wQ84JznoWgnjG59X7qG7Xe02qyUfEGYLUQF8PaIGHKdqqKL2H5ydEqyN-3x-ygVUyeX80nTCn12811B4NrfkE5lYnQidKrNUacacNgG~lRXc~XuPSzU6Cx4~msJWkzlcNJToTWcU-nCve7h6b13iQRtAuriA36g5cHhlpQVlyvshbsjKbVk9X97Ppwcc5AGju-OdkPoF3NMb~E8dQCmg__",
    title: "TOKYO BEAST",
    description1: "Tokyo",
    description2: "Beastokyo",
    description3: "Beast",
    description4: "Alpha M...",
  },
];

const KolData: KolData[] = [
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/acb9/32bf/b481a3a08bea2f6b1039c9581c8ed7d8?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q3y~7wTX4z6d1ge4agt8Y3eafh~Uq2~r9FH8GhQwBz5RbUsidw21GHwKewD-uF~cKxidMnmDpY6b6k~jWDisNm33b5a0yCUgXHK9xh8V3eX3wECbMYxnShCkUQdXYY~mPRIn8NtMAqQ6o5ZpWKVjX6H6aFi1DPonX0uTYu8nC1lZnWxqSPNJLwrg5s1zxG8ysAsgDiGM2is1KWYeQzCoHwfdU1CTxZvp8hH6ZE2VdiAUyAjME8hWGwZzSoNduNn2F7BoxDYVJdYuX1Cgjrgx0~Ls0gedpt7i-9tgyOmz-eBtIqDHh3ktwjfgdlkBv85qSSXYxTlidYusn3CfG9qaxQ__",
    smallImageUrl:
      "https://s3-alpha-sig.figma.com/img/b9d2/e44d/b3d7744b85dd5e8422da709a3ea970ee?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WjMdCjGpgMn9td83crKxhXK051iVMADovLU9Vy9FZOBByZwPVKNBoKUOCOAvdSGqUZ2kwOomwMFtapdqnMCgyHAGDINhbL8ZA3lkZYfDW7z63Xs9akrDAL3-2CKscuXbt7wQ84JznoWgnjG59X7qG7Xe02qyUfEGYLUQF8PaIGHKdqqKL2H5ydEqyN-3x-ygVUyeX80nTCn12811B4NrfkE5lYnQidKrNUacacNgG~lRXc~XuPSzU6Cx4~msJWkzlcNJToTWcU-nCve7h6b13iQRtAuriA36g5cHhlpQVlyvshbsjKbVk9X97Ppwcc5AGju-OdkPoF3NMb~E8dQCmg__",
    title: "TOKYO BEAST",
    description1: "Tokyo",
    description2: "Beastokyo",
    description3: "Beast",
    description4: "Alpha M...",
    // show the dynamic bg colur
  },
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/acb9/32bf/b481a3a08bea2f6b1039c9581c8ed7d8?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q3y~7wTX4z6d1ge4agt8Y3eafh~Uq2~r9FH8GhQwBz5RbUsidw21GHwKewD-uF~cKxidMnmDpY6b6k~jWDisNm33b5a0yCUgXHK9xh8V3eX3wECbMYxnShCkUQdXYY~mPRIn8NtMAqQ6o5ZpWKVjX6H6aFi1DPonX0uTYu8nC1lZnWxqSPNJLwrg5s1zxG8ysAsgDiGM2is1KWYeQzCoHwfdU1CTxZvp8hH6ZE2VdiAUyAjME8hWGwZzSoNduNn2F7BoxDYVJdYuX1Cgjrgx0~Ls0gedpt7i-9tgyOmz-eBtIqDHh3ktwjfgdlkBv85qSSXYxTlidYusn3CfG9qaxQ__",
    smallImageUrl:
      "https://s3-alpha-sig.figma.com/img/b9d2/e44d/b3d7744b85dd5e8422da709a3ea970ee?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WjMdCjGpgMn9td83crKxhXK051iVMADovLU9Vy9FZOBByZwPVKNBoKUOCOAvdSGqUZ2kwOomwMFtapdqnMCgyHAGDINhbL8ZA3lkZYfDW7z63Xs9akrDAL3-2CKscuXbt7wQ84JznoWgnjG59X7qG7Xe02qyUfEGYLUQF8PaIGHKdqqKL2H5ydEqyN-3x-ygVUyeX80nTCn12811B4NrfkE5lYnQidKrNUacacNgG~lRXc~XuPSzU6Cx4~msJWkzlcNJToTWcU-nCve7h6b13iQRtAuriA36g5cHhlpQVlyvshbsjKbVk9X97Ppwcc5AGju-OdkPoF3NMb~E8dQCmg__",
    title: "TOKYO BEAST",
    description1: "Tokyo",
    description2: "Beastokyo",
    description3: "Beast",
    description4: "Alpha M...",
  },
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/acb9/32bf/b481a3a08bea2f6b1039c9581c8ed7d8?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q3y~7wTX4z6d1ge4agt8Y3eafh~Uq2~r9FH8GhQwBz5RbUsidw21GHwKewD-uF~cKxidMnmDpY6b6k~jWDisNm33b5a0yCUgXHK9xh8V3eX3wECbMYxnShCkUQdXYY~mPRIn8NtMAqQ6o5ZpWKVjX6H6aFi1DPonX0uTYu8nC1lZnWxqSPNJLwrg5s1zxG8ysAsgDiGM2is1KWYeQzCoHwfdU1CTxZvp8hH6ZE2VdiAUyAjME8hWGwZzSoNduNn2F7BoxDYVJdYuX1Cgjrgx0~Ls0gedpt7i-9tgyOmz-eBtIqDHh3ktwjfgdlkBv85qSSXYxTlidYusn3CfG9qaxQ__",
    smallImageUrl:
      "https://s3-alpha-sig.figma.com/img/b9d2/e44d/b3d7744b85dd5e8422da709a3ea970ee?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WjMdCjGpgMn9td83crKxhXK051iVMADovLU9Vy9FZOBByZwPVKNBoKUOCOAvdSGqUZ2kwOomwMFtapdqnMCgyHAGDINhbL8ZA3lkZYfDW7z63Xs9akrDAL3-2CKscuXbt7wQ84JznoWgnjG59X7qG7Xe02qyUfEGYLUQF8PaIGHKdqqKL2H5ydEqyN-3x-ygVUyeX80nTCn12811B4NrfkE5lYnQidKrNUacacNgG~lRXc~XuPSzU6Cx4~msJWkzlcNJToTWcU-nCve7h6b13iQRtAuriA36g5cHhlpQVlyvshbsjKbVk9X97Ppwcc5AGju-OdkPoF3NMb~E8dQCmg__",
    title: "TOKYO BEAST",
    description1: "Tokyo",
    description2: "Beastokyo",
    description3: "Beast",
    description4: "Alpha M...",
  },
];

const EducationCardList: React.FC = () => {
  return (
    <div className=" gap-1 mb-8">
      <div className="mb-8">
        <svg
        className="w-full"
          xmlns="http://www.w3.org/2000/svg"
         
          height="2"
          viewBox="0 0 1082 2"
          fill="none"
        >
          <path
            opacity="0.8"
            d="M1 1L1081 1.00009"
            stroke="url(#paint0_linear_63_791)"
            strokeLinecap="round"
            strokeDasharray="13 13"
          />
          <defs>
            <linearGradient
              id="paint0_linear_63_791"
              x1="1"
              y1="1.5"
              x2="1081"
              y2="1.50009"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#8C71FF" stopOpacity="0" />
              <stop offset="1" stopColor="#FA00FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="main flex flex-col lg:flex-row gap-16 ">
        <div>
          <div className="relative">
            <div className="flex ml-8 items-center gap-1 absolute bottom-6 left-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
              >
                <path
                  d="M1 0.5H6.48652L15 9.5"
                  stroke="white"
                  strokeOpacity="0.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 4.5L11 9.5"
                  stroke="white"
                  strokeOpacity="0.3"
                  strokeLinecap="round"
                />
              </svg>
              <div>
                <h1 className="text-gray-400 font-thin">Educational quests</h1>
              </div>
            </div>

            <div className="relative">
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="160"
                  height="59"
                  viewBox="0 0 160 59"
                  fill="none"
                >
                  <path
                    d="M1 0.5L46 45.5H137L149.5 58H160"
                    stroke="url(#paint0_linear_69_326)"
                    strokeOpacity="0.5"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_69_326"
                      x1="0.99999"
                      y1="1.00001"
                      x2="160"
                      y2="58"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.74102" stopColor="white" />
                      <stop offset="1" stopColor="#999999" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="absolute top-0 left-0 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="6"
                  viewBox="0 0 4 4"
                  fill="none"
                >
                  <path d="M0 3.5L3.5 3.5L3.5 4.17371e-08" stroke="#FA00FF" />
                </svg>
              </div>
              <div className="absolute bottom-0 left-40 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="6"
                  viewBox="0 0 5 4"
                  fill="none"
                >
                  <path d="M4.5 3.5L1 3.5L1 4.17371e-08" stroke="#FA00FF" />
                </svg>
              </div>
            </div>
          </div>

          <div className="p-2 edu neo mt-5 grid lg:gap-10 sm:gap-10 gap-4  mx-8  lg:mx-0 grid-cols-2 sm:grid-cols-3 lg:grid-cols-3  lg:basis-[50%]">
            {educationData.map((data, index) => (
              <div key={index} className="">
                <div>
                  <div className="box1 education-clip bg-red-700 ">
                    <div className="education-clip box2 border h-28 w-48 bg-red-700/10 flex justify-center items-center p-4">
                      <div>
                        <img
                          src={data.imageUrl}
                          alt=""
                          className="h-16 w-36 object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 flex gap-3">
                    <div>
                      <img
                        src={data.smallImageUrl}
                        alt=""
                        className="h-6 w-6 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-small text-slate-300">{data.title}</p>
                    </div>
                  </div>

                  <div>
                    <div className="flex md:gap-4 gap-2">
                      <p className="md:text-medium text-sm">{data.description1}</p>
                      <p className="md:text-medium text-sm">{data.description2}</p>
                    </div>

                    <div className="flex md:gap-4 gap-2">
                      <p className="md:text-medium text-sm">{data.description3}</p>
                      <p className="md:text-medium text-sm">|</p>
                      <p className="md:text-medium text-sm">{data.description4}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* pending */}

        <div>
          <div className="relative lg:mx-0  sm:mx-10 mx-10">
            <div className="flex ml- items-center gap-1 absolute bottom-6 left-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
              >
                <path
                  d="M1 0.5H6.48652L15 9.5"
                  stroke="white"
                  strokeOpacity="0.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 4.5L11 9.5"
                  stroke="white"
                  strokeOpacity="0.3"
                  strokeLinecap="round"
                />
              </svg>
              <div>
                <h1 className="text-gray-400 font-thin">KOL quests</h1>
              </div>
            </div>

            <div className="relative ">
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
              <div className="absolute bottom-0 left-0 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
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
                  width="7"
                  height="5"
                  viewBox="0 0 5 4"
                  fill="none"
                >
                  <path d="M4.5 3.5L1 3.5L1 4.17371e-08" stroke="#FA00FF" />
                </svg>
              </div>
            </div>
          </div>

          <div className=" mt-5 neo p-2 grid lg:gap-10 sm:gap-10 gap-4  mx-8  lg:mx-0 grid-cols-2 sm:grid-cols-3 lg:grid-cols-3  lg:basis-[50%]">
            {KolData.map((data, index) => (
              <div key={index} className="">
                <div>
                  <div className="box1 education-clip bg-red-600">
                    <div className="education-clip box2 border h-28 w-48 bg-red-700/10 flex justify-center items-center p-4">
                      <div>
                        <img
                          src={data.imageUrl}
                          alt=""
                          className="h-16 w-36 object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 flex gap-3">
                    <div>
                      <img
                        src={data.smallImageUrl}
                        alt=""
                        className="h-6 w-6 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-small text-slate-300">{data.title}</p>
                    </div>
                  </div>

                  <div>
                    <div className="flex md:gap-4 gap-2">
                      <p className="md:text-medium text-sm">{data.description1}</p>
                      <p className="md:text-medium text-sm">{data.description2}</p>
                    </div>

                    <div className="flex md:gap-4 gap-2">
                      <p className="md:text-medium text-sm">{data.description3}</p>
                      <p className="md:text-medium text-sm">|</p>
                      <p className="md:text-medium text-sm">{data.description4}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCardList;
