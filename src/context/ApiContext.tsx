"use client";
import { UserType } from "@/models/user";
import { createContext, useState } from "react";
import { ReactNode } from "react";

export const DataContext = createContext({
  user: undefined as UserType | undefined,
  setUser: (user: UserType) => {},
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
