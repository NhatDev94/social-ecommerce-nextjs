"use client";

import { Customer } from "@/utils/types/CustomerType";
import React, { createContext, ReactNode, useContext, useState } from "react";

type Props = {
  children: ReactNode;
};

type AppContextType = {
  user: Customer | null;
  setUser: (value: Customer | null) => void;
};

const AppContext = createContext<AppContextType>({
  user: null,
  setUser: () => {},
});

export function Context({ children }: Props) {
  const defaultUser = JSON.parse(localStorage.getItem("user") || "null");
  const [user, setUser] = useState<Customer | null>(defaultUser);

  const value = {
    user,
    setUser,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
