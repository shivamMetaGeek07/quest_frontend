"use client";
import React, { useEffect, useState,useMemo } from "react";
import { useRouter } from "next/navigation";
import "./profile.css";
import { BallTriangle } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import ModalForm from "../../components/ModalForm";
import { fetchUserData } from "@/redux/reducer/authSlice";
import {Pagination, ChipProps,Table,Button, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue} from "@nextui-org/react";
import {columns, friends} from "./data";

type BadgesData = {
  id: number;
  title: string;
  imageUrl: string;
};
type Friend = typeof friends[0];
interface StarDisplayProps {
  cellValue: number;
}
const BadgesData: BadgesData[] = [
    {
      id: 1,
      title: "Badges earn",
      imageUrl:
        "https://i.pinimg.com/originals/88/ea/0a/88ea0a1c3c448867bb7133692c5c6682.png",
    },
    {
      id: 2,
      title: "Badges earn",
      imageUrl:
        "https://antonia.lv/images/izsole79/staba-bataljona-zetons_511_xl.jpg",
    },
    {
      id: 3,
      title: "Badges earn",
      imageUrl:
        "https://i.pinimg.com/originals/88/ea/0a/88ea0a1c3c448867bb7133692c5c6682.png",
    },
    {
      id: 4,
      title: "Badges earn",
      imageUrl:
        "https://antonia.lv/images/izsole79/staba-bataljona-zetons_511_xl.jpg",
    },
    {
      id: 5,
      title: "Badges earn",
      imageUrl:
        "https://i.pinimg.com/originals/88/ea/0a/88ea0a1c3c448867bb7133692c5c6682.png",
    },
    {
      id: 6,
      title: "Badges earn",
      imageUrl:
        "https://antonia.lv/images/izsole79/staba-bataljona-zetons_511_xl.jpg",
    },
];

const StarDisplay: React.FC<StarDisplayProps> = ({ cellValue }) => {
  const stars: JSX.Element[] = [];

  for (let i = 0; i < cellValue; i++) {
    stars.push(<i key={i} className="bi bi-star-fill text-yellow-400 "></i>);
  }

  return <div className="flex flex-row justify-center gap-1 items-center">{stars}</div>;
};

