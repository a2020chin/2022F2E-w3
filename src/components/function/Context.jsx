import { createContext, useContext } from "react";

export const ProgressContext = createContext(null);

export const useProgress = () => {
    return useContext(ProgressContext);
};