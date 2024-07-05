import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AdminNavbar from '../../components/AdminNavbar'

const inter = Inter( { subsets: [ "latin" ] } );

export const metadata: Metadata = {
  title: "Quest",
  description: "Generated by create next app",
};

export default function AdminLayout ( {
  children,
}: Readonly<{
  children: React.ReactNode;
}> )
{
  return (
    <div>
        <AdminNavbar />
        <div className="md:px-28 py-10 bg-gray-900 text-white">
        { children }
        </div>
    </div>
    
  );
}
