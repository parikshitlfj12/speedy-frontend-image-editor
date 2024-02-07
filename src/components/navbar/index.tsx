"use client";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import ThemeToggle from "../themeToggle";
import Speedy_Image from "../../assets/images/speedy_icon.svg";
import Image from "next/image";

const getMenuItems: (
  router: AppRouterInstance,
  setIsUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
) => MenuItems[] = (router, setIsUserLoggedIn) => {
  return [
    {
      id: "Home",
      name: "Home",
      onClick: () => {},
      isUserLoggedIn: true,
    },
    {
      id: "About",
      name: "About",
      onClick: () => {},
      isUserLoggedIn: true,
    },
    {
      id: "Contact",
      name: "Contact",
      onClick: () => {},
      isUserLoggedIn: true,
    },
    {
      id: "Logout",
      name: "Logout",
      onClick: () => {
        localStorage.removeItem("user");
        setIsUserLoggedIn(false);
        router.push("/login");
      },
      isUserLoggedIn: true,
    },
    {
      id: "Login",
      name: "Login",
      onClick: () => {
        router.push("/login");
      },
      isUserLoggedIn: false,
    },
    {
      id: "Sign-up",
      name: "Sign-up",
      onClick: () => {
        router.push("/signup");
      },
      isUserLoggedIn: false,
    },
  ];
};

const Navbar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("user")) setIsUserLoggedIn(true);
  }, [pathname]);

  const menuItems = getMenuItems(router, setIsUserLoggedIn);
  return (
    <nav className="bg-primary p-4 border-b-2 mb-4">
      <div className="container-fluid  flex justify-between items-center">
        <div className="">
          <Image src={Speedy_Image} alt="Speedy_Image" className="h-12 w-28" />
        </div>

        <ul className="flex space-x-4 items-center">
          {menuItems
            .filter((item) => item.isUserLoggedIn === isUserLoggedIn)
            .map((item) => (
              <li key={item.id}>
                <a
                  className="text-typography"
                  style={{ cursor: "pointer" }}
                  onClick={item.onClick}
                >
                  {item.name}
                </a>
              </li>
            ))}
          <li key={"Theme Toggle"}>
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
