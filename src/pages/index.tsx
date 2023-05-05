import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

import { roboto700 } from "@/fonts/fonts";

export default function Home() {
  return (
    <main
      className={`flex flex-col items-center justify-center gap-2 text-[#faffff] text-center ${roboto700.className}`}
    >
      <div className="flex flex-col gap-0">
        <h1 className="text-[8rem]">
          {" "}
          <span className="text-outline">Wesley</span>{" "}
          <span className="text-transparent text-outline">Wilson</span>
        </h1>
        <h2 className="flex gap-2 justify-center leading-3 text-[3rem] text-[#f08c00]">
          <span className="text-transparent text-outline-sub">FullStack</span>
          <span>Developer</span>
        </h2>
        <a
          href="https://github.com/wesleywil"
          target="_blank"
          className="mx-auto mt-12 text-6xl rounded-full"
        >
          <FaGithub />
        </a>
      </div>
    </main>
  );
}
