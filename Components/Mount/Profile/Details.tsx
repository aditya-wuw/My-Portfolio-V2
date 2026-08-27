"use client";
import {
  FaGithub,
  FaLinkedin,
  FaRegHandshake,
  FaRunning,
} from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
// import { PiReadCvLogoBold } from 'react-icons/pi'
import { GrTechnology } from "react-icons/gr";
import React, { Suspense } from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbCertificate } from "react-icons/tb";
import { FaLocationPin } from "react-icons/fa6";
import { contactData, details } from "@/data/data";
// import { useAppContext } from "@/Context/context";

const Live = React.lazy(() => import("@/Components/Animated/Live"));

const Details = () => {
  // const { LightTheme } = useAppContext();
  return (
    <div
      className={`relative select-none rounded-sm h-[102%] p-3 overflow-hidden bg-white text-black border border-black/20 dark:bg-black dark:text-white dark:border dark:border-white/15 bottom-3`}
    >
      <div className="absolute w-full h-full group">
        <span
          aria-hidden={true}
          className="absolute text-[70px] font-extrabold mb-2 opacity-20 -bottom-7 right-0 xl:blur-[5px] xl:group-hover:blur-[2px] blur-[2px] duration-300 ease-in-out"
        >
          Details
        </span>
      </div>
      {/* <h1 className="text-xl font-bold mb-5">Details</h1> */}
      <section className="flex justify-center gap-2">
        <a
          href={contactData.gh}
          target="_blank"
          aria-label={`view ${contactData.gh}`}
        >
          <FaGithub className="w-5 h-5 cursor-pointer hover:scale-115 scale-100 transition-scale duration-300 ease-in-out" />
        </a>
        <a
          href={contactData.linkedIN}
          target="_blank"
          aria-label={`view ${contactData.linkedIN}`}
        >
          <FaLinkedin className="w-5 h-5 cursor-pointer hover:scale-115 scale-100 transition-scale duration-300 ease-in-out" />
        </a>
        {/* <a
          href={contactData.CV}
          target="_blank"
          className="flex items-center font-bold hover:scale-115 scale-100 transition-scale duration-300 ease-in-out animate-bounce"
        >
          <PiReadCvLogoBold className="w-5 h-5 cursor-pointer " />
          <h1>CV</h1>
        </a> */}
      </section>
      <div className="mx-1 flex gap-2 items-center mt-2 text-sm">
        <FaLocationPin size={14} />
        India
      </div>
      <div className="text-[15px] m-1">
        <a
          href={`mailto:${contactData.email}`}
          className="transition-scale duration-200 ease-in-out flex items-center gap-1 break-all relative z-20"
        >
          <MdAttachEmail
            size={15}
            className="cursor-pointer hover:scale-115 scale-100 transition-scale duration-300 ease-in-out"
          />{" "}
          <h2 className="text-xs cursor-pointer">{contactData.email}</h2>
        </a>
      </div>
      <div className="mx-1">
        <section className="flex gap-1 items-center">
          <FaRunning className="w-4 h-4 hover:scale-115 scale-100 cursor-pointer" />
          <h1>College - Final year</h1>
          <div>
            <Suspense>
              <Live status={details.college} />
            </Suspense>
          </div>
        </section>
        {details.employment.length > 0 && (
          <section className="flex gap-1 items-center">
            <FaRegHandshake className="w-4 h-4 hover:scale-115 scale-100 cursor-pointer" />
            <h1>Employment -{details.employment}</h1>
          </section>
        )}
        <section className="flex gap-1 items-center">
          <GrTechnology className="w-4 h-4 hover:scale-115 scale-100 cursor-pointer" />
          <h1>Tech Stack -</h1>
          {details.techstack}
        </section>
        <section className="flex gap-1 items-center">
          <TbCertificate className="w-4 h-4 hover:scale-115 scale-100 cursor-pointer" />
          <h1>Certification -</h1>
          {details.certification.map((item, i) => (
            <a
              href={item.path}
              target="_blank"
              key={i}
              className="relative group"
              aria-label={`socials ${item.path}`}
            >
              <span>
                <span
                  className={`absolute pointer-events-none w-15 text-xs bottom-5 -left-5 z-1 p-1 opacity-0 group-hover:opacity-100 rounded-xl text-center bg-black text-white dark:bg-white dark:text-black"}`}
                >
                  {item.label}
                </span>
                <RiReactjsLine />
              </span>
            </a>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Details;
