"use client";
import { navigationItems } from "@/constant/header";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import the useRouter hook from next/navigation
import { useState, useEffect } from "react";

export function Header() {
  const router = useRouter(); // Initialize useRouter
  const [navigation, setNavigation] = useState(navigationItems);

  useEffect(() => {
    const currentRoute = window.location.pathname.split("/")[1];
    const updatedNavigation = navigationItems.map((nav) => {
      if (
        nav.path === `/${currentRoute}` ||
        (currentRoute === "" && nav.path === "/")
      ) {
        return { ...nav, active: true };
      } else {
        return { ...nav, active: false };
      }
    });
    setNavigation(updatedNavigation);
  }, [router]);

  const handleLinkClick = (index: string) => {
    const updatedNavigation = navigation.map((nav) => {
      if (nav.name === index) {
        return { ...nav, active: true };
      } else {
        return { ...nav, active: false };
      }
    });
    setNavigation(updatedNavigation);
  };

  return (
    <div className=" bg-gray-900 sticky top-0 z-50 shadow-lg">
      <div className="mx-auto max-w-screen-2xl">
        <div className="flex justify-between px-4 items-center h-[4.5rem]">
          <Link href={`/`} onClick={() => handleLinkClick("Home")}>
            <div className="flex gap-1 justify-center items-center">
              <Image
                src="/images/logo.jpeg"
                className="rounded-full"
                alt="logo"
                width={40}
                height={40}
              />
              <p className="sm:text-3xl text-2xl font-extrabold bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent shadow-md hover:shadow-xl transition duration-300">
                Motion Educare School
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="md:flex gap-1 hidden text-xl font-medium px-4 text-white">
            {navigation.map((item, i) => (
              <Link
                href={item.path}
                key={i}
                onClick={() => handleLinkClick(item.name)}
                className={`flex items-center hover:text-yellow-300 gap-1 px-4 py-2 rounded-lg transition duration-300 ${
                  item.active ? "text-yellow-300 font-semibold" : "text-white"
                }`}
              >
                <item.icon className="" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Navigation Items */}
      <div className="md:hidden fixed w-full justify-center sm:px-8 px-4 items-center bottom-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 z-50">
        <div className="flex justify-between text-xl font-medium text-white">
          {navigation.map((item, i) => (
            <Link
              href={item.path}
              key={i}
              onClick={() => handleLinkClick(item.name)}
              className={`flex flex-col items-center hover:text-yellow-300 justify-center px-2 py-2 transition duration-300 ${
                item.active ? "text-yellow-300" : "text-white"
              }`}
            >
              <item.icon />
              <p className="text-[12px]">{item.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
