// layout/MainLayout.
"use client";
import { usePathname } from 'next/navigation';
import Navbar from '../Navbars/Navbar';
import AdminNavbar from '../Navbars/AdminNavbar';
import Footer from '../Footer';
import KolNavbar from '../Navbars/KolNavbar';


const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}> ) => {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith('/admin');
  const isKolRoute = pathname.startsWith('/kol');

  console.log(isAdminRoute, isKolRoute);

  return (
    <div>
      {isAdminRoute ? (<AdminNavbar />): (isKolRoute ? <KolNavbar /> : <Navbar />)}
      <main className='min-h-screen'>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
