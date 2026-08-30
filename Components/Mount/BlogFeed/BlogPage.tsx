"use client";
import { BlogPageData } from "@/types/BlogTypes";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { MdArrowBackIos } from "react-icons/md";
import MarkdownReader from "../MarkdownReader";
import { getFormatedDate } from "@/Utils/utils";

interface BlogProps {
  Blog: BlogPageData;
}

export default function BlogPage({ Blog }: BlogProps) {
  return (
    <div className="md:mt-5">
      <Link href="/">
        <button
          className={`sticky top-2 z-10 drop-shadow-md drop-shadow-black/50 dark:bg-linear-to-r dark:from-white dark:to-white/70 dark:text-black bg-black/30 text-white  backdrop-blur-2xl p-1 px-2 text-xl font-light rounded-xl mb-3 cursor-pointer`}
        >
          <MdArrowBackIos className="pl-1" />
        </button>
      </Link>
      <motion.div
        className={`bg-white text-black dark:bg-black dark:text-white flex gap-4 flex-col rounded-2xl px-4 py-2`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeIn" }}
      >
        <h1 className="text-2xl max-lg:text-xl font-bold">{Blog.title}</h1>
        {Blog.banner && (
          <div className="h-55 max-[482px]:h-35 w-full overflow-hidden rounded-2xl relative">
            <Image
              draggable={false}
              src={String(Blog.banner)}
              width={2000}
              height={1000}
              loading="eager"
              alt="project cover Image"
              className="object-cover absolute 2xl:-top-45 xl:-top-15"
            />
          </div>
        )}

        <div className="inset-0 w-full">
          <MarkdownReader content={Blog.content} />
        </div>
        <div className="my-2 flex flex-col gap-2">
          <div>
            <span className="text-sm">Published • </span>
            <span className="text-md">{`${getFormatedDate(new Date(Blog.published))}`}</span>
          </div>
          {Blog.updated && (
            <div>
              <span className="text-sm">Last updated • </span>
              <span className="text-md">{`${getFormatedDate(new Date(Blog.updated))}`}</span>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
