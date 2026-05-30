import Link from "next/link";

import Container from "../common/Container";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10">

      <Container>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          <div>

            <h2 className="text-3xl font-bold mb-5">
              RentBike{" "}
              <span className="text-orange-500">
                Ujjain
              </span>
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Premium bike, scooty and self drive car rental
              service in Ujjain.
            </p>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">

              <Link href="/">Home</Link>
              <Link href="/bikes">Bikes</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>

            </div>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Rental Services
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">

              <p>Scooty Rental</p>
              <p>Bike Rental</p>
              <p>Premium Bikes</p>
              <p>Self Drive Cars</p>

            </div>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">

              <p>Ujjain, Madhya Pradesh</p>
              <p>+91 9999999999</p>
              <p>info@rentbikeujjain.com</p>

            </div>

          </div>

        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          © 2026 RentBike Ujjain. All Rights Reserved.
        </div>

      </Container>

    </footer>
  );
}