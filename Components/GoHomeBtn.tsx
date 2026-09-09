import Link from "next/link";
import { MdArrowBackIos } from "react-icons/md";

const GoHomeBtn = () => {
  return (
    <Link href="/">
      <button
        className={`sticky top-2 z-10 drop-shadow-md drop-shadow-black/50 dark:bg-linear-to-r dark:from-white dark:to-white/70 dark:text-black bg-black/30 text-white  backdrop-blur-2xl p-1 px-2 text-xl font-light rounded-xl mb-3 cursor-pointer`}
      >
        <MdArrowBackIos className="pl-1" />
      </button>
    </Link>
  );
};

export default GoHomeBtn;
