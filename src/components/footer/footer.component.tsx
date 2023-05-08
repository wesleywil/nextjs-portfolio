import Link from "next/link";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-black h-20 flex flex-wrap justify-center items-center text-[#faffff]">
      <div className="self-center flex flex-col items-center justify-center gap-2">
        <h1 className="text-sm text-slate-400">Created by Wesley Wilson</h1>
      </div>
    </footer>
  );
};

export default Footer;
