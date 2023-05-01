import ProjectCard from "@/components/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import IconComponent from "@/components/SocialLink";
import { FiFigma, FiGithub } from "react-icons/fi";
import Neuland from "@/components/Neuland";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NewsletterForm from "@/components/NewsletterForm";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.main
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.2 }}
          className="grid min-h-screen grid-cols-4 grid-rows-4 gap-2 p-4 font-sans md:gap-4 md:grid-cols-12 md:grid-rows-3 text-dark-10 bg-dark-99 md:px-24 md:py-16"
        >
          <div className="absolute top-0 left-0 w-64 h-64 blob-gradient"></div>

          <Hero />
          <IconComponent
            href={"https://www.figma.com/@maxbrych"}
            Icon={FiFigma}
            color={"text-dark-30"}
          />
          <IconComponent
            href={"https://github.com/MaxBrych"}
            Icon={FiGithub}
            color={"text-dark-30"}
          />
          <IconComponent
            href={"https://twitter.com/MaxBrych"}
            Icon={AiOutlineTwitter}
            color={"text-cyan-50"}
          />
          <IconComponent
            href={""}
            Icon={AiFillYoutube}
            color={"text-red-400"}
          />
          <ProjectCard
            link={
              "https://www.figma.com/proto/f743L5gqSMreXM20tAaxwC/Prive-Wallet?page-id=765%3A2384&node-id=996%3A13757&viewport=241%2C48%2C0.14&scaling=scale-down&starting-point-node-id=996%3A13757"
            }
            title={"Prive Wallet"}
            image={
              "https://cdn.discordapp.com/attachments/911669935363752026/1101028555875426314/prive_project.png"
            }
            description={"Konzept und UI/UX Design"}
            cta={"Jetzt Testen"}
          />
          <ProjectCard
            link={"https://www.citydao.io/"}
            title={"CityDAO"}
            image={
              "https://cdn.discordapp.com/attachments/911669935363752026/1101172686211793067/citydao_proect.png"
            }
            description={"Branding, Website Design und Entwicklung"}
            cta={"Zur Website"}
          />
          {/* 
          <Neuland
            link={"https://www.citydao.io/"}
            title={"NEULAND"}
            description={"Visions for a Solarpunk future and the Network State"}
            cta={"Jetzt Lesen"}
          /> */}
          <NewsletterForm />
          <div className="w-64 h-64 blob-gradient"></div>
        </motion.main>
      )}
    </AnimatePresence>
  );
}
