import { FaClock, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { contactData } from "@/data/data";
import { getFormatedDate } from "@/Utils/utils";
import { Terminal } from "@animateicons/react/lucide";
import Link from "next/link";

const getLatUpdateDate = async () => {
  const query = `${process.env.SUPABASE_URL}/rest/v1/update_logs?select=last_update&order=last_update.desc&limit=1`;
  try {
    const res = await fetch(query, {
      headers: {
        apikey: process.env.SUPABASE_ANONE_KEY || "",
      },
      cache: "no-store",
    });
    const date = await res.json();
    const result = date[0].last_update as string;
    // console.log(result);
    return result;
  } catch (e) {
    console.error(`Failed fetch logs, Error ${e}`);
  }
};

const Footer = async () => {
  const lastupdate = await getLatUpdateDate();
  return (
    <div className="flex flex-col-reverse xl:flex-row justify-stretch gap-2 w-full">
      <div
        className={`p-3 xl:w-1/2 rounded-2xl text-center bg-white text-black border border-black/20 dark:bg-black dark:text-white dark:border dark:border-white/15`}
      >
        <h1 className="flex items-center justify-center gap-1 mb-1">
          <FaClock className={`text-black dark:text-white`} />{" "}
          <span className="max-sm:text-xs text-sm pl-1">
            Last updated{" "}
            {(lastupdate &&
              typeof lastupdate === "string" &&
              getFormatedDate(new Date(lastupdate))) ??
              ""}
          </span>
          <div className="flex gap-1 ml-2 mb-0.5">
            <a
              href={contactData.gh}
              target="_blank"
              aria-label={`${contactData.gh}`}
              className="p-1"
            >
              <FaGithub className="w-4 h-4 cursor-pointer hover:scale-115 scale-100 transition-scale duration-300 ease-in-out" />
            </a>
            <a
              href={contactData.linkedIN}
              target="_blank"
              aria-label={`${contactData.linkedIN}`}
              className="p-1"
            >
              <FaLinkedin className="w-4 h-4 cursor-pointer hover:scale-115 scale-100 transition-scale duration-300 ease-in-out" />
            </a>
            <a
              href={`mailto:${contactData.email}`}
              className="transition-scale duration-200 ease-in-out flex items-center p-1 gap-1 break-all text-md"
              aria-label={`${contactData.email}`}
            >
              <MdEmail className="w-4 h-4 cursor-pointer hover:scale-115 scale-100 transition-scale duration-300 ease-in-out" />{" "}
            </a>
          </div>
        </h1>
      </div>
      <Link
        href={"/logs"}
        className="flex gap-2 items-center p-3 px-5 rounded-2xl w-fit bg-white text-black dark:text-white border border-black/20 dark:bg-black dark:border dark:border-white/15"
      >
        <Terminal /> Logs
      </Link>
    </div>
  );
};

export default Footer;
