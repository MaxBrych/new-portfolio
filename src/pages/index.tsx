import Image from "next/image";
import { Inter } from "next/font/google";

import {
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import SocialLink from "@/components/SocialLink";
import IconComponent from "@/components/SocialLink";
import SocialWork from "@/components/SocialWork";
import { FiFigma, FiGithub } from "react-icons/fi";
import Neuland from "@/components/Neuland";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-start justify-between min-h-screen gap-4 p-4 font-sans text-gray-900 md:flex-row bg-slate-100 md:p-24">
        <div className="w-full h-full max-h-screen md:w-1/2">
          <div className="grid w-full h-full grid-cols-6 grid-rows-4 gap-2 md:gap-4">
            <div className="col-span-6 p-6 bg-white rounded-2xl">
              <Image
                src={""}
                alt={""}
                className="w-16 h-16 mb-3 text-xl rounded-full bg-slate-300"
              />
              <p className="text-base md:text-lg">
                Ich bin <b>Max</b>, ein Entwickler und Produkt Designer aus
                Deutschland. Ich interessiere mich für Web Entwicklung, Design,
                Web3 und AI.
              </p>
            </div>
            <IconComponent Icon={AiOutlineTwitter} />
            <IconComponent Icon={AiFillInstagram} />
            <IconComponent Icon={AiFillYoutube} />
            <SocialWork label={"Figma"} Icon={FiFigma} />
            <SocialWork label={"Code"} Icon={FiGithub} />
            <Neuland
              title={"NEULAND"}
              description={
                "A vision for a Solarpunk future and the Network State"
              }
              cta={"Jetzt Lesen"}
            />
          </div>

          <div>
            <div className=""></div>
            <div></div>
          </div>
        </div>
        <div className="w-full max-h-screen md:w-1/2 ">
          <div className="grid w-full h-full grid-cols-6 grid-rows-4 gap-2 md:gap-4">
            <div className="col-span-3 h-[33vh]  bg-white rounded-xl">01</div>
            <div className="flex col-span-3 bg-white rounded-xl md:flex-col">
              <div className="text-base md:text-4xl">Prive Wallet</div>
              <div>
                <Image
                  src={
                    "https://cdn.discordapp.com/attachments/911669935363752026/1101028555875426314/prive_project.png"
                  }
                  width={240}
                  height={240}
                  alt={"Prive Wallet"}
                />
              </div>
            </div>
            <div className="col-span-3 bg-white rounded-xl">01</div>
            <div className="flex col-span-3 bg-white rounded-xl md:flex-col">
              <div className="text-base md:text-4xl">CityDAO</div>
              <div>
                <Image
                  src={
                    "https://cdn.discordapp.com/attachments/911669935363752026/1101020330308423750/gitghubn.png"
                  }
                  width={240}
                  height={240}
                  alt={"Prive Wallet"}
                />
              </div>
            </div>
            <div className="col-span-6 bg-white rounded-xl">Subscrib</div>
          </div>
        </div>
      </main>
    </>
  );
}
