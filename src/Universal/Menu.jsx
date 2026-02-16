"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  NavbarButton,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "@/ui/resizable-navbar";

import { useState } from "react";

export default function HomePage() {
  const [open, setOpen] = useState(false);

  const items = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <div>
    <div className="details">
      <div className="bg-[#232323] text-[#cecece] h-8  text-center p-2 tracking-wide  ">
        <pre>  Email : info@longayu.com</pre>
      </div>
    </div>
    <Navbar className="bg-[#182d28]/90 ">
{/* DESKTOP */}
        <NavBody >
          <NavbarLogo />
          <NavItems items={items} />
          <div className="flex gap-2">
            {/* <NavbarButton variant="secondary">Login</NavbarButton> */}
            {/* <NavbarButton variant="primary">Book Now</NavbarButton> */}
          </div>
        </NavBody>

        {/* MOBILE */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={open}
              onClick={() => setOpen(!open)}
            />
          </MobileNavHeader>

          <MobileNavMenu isOpen={open} onClose={() => setOpen(false)}>
            {items.map((item) => (
              <a
  key={item.name}
  href={item.link}
  onClick={() => setOpen(false)}
  className="text-black dark:text-white hover:bg-black hover:text-white px-3 py-2 rounded-md transition hover:scale-120"
>

                {item.name}
              </a>
            ))}
            {/* <NavbarButton variant="primary">Book Now</NavbarButton> */}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      
    </div>
  );
}
