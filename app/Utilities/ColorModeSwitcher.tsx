"use client";
import { type FC } from "react";
import { useColorMode } from "@chakra-ui/react";
import { DarkModeToggle } from "react-dark-mode-toggle-2";
const ThemeSwitcher: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div className="flex justify-center items-center border-2 shadow-md shadow-slate-500 border-gray-300 rounded-full">
      <DarkModeToggle
        isDarkMode={colorMode === "dark" ? true : false}
        onChange={toggleColorMode}
        size={70}
      />
    </div>
  );
};

export default ThemeSwitcher;
