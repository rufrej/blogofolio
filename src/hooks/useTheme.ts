import { useLayoutEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("app-theme") || "dark"
  );

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("app-theme", theme);
  }, [theme]);

  return { theme, setTheme };
};
