import Image from "next/image";
import Link from "next/link";

export default function notfound() {
  return (
    <div className="h-120 w-full bg-white dark:bg-black p-5 rounded-2xl dark:text-white/70 text-black/70">
      {" "}
      <div className="flex-center flex-col gap-2 h-full">
        <span className="">This page dosn&apos;t exist</span>
        <Image
          src="https://media1.tenor.com/m/9PTGVf4BLwYAAAAC/crying-emoji-dies.gif"
          width={200}
          height={200}
          alt="asdasda"
          loading="eager"
          className="rounded-xl mix-blend-difference"
        />

        <Link href={"/"} className="text-blue-500 underline">
          go back
        </Link>
      </div>
    </div>
  );
}
