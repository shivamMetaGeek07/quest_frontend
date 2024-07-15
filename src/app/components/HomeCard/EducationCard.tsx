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
    description1: "TOKYO",
    description2: "BEASTOKYO",
    description3: "BEAST",
    description4: "ALPHA M...",
  },
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/acb9/32bf/b481a3a08bea2f6b1039c9581c8ed7d8?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q3y~7wTX4z6d1ge4agt8Y3eafh~Uq2~r9FH8GhQwBz5RbUsidw21GHwKewD-uF~cKxidMnmDpY6b6k~jWDisNm33b5a0yCUgXHK9xh8V3eX3wECbMYxnShCkUQdXYY~mPRIn8NtMAqQ6o5ZpWKVjX6H6aFi1DPonX0uTYu8nC1lZnWxqSPNJLwrg5s1zxG8ysAsgDiGM2is1KWYeQzCoHwfdU1CTxZvp8hH6ZE2VdiAUyAjME8hWGwZzSoNduNn2F7BoxDYVJdYuX1Cgjrgx0~Ls0gedpt7i-9tgyOmz-eBtIqDHh3ktwjfgdlkBv85qSSXYxTlidYusn3CfG9qaxQ__",
    smallImageUrl:
      "https://s3-alpha-sig.figma.com/img/b9d2/e44d/b3d7744b85dd5e8422da709a3ea970ee?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WjMdCjGpgMn9td83crKxhXK051iVMADovLU9Vy9FZOBByZwPVKNBoKUOCOAvdSGqUZ2kwOomwMFtapdqnMCgyHAGDINhbL8ZA3lkZYfDW7z63Xs9akrDAL3-2CKscuXbt7wQ84JznoWgnjG59X7qG7Xe02qyUfEGYLUQF8PaIGHKdqqKL2H5ydEqyN-3x-ygVUyeX80nTCn12811B4NrfkE5lYnQidKrNUacacNgG~lRXc~XuPSzU6Cx4~msJWkzlcNJToTWcU-nCve7h6b13iQRtAuriA36g5cHhlpQVlyvshbsjKbVk9X97Ppwcc5AGju-OdkPoF3NMb~E8dQCmg__",
    title: "TOKYO BEAST",
    description1: "TOKYO",
    description2: "BEASTOKYO",
    description3: "BEAST",
    description4: "ALPHA M...",
  },
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/acb9/32bf/b481a3a08bea2f6b1039c9581c8ed7d8?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q3y~7wTX4z6d1ge4agt8Y3eafh~Uq2~r9FH8GhQwBz5RbUsidw21GHwKewD-uF~cKxidMnmDpY6b6k~jWDisNm33b5a0yCUgXHK9xh8V3eX3wECbMYxnShCkUQdXYY~mPRIn8NtMAqQ6o5ZpWKVjX6H6aFi1DPonX0uTYu8nC1lZnWxqSPNJLwrg5s1zxG8ysAsgDiGM2is1KWYeQzCoHwfdU1CTxZvp8hH6ZE2VdiAUyAjME8hWGwZzSoNduNn2F7BoxDYVJdYuX1Cgjrgx0~Ls0gedpt7i-9tgyOmz-eBtIqDHh3ktwjfgdlkBv85qSSXYxTlidYusn3CfG9qaxQ__",
    smallImageUrl:
      "https://s3-alpha-sig.figma.com/img/b9d2/e44d/b3d7744b85dd5e8422da709a3ea970ee?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WjMdCjGpgMn9td83crKxhXK051iVMADovLU9Vy9FZOBByZwPVKNBoKUOCOAvdSGqUZ2kwOomwMFtapdqnMCgyHAGDINhbL8ZA3lkZYfDW7z63Xs9akrDAL3-2CKscuXbt7wQ84JznoWgnjG59X7qG7Xe02qyUfEGYLUQF8PaIGHKdqqKL2H5ydEqyN-3x-ygVUyeX80nTCn12811B4NrfkE5lYnQidKrNUacacNgG~lRXc~XuPSzU6Cx4~msJWkzlcNJToTWcU-nCve7h6b13iQRtAuriA36g5cHhlpQVlyvshbsjKbVk9X97Ppwcc5AGju-OdkPoF3NMb~E8dQCmg__",
    title: "TOKYO BEAST",
    description1: "TOKYO",
    description2: "BEASTOKYO",
    description3: "BEAST",
    description4: "ALPHA M...",
  },
];

