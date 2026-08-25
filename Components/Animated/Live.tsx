import { motion } from "motion/react";

const Live = ({ status }: { status: string }) => {
  return (
    <button className="relative w-6 h-6  cursor-pointer" title={status}>
      <div className="bg-blue-600 w-2 h-2 rounded-full absolute top-3 left-2 z-10" />
      <motion.div
        className="bg-blue-300 w-full h-full rounded-full absolute top-1 z-1"
        animate={{ opacity: [0.8, 0.5, 0], scale: [0, 0.7, 0.7] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatDelay: 0.3,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />
    </button>
  );
};
export default Live;
