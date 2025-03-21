"use client";
import { UserType } from "@/models/user";
import { createContext, useState } from "react";
import { ReactNode } from "react";

export const DataContext = createContext<{
  user: UserType | undefined;
  setUser: React.Dispatch<React.SetStateAction<UserType | undefined>>;
}>({
  user: undefined,
  setUser: () => {},
});

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserType>();

  const contextData = {
    user,
    setUser,
  };

  return (
    <DataContext.Provider value={contextData}>{children}</DataContext.Provider>
  );
};
