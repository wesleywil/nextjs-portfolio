import { FaStar } from "react-icons/fa";

const MainSkills = () => {
  return (
    <div className="flex flex-wrap justify-center items-center p-2">
      <h1>Frontend</h1>
      <div className="flex gap-1 px-2">
        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />
      </div>
      <h1>Backend</h1>
      <div className="flex gap-1 px-2">
        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />
      </div>
    </div>
  );
};

export default MainSkills;
