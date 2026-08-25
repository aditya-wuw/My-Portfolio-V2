import { CiWarning } from "react-icons/ci";
import { useAppContext } from "@/Context/AppContext";

const Service = () => {
  const { LightTheme } = useAppContext();
  return (
    <div
      className={`backdrop-blur-sm w-80 text-left font-light absolute p-3 text-xs rounded-md ${LightTheme ? "bg-black text-white" : "bg-white text-black"} border`}
    >
      <div className="flex items-center gap-2 mb-1">
        <CiWarning size={30} />
        <span className="text-xl font-bold">Important Info</span>
      </div>
      Due to the high computational overhead required for my active{" "}
      <span className="font-bold">production app </span>
      and other{" "}
      <span className="font-bold">important telemetry deployments</span>{" "}
      important telemetry deployments, this demo utilizes a managed uptime
      schedule. This allows for the seamless reallocation of resources toward my
      primary production environments.
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -rotate-90 top-[0.1px] -left-4.5"
      >
        <path
          d="M12 4L22 20H2L12 4Z"
          fill="currentColor"
          className={`${LightTheme ? "text-black" : "text-white"}`}
        />
      </svg>
    </div>
  );
};

export default Service;
