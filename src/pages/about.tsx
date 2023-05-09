import { motion } from "framer-motion";
import { roboto400 } from "@/fonts/fonts";

export default function About() {
  return (
    <main
      className={`flex flex-col items-center justify-center gap-2 text-center ${roboto400.className}`}
    >
      <div className="flex flex-col gap-2 text-[#faffff] text- md:text-2xl">
        <h1 className="mt-2 text-6xl md:text-7xl  font-bold">
          {" "}
          <span className="text-[#f08c00]">A</span>bout{" "}
          <span className="text-[#f08c00]">M</span>e
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
            I&apos;m a Full-Stack Developer located in Brazil, I love technology
            and art, especially when we can combine both, like beautiful sites,
            digital paintings and 3d modeling.
          </motion.p>
          <motion.p
            initial={{ y: -180 }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 20,
            }}
            className="p-2"
          >
            I&apos;m always trying to improve myself by everyday becoming a
            little better, I love to learn new tech and challenge myself with
            frameworks and programming languages.I really Love music, I&apos;m
            Fan of Football(Soccer), E-sports, animes, comics, and mangas.
          </motion.p>
          <motion.p
            initial={{ y: -180 }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 20,
            }}
            className="p-2"
          >
            Interested in front-end and backend, working right now in personal
            projects, but always ready for a new challenge in my starting
            career.
          </motion.p>
        </div>
      </div>
    </main>
  );
}
