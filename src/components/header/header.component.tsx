import { motion } from "framer-motion";
import HeaderLink from "../header_link/header_link.component";

const Header = () => {
  return (
    <header className="bg-black h-20 flex flex-wrap justify-center items-center text-[#faffff]">
      <ul className="self-center flex gap-4 md:text-xl list-none">
        <HeaderLink path="/" name="Home" stiffness={100} />
        <HeaderLink path="/projects" name="Projects" stiffness={150} />
        <HeaderLink path="/skills" name="Skills" stiffness={200} />
        <HeaderLink path="/about" name="About" stiffness={250} />
        <HeaderLink path="/contact" name="Contact" stiffness={300} />
      </ul>
    </header>
  );
};
export default Header;
