import { motion } from "framer-motion";

type SkillStickProps = {
  on: boolean;
  duration: number;
};

const SkillStick = ({ on, duration }: SkillStickProps) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        duration: duration,
        type: "tween",
      }}
      className={`w-4 h-12 ${
        on ? "bg-[#0a586d]" : "bg-[#062730]"
      } dot_pattern2`}
    ></motion.div>
  );
};

export default SkillStick;
