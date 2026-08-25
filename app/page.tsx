"use client";
import Footer from "@/Components/footer";
import Header from "@/Components/Mount/Header";
import Cover from "@/Components/Mount/Profile/Cover";
import Details from "@/Components/Mount/Profile/Details";
// import MusicEmbed from "@/Components/Mount/Profile/MusicEmbed";
import Projects from "@/Components/Mount/Profile/Projects";
import Skills from "@/Components/Mount/Profile/Skills";

export default function Home() {
  return (
    <div className="flex flex-col gap-3 items-center justify-center font-sans bg-transparent mt-3">
      <div className="w-full h-40 my-2 overflow-hidden rounded-xl bg-white dark:bg-black">
        <Cover />
      </div>
      <div className="flex flex-col 2xl:flex-row gap-2 w-full">
        <div className="2xl:w-7/5">
          <Header />
        </div>
        <div className="2xl:w-3/5">
          <Details />
        </div>
      </div>
      <div>
        <Skills />
        {/*<MusicEmbed />*/}
      </div>
      <div className="rounded-2xl">
        <Projects />
      </div>
      <div className="xl:w-1/2">
        <Footer />
      </div>
    </div>
  );
}
