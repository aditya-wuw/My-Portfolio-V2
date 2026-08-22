import { FaClock, FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { useAppContext } from '@/Context/context'
import { contactData } from '@/data/data'

const Footer = () => {
  const { LightTheme } = useAppContext()
  const lastupdated = '11th Aug 2026'
  return (
    <div
      className={`p-3 rounded-t-2xl text-center ${LightTheme ? 'bg-white text-black border border-black/20' : 'bg-black text-white border border-white/15'}`}
    >
      <h1 className="flex items-center justify-center gap-1 mb-1">
        <FaClock className={`${LightTheme ? 'text-black' : 'text-white'}`} />{' '}
        <span className="max-sm:text-xs text-sm pl-1">
          Last updated on {lastupdated}
        </span>
        <div className="flex gap-1 ml-2 mb-0.5">
          <a
            href={contactData.gh}
            target="_blank"
            aria-label={`${contactData.gh}`}
            className="p-1"
          >
            <FaGithub className="w-4 h-4 cursor-pointer hover:scale-115 scale-100 transition-scale duration-300 ease-in-out" />
          </a>
          <a
            href={contactData.linkedIN}
            target="_blank"
            aria-label={`${contactData.linkedIN}`}
            className="p-1"
          >
            <FaLinkedin className="w-4 h-4 cursor-pointer hover:scale-115 scale-100 transition-scale duration-300 ease-in-out" />
          </a>
          <a
            href={`mailto:${contactData.email}`}
            className="transition-scale duration-200 ease-in-out flex items-center p-1 gap-1 break-all text-md"
            aria-label={`${contactData.email}`}
          >
            <MdEmail className="w-4 h-4 cursor-pointer hover:scale-115 scale-100 transition-scale duration-300 ease-in-out" />{' '}
          </a>
        </div>
      </h1>
    </div>
  )
}

export default Footer
