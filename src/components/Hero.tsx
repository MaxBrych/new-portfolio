import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <motion.div className="col-span-4 row-span-2 p-8 bg-white md:row-span-1 rounded-3xl md:col-span-6">
      <Image
        width={96}
        height={96}
        src={
          "https://cdn.discordapp.com/attachments/911904116782026772/1102264939546157186/Frame_94.jpg"
        }
        alt={""}
        className="w-16 h-16 mb-3 text-xl rounded-full bg-slate-300"
      />
      <h1 className="mb-2 text-2xl font-semibold tracking-tight md:text-4xl text-dark-30">
        Hi, ich bin Max!
      </h1>
      <p className="text-base text-dark-10 md:text-xl">
        Ein Teilzeit Entwickler und Designer aus Deutschland. Ich interessiere
        mich für Web3 und KI Prompts die meine Arbeit kreativer und produktiver
        machen.
      </p>
    </motion.div>
  );
}
