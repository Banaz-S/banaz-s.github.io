import { useEffect, useState } from "react";

import { HiMoon, HiSun } from "react-icons/hi";

const ThemeToggle = () => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="
        w-12
        h-12
        rounded-full
        border
        border-black/10
        dark:border-white/10
        bg-black/5
        dark:bg-white/5
        backdrop-blur-xl
        flex
        items-center
        justify-center
        hover:scale-110
        transition-all
        duration-300
      "
    >
      {dark ? (
        <HiSun className="text-xl text-white" />
      ) : (
        <HiMoon className="text-xl text-black" />
      )}
    </button>
  );
};

export default ThemeToggle;
