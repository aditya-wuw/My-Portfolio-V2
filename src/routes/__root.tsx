import { Outlet, createRootRoute } from '@tanstack/react-router'
import { Analytics } from '@vercel/analytics/react'
import { useEffect, useRef, useState } from 'react'
// import { useGSAP } from '@gsap/react'
import { ScrollSmoother, ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import { createThemeContext } from '@/Context/context'
import Loader from '@/components/Loader'
import Nav from '@/components/Nav'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

export const Route = createRootRoute({
  component: layOuts,
})

function layOuts() {
  const { LightTheme } = createThemeContext()
  const [loading, setloading] = useState(true)
  const ContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setloading(false)
  }, [])

  // useGSAP(
  //   () => {
  //     if (loading) return
  //     const smoother = ScrollSmoother.create({
  //       wrapper: '#smooth-wrapper',
  //       content: '#smooth-content',
  //       smooth: 1.2,
  //       effects: true,
  //       normalizeScroll: true,
  //     })
  //     ScrollTrigger.refresh()
  //     return () => {
  //       smoother.kill()
  //     }
  //   },
  //   { scope: ContainerRef, dependencies: [loading] },
  // )

  if (loading) {
    return (
      <div className="flex justify-center items-center w-screen h-screen">
        <Loader />
      </div>
    )
  }

  return (
    <div
      className={`${LightTheme ? 'bg-white Grind-black' : 'bg-black Grind-white'} inset-0 relative`}
    >
      <Analytics />
      <Nav />
      <div
        ref={ContainerRef}
        id="smooth-wrapper"
        className={` transition-colors duration-300 ease-in-out w-full min-h-screen`}
      >
        <div
          id="smooth-content"
          className={`w-full min-h-screen overflow-visible ${
            LightTheme ? 'bg-white Grind-black' : 'bg-black Grind-white'
          }`}
        >
          <div className="flex flex-1 items-start justify-center mx-4 pt-px ">
            <div className="max-w-[1400px] 2xl:max-w-[50vw]">
              <section>
                <Outlet />
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
