"use client";

import { ReactNode, useState } from "react";
import { MdOutlineTerminal } from "react-icons/md";
import { RiVideoOnAiLine } from "react-icons/ri";

interface TogglePortfoliosProps {
  DevPortfolio: ReactNode;
  VideoPortfolio: ReactNode;
}

export default function TogglePortfolios({
  DevPortfolio,
  VideoPortfolio,
}: TogglePortfoliosProps) {
  const [isDevfolio, setDevFolio] = useState(true);
  return (
    <div>
      <div className="flex gap-1 px-2 select-none">
        <div
          className={`shadow-inner shadow-white/5  bg-white/10 p-3 rounded-tl-xl rounded-tr-xl text-sm mask-b-from-5% hover:mask-b-from-50% ${isDevfolio && "mask-b-from-70% shadow-white/15"} fade-in-all `}
          onClick={() => setDevFolio(true)}
        >
          <h1 className="flex gap-1 items-center justify-center">
            <MdOutlineTerminal size={15} />
            Developer
          </h1>
        </div>
        <div
          className={`shadow-inner shadow-white/5 bg-white/10 p-3 rounded-tl-xl rounded-tr-xl text-sm mask-b-from-5% hover:mask-b-from-50% ${!isDevfolio && "mask-b-from-70% shadow-white/15"} fade-in-all `}
          onClick={() => setDevFolio(false)}
        >
          <h1 className="flex gap-1 items-center justify-center">
            <RiVideoOnAiLine size={15} />
            Editing
          </h1>
        </div>
      </div>
      <div>{isDevfolio ? DevPortfolio : VideoPortfolio}</div>
    </div>
  );
}
