import Image from "next/image";
import { Inter } from "next/font/google";
import ProjectCard from "@/components/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import IconComponent from "@/components/SocialLink";
import { FiFigma, FiGithub } from "react-icons/fi";
import Neuland from "@/components/Neuland";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.main className="grid min-h-screen grid-cols-1 gap-4 p-4 font-sans text-gray-900 bg-slate-100 md:flex md:px-24 md:py-16">
          {" "}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.1 }}
            className="grid w-full h-full grid-cols-6 grid-rows-3 gap-2 md:w-1/2 md:gap-4 md:h-[90vh]"
          >
            <div className="col-span-6 row-span-1 p-6 bg-white rounded-3xl">
              <Image
                src={
                  "https://cdn.discordapp.com/attachments/911904116782026772/1102264939546157186/Frame_94.jpg"
                }
                alt={""}
                className="w-16 h-16 mb-3 text-xl rounded-full bg-slate-300"
              />
              <p className="text-base md:text-xl">
                Ich bin <b>Max</b>, ein Entwickler und Produkt Designer aus
                Deutschland. Ich interessiere mich für Web Entwicklung, Design,
                Web3 und AI.
              </p>
            </div>
            <IconComponent Icon={AiOutlineTwitter} />
            <IconComponent Icon={AiFillYoutube} />

            <Neuland
              title={"NEULAND"}
              description={
                "A vision for a Solarpunk future and the Network State"
              }
              cta={"Jetzt Lesen"}
            />
          </motion.div>
          <div>
            <div className=""></div>
            <div></div>
          </div>
          <div className="grid w-full h-full grid-cols-6 grid-rows-3 gap-2 md:w-1/2 md:gap-4 md:h-[90vh]">
            <IconComponent Icon={FiFigma} />
            <IconComponent Icon={FiGithub} />
            <ProjectCard
              title={"Prive Wallet"}
              image={
                "https://cdn.discordapp.com/attachments/911669935363752026/1101028555875426314/prive_project.png"
              }
              description={"Konzept und UI/UX Design"}
              cta={"Jetzt Testen"}
            />
            <ProjectCard
              title={"CityDAO"}
              image={
                "https://cdn.discordapp.com/attachments/911669935363752026/1101172686211793067/citydao_proect.png"
              }
              description={"Branding, Website Design und Entwicklung"}
              cta={"Zur Website"}
            />
          </div>
        </motion.main>
      )}
    </AnimatePresence>
  );
}
