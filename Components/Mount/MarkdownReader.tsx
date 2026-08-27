import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const MarkdownReader = ({ content }: { content: string }) => {
  return (
    <div className="mx-5">
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ ...props }) => (
            <h1 className="text-3xl font-bold my-4" {...props} />
          ),
          h2: ({ ...props }) => (
            <h2 className="text-2xl font-semibold my-3" {...props} />
          ),
          h3: ({ ...props }) => (
            <h3 className="text-xl font-medium my-2" {...props} />
          ),
          h4: ({ ...props }) => (
            <h4 className="text-lg font-medium my-1" {...props} />
          ),
          p: ({ ...props }) => (
            <p className="text-base leading-relaxed my-2" {...props} />
          ),
          ul: ({ ...props }) => (
            <ul className="list-disc list-inside my-2" {...props} />
          ),
          li: ({ ...props }) => <li className="text-base" {...props} />,
          em: ({ ...props }) => <em className="italic" {...props} />,
          strong: ({ ...props }) => <strong className="font-bold" {...props} />,
          a: ({ ...props }) => (
            <a className="text-blue-500" {...props} target="_blank" />
          ),
          mark: ({ ...props }) => <span className="bg-blue-500" {...props} />,
          blockquote: ({ ...props }) => (
            <blockquote className="border-l-5 border-blue-500 px-2 italic" {...props} />  
          ),  
        }}
      >
        {content}
      </Markdown>
    </div>
  );
};

export default MarkdownReader;
