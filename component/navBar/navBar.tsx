'use client';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@heroui/react";
import '@/app/globals.css';

export default function NavBar() {
  return (
    <Navbar position="static" className="bg-gray-800 flex p-5 gap-5 w-full justify-between">
      {/* <NavbarBrand>

      </NavbarBrand> */}
      <NavbarContent className="bg-pink-500">
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
      <NavbarContent className="bg-pink-500">
        <NavbarItem>
          <Link href="/contact">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
