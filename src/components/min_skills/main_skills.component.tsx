import { FaStar } from "react-icons/fa";

const MainSkills = () => {
  return (
    <>
      <h1 className="mt-2 text-center md:text-left text-slate-400 text-sm border-b">
        MAIN
      </h1>
      <div className="p-2 flex flex-col md:flex-row flex-wrap justify-center items-center">
        <h1 className="self-center">Frontend</h1>
        <div className=" flex gap-1 pt-2 px-2">
          <div className="w-4 h-12  bg-[#0a586d] dot_pattern2"></div>
          <div className="w-4 h-12  bg-[#0a586d] dot_pattern2"></div>
          <div className="w-4 h-12  bg-[#0a586d] dot_pattern2"></div>
          <div className="w-4 h-12  bg-[#0a586d] dot_pattern2"></div>
          <div className="w-4 h-12  bg-[#0a586d] dot_pattern2"></div>
        </div>
        <h1 className="self-center">Backend</h1>
        <div className="flex gap-1 pt-2 px-2">
          <div className="w-4 h-12  bg-[#0a586d] dot_pattern2"></div>
          <div className="w-4 h-12  bg-[#0a586d] dot_pattern2"></div>
          <div className="w-4 h-12  bg-[#0a586d] dot_pattern2"></div>
          <div className="w-4 h-12  bg-[#0a586d] dot_pattern2"></div>
          <div className="w-4 h-12  bg-[#062730] dot_pattern2"></div>
        </div>
      </div>
    </>
  );
};

export default MainSkills;
