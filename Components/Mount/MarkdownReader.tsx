import { BsClipboard } from "react-icons/bs";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

const MarkdownReader = ({ content }: { content: string }) => {
  return (
    <div className="mx-1">
      <Markdown
        components={{
          h1: ({ ...props }) => (
            <h1 className="xl:text-3xl text-2xl font-bold my-4" {...props} />
          ),
          h2: ({ ...props }) => (
            <h2 className="xl:text-2xl text-xl font-semibold my-3" {...props} />
          ),
          h3: ({ ...props }) => (
            <h3 className="xl:text-xl text-md font-medium my-2" {...props} />
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
            <blockquote
              className="border-l-5 border-blue-500 px-2 italic"
              {...props}
            />
          ),
          code: ({ className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || "");
            const copyContent = async () => {
              const content = String(children).replace(/\n$/, "");
              await navigator.clipboard.writeText(content);
            };
            if (match) {
              return (
                <code className="relative">
                  <button onClick={() => copyContent()}>
                    <BsClipboard
                      className="absolute p-2 m-2 top-7 right-0 bg-white/80 hover:bg-white dark:bg-black/40 dark:hover:bg-black/90 rounded-sm pop-in cursor-pointer"
                      size={30}
                    />
                  </button>
                  <SyntaxHighlighter
                    PreTag="div"
                    language={match[1]}
                    style={dracula}
                    customStyle={{ backgroundColor: "var(--code-bg)" }}
                    className="dark:bg-gray-600/30"
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                </code>
              );
            }
            return (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </Markdown>
    </div>
  );
};

export default MarkdownReader;
