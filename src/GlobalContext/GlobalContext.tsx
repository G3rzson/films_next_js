"use client";

import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import axios from "axios";

type GlobalContextType = {
  accessToken: string | null;
  setAccessToken: Dispatch<SetStateAction<string | null>>;
  user: string | null;
  setUser: Dispatch<SetStateAction<string | null>>;
};

export const GlobalContext = createContext<GlobalContextType | undefined>(
  undefined
);

export function GlobalProvider({ children }: { children: ReactNode }) {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("/api/auth/me", {
          withCredentials: true,
        });
        if (response.data.user) {
          setUser(response.data.user);
        }
      } catch (error) {
        console.log("Hiba a felhasználó lekérésekor:", error);
        setAccessToken(null);
      }
    };

    fetchUser();
  }, [setAccessToken]);

  return (
    <GlobalContext.Provider
      value={{ accessToken, setAccessToken, user, setUser }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
