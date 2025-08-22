import { GlobalContext } from "@/GlobalContext/GlobalContext";
import { useContext } from "react";

export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (!context)
    throw new Error("useGlobalContext must be used within GlobalProvider");
  return context;
}
