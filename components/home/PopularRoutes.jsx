import Link from "next/link";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

import { routes } from "@/data/routes";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function PopularRoutes() {
  return (
    <section className="bg-gray-50">
      <Container>
        <SectionHeading
          subtitle="Popular Routes"
          title="Most Loved Travel Routes In Ujjain"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {routes.slice(0, 3).map((route, i) => (
            <Link
  key={i}
  href={`/explore/${route.slug}`}
  className="relative rounded-[30px] overflow-hidden group h-[420px] shadow-sm hover:shadow-lg transition duration-300"
>
  <Image
    src={route.image}
    alt={route.title}
    fill
    className="object-cover group-hover:scale-110 transition duration-700"
    sizes="(max-width: 768px) 100vw, 33vw"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

  <div className="absolute bottom-0 left-0 p-6 text-white">
    <h3 className="text-2xl font-bold mb-2">{route.title}</h3>
  </div>
</Link>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 px-7 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Explore All Destinations
            <ArrowRight size={18} />
          </Link>
        </div>
      </Container>
    </section>
  );
}