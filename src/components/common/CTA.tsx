import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

export default function CTA({ cta, href }: any) {
  return (
    <div className="flex-shrink-0">
      <Link
        href={href}
        className="flex items-center justify-between gap-2 py-2 pl-5 pr-2 text-sm font-bold tracking-tight transition-all duration-150 rounded-full cursor-pointer md:text-base h-11 md:gap-3 bg-dark-95 hover:bg-dark-90"
      >
        {cta} <FiArrowUpRight className="w-8 h-8 p-1 rounded-full bg-cyan-70" />
      </Link>
    </div>
  );
}
