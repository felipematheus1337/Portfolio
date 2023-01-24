import { Theme } from "./Theme";

export type ThemeContextType = {
    theme: Theme;
    setTheme: (Theme: Theme) => void;
}