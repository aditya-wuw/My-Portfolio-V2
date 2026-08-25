import { useState } from "react";
import { motion } from "motion/react";
import { TbSourceCode } from "react-icons/tb";
import type { Variants } from "motion/react";
import type { JSX } from "react";
import { assets } from "@/Assets/assets";
const { ht } = assets;

interface props {
  User_color: string;
  Text_content: {
    title: string;
    content: string;
    by: string;
  };
}

const CallingCard = ({ User_color, Text_content }: props) => {
  const [flipped, setflipped] = useState(false);
  const fadeAnimation: Variants = {
    fade: (flipped: boolean) => ({
      opacity: flipped ? 1 : 0,
      transition: { duration: 0.2, ease: "easeInOut" },
    }),
  };

  const hueCycle: Variants = {
    cycle: {
      filter: [
        "hue-rotate(190deg)",
        "hue-rotate(270deg)",
        "hue-rotate(200deg)",
        "hue-rotate(190deg)", // Return to start for seamless loop
      ],

      x: [1, -1, 1, 0],
      y: [0, 1, -1, 0],
      transition: {
        filter: {
          duration: 0.6,
          repeat: Infinity,
        },
        x: { duration: 0.2, repeat: Infinity, ease: "linear" },
        y: { duration: 0.2, repeat: Infinity, ease: "linear" },
      },
    },
  };

  const sizes: Array<string> = [
    "lg:w-190 lg:h-190 w-85 h-85",
    "lg:w-170 lg:h-170 w-75 h-75",
    "lg:w-150 lg:h-150 w-65 h-65",
    "lg:w-130 lg:h-130 w-55 h-50",
    "lg:w-100 lg:h-100 w-45 h-45",
    "lg:w-80 lg:h-80 w-30 h-30",
  ];

  let content: JSX.Element | null = null;

  const color: string = User_color;
  const Text = Text_content;

  for (let i = sizes.length - 1; i >= 0; i--) {
    content = (
      <div
        key={i}
        className={`rounded-full flex justify-center items-center absolute ${i % 2 === 0 ? color : "bg-black"} ${sizes[i]} z-[${i}]`}
      >
        {content}
      </div>
    );
  }

  const FrontFace: JSX.Element = (
    <motion.div
      className="lg:w-120 lg:h-75 w-80 h-50 relative flex justify-center items-center bg-black overflow-hidden select-none rounded-2xl group"
      custom={!flipped}
      variants={fadeAnimation}
      animate={"fade"}
    >
      <span className="P5titlefont rotate-15 absolute top-5 left-5 text-4xl text-white z-20 group-hover:opacity-100 opacity-0 max-lg:opacity-100 transition duration-200 ease-in-out">
        Tap ?
      </span>
      {content}
      <motion.img
        src={String(ht)}
        alt="theves"
        className="w-fit lg:w-70 lg:h-fit h-40 absolute z-10 md:top-0 top-3 hue-rotate-200"
        variants={hueCycle}
        animate="cycle"
      />
    </motion.div>
  );

  const backface: JSX.Element = (
    <motion.div
      className="lg:w-120 lg:h-75 w-80 h-50 relative flex justify-center items-center bg-black overflow-hidden select-none rounded-2xl"
      custom={flipped}
      variants={fadeAnimation}
      animate={"fade"}
    >
      {content}
      <section className="absolute P5titlefont text-white text-center mx-3">
        <h1 className="lg:text-6xl text-3xl">{Text.title}</h1>
        <p className="lg:text-2xl text-xl lg:mt-3 mt-1">{Text.content}</p>
        <div className="group/source w-full flex justify-center relative">
          <a
            target="_blank"
            href="https://github.com/aditya-wuw/Null-V2-Portfolio-/blob/master/src/components/Animated/CallingCard.tsx"
          >
            <TbSourceCode size={18} color={"lightblue"} />
            <span
              className={`font-sans font-medium absolute group-hover/source:opacity-100 opacity-0 duration-200 ease-in-out p-2 rounded-2xl -top-10 dark:bg-white dark:text-black bg-black text-white`}
            >
              View source code
            </span>
          </a>
        </div>
        <div className="text-end">
          <h1 className="lg:pr-25 pr-10 lg:text-4xl text-lg ">From</h1>
          <h1 className="lg:text-4xl text-2xl mr-2">{Text.by}</h1>
        </div>
      </section>
    </motion.div>
  );

  return (
    <div>
      <motion.div
        className="mx-2 flex flex-col gap-2 relative cursor-pointer"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateX: flipped ? 180 : 0 }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        onClick={() => setflipped(!flipped)}
      >
        <div className="backface-hidden">{FrontFace}</div>
        {
          <div className="absolute rotate-x-180 backface-hidden">
            {backface}
          </div>
        }
      </motion.div>
    </div>
  );
};

export default CallingCard;
