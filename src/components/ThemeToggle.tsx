import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const { resolvedTheme, systemTheme, setTheme } = useTheme();
  const isDark = resolvedTheme !== "light";

  const toggle = () => {
    const next = isDark ? "light" : "dark";
    // Picking the same mode as the device goes back to following the device setting.
    setTheme(next === systemTheme ? "system" : next);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </Button>
  );
};

export default ThemeToggle;
