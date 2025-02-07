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
    <div className="bg-white sticky top-0 z-50">
      <div className="mx-auto  max-w-screen-2xl ">
        <div className="flex justify-between px-4 items-center  h-[3.75rem] ">
          <Link href={`/`} onClick={() => handleLinkClick("Home")}>
            <div className="flex gap-1 justify-center items-center">
              <Image
                src="/images/logo.jpeg"
                alt="logo"
                width={50}
                height={50}
              />
              <p className="text-2xl font-bold">Motion Educare School</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="md:flex gap-1 hidden text-xl font-medium px-4 ">
            {navigation.map((item, i) => (
              <Link
                href={item.path}
                key={i}
                onClick={() => handleLinkClick(item.name)}
                className={`flex items-center hover:text-blue-800  gap-1 px-4 py-2 rounded-lg ${
                  item.active ? "text-blue-800" : ""
                } `}
              >
                <item.icon className="" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Navigation Items */}
      <div className="md:hidden fixed w-full justify-center sm:px-8 px-4 items-center bottom-0 bg-gradient-to-r from-blue-100 to-gray-100 z-50">
        <div className="flex justify-between text-xl font-medium">
          {navigation.map((item, i) => (
            <Link
              href={item.path}
              key={i}
              onClick={() => handleLinkClick(item.name)}
              className={`flex flex-col items-center hover:text-blue-800 justify-center  px-2 py-2 ${
                item.active ? "text-blue-800" : ""
              } `}
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
