'use client';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@heroui/react";
import '@/app/globals.css';

export default function NavBar() {
  return (
<<<<<<< HEAD
    <Navbar position="static" className="p-4 font-bold">
      {/* <NavbarBrand>

      </NavbarBrand> */}
      <NavbarContent justify="center" className="flex-1">
=======
    <Navbar position="static" className="bg-gray-800 flex p-5 gap-5 w-full justify-between">
      {/* <NavbarBrand>

      </NavbarBrand> */}
      <NavbarContent className="bg-pink-500">
>>>>>>> 57090a76d6b9ce6cd66adebeefd1193ad0d16676
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
<<<<<<< HEAD
      <NavbarContent justify="end">
=======
      <NavbarContent className="bg-pink-500">
>>>>>>> 57090a76d6b9ce6cd66adebeefd1193ad0d16676
        <NavbarItem>
          <Link href="/contact">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
