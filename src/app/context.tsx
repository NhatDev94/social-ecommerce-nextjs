"use client";

import { User } from "@/libs/types/account";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type ContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export const AppContext = createContext<ContextType>({
  user: null,
  setUser: () => {},
});

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const defaultUser = JSON.parse(localStorage.getItem("user") || "null");
      setUser(defaultUser);
    }
  }, []);

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppContextProvider;
