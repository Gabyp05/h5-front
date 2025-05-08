"use client";

import Image from "next/image";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import { useRef, useState } from "react";
import { menu } from "../utils/menu";
import { Button } from "./ui/button";
import { useClickOutsideAndScrollClose } from "../hooks/useClickOutsideAndScrollClose";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useClickOutsideAndScrollClose(navRef, () => setIsOpen(false), isOpen);

  const NavLink = ({ label }) => (
    <LinkScroll
      onClick={() => setIsOpen(false)}
      to={label.toLowerCase()}
      offset={-20}
      spy
      smooth
      className="text-sm font-bold leading-relaxed text-white no-underline uppercase transition-colors duration-500 cursor-pointer"
    >
      {label}
    </LinkScroll>
  );

  return (
    <header className="container absolute top-0 z-50 flex items-center justify-center w-full mx-auto xl:px-8">
      <div
        ref={navRef}
        className={`container mx-auto relative z-30 flex flex-col justify-between w-full py-5 px-2.5 lg:bg-black/30 mt-2
                    overflow-hidden transition-[padding,max-height] duration-500 ease-in-out
                    ${
                      isOpen
                        ? "rounded-5xl max-h-[600px] bg-black/30 backdrop-blur-md"
                        : "rounded-full max-h-[90px]"
                    } lg:flex-row lg:items-center lg:max-h-none lg:rounded-full lg:px-7
       `}
      >
        <div className="flex items-center justify-between w-full lg:w-auto">
          <Link href="/">
            <Image
              src="/images/play-attention_logo.webp"
              alt="Logo Play Attention"
              width={200}
              height={48}
              className="hidden object-cover lg:block"
            />
            <Image
              src="/images/Play-Attention-Logo-Responsive.svg"
              alt="Logo Play Attention"
              width={80}
              height={40}
              className="object-cover lg:hidden"
            />
          </Link>

          <Button
            variant="ghost"
            asChild
            className="z-20 flex items-center lg:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <img
              src={`/images/${isOpen ? "close" : "Hamburger-Button"}.webp`}
              alt="Menu"
              width={57}
              height={36}
              className="object-contain"
            />
          </Button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden text-white lg:flex lg:items-center lg:space-x-6">
          <ul className="flex space-x-6">
            {menu.navbar.map((item) => (
              <li key={item.label}>
                <NavLink label={item.label} />
              </li>
            ))}
          </ul>
        </nav>

        {/* Botones ocultos */}
        {/* <div className="flex-row items-center hidden lg:flex gap-x-2">
          <Button variant="outline" className="font-semibold text-white">
            CONTACTÁNOS
          </Button>
          <Button className="font-semibold text-primary">INICIÁ SESIÓN</Button>
        </div> */}

        {/* Mobile Nav */}
        {isOpen && (
          <nav className="flex flex-col items-center mt-4 space-y-4 text-white lg:hidden navbar px-7">
            <ul className="flex flex-col items-center w-full space-y-3">
              {menu.navbar.map((item) => (
                <li key={item.label}>
                  <NavLink label={item.label} />
                </li>
              ))}
            </ul>
            {/* botones ocultos */}
            {/* <div className="flex flex-col items-center w-full space-y-2">
              <Button
                variant="outline"
                className="w-full font-semibold text-white"
                onClick={() => setIsOpen(false)}
              >
                CONTACTÁNOS
              </Button>
              <Button
                onClick={() => setIsOpen(false)}
                className="w-full font-semibold text-primary"
              >
                INICIÁ SESIÓN
              </Button>
            </div> */}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
