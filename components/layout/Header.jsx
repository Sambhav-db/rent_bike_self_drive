"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import Container from "../common/Container";
import Button from "../common/Button";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

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
    { name: "Bikes", href: "/bikes" },
    { name: "About", href: "/about" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    /*  */
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-lg border-gray-100"
            : "bg-transparent"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between h-18 md:h-20">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo/main-logo.png"
                alt="Rent Bike Ujjain"
                width={100}
                height={50}
                className="object-contain"
                priority
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition ${
                    pathname === link.href
                      ? "text-orange-500"
                      : "hover:text-orange-500"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <Button variant="secondary">Call Now</Button>

              <Button>WhatsApp</Button>
            </div>

            <button onClick={() => setOpen(true)} className="lg:hidden">
              <Menu size={28} />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu open={open} setOpen={setOpen} />
    </>
  );
}