const Profile: React.FC = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [earned, setEarned] = useState<number | null>(null);
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;
  const pages = Math.ceil(friends.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return friends.slice(start, end);
  }, [page, friends]);

  const dispatch=useDispatch<AppDispatch>();
  const handleEarnRewardsClicks = () => {
    if (earned === null) {
      const earnedAmount: number = 5000;
      setEarned(earnedAmount);
    } else {
      setEarned(null);
    }
  };
  const user=useSelector((state:RootState)=>state.login.user)
  useSelector( ( state: RootState ) => console.log( state) )
  
  const handleEarnRewardsClick = () => {
    router.push("/");
  };
 
  const handleEarnRewardsClickss = () => {
    router.push("/user/leaderboard");
  };

  const renderCell = React.useCallback((user: Friend, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof Friend];

    switch (columnKey) {
      case "sno":
      return (
        <div className="capitalize w-[40%] mx-auto ">
          <span className="lvl text-end text-xl">#{user.id}</span>
        </div>
      )
      case "name":
        return (
          <div className="capitalize w-[40%] mx-auto">
          <User
            avatarProps={{radius: "md", src: user.avatar}}
            name={cellValue}
          >
          </User>
        </div>
        );
      case "stars":
        return (
          <StarDisplay
            cellValue={cellValue as number}
          />
        );
      case "xps":
        return (
          <div className="capitalize flex gap-2 items-center justify-center">
            <div><span className="user-leaderboard-text">Xps: </span><span>{ cellValue}</span></div>
            <div><span className="lvl"> - LVL: {user.level}</span></div>
          </div>
        )
      case "fampoints":
        return (
          <div className="capitalize flex items-center justify-center ">
            <span className="user-leaderboard-text">Fampoints: </span><span>{ cellValue}</span>
          </div>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
               eye
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                edit
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
delete
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  useEffect(() => {
    setIsClient(true); // Set the client flag to true on the client side

    dispatch(fetchUserData())
    }, [dispatch]);

  if (!isClient) return (
    <div className="flex justify-center h-screen items-center">
    <BallTriangle/>
    </div>
  );

  return (
    <>
    <div className="min-h-screen mb-8">
      <div className="w-[85%] mx-auto">
        {/* user info */}
        <section className="mt-20">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between lg:mt-20 mx-4 lg:mx-10">
          {/* user info */}
          <div className="lg:w-1/2">
            <div className="flex flex-col lg:flex-row items-center ">
            <div className="w-2/5 flex flex-col justify-center items-center">
              <div className="flex justify-center items-center">
                 {user?(<img
                src={user.image}
                alt="avatar photo"
                width={200}
                height={200}
                className="bottom-trapezium mt-8"
              />):(<img
                src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1719532800&semt=ais_user"
                alt="avatar photo"
                width={200}
                height={200}
                className="bottom-trapezium mt-8"
              />)
            }
              </div>
              
            </div>
              <div className="w-3/5 flex lg:justify-start justify-center mt-6 lg:mt-1 items-center">
                <div className="flex flex-col justify-between items-center"> 
                  <div className="flex justify-start gap-5 row">
                    <span className="username">
                      {user?.displayName}
                    </span>
                    <span className="user-rank" >
                        {/* Follow */}
                        #{user?.rank}
                    </span>
                  </div>
                  <div className="flex flex-row gap-2 my-2 justify-start items-center">
                    <div className="box1 right-trapezium ">
                    <svg className="box2 right-trapezium " xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <path d="M12.5736 2.125H14.7461L10.0003 7.52604L15.5834 14.875H11.2115L7.78815 10.4175L3.87035 14.875H1.69577L6.7724 9.09854L1.41669 2.125H5.89902L8.99444 6.19933L12.5736 2.125ZM11.8115 13.5802H13.0156L5.24452 3.35183H3.95252L11.8115 13.5802Z" fill="white"/>
                    </svg>
                  </div>
                  <div className="box1 left-right-trapezium" >
                    <svg className="box2 left-right-trapezium" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <path d="M13.6496 3.77537C12.7075 3.3362 11.6875 3.01745 10.625 2.83328C10.6157 2.83299 10.6064 2.83473 10.5978 2.83841C10.5893 2.84208 10.5816 2.84758 10.5754 2.85453C10.4479 3.08828 10.2991 3.39287 10.2 3.62662C9.07302 3.45662 7.92694 3.45662 6.79998 3.62662C6.70081 3.38578 6.55206 3.08828 6.41748 2.85453C6.4104 2.84037 6.38915 2.83328 6.3679 2.83328C5.3054 3.01745 4.29248 3.3362 3.34331 3.77537C3.33623 3.77537 3.32915 3.78245 3.32206 3.78953C1.3954 6.67245 0.864148 9.47745 1.12623 12.2541C1.12623 12.2683 1.13331 12.2825 1.14748 12.2895C2.42248 13.2245 3.6479 13.7912 4.85915 14.1666C4.8804 14.1737 4.90165 14.1666 4.90873 14.1525C5.19206 13.7629 5.44706 13.352 5.66665 12.92C5.68081 12.8916 5.66665 12.8633 5.63831 12.8562C5.23456 12.7004 4.85206 12.5162 4.47665 12.3037C4.44831 12.2895 4.44831 12.247 4.46956 12.2258C4.54748 12.1691 4.6254 12.1054 4.70331 12.0487C4.71748 12.0345 4.73873 12.0345 4.7529 12.0416C7.18956 13.1537 9.81748 13.1537 12.2258 12.0416C12.24 12.0345 12.2612 12.0345 12.2754 12.0487C12.3533 12.1125 12.4312 12.1691 12.5091 12.2329C12.5375 12.2541 12.5375 12.2966 12.5021 12.3108C12.1337 12.5304 11.7441 12.7075 11.3404 12.8633C11.3121 12.8704 11.305 12.9058 11.3121 12.927C11.5387 13.3591 11.7937 13.77 12.07 14.1595C12.0912 14.1666 12.1125 14.1737 12.1337 14.1666C13.3521 13.7912 14.5775 13.2245 15.8525 12.2895C15.8666 12.2825 15.8737 12.2683 15.8737 12.2541C16.1854 9.04537 15.3566 6.26162 13.6779 3.78953C13.6708 3.78245 13.6637 3.77537 13.6496 3.77537ZM6.03498 10.5612C5.3054 10.5612 4.69623 9.88828 4.69623 9.05953C4.69623 8.23078 5.29123 7.55787 6.03498 7.55787C6.78581 7.55787 7.38081 8.23787 7.37373 9.05953C7.37373 9.88828 6.77873 10.5612 6.03498 10.5612ZM10.9721 10.5612C10.2425 10.5612 9.63332 9.88828 9.63332 9.05953C9.63332 8.23078 10.2283 7.55787 10.9721 7.55787C11.7229 7.55787 12.3179 8.23787 12.3108 9.05953C12.3108 9.88828 11.7229 10.5612 10.9721 10.5612Z" fill="#8C71FF"/>
                    </svg>
                  </div>
                  <div className="box1 left-trapezium">
                  <svg className="box2 left-trapezium" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <g clip-path="url(#clip0_213_2492)">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.40967 0.295777C3.95975 0.717526 2.67072 1.56676 1.71099 2.73255C0.751252 3.89834 0.165424 5.32648 0.0300293 6.83042H3.4586C3.65736 4.54191 4.32089 2.31799 5.4086 0.294706L5.40967 0.295777ZM3.4586 8.16971H0.0300293C0.165141 9.6737 0.750718 11.102 1.71027 12.268C2.66981 13.4339 3.95872 14.2834 5.4086 14.7054C4.32089 12.6821 3.65736 10.4582 3.4586 8.16971ZM7.12717 14.9915C5.82731 12.9316 5.03081 10.5946 4.80217 8.16971H10.1968C9.96817 10.5946 9.17167 12.9316 7.87182 14.9915C7.62375 15.0035 7.37524 15.0035 7.12717 14.9915ZM9.59146 14.7043C11.0412 14.2824 12.33 13.4331 13.2895 12.2673C14.249 11.1016 14.8347 9.67351 14.97 8.16971H11.5415C11.3427 10.4582 10.6792 12.6821 9.59146 14.7054V14.7043ZM11.5415 6.83042H14.97C14.8349 5.32643 14.2493 3.89815 13.2898 2.73216C12.3302 1.56618 11.0413 0.716705 9.59146 0.294706C10.6792 2.31798 11.3427 4.5419 11.5415 6.83042ZM7.12717 0.00863426C7.37559 -0.00352913 7.62446 -0.00352913 7.87289 0.00863426C9.17237 2.06857 9.9685 4.40557 10.1968 6.83042H4.80324C5.03574 4.39078 5.83396 2.05185 7.12717 0.00863426Z" fill="#FA00FF"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_213_2492">
                          <rect width="15" height="15" fill="white"/>
                        </clipPath>
                      </defs>
                  </svg>
                  </div>
                  </div>
                  </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center mt-4">
            <div className="lg:w-2//5">
              <div className="">
              <div className="flex row  items-center justify-center">
                <div>
                  <ModalForm/>
                </div> 
              </div>
              <div className="flex row gap-3">
                <button className="px-4 font-bold py-2 rounded-full text-center hover:text-[#FA00FF] ">123 following</button>
                <button className="px-4 font-bold py-2 rounded-full text-center hover:text-[#FA00FF] ">24 followers</button>
              </div>
            
            <div className="flex col gap-5 justify-center items-center">
              <Chip onClick={handleEarnRewardsClicks} color="warning" variant="bordered" className="cursor-pointer px-4 py-2 mt-3">200 pts</Chip>
              
               <Chip onClick={handleEarnRewardsClick} variant="solid" className="cursor-pointer px-4 py-2 mt-3" color="warning">
                  Earn rewards
                </Chip>
            </div>
            </div>
            </div>
            <div></div></div>
          </div>
          {/* badges */}
          <div className="lg:w-1/2 ">
            <div className="flex flex-col lg:justify-start justify-center lg:items-start items-center">
              {/* <svg className="top-0 left-0" style={{strokeWidth: "1px",stroke: "#FFF"}} xmlns="http://www.w3.org/2000/svg" width="135" height="51" viewBox="0 0 135 51" fill="none">
                <path d="M134 1L96.0755 39.3478H19.3836L8.84906 50H0" stroke="url(#paint0_linear_213_1475)" stroke-opacity="0.1"/>
                <defs>
                <linearGradient id="paint0_linear_213_1475" x1="11" y1="50" x2="16.5" y2="38" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white"/>
                  <stop offset="1" stop-color="#999999" stop-opacity="0"/>
                </linearGradient>
                </defs>
              </svg>
              <svg className="top-0 left-0" style={{strokeWidth: "1px",stroke: "rgba(255, 255, 255, 0.10)"}} xmlns="http://www.w3.org/2000/svg" width="127" height="27" viewBox="0 0 127 27" fill="none">
                <path d="M126.5 1L114 13.5H23L10.5 26H0" stroke="white" stroke-opacity="0.1"/>
              </svg> */}
              {/* <div className="flex items-end justify-end ">
              <button onClick={()=>{
                router.push('/user/rewards')
              }} className="bg-blue-600 rounded-full px-2 py-1 text-sm font-bold">
                View all
              </button>
              </div> */}
              <div className="badgesBox">
                  <div className="bg-black flex lg:flex-row flex-wrap lg:justify-start justify-center items-center p-4 ">
                {BadgesData.map((data) => (
                  <div
                    key={data.id}
                    className="p-2 rounded-md flex items-center flex-col justify-center"
                  >
                  <div className="w-[2rem] h-[2rem] bg-white bottom-trapezium">
                    <img
                  src={data.imageUrl}
                  alt="badge photo"
                  className="w-full h-full  bg-cover object-cover"
                />
                </div>
                    <h1 className=" text-white font-medium">{data.title}</h1>
                  </div>
                ))}
              </div>
              </div>
              
            </div>
          </div>
        </div>
        </section>
        {/* friends  */}
         <section className="mt-32">
            <div className="my-4 flex items-center gap-2 justify-center">
              <div className="">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="11" viewBox="0 0 15 11" fill="none">
  <path d="M0.5 1H5.98652L14.5 10" stroke="#FA00FF" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.5 5L10.5 10" stroke="#FA00FF" stroke-linecap="round"/>
</svg>
              </div>
              <div className="listOfFriends">List of Friends</div>
            </div>
            <div className="friendTable">
              <Table hideHeader aria-label="Example table with custom cells" 
              
            bottomContent={
              <div className="flex w-full justify-center ">
                <Pagination
                  isCompact
                  showControls
                  showShadow
                  color="secondary"
                  page={page}
                  total={pages}
                  onChange={(page) => setPage(page)}
                  
                />
              </div>
            }
            classNames={{
              wrapper: "min-h-[222px] bg-black text-white",
            }}
            >
              <TableHeader columns={columns}>
                {(column) => (
                  <TableColumn key={column.uid} >
                    {column.name}
                  </TableColumn>
                )}
              </TableHeader>
              <TableBody items={items}>
                {(item) => (
                  <TableRow key={item.id} className="cursor-pointer" >
                    {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                  </TableRow>
                )}
              </TableBody>
              
            </Table>
            </div>
            
         </section>
        </div>
      </div>
    </>
  );
};
export default Profile;
