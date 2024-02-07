"use client";
import React, { useState } from "react";
import { changeTheme } from "@/utils/helper";
import Dropdown from "@/components/dropdown";

type Props = {};

export default function ThemeToggle({}: Props) {
  const dropdownItems = [
    { label: "Light Serenity", onClick: () => changeTheme("") },
    { label: "Dark Breeze", onClick: () => changeTheme("theme1") },
    { label: "Forest Elegance", onClick: () => changeTheme("theme2") },
    { label: "Desert Oasis", onClick: () => changeTheme("theme3") },
  ];

  return <Dropdown items={dropdownItems} />;
}
