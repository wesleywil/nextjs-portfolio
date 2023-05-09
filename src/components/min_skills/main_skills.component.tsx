import SkillStick from "../skill_stick/skill_stick.component";

const MainSkills = () => {
  return (
    <>
      <h1 className="mt-2 text-center md:text-left text-slate-400 text-sm border-b">
        MAIN
      </h1>
      <div className="p-2 flex flex-col md:flex-row flex-wrap justify-center items-center">
        <h1 className="self-center">Frontend</h1>
        <div className=" flex gap-1 pt-2 px-2">
          <SkillStick on={true} duration={0.1} />
          <SkillStick on={true} duration={0.2} />
          <SkillStick on={true} duration={0.3} />
          <SkillStick on={true} duration={0.4} />
          <SkillStick on={true} duration={0.5} />
        </div>
        <h1 className="self-center">Backend</h1>
        <div className="flex gap-1 pt-2 px-2">
          <SkillStick on={true} duration={0.1} />
          <SkillStick on={true} duration={0.2} />
          <SkillStick on={true} duration={0.3} />
          <SkillStick on={true} duration={0.4} />
          <SkillStick on={false} duration={0.5} />
        </div>
      </div>
    </>
  );
};

export default MainSkills;
