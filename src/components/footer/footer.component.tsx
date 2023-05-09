import { motion, MotionConfig } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-black h-20 flex flex-wrap justify-center items-center text-[#faffff]">
      <div className="self-center flex flex-col items-center justify-center gap-2">
        <motion.h1
          whileHover={{ color: "#f08c00", scale: 0.9 }}
          className="text-sm text-slate-400"
        >
          Created by Wesley Wilson
        </motion.h1>
      </div>
    </footer>
  );
};

export default Footer;
