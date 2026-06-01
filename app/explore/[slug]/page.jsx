import { notFound } from "next/navigation";
import Link from "next/link";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";

import { routes } from "@/data/routes";

import { MapPin, Clock3, Route, ArrowRight, Star } from "lucide-react";
import Image from "next/image";

export async function generateStaticParams() {
  return routes.map((route) => ({
    slug: route.slug,
  }));
}

export default async function DestinationPage({ params }) {
  const { slug } = await params;

  const route = routes.find((item) => item.slug === slug);

  if (!route) {
    notFound();
  }

  const relatedRoutes = routes
    .filter((item) => item.slug !== route.slug)
    .slice(0, 3);

  return (
    <>
      <Header />

      {/* HERO */}
      <section className="relative h-[80vh] min-h-[650px] overflow-hidden">
        <img
          src={route.image}
          alt={route.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <Container>
          <div className="relative z-10 flex flex-col justify-center h-[80vh] text-white max-w-3xl">
            <span className="inline-flex w-fit px-4 py-2 rounded-full bg-white/15 backdrop-blur-md text-sm font-medium">
              {route.category}
            </span>

            <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight">
              {route.title}
            </h1>

            <p className="mt-6 text-lg text-white/90 leading-relaxed">
              {route.description}
            </p>
          </div>
        </Container>
      </section>

      {/* QUICK INFO */}
      <section className="relative z-20">
        <Container>
          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-white rounded-[28px] p-6 shadow-lg">
              <MapPin className="text-orange-500 mb-4" />
              <p className="text-sm text-gray-500">Distance</p>
              <h3 className="font-bold text-xl mt-1">{route.distance}</h3>
            </div>

            <div className="bg-white rounded-[28px] p-6 shadow-lg">
              <Clock3 className="text-orange-500 mb-4" />
              <p className="text-sm text-gray-500">Recommended Duration</p>
              <h3 className="font-bold text-xl mt-1">{route.duration}</h3>
            </div>

            <div className="bg-white rounded-[28px] p-6 shadow-lg">
              <Route className="text-orange-500 mb-4" />
              <p className="text-sm text-gray-500">Best For</p>
              <h3 className="font-bold text-xl mt-1">{route.bestFor}</h3>
            </div>
          </div>
        </Container>
      </section>

      {/* ABOUT */}
      <div className="py-12">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold">About {route.title}</h2>

              <p className="mt-6 text-gray-600 leading-8">
                {route.description}
              </p>

              <p className="mt-6 text-gray-600 leading-8">
                Whether you are planning a spiritual visit, local sightseeing
                experience or a memorable road trip around Ujjain, this
                destination offers a unique blend of culture, history and local
                experiences. Thousands of visitors explore this place every year
                as part of their Ujjain journey.
              </p>
            </div>

            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[36px]">
              <Image
                src={route.image}
                alt={route.title}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
        </Container>
      </div>

      {/* HIGHLIGHTS */}
      <section className="py-24 bg-gray-50">
        <Container>
          <h2 className="text-4xl font-bold text-center">Highlights</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {(route.highlights || []).map((highlight, index) => (
              <div
                key={index}
                className="bg-white rounded-[28px] p-6 text-center shadow-sm hover:shadow-lg transition"
              >
                <Star className="mx-auto text-orange-500" size={26} />

                <h3 className="mt-4 font-semibold">{highlight}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24">
        <Container>
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-[40px] p-12 md:p-16 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold">
              Need A Ride For This Trip?
            </h2>

            <p className="mt-5 text-white/90 max-w-2xl mx-auto">
              Rent a bike, scooty or self-drive car and explore Ujjain and
              nearby destinations at your own pace.
            </p>

            <Link
              href="/bikes"
              className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-full font-semibold mt-8"
            >
              Explore Our Fleet
              <ArrowRight size={18} />
            </Link>
          </div>
        </Container>
      </section>

      {/* RELATED */}
      <section className="pb-24">
        <Container>
          <h2 className="text-4xl font-bold text-center">
            Explore More Destinations
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {relatedRoutes.map((item) => (
              <Link
                key={item.slug}
                href={`/explore/${item.slug}`}
                className="group rounded-[30px] overflow-hidden bg-white shadow-sm hover:shadow-xl transition"
              >
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold">{item.title}</h3>

                  <p className="text-gray-600 mt-2 line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
