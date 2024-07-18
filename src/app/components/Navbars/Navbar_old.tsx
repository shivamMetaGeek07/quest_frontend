"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AppDispatch, persistor, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "@/redux/reducer/authSlice";
import { useRouter } from "next/navigation";
import {Dropdown,Avatar, DropdownItem,DropdownMenu, DropdownTrigger,Input,Badge,Button} from "@nextui-org/react"

interface NavbarProps
{
  toggleSlider: () => void;
}

const Navbar = () =>
{
  const dispatch = useDispatch<AppDispatch>();
  const router=useRouter();
  const [ isMenuOpen, setIsMenuOpen ] = useState( false );
  const [ drop, setDrop ] = useState( false );
  const [isClient, setIsClient] = useState(false);
  const data = useSelector( ( state: RootState ) => state.login?.user );
  const logoutClient = async () => {
    try {
      await dispatch(logoutUser()); // Dispatch the logout action and handle the promise
      await persistor.flush();      // Ensure state updates are saved to local storage
      localStorage.clear();        // Clear local storage
      router.push('/login');// Redirect to login page
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleClose = () =>
  {
    setDrop( false );
  };
  useEffect(() => {
    setIsClient(true); // Set the client flag to true on the client side
  }, []);

console.log("data",data)
  if (!isClient) return null;
  return (
    <nav className="bg-gray-900 border-gray-200 w-full overflow-hidden rounded-md sticky top-0 shadow " style={{ zIndex: 1000 }}>
      <div className="w-[95%] flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */ }
        <div>
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 "
              alt="Flowbite Logo"
              width={ 32 }
              height={ 32 }
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Fam Protocol
            </span>
        </Link>
        </div>
        {/* Notifications */}
        <div>
          <Badge content="99+" shape="circle" color="danger">
            <Button
              radius="full"
              isIconOnly
              aria-label="more than 99 notifications"
              variant="light"
            >
              <i className="bi bi-bell-fill text-white text-2xl"></i>
            </Button>
          </Badge>
        </div>

        {/* Navigation menu */ }
        <div
          className="items-center justify-between w-full md:flex md:w-auto md:order-1 hidden">
        {/* Search section*/ }
          <div className="flex relative "  >
              <Input
              classNames={{
              base: "max-w-full sm:max-w-[20rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
              }}
              placeholder="Type to search..."
              size="sm"
              startContent={<i className="bi bi-search text-lg"></i>}
              type="search"
              />
          </div>
          <ul className="flex items-center lg:ml-48 flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            <li className="text-center md:inline-block">
              <Link
                href="/feed"
                className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#338ef7] md:p-0 dark:text-white md:dark:hover:text-cyan-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Daily Feed
              </Link>
            </li>
            {data ? (
        <li className="text-center md:text-left">
            <Dropdown placement="bottom-end" className="bg-slate-800">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src={data?.image ? data.image : 'https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-man-wearing-glasses-is-wearing-colorful-background-image_2905240.jpg'}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2 font-bold">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">{data.email}</p>
            </DropdownItem>
            <DropdownItem key="logout" color="danger" onClick={logoutClient} className="bg-[#f31260] text-white" >
              <div className="font-bold text-white text-center">Logout</div>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        </li>
      ) : (
        <li className="text-center md:text-left">
          <Link
            href="/login"
            className="block py-2 px-3 rounded md:bg-transparent md:p-0"
            aria-current="page"
          >
            Login
          </Link>
        </li>
      )}
         
    
          </ul>
        </div>

        {/* Menu toggle button */ }
        <div className="order-5">
          <button
            onClick={ () => setDrop( ( prev ) => !prev ) }
            className="inline-flex items-center p-2 w-10 h-10 justify-center font-bold text-3xl text-white rounded-lg  hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded={ isMenuOpen }
          >
            <span className="sr-only">Open main menu</span>
            <i className="bi bi-box-arrow-left"></i>
          </button>
        </div>

        {/* Pop up */ }
        <div
          className={ `fixed top-0 right-0 h-full w-64 bg-gray-900 rounded-md text-white transform ${ drop ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out z-100` }
        >
          {/* close button */}
          <div className="flex justify-end p-4">
            <button
              onClick={ handleClose }
              className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg w-8 h-8 flex justify-center items-center"
            >
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6.707 6.293a1 1 0 0 1 1.414 0L10 8.586l2.879-2.88a1 1 0 1 1 1.414 1.414L11.414 10l2.879 2.879a1 1 0 1 1-1.414 1.414L10 11.414l-2.879 2.879a1 1 0 1 1-1.414-1.414L8.586 10 5.707 7.121a1 1 0 0 1 0-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <ul className="flex flex-col justify-center items-center">
            <li className="flex justify-center items-center font-bold my-4 hover:text-cyan-500 md:hidden">
              <Link href="/feed">Daily Feed</Link>
            </li>
            { 
            data?
            (
              data.role==='kol'?
              (
              <>
                <li className="flex justify-center items-center font-bold my-4 hover:text-cyan-500">
                  <Link href="/kol/kols-profile">profile</Link>
                </li>
                <li className="flex justify-center items-center font-bold my-4 hover:text-cyan-500">
                  <Link href="/kol/create-community">create community</Link>
                </li>
                <li className="flex justify-center items-center font-bold my-4 hover:text-cyan-500 ">
                <Link href="/kol/my-community">My Community</Link>
                </li>
                <li className="flex justify-center items-center font-bold my-4 hover:text-cyan-500 ">
                  <Link href="/All-community">All Communities</Link>
                </li>
                
              </>
              ):
              (
              <>
                <li className="flex justify-center items-center font-bold my-4 hover:text-cyan-500">
                  <Link href="/user/profile">Profile</Link>
                </li>
                <li className="flex justify-center items-center font-bold my-4 hover:text-cyan-500">
                  <Link href="/user/my-community">My community</Link>
                </li>
                <li className="flex justify-center items-center font-bold my-4 hover:text-cyan-500">
                  <Link href="/user/leaderboard">Leaderboard</Link>
                </li>
                <li className="flex justify-center items-center font-bold my-4 hover:text-cyan-500">
                  <Link href="/user/rewards">Rewards</Link>
                </li>
                <li className="flex justify-center items-center font-bold my-4 hover:text-cyan-500">
                  <Link href="/user/rate-kols">Rank kols</Link>
                </li>
              </>
                
              )
            ): (
              <>
                <li className="flex justify-center items-center font-bold my-4 hover:text-cyan-500 ">
                    <Link href="#">Login</Link>
                </li>
               
              </>
            )
      }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
