import DbSkills from "../db_skills/db_skills.component";
import MainSkills from "../min_skills/main_skills.component";
import PlSkills from "../pl_skills/pl_skills.component";

const SkillPanel = () => {
  return (
    <div className="w-[20rem] md:w-[50rem] xl:w-[60rem] h-96 p-2 mx-auto overflow-y-auto">
      <div className="flex flex-col items-center">
        <div className="m2-8 text-xl">
          <MainSkills />
          <PlSkills />
          <DbSkills />
        </div>
      </div>
    </div>
  );
};

export default SkillPanel;
