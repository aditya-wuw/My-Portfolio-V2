"use client";
import dynamic from "next/dynamic";
const NewsComponent = dynamic(() => import("./News"), { ssr: false });
export default function NewsView() {
  return <NewsComponent />;
}
