"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // avoid hydration errors
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  function handleClick(e: any) {
    e.preventDefault();
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div>
      <button
        className="border-2 border-zinc-500 text-2xl w-14 h-14 text-black bg-gradient-to-br from-primary-900 to-secondary-100 p-2 hover:cursor-pointer hover:from-primary-100 hover:to-primary-900"
        onClick={(e) => handleClick(e)}
        aria-hidden
      >
        {theme === "light" ? "🌞" : "🌚"}
      </button>
    </div>
  );
}
