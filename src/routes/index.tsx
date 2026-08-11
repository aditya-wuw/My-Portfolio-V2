import React, { Suspense, useEffect } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'motion/react'
import Loader from '@/components/Loader'
import Header from '@/components/Mount/Header'
import Details from '@/components/Mount/Profile/Details'
import Skills from '@/components/Mount/Profile/Skills'
import { createThemeContext } from '@/Context/context'
import MusicEmbed from '@/components/Mount/Profile/MusicEmbed'
// import CallingCard from '@/components/Animated/CallingCard'
// import { TextContent } from '@/data/data'
// import Projects_desc from '@/components/Mount/Profile/Projects_desc'

const Cover = React.lazy(() => import('@/components/Mount/Profile/Cover'))
const Projects = React.lazy(() => import('@/components/Mount/Profile/Projects'))
// const Notes = React.lazy(() => import('@/components/Mount/Profile/Notes'))
const Footer = React.lazy(() => import('@/components/footer'))
const Playlist = React.lazy(() => import('@/components/Mount/Profile/Playlist'))
// const Bomberdilocrocodilo = React.lazy(
//   () => import('@/components/bomberdilocrocodilo'),
// )

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  useEffect(() => {
    if (!localStorage.getItem('theme')) {
      setTheme('Light')
      sessionStorage.setItem('theme', 'Light')
    }
  }, [])
  const { LightTheme, setTheme } = createThemeContext()
  return (
    <main id="About" className="relative">
      <div className={`flex flex-col gap-2 wrap-break-word`}>
        <section>
          <div
            // mt-17 with GSAP
            className={`xl:mt-5 mt-5 rounded-xl w-full max-sm:h-25 sm:h-35 max-h-50 overflow-hidden  relative select-none ${LightTheme ? 'bg-gray-400' : 'bg-black'}`}
          >
            <Suspense
              fallback={
                <div
                  className={`flex items-center w-full h-full justify-center`}
                >
                  <Loader />
                </div>
              }
            >
              <Cover />
            </Suspense>
          </div>
        </section>
        <section className="relative z-20 flex max-lg:flex-col gap-2 max-lg:gap-3 mt-4">
          <div className="lg:w-[70%]">
            <Header />
          </div>
          <div className="lg:w-[30%]">
            <Details />
          </div>
        </section>
        <section>
          <div className="flex md:flex-row flex-col gap-3">
            <div className="md:w-[40%] 2xl:h-34">
              <Skills />
            </div>
            <div className="md:w-[calc(100%-40%)] h-34">
              <MusicEmbed />
            </div>
          </div>
        </section>
        <section>
          <Suspense>
            <Playlist />
          </Suspense>
        </section>
        <section>
          <Suspense
            fallback={
              <div
                className={`${LightTheme ? 'bg-white' : 'bg-black'} rounded-md h-100 w-full flex justify-center items-center  `}
              >
                <Loader />
              </div>
            }
          >
            {/* <Projects_desc /> */}
            <Projects />
          </Suspense>
        </section>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'circInOut' }}
        >
          <Suspense>
            <div className="flex max-md:flex-col gap-3 mb-2">
              {/* <Notes /> */}
              {/* <div className="w-[0%]">
          //       <div className='scale-90'>
          //         <CallingCard
          //           User_color="bg-blue-400"
          //           Text_content={TextContent}
          //         />
          //       </div>
          //     </div> */}
            </div>
          </Suspense>
        </motion.section>
        {/* <section>
          <Suspense>
            <Bomberdilocrocodilo />
          </Suspense>
        </section> */}
        <footer className="w-full">
          <Suspense>
            <Footer />
          </Suspense>
        </footer>
      </div>
    </main>
  )
}
