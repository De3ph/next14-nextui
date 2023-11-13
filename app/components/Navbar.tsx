"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

import { usePathname } from "next/navigation";

export default function App() {
  const links = [
    { href: "/", label: "Home" },
    { href: "#", label: "Catalog" },
    { href: "#", label: "About" },
    { href: "/contact", label: "Contact" },
  ];
  const curr = usePathname(); // get current path

  return (
    <Navbar disableAnimation={true}>
      <NavbarBrand>
        <p className="font-bold text-inherit">Meow</p>
      </NavbarBrand>

      {/* small screen */}
      <NavbarMenuToggle className="sm:hidden" />

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
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {links.map(({ href, label }) => (
          <NavbarItem key={`${href}${label}`} isActive={curr === href}>
            <Link color={curr === href ? "primary" : "foreground"} href={href}>
              {label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent className="hidden sm:block" />
    </Navbar>
  );
}
