import Image from "next/image";
import Community from "./component/Community";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      landing page
      <div>
        <Community/>
      </div>
    </main>
  );
}
