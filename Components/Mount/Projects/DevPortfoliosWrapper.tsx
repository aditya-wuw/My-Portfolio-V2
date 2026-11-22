// interface TogglePortfoliosProps {
//   propName: type;
// }

import { Loader } from "@animateicons/react/lucide";
import { Suspense } from "react";
import Projects from "./Projects";
   
export default function DevPortfoliosWrapper() {
  return (
    <div>
      {" "}
      <Suspense
        fallback={
          <div className="w-full h-60 flex justify-center items-center dark:bg-black bg-white rounded-2xl">
            <Loader />
          </div>
        }
      >
        <Projects />
      </Suspense>
    </div>
  );
}
