import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-24">
      <Container>

        {/* HEADER */}
        <div className="text-center">
             <p className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-3">
          About Us
        </p> 

      <h2 className="text-3xl md:text-5xl font-bold leading-tight">
        Know About <span className="text-orange-500">RENT BIKE SELF DRIVE</span> Ujjain
      </h2>
        </div>
       

        {/* MAIN GRID */}
        <div className="mt-14 grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT IMAGE */}
          <div className="relative overflow-hidden rounded-[32px] group">
              <Image
              src="/routes/about-map.png"
              alt="RentBike Ujjain"
              width={800}
              height={600}
              className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

            <div className="absolute bottom-5 left-5">
              <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold">
                Trusted Rental Service in Ujjain
              </span>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>

            <h3 className="text-3xl md:text-4xl font-bold leading-tight">
              Bikes, Scooty & Self Drive Cars for Your Ujjain Journey
            </h3>

            <p className="mt-6 text-gray-600 leading-relaxed">
              RentBike Ujjain provides affordable and reliable bike,
              scooty and car rental services for pilgrims and travelers
              visiting Mahakal Temple, Omkareshwar and nearby destinations.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              We focus on comfort, transparency and quick service so you
              can explore Ujjain without any travel stress.
            </p>

            {/* CTA */}
            <Link
              href="/about"
              className="mt-10 inline-flex items-center gap-2 text-orange-500 font-semibold hover:gap-3 transition-all"
            >
              Read More
              <ArrowRight size={18} />
            </Link>

          </div>
        </div>

      </Container>
    </section>
  );
}