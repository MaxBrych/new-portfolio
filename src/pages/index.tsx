import ProjectCard from "@/components/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import IconComponent from "@/components/SocialLink";
import { FiFigma, FiGithub } from "react-icons/fi";

import Hero from "@/components/Hero";
import NewsletterForm from "@/components/NewsletterForm";
import Navbar from "@/components/NavBar";
import { Inter } from "next/font/google";
import { Box, Container, useColorModeValue } from "@chakra-ui/react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const bg = useColorModeValue("#f7f7f7", "#0a0b0d");
  const border = useColorModeValue("blackAlpha.200", "whiteAlpha.200");
  const color = useColorModeValue("gray.700", "white");

  return (
    <>
      <Container
        pt={4}
        pb={8}
        maxW="full"
        className="p-0 md:px-24 md:py-16 "
        bg={bg}
        color={color}
      >
        <Navbar />
        <Box>
          {isVisible && (
            <motion.main
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.2 }}
              className={`${inter.className} grid w-full pb-6 md:p-6 min-h-screen grid-cols-4 grid-rows-4 gap-2 font-sans md:gap-4 md:grid-cols-12 md:grid-rows-3  `}
            >
              <Hero />
              <IconComponent
                href={"https://www.figma.com/@maxbrych"}
                Icon={FiFigma}
                color={"text-dark-50"}
              />
              <IconComponent
                href={"https://github.com/MaxBrych"}
                Icon={FiGithub}
                color={"text-dark-50"}
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
                  "https://cdn.discordapp.com/attachments/911904116782026772/1122930331733991514/App.png"
                }
                description={"Konzept und UI/UX Design"}
                cta={"Jetzt Testen"}
              />
              <ProjectCard
                link={"https://www.citydao.io/"}
                title={"CityDAO"}
                image={
                  "https://cdn.discordapp.com/attachments/911904116782026772/1122930331360710667/Web.png"
                }
                description={"Branding, Website Design und Entwicklung"}
                cta={"Zur Website"}
              />

              <NewsletterForm />
            </motion.main>
          )}
        </Box>
      </Container>
    </>
  );
}
