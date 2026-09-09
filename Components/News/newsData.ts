import { NewsItems } from "@/types/NewsTypes";
import { version } from "@/package.json";

export const NewsData: NewsItems[] = [
  {
    order: 0,
    banner: "https://media1.tenor.com/m/E7HT0L0wlAgAAAAC/update-beat.gif",
    title: `v${version}`,
    description: "Some new changes were made to the website. Check out what was changed with more details on **Logs** page",
  },
  {
    order: 1,
    banner:
      "https://media1.tenor.com/m/veS3RsR-afoAAAAC/next-js-logo-next-js.gif",
    title: "Next.js migration 🎉",
    description:
      "Just stepped up the game and migrated to Next.js for lightning-fast speed and a much smoother developer-user experience! :3",
  },
  {
    order: 2,
    banner:
      "https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Markdown support",
    description: `After ages I finally decided to add Markdown support, to easily upload or edit my journals and project details`,
  },
  {
    order: 3,
    banner:
      "https://media1.tenor.com/m/K96JNyel1eAAAAAd/cwc-rainbow-factory.gif",
    title: "Update logs added",
    description:
      "You can have more accurate view of what was changed in the event logs section of my website. Located in the '\\ **logs**' path or the footers",
  },
  {
    order: 4,
    banner: "https://media1.tenor.com/m/O_Px4ZQXckkAAAAC/river-waterfall.gif",
    title: "And many more ...",
    description:
      "I'm focusing on upgrades and making this website more customizable, and I plan to overhaul the UI again before I can finally call it **version 3**. Probably next semester",
  },
];
