"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import Container from "../common/Container";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },    
    { name: "About", href: "/about" },
    { name: "Bikes", href: "/bikes" },
    { name: "Explore", href: "/explore" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    /*  */
    <>
      <header className="fixed top-0 left-0 w-full z-50 px-3 md:px-5 pt-3">
        <Container>
          <div
            className={`
    h-16 md:h-20
    rounded-2xl md:rounded-full
    transition-all duration-500
    border border-white/20
    backdrop-blur-2xl
    flex items-center justify-between

    ${
      scrolled
        ? `
        bg-white/70
        shadow-[0_8px_40px_rgba(0,0,0,0.08)]
        `
        : `
        bg-white/10
        `
    }
  `}
          >
            <Link href="/" className="p-5 flex items-center">
              <img
                src="/logo/header-logo.png"
                alt="Rent Bike Ujjain"
                width={200}
                height={52}
                className="object-contain"
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
        relative
        px-5 py-2.5
        rounded-full
        text-sm font-medium
        transition-all duration-300

        ${
          pathname === link.href
            ? `
            bg-orange-500
            text-white
            shadow-lg
            `
            : `
            text-gray-700
            hover:bg-white/50
            `
        }
      `}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3 pr-3">
              <a
                href="tel:+91xxxxxxxxxx"
                className="
      px-5 py-2.5
      rounded-full
      bg-white/60
      backdrop-blur
      hover:bg-white
      transition
      font-medium
    "
              >
                Call
              </a>

              <a
                href="https://wa.me/91xxxxxxxxxx"
                className="
      px-5 py-2.5
      rounded-full
      bg-orange-500
      text-white
      hover:scale-105
      transition-all
      shadow-lg
      shadow-orange-500/30
      font-medium
    "
              >
                WhatsApp
              </a>
            </div>

            <button
              onClick={() => setOpen(true)}
              className="
    lg:hidden
    mr-3
    h-11 w-11
    rounded-xl
    bg-white/30
    backdrop-blur-xl
    flex items-center justify-center
    border border-white/30
  "
            >
              <Menu size={22} />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu open={open} setOpen={setOpen} />
    </>
  );
}
