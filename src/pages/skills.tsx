import { useState } from "react";
import { TbHandFinger } from "react-icons/tb";

import { roboto400 } from "@/fonts/fonts";
import SkillPanel from "@/components/skills_panel/skills_panel.component";

export default function Skills() {
  const [hidden, setHidden] = useState(true);
  return (
    <main
      className={`flex flex-col items-center justify-center gap-2 text-center ${roboto400.className}`}
    >
      <div className="flex flex-col gap-2 text-[#faffff] text-2xl">
        <h1 className="text-7xl  font-bold">
          {" "}
          <span className="text-[#f08c00]">S</span>kills{" "}
        </h1>
        <div className="mx-auto xl:w-1/2 text-center ">
          {hidden ? (
            <div className="w-full h-[12rem]	flex flex-col gap-2 items-center border">
              <p className="self-center">
                I create amazing web apps that are fast and easy to use. The
                main technologies used in my apps are Html, CSS, Javascript to
                Front-end and manly Python to Back-end.
              </p>
              <p className="self-center">
                I like to experience with other tech as well, that's why I'm
                using nowadays Tauri an amazing framework to create desktop apps
                using rust as the backend language and reactjs at the Front-end.
              </p>
            </div>
          ) : (
            <SkillPanel />
          )}

          <div className="h-24 mt-2 flex justify-center">
            <button
              onClick={() => setHidden(!hidden)}
              className="text-4xl hover:text-5xl rotate-[-25deg] transition duration-700 ease-in"
            >
              <TbHandFinger />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
