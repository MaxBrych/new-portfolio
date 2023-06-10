import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

export default function CTA({ cta, href }: any) {
  return (
    <div className="flex-shrink-0">
      <Link
        href={href}
        className="inline-flex items-center justify-between gap-2 py-2 pl-4 pr-2 text-xs font-bold tracking-tight transition-all duration-150 rounded-full cursor-pointer md:pl-5 h-9 md:text-base md:h-11 md:gap-3 bg-dark-95 hover:bg-cyan-70"
      >
        {cta}{" "}
        <FiArrowUpRight className="w-6 h-6 p-1 rounded-full md:w-8 md:h-8 bg-cyan-70" />
      </Link>
    </div>
  );
}
