import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <motion.div className="col-span-4 row-span-2 p-4 bg-white cursor-default md:p-6 md:row-span-1 rounded-3xl md:col-span-6">
      <Image
        width={96}
        height={96}
        src={
          "https://cdn.discordapp.com/attachments/911904116782026772/1102575083995803689/323686967_176874778361794_318219261891802310_n.jpg"
        }
        alt={""}
        className="w-16 h-16 mb-3 text-xl rounded-full bg-slate-300"
      />
      <h1 className="mb-1 text-2xl font-semibold tracking-tight md:mb-2 md:text-4xl text-dark-30">
        Hi, ich bin Max!
      </h1>
      <p className="text-base leading-5 md:leading-7 text-dark-10 md:text-xl">
        Ein Web Entwickler und Designer aus Deutschland.
        <br /> Ich interessiere mich für Web3, KI Prompts und neue Technologien.
      </p>
    </motion.div>
  );
}
