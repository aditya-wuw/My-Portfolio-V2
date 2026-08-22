import { PiProjectorScreenFill } from 'react-icons/pi'
import { SiPaloaltonetworks } from 'react-icons/si'
import type { ProjectDetailsType } from '@/data/type'

const ProjectPageDetails = ({
  Desc,
  ProjectIdea,
  HowItWorks,
}: ProjectDetailsType) => {
  return (
    <div className="mx-5">
      <section>
        <span>{Desc}</span>
        <span className="text-2xl font-bold mt-5 mb-2 flex gap-2 items-center">
          <PiProjectorScreenFill />
          Project Idea
        </span>
        <div className="text-md">{ProjectIdea}</div>
      </section>
      <section>
        <h1 className="text-2xl font-bold mt-5 mb-2 flex gap-2 items-center">
          <SiPaloaltonetworks />
          How It Works
        </h1>
        <div className="text-md">{HowItWorks}</div>
      </section>
    </div>
  )
}

export default ProjectPageDetails
