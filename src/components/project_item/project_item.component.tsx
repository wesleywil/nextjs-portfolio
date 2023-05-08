import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

type ProjectItemProps = {
  img_url: string;
  title: string;
  tech: string;
  description: string;
  git_link: string;
  unoptimized: boolean;
};

const ProjectItem = ({ ...item }: ProjectItemProps) => {
  return (
    <div className="px-2 flex flex-col xl:flex-row gap-2">
      <Image
        src={item.img_url}
        width={600}
        height={300}
        sizes="(max-width: 640px) 300px"
        alt={item.title + " project"}
        className="mx-auto rounded"
        unoptimized={item.unoptimized}
      />
      <div className="mx-auto self-center ">
        <h1 className="text-2xl">{item.title}</h1>
        <h2 className="w-fit mx-auto px-2 text-slate-300 text-xs border-x">
          {item.tech}
        </h2>
        <p className="md:w-[30rem] p-2 text-center">{item.description}</p>
        <div className="mt-4 flex justify-center text-3xl">
          <Link href={item.git_link} target="_blank">
            <FaGithub />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
