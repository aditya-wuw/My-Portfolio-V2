import { Link, createFileRoute } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { useEffect } from 'react'
import { MdArrowBackIos } from 'react-icons/md'
import { GrUpdate } from 'react-icons/gr'
import { projectsData } from '@/data/data'
import { createThemeContext } from '@/Context/context'
import ProjectPageDetails from '@/components/Mount/ProjectPageDetails'

export const Route = createFileRoute('/projects/$pid')({
  component: RouteComponent,
})

function RouteComponent() {
  const { pid } = Route.useParams()
  const { setisinView, LightTheme } = createThemeContext()

  useEffect(() => {
    setisinView(false)
  }, [])

  return (
    <div className="md:mt-5">
      <Link to="/">
        <button
          className={`sticky top-2 z-10 drop-shadow-md drop-shadow-black/50 ${!LightTheme ? 'bg-linear-to-r from-white to-white/70 text-black' : 'bg-black/30 text-white'}  backdrop-blur-2xl p-1 px-2 text-xl font-light rounded-xl mb-3 cursor-pointer`}
        >
          <MdArrowBackIos className='pl-1'/>
        </button>
      </Link>
      {projectsData.items.map((item, i) => (
        <div key={i}>
          {item.Link === pid && (
            <motion.div
              className={`${LightTheme ? 'bg-white text-black' : 'bg-black text-white'} flex gap-5 flex-col rounded-2xl px-5 py-2`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: 'easeIn' }}
            >
              <h1 className="text-2xl max-lg:text-xl font-bold">
                {item.title}
              </h1>
              {item.image && !item.DemoVideo && (
                <div className="h-55 max-[482px]:h-35 w-full overflow-hidden rounded-2xl relative">
                  <img
                    draggable={false}
                    src={item.image}
                    width={2000}
                    height={1000}
                    className="object-cover absolute 2xl:-top-45 xl:-top-15"
                  />
                </div>
              )}
              {item.DemoVideo && (
                <div>
                  <video
                    src={item.DemoVideo}
                    width={1920}
                    height={1080}
                    className="rounded-md"
                    controlsList="nodownload"
                    autoPlay
                    loop
                    muted
                    // controls
                  >
                    your browser is not supported :(
                  </video>
                </div>
              )}
              <div className="text-md max-lg:text-sm">
                <ProjectPageDetails
                  Desc={item.dedicated_dec.Desc}
                  ProjectIdea={item.dedicated_dec.ProjectIdea}
                  HowItWorks={item.dedicated_dec.HowItWorks}
                />
              </div>
              {item.Update && (
                <div className="px-5">
                  <h1 className="flex items-center gap-2 mb-2 text-xl font-bold">
                    <GrUpdate />
                    Update
                  </h1>
                  <p>{item.Update}</p>
                </div>
              )}
              <div className="flex gap-3 items-center justify-end mb-3">
                {item.links.map(
                  (Linkitem, LinkIndex) =>
                    Linkitem.label !== 'none' && (
                      <a
                        key={LinkIndex}
                        className={`${typeof Linkitem.label === 'string' && Linkitem.label !== 'none' && 'p-1 bg-blue-500 rounded-md text-white'}`}
                        href={Linkitem.url}
                      >
                        {Linkitem.label}
                      </a>
                    ),
                )}
              </div>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  )
}
