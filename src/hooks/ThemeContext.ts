import { createContext, useContext } from "react";
import { Theme }  from "../@types/Theme";
import { ThemeContextType } from "../@types/ThemeContextType";

export const ThemeContext = createContext<ThemeContextType>({ theme: Theme.Dark, setTheme: theme => console.warn('no theme provider')});
export const useTheme = () => useContext(ThemeContext);
