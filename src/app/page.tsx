import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex gap-10 w-full justify-center pt-20 px-10">
        <div className="bg-blue-700 w-full h-48 flex items-center justify-center">
          Box 1
        </div>
        <div className="bg-blue-700 w-full h-48 flex items-center justify-center">
          Box 2
        </div>
        <div className="bg-blue-700 w-full h-48 flex items-center justify-center">
          Box 3
        </div>
      </div>
    </>
  );
}
