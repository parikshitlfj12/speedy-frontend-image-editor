"use client";
import React, { useState } from "react";
import { changeTheme } from "@/utils/helper";
import Dropdown from "@/components/dropdown";

type Props = {};

export default function ThemeToggle({}: Props) {
  const dropdownItems = [
    { label: "theme1", onClick: () => changeTheme("theme1") },
    { label: "theme2", onClick: () => changeTheme("theme2") },
    { label: "theme3", onClick: () => changeTheme("theme3") },
  ];

  return <Dropdown items={dropdownItems} />;
}
