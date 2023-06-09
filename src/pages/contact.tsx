import { motion } from "framer-motion";

import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

import { roboto400, lora } from "@/fonts/fonts";

export default function Contact() {
  return (
    <main
      className={`flex flex-col items-center justify-center gap-2 text-center ${roboto400.className}`}
    >
      <div className="flex flex-col gap-2 text-[#faffff] text-xl md:text-2xl">
        <h1 className="mt-2 text-6xl md:text-7xl  font-bold">
          <span className="text-[#f08c00]">C</span>ontact
        </h1>
        <div className="h-12 mt-2 flex justify-center"></div>
        <div className="mx-auto w-11/12 xl:w-1/2 flex flex-col gap-2 items-center text-center ">
          <motion.p
            initial={{ y: -180 }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 20,
            }}
            className="p-2"
          >
            I&apos;m interested in any good oportunity that can make me a better
            developer, looking for new experiences and ways to grows as a
            professional, don&apos;t hesitate to contact me.
          </motion.p>
        </div>
        <div className={`flex flex-col gap-2 ${lora.className}`}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 20,
            }}
            className="flex flex-col items-center"
          >
            <FaWhatsapp className="bg-[#faffff] text-[#062730] text-4xl md:text-6xl rounded-xl" />
            <span>+55 (11) 95197-1816</span>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 20,
            }}
            className="flex flex-col items-center"
          >
            <AiOutlineMail className="bg-[#faffff] text-[#062730] text-4xl md:text-6xl rounded-xl" />
            wesleywilsonti@gmail.com
          </motion.div>
        </div>
      </div>
    </main>
  );
}
