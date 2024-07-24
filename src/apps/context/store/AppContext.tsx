import { useContext } from "react";

import {AppContext} from "./AppContextProvider";

const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }
  return context;
};

export { useAppContext };
