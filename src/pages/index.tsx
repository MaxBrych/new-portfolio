import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-4 md:flex-row bg-slate-100 md:p-24 ">
      <div className="grid w-full h-full grid-cols-6 grid-rows-6">
        <div className="w-full h-full col-span-6 bg-white rounded-xl">01</div>
        <div></div>
      </div>
      <div className="w-full h-full col-span-6 bg-white rounded-xl">02</div>
    </main>
  );
}
