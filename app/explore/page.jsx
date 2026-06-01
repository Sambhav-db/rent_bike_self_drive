import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import Link from "next/link";

import { routes } from "@/data/routes";
import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";

export default function ExplorePage() {
  return (
    <>
      {" "}
      <Header />
      <div className="pt-28 pb-24">
        <Container>
          <SectionHeading
            subtitle="Explore"
            title="Explore Ujjain & Nearby Destinations"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {routes.map((route) => (
              <Link
                key={route.slug}
                href={`/explore/${route.slug}`}
                className="group bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
              >
                <div className="relative overflow-hidden">
                  <div className="relative w-full h-[260px]">
                    <Image
                      src={route.image}
                      alt={route.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-orange-500 text-sm font-medium mb-3">
                    <MapPin size={16} />
                    {route.distance}
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{route.title}</h3>

                  <p className="text-gray-600 leading-relaxed line-clamp-3">
                    {route.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-orange-500 font-semibold">
                    Explore Details
                    <ArrowRight size={18} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-24 bg-orange-50 rounded-[40px] p-10 md:p-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Places To Visit In Ujjain & Nearby Destinations
            </h2>

            <p className="text-gray-600 leading-8">
              Ujjain is one of India's most important spiritual cities,
              attracting millions of visitors every year. From the world-famous
              Mahakaleshwar Jyotirlinga and Kal Bhairav Temple to Ram Ghat and
              Mangalnath Temple, the city offers a rich blend of spirituality
              and history. Travelers can also explore nearby destinations such
              as Omkareshwar, Baglamukhi Temple and Maheshwar for memorable road
              trips. Renting a bike, scooty or self-drive car gives visitors
              complete flexibility to discover these attractions at their own
              pace.
            </p>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}
