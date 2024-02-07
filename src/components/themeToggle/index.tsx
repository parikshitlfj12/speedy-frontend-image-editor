"use client";
import React from "react";
import { changeTheme } from "@/utils/helper";

type Props = {};

export default function ThemeToggle({}: Props) {
  const handleClick = (themeName: string) => {
    changeTheme(themeName);
  };

  return (
    <button
      onClick={() => handleClick("theme1")}
      className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
    >
      <span>Toggle</span>
    </button>
  );
}
