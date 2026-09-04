// "use client";
import MarkdownReader from "@/Components/Mount/MarkdownReader";
import { UpdateLogs } from "@/types/LogTypes";
import { getFormatedDate } from "@/Utils/utils";
import { LuNotebookPen } from "react-icons/lu";

const getLogs = async () => {
  const query = `${process.env.SUPABASE_URL}/rest/v1/update_logs?select=*`;
  try {
    const res = await fetch(query, {
      headers: {
        apikey: process.env.SUPABASE_ANONE_KEY || "",
      },
      next: { revalidate: 60 },
    });
    const Logs = await res.json();
    const result = Logs as UpdateLogs[];
    return result;
  } catch (e) {
    console.error(`Failed fetch logs, Error ${e}`);
  }
};

export default async function page() {
  const Logs = await getLogs();
  return (
    <div className="mt-3 h-full w-full dark:text-white/80 text-black/80">
      <h1 className="pt-6 px-4 rounded-br-2xl font-bold text-2xl flex flex-col dark:bg-black bg-white rounded-bl-4xl border-4 border-dashed dark:border-white/5 border-black/10">
        <div className="flex gap-3 items-center pb-5">
          <LuNotebookPen className="dark:fill-white/20 fill-black/60" />
          Update logs
        </div>
      </h1>
      <div className="w-full h-full border-t-3 border-dashed dark:border-b-white/20 border-b-black/20 mask-x-from-40%" />
      <div className="flex flex-col h-full w-full">
        {Logs && Logs.length > 0 ? (
          Logs.sort(
            (a, b) =>
              new Date(b.last_update).getTime() -
              new Date(a.last_update).getTime(),
          ).map((i) => (
            <div key={i.id}>
              <div className="xl:px-10 xl:py-10 px-4 py-4 flex xl:flex-row flex-col items-stretch gap-2 rounded-4xl dark:bg-black bg-white border-4 border-dashed dark:border-white/5 border-black/10">
                <div className="xl:w-2/8 flex flex-col justify-center xl:text-center px-2 py-4 font-mono">
                  <h1 className="pb-3 xl:text-lg text-md">
                    {getFormatedDate(new Date(i.last_update)) ?? ""}
                  </h1>
                  <div className="border-l-2 w-1 h-full dark:border-white/10 border-black/20 mx-10" />
                </div>
                <div className="xl:w-4/4 text-xs dark:bg-white/5 border dark:border-white/5 border-black/7 bg-black/5 rounded-2xl px-4 py-2 shadow-md">
                  <MarkdownReader content={i.log} />
                </div>
              </div>
              <div className="w-full  border-t-3 border-dashed dark:border-b-white border-b-black mask-x-from-40%" />
            </div>
          ))
        ) : (
          <div className="w-full dark:bg-black bg-white h-120 text-soft-theme flex-center "> no logs to show :( </div>
        )}
      </div>
    </div>
  );
}
