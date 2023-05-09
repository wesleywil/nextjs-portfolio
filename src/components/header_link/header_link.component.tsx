import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

type HeaderLinkProps = {
  path: string;
  name: string;
  stiffness: number;
};

const HeaderLink = ({ path, name, stiffness }: HeaderLinkProps) => {
  const router = useRouter();
  return (
    <motion.li
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: stiffness,
        damping: 20,
      }}
      className={`${
        router.pathname === path
          ? "border-b border-[#f08c00] hover:border-[#ad6500]"
          : "hover:text-slate-400"
      }`}
    >
      <Link href={path}>{name}</Link>
    </motion.li>
  );
};

export default HeaderLink;
