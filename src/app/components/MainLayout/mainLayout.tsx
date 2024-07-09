// layout/MainLayout.
"use client";
import { usePathname } from 'next/navigation';
import Navbar from '../Navbars/Navbar';
import AdminNavbar from '../Navbars/AdminNavbar';
import Footer from '../Footer';
import {NextUIProvider} from "@nextui-org/react";


const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}> ) => {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith('/admin');


  return (
    <div>
      <NextUIProvider>
      {isAdminRoute ? (<AdminNavbar />): <Navbar />}
      <main className='min-h-screen'>{children}</main>
      <Footer />
      </NextUIProvider>
    </div>
  );
};

export default MainLayout;
