import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <header className="bg-black h-20 flex flex-wrap justify-center items-center text-[#faffff]">
      <div className="self-center flex gap-2 md:text-2xl list-none">
        <li
          className={`${
            router.pathname === "/"
              ? "border-b border-[#f08c00] hover:border-[#ad6500]"
              : "hover:text-slate-400"
          }`}
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className={`${
            router.pathname === "/skills"
              ? "border-b border-[#f08c00] hover:border-[#ad6500]"
              : "hover:text-slate-400"
          }`}
        >
          <Link href="/skills">Skills</Link>
        </li>
        <li
          className={`${
            router.pathname === "/about"
              ? "border-b border-[#f08c00] hover:border-[#ad6500]"
              : "hover:text-slate-400"
          }`}
        >
          <Link href="/about">About</Link>
        </li>
        <li
          className={`${
            router.pathname === "/contact"
              ? "border-b border-[#f08c00] hover:border-[#ad6500]"
              : "hover:text-slate-400"
          }`}
        >
          <Link href="/contact">Contact</Link>
        </li>
      </div>
    </header>
  );
};
export default Header;
