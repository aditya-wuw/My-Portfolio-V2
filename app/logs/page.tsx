import MarkdownReader from "@/Components/Mount/MarkdownReader";
import Markdown from "react-markdown";

export default function page() {
  const content =
    "## Platform Modernization and Feature Expansion\n\nA series of updates focusing on the Next.js migration, content rendering enhancements, core feature additions, and UI/UX refinements.\n\n### Features\n- Implemented core blog infrastructure including the main Blog page and dynamic feed.\n- Added a fully functional contact form with complete end-to-end support.\n- Introduced on-demand project viewing capabilities.\n- Added native image rendering support to the Markdown reader.\n\n### Improvements & Refactoring\n- Successfully migrated the application architecture to Next.js.\n- Enhanced security by obfuscating and hiding the Supabase project URL.\n- Cleaned up the codebase by removing deprecated components and strict build error ignores.\n\n### Fixes\n- Resolved styling bugs in the news component theme and mobile banner image positioning.\n- Fixed the music player invalid state alongside minor UI polish.\n- Corrected input field styling by removing the default autofill background color.\n- Standardized directory naming conventions for the utilities folder.";
  return (
    <div className="p-3 h-160 w-full dark:bg-black bg-white dark:text-white/80 text-black/80">
      {" "}
      logs ..
      <div className="flex gap-2 h-full">
        <div className="xl:w-1/8 h-full bg-red-500">dasdas</div>
        <div className="text-xs w-6/8">
          <MarkdownReader content={content} />
        </div>
      </div>
    </div>
  );
}
