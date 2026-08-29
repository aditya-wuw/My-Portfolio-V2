// utils.ts
// import { ScrollSmoother } from 'gsap/all'

export const scrollToSection = (targetId: string) => {
  // 2. Safely trigger the smoother instance
  const target = document.getElementById(targetId);
  if (target) {
    target.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  }
  // const smoother = ScrollSmoother.get();
  // if (smoother) {
  //   smoother.scrollTo(target, true, "top top");
  // }
};

export const FormateTime = (val: number): string => {
  if (isNaN(val)) return "00:00";
  const minute = Math.floor(val / 60);
  const seconds = Math.floor(val % 60);
  return `${String(minute).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};

export const getFormatedDate = (d: Date) => {
  const FormatedDate = new Intl.DateTimeFormat("in", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(d);
  return FormatedDate;
};