const KolData: KolData[] = [
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/acb9/32bf/b481a3a08bea2f6b1039c9581c8ed7d8?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q3y~7wTX4z6d1ge4agt8Y3eafh~Uq2~r9FH8GhQwBz5RbUsidw21GHwKewD-uF~cKxidMnmDpY6b6k~jWDisNm33b5a0yCUgXHK9xh8V3eX3wECbMYxnShCkUQdXYY~mPRIn8NtMAqQ6o5ZpWKVjX6H6aFi1DPonX0uTYu8nC1lZnWxqSPNJLwrg5s1zxG8ysAsgDiGM2is1KWYeQzCoHwfdU1CTxZvp8hH6ZE2VdiAUyAjME8hWGwZzSoNduNn2F7BoxDYVJdYuX1Cgjrgx0~Ls0gedpt7i-9tgyOmz-eBtIqDHh3ktwjfgdlkBv85qSSXYxTlidYusn3CfG9qaxQ__",
    smallImageUrl:
      "https://s3-alpha-sig.figma.com/img/b9d2/e44d/b3d7744b85dd5e8422da709a3ea970ee?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WjMdCjGpgMn9td83crKxhXK051iVMADovLU9Vy9FZOBByZwPVKNBoKUOCOAvdSGqUZ2kwOomwMFtapdqnMCgyHAGDINhbL8ZA3lkZYfDW7z63Xs9akrDAL3-2CKscuXbt7wQ84JznoWgnjG59X7qG7Xe02qyUfEGYLUQF8PaIGHKdqqKL2H5ydEqyN-3x-ygVUyeX80nTCn12811B4NrfkE5lYnQidKrNUacacNgG~lRXc~XuPSzU6Cx4~msJWkzlcNJToTWcU-nCve7h6b13iQRtAuriA36g5cHhlpQVlyvshbsjKbVk9X97Ppwcc5AGju-OdkPoF3NMb~E8dQCmg__",
    title: "TOKYO BEAST",
    description1: "TOKYO",
    description2: "BEASTOKYO",
    description3: "BEAST",
    description4: "ALPHA M...",
  },
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/acb9/32bf/b481a3a08bea2f6b1039c9581c8ed7d8?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q3y~7wTX4z6d1ge4agt8Y3eafh~Uq2~r9FH8GhQwBz5RbUsidw21GHwKewD-uF~cKxidMnmDpY6b6k~jWDisNm33b5a0yCUgXHK9xh8V3eX3wECbMYxnShCkUQdXYY~mPRIn8NtMAqQ6o5ZpWKVjX6H6aFi1DPonX0uTYu8nC1lZnWxqSPNJLwrg5s1zxG8ysAsgDiGM2is1KWYeQzCoHwfdU1CTxZvp8hH6ZE2VdiAUyAjME8hWGwZzSoNduNn2F7BoxDYVJdYuX1Cgjrgx0~Ls0gedpt7i-9tgyOmz-eBtIqDHh3ktwjfgdlkBv85qSSXYxTlidYusn3CfG9qaxQ__",
    smallImageUrl:
      "https://s3-alpha-sig.figma.com/img/b9d2/e44d/b3d7744b85dd5e8422da709a3ea970ee?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WjMdCjGpgMn9td83crKxhXK051iVMADovLU9Vy9FZOBByZwPVKNBoKUOCOAvdSGqUZ2kwOomwMFtapdqnMCgyHAGDINhbL8ZA3lkZYfDW7z63Xs9akrDAL3-2CKscuXbt7wQ84JznoWgnjG59X7qG7Xe02qyUfEGYLUQF8PaIGHKdqqKL2H5ydEqyN-3x-ygVUyeX80nTCn12811B4NrfkE5lYnQidKrNUacacNgG~lRXc~XuPSzU6Cx4~msJWkzlcNJToTWcU-nCve7h6b13iQRtAuriA36g5cHhlpQVlyvshbsjKbVk9X97Ppwcc5AGju-OdkPoF3NMb~E8dQCmg__",
    title: "TOKYO BEAST",
    description1: "TOKYO",
    description2: "BEASTOKYO",
    description3: "BEAST",
    description4: "ALPHA M...",
  },
  {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/acb9/32bf/b481a3a08bea2f6b1039c9581c8ed7d8?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q3y~7wTX4z6d1ge4agt8Y3eafh~Uq2~r9FH8GhQwBz5RbUsidw21GHwKewD-uF~cKxidMnmDpY6b6k~jWDisNm33b5a0yCUgXHK9xh8V3eX3wECbMYxnShCkUQdXYY~mPRIn8NtMAqQ6o5ZpWKVjX6H6aFi1DPonX0uTYu8nC1lZnWxqSPNJLwrg5s1zxG8ysAsgDiGM2is1KWYeQzCoHwfdU1CTxZvp8hH6ZE2VdiAUyAjME8hWGwZzSoNduNn2F7BoxDYVJdYuX1Cgjrgx0~Ls0gedpt7i-9tgyOmz-eBtIqDHh3ktwjfgdlkBv85qSSXYxTlidYusn3CfG9qaxQ__",
    smallImageUrl:
      "https://s3-alpha-sig.figma.com/img/b9d2/e44d/b3d7744b85dd5e8422da709a3ea970ee?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WjMdCjGpgMn9td83crKxhXK051iVMADovLU9Vy9FZOBByZwPVKNBoKUOCOAvdSGqUZ2kwOomwMFtapdqnMCgyHAGDINhbL8ZA3lkZYfDW7z63Xs9akrDAL3-2CKscuXbt7wQ84JznoWgnjG59X7qG7Xe02qyUfEGYLUQF8PaIGHKdqqKL2H5ydEqyN-3x-ygVUyeX80nTCn12811B4NrfkE5lYnQidKrNUacacNgG~lRXc~XuPSzU6Cx4~msJWkzlcNJToTWcU-nCve7h6b13iQRtAuriA36g5cHhlpQVlyvshbsjKbVk9X97Ppwcc5AGju-OdkPoF3NMb~E8dQCmg__",
    title: "TOKYO BEAST",
    description1: "TOKYO",
    description2: "BEASTOKYO",
    description3: "BEAST",
    description4: "ALPHA M...",
  },
];

const EducationCardList: React.FC = () => {
  return (
    <div className="lg:mx-16  gap-1 mt-16">
      <div className="main grid grid-flow-col gap-20 mt-5 ">
        <div>
          <div className="flex ml-8 items-center gap-1 ">
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
          

          <div className=" edu flex gap-7 basis-[50%] mt-5">
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
                    <div className="flex gap-4">
                      <p>{data.description1}</p>
                      <p>{data.description2}</p>
                    </div>

                    <div className="flex gap-4">
                      <p>{data.description3}</p>
                      <p>|</p>
                      <p>{data.description4}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* pending */}

        <div>
          <div className="flex ml-8 items-center gap-1">
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

          <div className=" kol flex gap-7 basis-[50%] mt-5">
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
                    <div className="flex gap-4">
                      <p>{data.description1}</p>
                      <p>{data.description2}</p>
                    </div>

                    <div className="flex gap-4">
                      <p>{data.description3}</p>
                      <p>|</p>
                      <p>{data.description4}</p>
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
