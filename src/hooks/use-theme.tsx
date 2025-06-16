import { useTheme, type Theme } from "@/contexts/theme-provider";
import { Themes } from "@/interfaces/shared.models";
import { useEffect } from "react";

const useSetLayoutTheme = ({ background, mode = Themes.LIGHT }: Theme) => {
  const { setTheme } = useTheme();
  useEffect(() => {
    setTheme({ background, mode }); // light gray for layout page

    return () => setTheme({ background: "#F9FAFB", mode: Themes.LIGHT }); // reset on unmount
  }, [setTheme]);
  return;
};

export default useSetLayoutTheme;
