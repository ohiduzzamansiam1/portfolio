"use client";

import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa6";

export default function ThemeToggleButton() {
  const { setTheme } = useTheme();

  return (
    <>
      <FaSun
        className="cursor-pointer hidden dark:inline-block transition"
        size={24}
        onClick={() => {
          setTheme("light");
        }}
      />
      <FaMoon
        className="cursor-pointer inline-block dark:hidden transition"
        size={24}
        onClick={() => {
          setTheme("dark");
        }}
      />
    </>
  );
}
