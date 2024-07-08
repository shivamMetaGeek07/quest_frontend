import Navbar from "../components/Navbar";
import { Providers } from "../provider";


 
export default function UserLayout ( {
  children,
}: Readonly<{
  children: React.ReactNode;
}> )
{
  return (
    <Providers> <div>
        <Navbar/>
        <div>{ children }</div>
    </div></Providers>
  );
}
