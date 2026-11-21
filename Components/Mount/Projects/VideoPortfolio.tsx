// interface VideoPortfolioProps {
//   propName: type;
// }

import { VideoData } from "@/data/VideoData";

export default function VideoPortfolio() {
  return (
    <div className="px-5">
      <div>
        {VideoData.map((i) => (
          <div key={i.GroupTitle} className="mt-5">
            <h1 className="opacity-90 xl:text-[16px] text-sm font-medium pb-2">{i.GroupTitle}</h1>
            <div className="flex flex-wrap gap-2 w-full">
              {i.content.map((content) => (
                <div key={content.url}>
                  <iframe
                    src={content.url}
                    allow="autoplay"
                    allowFullScreen
                    className="xl:w-100 w-full aspect-video"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
