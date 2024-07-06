import Navbar from "../components/Navbar";


 
export default function UserLayout ( {
  children,
}: Readonly<{
  children: React.ReactNode;
}> )
{
  return (
    <div>
        <Navbar/>
        <div>{ children }</div>
    </div>
  );
}
