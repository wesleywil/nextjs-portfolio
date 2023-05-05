import { useState } from "react";

import MainButton from "../main_button/main_button.component";
import DbSkills from "../db_skills/db_skills.component";
import MainSkills from "../min_skills/main_skills.component";
import PlSkills from "../pl_skills/pl_skills.component";

const SkillPanel = () => {
  const [skills, setSkills] = useState("main" || "pl" || "db");
  return (
    <div className="w-fit h-[12rem] p-2 mx-auto  ">
      <div className="flex flex-col items-center">
        <div className="flex justify-center gap-2">
          <MainButton title="Main" onclick={() => setSkills("main")} />
          <MainButton
            title="Programming Language"
            onclick={() => setSkills("pl")}
          />
          <MainButton title="Database" onclick={() => setSkills("db")} />
        </div>
        <div className="mt-8 text-xl">
          {skills === "main" ? (
            <MainSkills />
          ) : skills === "pl" ? (
            <PlSkills />
          ) : skills === "db" ? (
            <DbSkills />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillPanel;
