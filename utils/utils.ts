// utils.ts
// import { ScrollSmoother } from 'gsap/all'

import { audio } from "motion/react-client";

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
  if (!d || !(d instanceof Date))
    return console.error(
      `Provide correct formate, failed to formate date: ${d}`,
    );
  const FormateTime = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  const FormatedDate = new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "Asia/kolkata",
  }).format(d);

  const TimeElapsed = Date.now() - d.getTime();

  const Seconds = Math.round(TimeElapsed / 1000);
  const Minuites = Math.round(Seconds / 60);
  const Hours = Math.round(Minuites / 60);
  const Days = Math.round(Hours / 24);
  const Weeks = Math.round(Days / 7);
  const Months = Math.round(Days / 30);

  if (Math.abs(Seconds) < 60) {
    return `just now`;
  } else if (Math.abs(Minuites) < 60) {
    return `${FormateTime.format(-Minuites, "minute")} `;
  } else if (Math.abs(Hours) < 24) {
    return `${FormateTime.format(-Hours, "hour")} `;
    // return in hours
  } else if (Math.abs(Days) < 7) {
    return `${FormateTime.format(-Days, "day")} `;
  } else if (Math.abs(Weeks) < 4) {
    return `${FormateTime.format(-Weeks, "week")}`;
  } else if (Math.abs(Months) < 12) {
    return `${FormateTime.format(-Months, "month")} `;
  } else {
    return FormatedDate;
  }
};
