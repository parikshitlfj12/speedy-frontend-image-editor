"use client";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

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

const ToggleComponent = () => {
  return <div>Theme Toggle</div>;
};

const Navbar: React.FC = () => {
  const router = useRouter();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("user")) setIsUserLoggedIn(true);
  }, []);

  const menuItems = getMenuItems(router, setIsUserLoggedIn);
  return (
    <nav className="bg-gray-800 p-4">
      <ToggleComponent />
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">Speedy Image Editor</div>
        <ul className="flex space-x-4">
          {menuItems
            .filter((item) => item.isUserLoggedIn === isUserLoggedIn)
            .map((item) => (
              <li key={item.id}>
                <a
                  className="text-white hover:text-gray-300"
                  style={{ cursor: "pointer" }}
                  onClick={item.onClick}
                >
                  {item.name}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
