"use client";
import { svg } from "@/assets/svgs";
import Button from "@/components/atoms/Button";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const navBarItems = [
    { label: "DINE WITH US", href: "#" },
    { label: "PLAN YOUR VISIT", href: "#" },
    { label: "EVENTS", href: "#" },
    { label: "VIEW GROVES MAP", href: "#" },
    { label: "OUR STORY", href: "#" },
    { label: "Contact US", href: "#" },
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <nav>
      <div className="flex items-center justify-between ">
        <ul className="text-white hidden lg:flex w-full   justify-between border-t-2 border-b-2 border-[#514c4c] px-[6vw] py-2">
          {navBarItems.map(({ label, href }, index) => (
            <Link href={href} key={index}>
              <small> {label}</small>
            </Link>
          ))}
        </ul>

        {/* Hamburger Icon for mobile */}
        <div className="px-[6vw] flex justify-between items-center  lg:hidden w-full">
          <img width={220} height={50} src="/logo.png" />
          <button className=" text-white" onClick={toggleSidebar}>
            {svg.hamburger}
          </button>
        </div>
      </div>

      {/* Sidebar for mobile */}
      <div
        ref={sidebarRef}
        className={`lg:hidden fixed w-full top-0 left-0 h-full p-4 transition-transform ${
          isSidebarOpen ? "transform-none" : "-translate-x-full"
        } bg-gradient-to-r from-[#283606] to-[#0F1500]`}
      >
        <div className="flex justify-between pb-3">
          <img
            className="block lg:hidden"
            width={220}
            height={50}
            src="/logo.png"
          />
          <button
            className="block lg:hidden text-white"
            onClick={toggleSidebar}
          >
            {svg.close}
          </button>
        </div>

        <ul className="text-white flex flex-col w-full mt-5">
          {navBarItems.map(({ label, href }, index) => (
            <Link href={href} key={index}>
              <li className="border-t border-b py-3.5">{label}</li>
            </Link>
          ))}
        </ul>
        <div className="flex gap-7 flex-col">
          <div className="flex gap-3 mt-11">
            {svg.dropdownIcon}
            <img src={"/flag.png"} width={30} height={30} alt={"flag"} />
            <p>English</p>
          </div>
          <div>
            <Button buttonLabel={"Log in"} />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
