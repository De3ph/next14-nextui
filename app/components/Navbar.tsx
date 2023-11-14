"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";

import { usePathname } from "next/navigation";

export default function NavbarComponent() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/catalog", label: "Catalog" },
    { href: "#", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const curr = usePathname(); // get current path

  return (
    <Navbar
      disableAnimation={true}
      className="mb-4"
      classNames={{
        base: "px-0 justify-between max-w-full",
        wrapper: "px-0 max-w-full",
      }}
    >
      {/* small screen */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
        <NavbarBrand>
          <p className="font-bold text-inherit">Meow</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarMenu>
        {links.map(({ href, label }) => (
          <NavbarMenuItem key={`${href}${label}`} isActive={curr === href}>
            <Link color={curr === href ? "primary" : "foreground"} href={href}>
              {label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>

      {/* large screen */}

      <NavbarContent className="hidden sm:flex">
        <NavbarBrand>
          <p className="font-bold xl:text-xl">Meow</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="center" className="hidden sm:flex gap-4 md:gap-8">
        {links.map(({ href, label }) => (
          <NavbarItem key={`${href}${label}`} isActive={curr === href}>
            <Link color={curr === href ? "primary" : "foreground"} href={href}>
              <p className="xl:text-xl">{label}</p>
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent className="hidden sm:block" />
    </Navbar>
  );
}
