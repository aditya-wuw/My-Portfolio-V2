"use client";
import { TbPointFilled } from "react-icons/tb";
import { CgCalendar } from "react-icons/cg";
import { useRouter } from "next/navigation";
import { BlogFeedData } from "@/types/BlogTypes";
import { getFormatedDate } from "@/Utils/utils";
import { PiCoffeeDuotone } from "react-icons/pi";
import { BiSolidNotepad } from "react-icons/bi";

interface BlogFeed {
  Feeds: BlogFeedData[];
}

const BlogFeedView = ({ Feeds }: BlogFeed) => {
  const Router = useRouter();
  const GoToBlog = (target: string) => {
    Router.push(`/journal/${target}`);
  };

  if (Feeds.length === 0)
    return (
      <div className="px-4 w-full h-full max-md:h-60  bg-white text-black dark:bg-black dark:text-white/75 rounded-2xl border dark:border-white/10 border-black/10">
        <h1 className="h-1/6 text-xl font-semibold flex items-center gap-1">
          <BiSolidNotepad />
          <span>Journal</span>
        </h1>
        <div className="flex-center gap-2 h-5/6 w-full">
          <PiCoffeeDuotone />
          <span>nothing to show</span>
        </div>
      </div>
    );
  return (
    <div
      className={`p-3 select-none bg-white text-black dark:bg-black dark:text-white border dark:border-white/10 border-black/10 rounded-xl w-full `}
    >
      <div className="mx-2">
        <h1 className="h-1/6 text-xl font-semibold flex items-center gap-1">
          <BiSolidNotepad />
          <span>Journal</span>
        </h1>
        <h1 className="md:text-[13px] text-[10px] mt-3">
          My thoughts on development, learnings and experiences
        </h1>
        <div className="mt-3 relative w-full h-full">
          <div className="h-full absolute border-l top-2 left-2" />
          <TbPointFilled className="absolute left-0 top-0" />
          <div className="h-85 w-full translate-y-2 overflow-y-auto scroll_bar_thumb scroll_bar_">
            {Feeds.sort(
              (a, b) =>
                new Date(b.published).getTime() -
                new Date(a.published).getTime(),
            ).map((Feed) => (
              <div key={Feed.id} className="flex gap-2 mb-5">
                <div>
                  <TbPointFilled className="-translate-y-2" />
                </div>
                <section
                  className={`mx-2 px-4 py-2 rounded-2xl cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-700`}
                  onClick={() => GoToBlog(Feed.id)}
                >
                  <h1 className="md:text-sm text-[14px] font-bold">
                    {Feed.title}
                  </h1>
                  <p className="md:text-sm text-xs max-md:pt-1">
                    {Feed.shortDescription}
                  </p>
                  <h1 className="pt-2 flex items-center gap-1 md:text-sm text-xs">
                    <CgCalendar />
                    {`${getFormatedDate(new Date(Feed.published))}`}
                  </h1>
                </section>
              </div>
            ))}
          </div>
        </div>
      </div>
      <TbPointFilled className="relative left-2 bottom-0" />
    </div>
  );
};

export default BlogFeedView;
