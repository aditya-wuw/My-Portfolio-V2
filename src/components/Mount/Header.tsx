import { createThemeContext } from '@/Context/context'
import { heroData } from '@/data/data'

export default function Header() {
  const { LightTheme } = createThemeContext()

  return (
    <header
      className={`select-none p-3 rounded-md relative h-[102%] overflow-hidden ${LightTheme ? 'bg-white text-black border border-black/20 ' : 'bg-black text-white border border-white/15 '} bottom-3 relative`}
    >
      <div className="profile_wrapper flex gap-3">
        <div className="relative top-1">
          <div className="w-10 h-10 rounded-full overflow-hidden shadow-2xl">
            <img
              src="https://avatars.githubusercontent.com/u/166864125"
              loading="lazy"
              alt="Logo_nullfaced_dev.png"
              className="object-cover object-center mt-1 ml-0.3 scale-120"
              width={256}
              height={256}
            />
          </div>
        </div>
        <div className="w-[90%] mt-2">
          <h1>Hi, I'm {heroData.name}</h1>
          <h1 className="md:text-sm text-[15px]">{heroData.role}</h1>
        </div>
      </div>
      <div className="mt-3 text-e pb-2 px-2">
        <h1 className="md:text-sm text-[12px]">
          {heroData.about_ln1} {heroData.about_ln2}
        </h1>
        <h1 className="md:text-sm text-[12px]">{heroData.about_ln3} </h1>
      </div>
      <div className="absolute -top-10 right-5 w-20 h-25 slash rounded-full" />
    </header>
  )
}
