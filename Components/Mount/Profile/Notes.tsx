import { TbPointFilled } from "react-icons/tb";
import { BsClipboard2Check } from "react-icons/bs";
import { CgCalendar } from "react-icons/cg";
import { Notes_blog } from "@/data/blogdata";
import { useAppContext } from "@/Context/context";
import { useRouter } from "next/navigation";

const Notes = () => {
  
  const { LightTheme } = useAppContext();
  const Router = useRouter();
  const hadnleclick = (e: string) => {
    Router.push(`/Notes/${e}`);
  };
  
  return (
    <div
      id="blogs"
      className={`p-3 select-none ${LightTheme ? "bg-white text-black  rounded-xl" : "bg-black text-white rounded-xl"}`}
    >
      <div className="mx-2">
        <h1 className="text-xl font-bold flex gap-1 items-center">
          <BsClipboard2Check size={18} /> <div className="mt-1">Notes</div>
        </h1>
        <h1 className="md:text-[13px] text-[10px]">
          My thoughts on development, events and Projects
        </h1>
        <div className="mt-3 relative ">
          <div className="DALINE h-[95%] absolute border-l top-5 left-2" />
          <div className="md:h-40 h-45 overflow-y-auto scroll_bar_thumb scroll_bar_">
            {Notes_blog.map((item, i) => (
              <div key={i} className="flex gap-2 mb-5">
                <div>
                  <TbPointFilled className="mt-1" />
                </div>
                <section
                  className={`mx-2 px-4 py-2 rounded-2xl cursor-pointer ${LightTheme ? "hover:bg-blue-200" : "hover:bg-blue-500"}`}
                  onClick={() => hadnleclick(item.link)}
                >
                  <h1 className="md:text-sm text-[14px] font-medium">
                    {item.title}
                  </h1>
                  <h1 className="flex items-center gap-1 text-sm">
                    <CgCalendar />
                    {item.date}
                  </h1>
                </section>
              </div>
            ))}
          </div>
        </div>
      </div>
      <TbPointFilled className="relative left-[8.3px] bottom-0" />
    </div>
  );
};

export default Notes;
