import Link from "next/link";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-black h-20 flex flex-wrap justify-center items-center text-[#faffff]">
      <div className="self-center flex flex-col items-center justify-center gap-2">
        <Link
          href="https://github.com/wesleywil"
          target="_blank"
          className="text-3xl hover:text-[#f08c00] transition duration-500"
        >
          <FaGithub />
        </Link>
        <h1 className="mb-2">wesleywilsonti@gmail.com</h1>
      </div>
    </footer>
  );
};

export default Footer;
