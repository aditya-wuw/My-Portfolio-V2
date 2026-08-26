"use client";
import Footer from "@/Components/footer";
import Header from "@/Components/Mount/Header";
import Cover from "@/Components/Mount/Profile/Cover";
import Details from "@/Components/Mount/Profile/Details";
import Playlist from "@/Components/Mount/Profile/Music/Playlist";
// import MusicEmbed from "@/Components/Mount/Profile/MusicEmbed";
import Projects from "@/Components/Mount/Profile/Projects";
import Skills from "@/Components/Mount/Profile/Skills";
import dynamic from "next/dynamic";
const MusicPlayer = dynamic(
  () => import("@/Components/Mount/Profile/Music/MusicPlayer"),
  {
    ssr: false,
    loading: () => (
      <div className="bg-white dark:bg-black w-full h-full rounded-2xl flex justify-center items-center" />
    ),
  },
);

export default function Home() {
  return (
    <div className="flex flex-col gap-3 pt-2 items-center justify-center font-sans dark:bg-black/50 bg-white/10">
      <section className="w-full xl:h-40 h-25 my-2 overflow-hidden rounded-xl bg-white dark:bg-black">
        <Cover />
      </section>
      <section className="flex flex-col 2xl:flex-row gap-2 w-full">
        <div className="2xl:w-7/5">
          <Header />
        </div>
        <div className="2xl:w-3/5">
          <Details />
        </div>
      </section>
      <section className="w-full">
        <div className="flex flex-col xl:flex-row gap-2">
          <div className="xl:w-3/6 w-full h-1/2">
            <Skills />
          </div>
          <div className="xl:w-4/6 w-full h-32">
            <MusicPlayer />
          </div>
        </div>
        <div className="pt-2">
          <Playlist />
        </div>
      </section>
      <section className="rounded-2xl">
        <Projects />
      </section>
      <section className="xl:w-1/2">
        <Footer />
      </section>
    </div>
  );
}
