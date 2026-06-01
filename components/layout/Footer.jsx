import Image from "next/image";
import Link from "next/link";

import Container from "../common/Container";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-10 pb-0">
      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Image
                src="/logo/footer-logo.png"
                alt="RentBike Ujjain"
                width={200}
                height={52}
                className=""
              />
              {/* 
              <div>
                <h2 className="text-3xl font-bold">
                  Rent Bike Self Drive <span className="text-orange-500">Ujjain</span>
                </h2> 
              </div> */}
            </div>

            <p className="text-gray-400 leading-relaxed">
              Premium bike, scooty and self drive car rental service in Ujjain.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-5">Quick Links</h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <Link href="/" className="hover:text-orange-500 transition">
                Home
              </Link>
              <Link href="/about" className="hover:text-orange-500 transition">
                About
              </Link>
              <Link href="/bikes" className="hover:text-orange-500 transition">
                Bikes
              </Link>
              <Link href="/explore" className="hover:text-orange-500 transition">
                Explore
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-5">Rental Services</h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <Link href="/bikes" className="hover:text-orange-500 transition">
                Scooty Rental
              </Link>

              <Link href="/bikes" className="hover:text-orange-500 transition">
                Bike Rental
              </Link>

              <Link href="/bikes" className="hover:text-orange-500 transition">
                Premium Bikes
              </Link>

              <Link href="/bikes" className="hover:text-orange-500 transition">
                Self Drive Cars
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-5">Contact</h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <div className="flex items-center gap-3 hover:text-orange-500 transition">
                <MapPin size={18} className="text-orange-500" />
                <p>Ujjain, Madhya Pradesh</p>
              </div>

              <div className="flex items-center gap-3 hover:text-orange-500 transition">
                <Phone size={18} className="text-orange-500" />
                <p>+91 9999999999</p>
              </div>

              <div className="flex items-center gap-3 hover:text-orange-500 transition">
                <Mail size={18} className="text-orange-500" />
                <p>info@rentbikeujjain.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-4 text-center text-gray-500 text-sm">
          © 2026 <span className="text-orange-500">RentBikeSelfDrive</span> |
          All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
}
