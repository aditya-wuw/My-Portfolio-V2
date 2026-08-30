// "use client";
import Footer from "@/Components/footer";
import Header from "@/Components/Mount/Header";
import Cover from "@/Components/Mount/Profile/Cover";
import Details from "@/Components/Mount/Profile/Details";
import MusicPlayer from "@/Components/Mount/Profile/Music/MusicPlayer";
import Playlist from "@/Components/Mount/Profile/Music/Playlist";
import Projects from "@/Components/Mount/Projects/Projects";
import Skills from "@/Components/Mount/Profile/Skills";
import { Suspense } from "react";
import Loader from "@/Components/Loader";
import BlogFeed from "@/Components/Mount/BlogFeed/BlogFeed";

export default function Home() {
  return (
    <div className="flex flex-col gap-3 pt-2 items-center justify-center font-sans dark:bg-black/50 bg-white/10">
      <section className="w-full md:h-37 max-sm:h-23 my-2 overflow-hidden rounded-xl bg-white dark:bg-black">
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
        <div className="flex flex-col md:flex-row gap-2">
          <div className="md:w-3/6 w-full h-1/2">
            <Skills />
          </div>
          <div className="md:w-4/6 w-full h-32">
            <MusicPlayer />
          </div>
        </div>
        <div className="pt-2 h-full">
          <Playlist />
        </div>
      </section>
      <section className="rounded-2xl w-full">
        <Suspense
          fallback={
            <div className="w-full h-60 flex justify-center items-center dark:bg-black bg-white rounded-2xl">
              <Loader />
            </div>
          }
        >
          <Projects />
        </Suspense>
      </section>
      <section className="flex max-md:flex-col w-full max-md:h-fit h-80 gap-5 p-2">
        <div className="md:w-3/6 h-full">
          <Suspense
            fallback={
              <div className="w-full h-60 flex justify-center items-center dark:bg-black bg-white rounded-2xl">
                <Loader />
              </div>
            }
          >
            <BlogFeed />
          </Suspense>
        </div>
        {/*<div className="md:w-3/6 h-full bg-green-500"></div>*/}
      </section>
      <section className="xl:w-1/2">
        <Footer />
      </section>
    </div>
  );
}
