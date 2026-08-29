import Loader from "@/Components/Loader";

export default function loading() {
  return (
    <div className="flex justify-center items-center w-full h-[90vh] dark:bg-black/90 bg-white/90 rounded-2xl backdrop-blur-[2px]">
      {/*asda*/}
      <Loader />
    </div>
  );
}
