"use client";
import {
  ArrowLeftIcon,
  ArrowLeftIconHandle,
  ArrowRightIcon,
  ArrowRightIconHandle,
  Check,
  TerminalIcon,
  TerminalIconHandle,
} from "@animateicons/react/lucide";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { NewsData } from "./newsData";

export default function News() {
  const [newsSeen, setnewsSeen] = useState(true);
  const [CurrentIndex, setCurrentIndex] = useState(0);
  const TopIconRef = useRef<TerminalIconHandle | null>(null);
  const ArrowRightIconRef = useRef<ArrowRightIconHandle | null>(null);
  const ArrowLeftIconRef = useRef<ArrowLeftIconHandle | null>(null);

  useEffect(() => {
    TopIconRef.current?.startAnimation();
    const hasSeen = async () => {
      const localValue = localStorage.getItem("seen");
      const seen = localValue ? (JSON.parse(localValue) as boolean) : false;
      setnewsSeen(seen);
    };
    if (!newsSeen) document.body.style.overflow = "hidden";
    const TimeOutSeen = setTimeout(() => hasSeen(), 500);

    return () => {
      clearTimeout(TimeOutSeen);
      document.body.style.overflow = "auto";
    };
  }, [newsSeen]);

  const handleClose = () => {
    setnewsSeen(true);
    localStorage.setItem("seen", JSON.stringify(true));
  };

  const onNext = (goBack: boolean) => {
    setCurrentIndex((prev) => {
      const Target = prev + (goBack ? -1 : 1);
      return Target < 0
        ? 0
        : Target >= NewsData.length
          ? NewsData.length - 1
          : Target;
    });
  };

  // if (newsSeen) return;
  return (
    <AnimatePresence mode="wait">
      {!newsSeen ? (
        <motion.div
          className="absolute w-full h-full bg-black/60 backdrop-blur-lg z-100 flex-center select-none"
          key={"pop-up"}
          initial={{ y: -1, opacity: 0 }}
          animate={{ y: 0, opacity: 100 }}
          exit={{ y: 1, opacity: 0 }}
          transition={{ ease: "circInOut", duration: 0.8, delay: 0.6 }}
        >
          <div className="mx-2 px-2 border dark:border-white/5 border-black/10 bg-white dark:bg-black dark:text-white text-black drop-shadow-sm rounded-2xl overflow-hidden">
            <div className="p-2 w-full h-100 xl:h-115 xl:w-140 flex flex-col gap-0 justify-between">
              <div className="h-7/8 w-full">
                <div className="flex items-center justify-between p-2 mb-2">
                  <motion.h1
                    className="font-semibold text-xl flex items-center gap-2"
                    key={"title"}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 100 }}
                    transition={{ ease: "circInOut", duration: 0.8 }}
                  >
                    <TerminalIcon ref={TopIconRef} size={30} duration={3} />
                    What&apos;s new
                  </motion.h1>
                </div>

                <motion.section
                  className="w-full h-2/6 my-2 xl:my-4 px-2"
                  key={`content-${CurrentIndex}-${NewsData[CurrentIndex].order}`}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 100 }}
                  transition={{ ease: "circInOut", duration: 0.8 }}
                >
                  <Image
                    src={NewsData[CurrentIndex].banner}
                    alt="banners"
                    width={1280}
                    height={720}
                    className="object-cover w-full h-9/8 outline-none rounded-2xl shadow-xl mask-x-from-60% mask-y-from-50%"
                    draggable={false}
                    loading="eager"
                  />
                </motion.section>
                <motion.section
                  className="py-5 px-2"
                  key={`text-${CurrentIndex}-${NewsData[CurrentIndex].order}`}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 100 }}
                  transition={{ ease: "backInOut", duration: 0.9, delay: 0.2 }}
                >
                  <h1 className="font-semibold xl:text-3xl text-xl">
                    {NewsData[CurrentIndex].title}
                  </h1>
                  <p className="mt-4 xl:text-[16px] text-sm">
                    {NewsData[CurrentIndex].description}
                  </p>
                </motion.section>
              </div>
              <section className="px-2 flex h-1/8 w-full justify-between">
                <div className="flex justify-between items-center gap-2 w-full">
                  <AnimatePresence mode="wait">
                    {CurrentIndex != 0 ? (
                      <motion.div
                        key={"left-button"}
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 100 }}
                        exit={{ x: -10, opacity: 0 }}
                        transition={{ ease: "circInOut", duration: 0.8 }}
                      >
                        <ArrowLeftIcon
                          ref={ArrowLeftIconRef}
                          onClick={() => {
                            ArrowLeftIconRef.current?.startAnimation();
                            onNext(true);
                          }}
                        />
                      </motion.div>
                    ) : (
                      <div className="w-5" />
                    )}
                  </AnimatePresence>
                  <div className="flex gap-1.5">
                    {NewsData.map((item, index) => (
                      <div key={index}>
                        <div></div>
                        <div
                          className={`w-2 h-2 rounded-full dark:bg-white bg-black ${index === CurrentIndex && "w-10"} circle duration-600 `}
                        />
                      </div>
                    ))}
                  </div>
                  <AnimatePresence mode="wait">
                    {CurrentIndex != NewsData.length - 1 ? (
                      <ArrowRightIcon
                        ref={ArrowRightIconRef}
                        onClick={() => {
                          ArrowRightIconRef.current?.startAnimation();
                          onNext(false);
                        }}
                      />
                    ) : (
                      <motion.button
                        key={"right-button-finish"}
                        initial={{ x: 10, opacity: 0 }}
                        animate={{ x: 0, opacity: 100 }}
                        exit={{ x: -10, opacity: 0 }}
                        transition={{ ease: "circInOut", duration: 0.8 }}
                        className="w-6 h-6 bg-blue-600 text-white dark:hover:bg-blue-400 hover:bg-blue-600 ease-in-out duration-200 rounded-full p-3 flex-center"
                        onClick={() => handleClose()}
                      >
                        <Check size={20} />
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>
              </section>
            </div>
          </div>
        </motion.div>
      ) : (
        <div />
      )}
    </AnimatePresence>
  );
}
