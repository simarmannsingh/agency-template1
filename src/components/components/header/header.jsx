"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { fonts } from "@/lib/utils";

import { Button } from "@/components/ui/button";

// TODO: Change href links later when pages are created
const headerLinks = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/" },
  { name: "Discounts", href: "/" },
  { name: "Contact", href: "/" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="sticky top-0 z-50 w-full h-20 bg-white/[0.4] dark:bg-black/[0.4] backdrop-blur-md border-b border-black/[0.2] dark:border-white/[0.2] px-4 py-2 flex items-center justify-between">
      {/* Desktop Navigation */}
      <ul className="hidden md:flex justify-end items-center space-x-4">
        {headerLinks.map((link) => (
          <li
            key={link.name}
            className="text-lg text-black/[0.8] cursor-pointer dark:text-white/[0.8] px-4 transition-colors duration-300 ease-linear hover:text-accent hover:dark:text-accent"
          >
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}

          <Button
            variant="primary"
            asChild
            className={`mx-4 ${fonts.josefine} font-bold flex align-center`}
          >
            <Link href="#" target="_blank">
              Book Appointment
            </Link>
          </Button>
      </ul>

      {/* Mobile Top Right Section: CTA + Hamburger */}
      <div className="flex w-full justify-between space-x-2 md:hidden">
        {/* Hamburger */}
        <button className="text-black dark:text-white" onClick={toggleMenu}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Book Appointment CTA (mobile only) */}
        <Button
          variant="primary"
          asChild
          className={`${fonts.josefine} font-bold`}
        >
          <Link href="#" target="_blank">
            Book Appointment
          </Link>
        </Button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white dark:bg-black flex flex-col py-4 px-4 space-y-3 items-start md:hidden shadow-md">
          <ul>
            {headerLinks.map((link) => (
              <li
                key={link.name}
                className="text-lg text-black/[0.8] dark:text-white/[0.8] transition-colors duration-300 hover:text-accent hover:dark:text-accent"
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
