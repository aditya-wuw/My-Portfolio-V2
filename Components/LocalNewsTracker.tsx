"use client";
import { logs } from "@/types/LogTypes";
import { useEffect } from "react";

interface props {
  update: logs | undefined;
}

export default function LocalNewsTracker({ update }: props) {
  useEffect(() => {
    if (!update) return localStorage.clear();
    const VersionId = localStorage.getItem("VersionId");
    if (VersionId !== update.id) {
      localStorage.removeItem("seen");
    }
    localStorage.setItem("VersionId", update.id);
    localStorage.setItem("lastUpdate", update.last_update);
  }, [update]);

  return null;
}
