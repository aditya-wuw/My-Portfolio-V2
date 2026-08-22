// utils.ts
// import { ScrollSmoother } from 'gsap/all'

export const scrollToSection = (targetId: string) => {
  // 2. Safely trigger the smoother instance
  const target = document.getElementById(targetId)
  if (target) {
    target.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    })
  }
  // const smoother = ScrollSmoother.get();
  // if (smoother) {
  //   smoother.scrollTo(target, true, "top top");
  // }
}
