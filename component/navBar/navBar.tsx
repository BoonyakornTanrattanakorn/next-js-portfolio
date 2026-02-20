'use client';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@heroui/react";

export default function NavBar() {
  return (
    <Navbar position="static" className="p-4 font-bold">
      {/* <NavbarBrand>

      </NavbarBrand> */}
      <NavbarContent justify="center" className="flex-1">
        <NavbarItem>
          <Link href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/blog">
            Blog
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/projects">
            Project
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link href="/contact">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
