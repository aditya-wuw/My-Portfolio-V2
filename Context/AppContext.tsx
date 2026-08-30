"use client";

import React, { createContext, useContext, useMemo, useState } from "react";
import { ContextType } from "@/types/ContextTypes";

const AppContext = createContext<ContextType | null>(null);

export const ContextProviderWrap = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [inView, setIsInView] = useState(true);

  // 4. Memoize context value to avoid re-rendering entire app tree
  const contextValue = useMemo<ContextType>(
    () => ({
      inView,
      setIsInView,
    }),
    [inView],
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a ContextProviderWrap");
  }
  return context;
};
