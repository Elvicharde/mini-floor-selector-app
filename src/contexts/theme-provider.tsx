import { Themes } from "@/interfaces/shared.models";
import { createContext, useContext, useState, type ReactNode } from "react";

export type Theme = {
  background: string;
  mode?: Themes.LIGHT | Themes.DARK;
};
type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>({
    background: "bg-gray-50",
    mode: Themes.LIGHT,
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a valid Theme Provider");
  }
  return context;
};
