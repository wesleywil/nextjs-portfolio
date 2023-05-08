import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

import { roboto700 } from "@/fonts/fonts";

export default function Home() {
  return (
    <main
      className={`flex flex-col items-center justify-center gap-2 text-[#faffff] text-center ${roboto700.className}`}
    >
      <div className="flex flex-col items-center gap-0">
        <h1 className="mb-5 md:mb-0 text-5xl md:text-[8rem] flex gap-2">
          <span className="text-outline">Wesley</span>
          <span className="text-transparent text-outline">Wilson</span>
        </h1>
        <h2 className="md:mt-12 flex gap-2 justify-center leading-3 text-2xl md:text-[3rem] text-[#f08c00]">
          <span className="text-transparent text-outline-sub">FullStack</span>
          <span>Developer</span>
        </h2>
        <a
          href="https://github.com/wesleywil"
          target="_blank"
          className="mx-auto mt-4 md:mt-12 hover:text-[#f08c00] text-3xl md:text-6xl rounded-full transform duration-700 ease-in"
        >
          <FaGithub />
        </a>
      </div>
    </main>
  );
}
