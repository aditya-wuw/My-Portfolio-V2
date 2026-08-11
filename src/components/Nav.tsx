import { Link, useLocation } from '@tanstack/react-router'
import { MdLightMode } from 'react-icons/md'
import { IoPerson } from 'react-icons/io5'
import { GoProjectSymlink } from 'react-icons/go'
import { useEffect, useState } from 'react'
import { createThemeContext } from '@/Context/context'
import { scrollToSection } from '@/utils/utils'

const Nav = () => {
  const { LightTheme, setTheme, InView } = createThemeContext()
  const [ShowNav, SetShowNav] = useState<boolean>(false)

  const navlist = [
    { id: 'About', logo: <IoPerson size={15} /> },
    { id: 'Projects', logo: <GoProjectSymlink size={15} /> },
    // { id: 'blogs', logo: <LuLogs size={15} /> },
  ]

  const Themeing = () => {
    localStorage.setItem('theme', !LightTheme ? 'Light' : 'dark')
    setTheme(!LightTheme)
  }
  const location = useLocation()
  const pathname = location.pathname

  useEffect(() => {
    SetShowNav(pathname == '/')
  }, [pathname])

  return (
    <div
      className={`sticky max-xl:mx-4 top-2 border border-gray-300/10 ${ShowNav ? 'translate-y-0' : '-translate-y-50 h-0 '}  left-2/8 z-50 max-h-20 backdrop-blur-xl p-2 rounded-md ${LightTheme ? 'bg-blue-500/15' : 'bg-gray-200/10'} transition-bg duration-400 ease-in-out max-w-[1400px] 2xl:max-w-[50vw]`}
    >
      <div className="flex justify-between items-center mx-2">
        <h1
          className={`md:text-xl text-md font-extrabold tracking-[2px] ${LightTheme ? 'text-blue-400' : 'text-white'}`}
        >
          <Link
            to="/"
            className={`${!InView && 'opacity-100 cursor-pointer'} opacity-0 cursor-default transition-opacity duration-600 ease-in-out`}
          >
            <span className="font-extralight font-mono leading-relaxed">
              &lt;<span>A</span>/&gt;
            </span>
          </Link>
        </h1>
        <div
          className={`${LightTheme ? 'text-black' : 'text-white'} flex items-center gap-3`}
        >
          {navlist.map((i, index) => (
            <span
              key={index}
              onClick={() => scrollToSection(i.id)}
              className="hover:scale-110 cursor-pointer relative group"
              title={i.id}
            >
              {i.logo}
            </span>
          ))}
          <button
            aria-label="L/D mode"
            onClick={Themeing}
            className={`p-2 hover:bg-blue-500/20 transition-all ease-in-out rounded-sm cursor-pointer`}
          >
            <MdLightMode
              className={`scale-110 ${LightTheme ? 'text-blue-500' : 'text-white'} transtion duration-300 ease-in-out`}
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Nav
