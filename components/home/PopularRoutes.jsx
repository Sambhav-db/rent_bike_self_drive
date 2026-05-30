import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

import { routes } from "@/data/routes";

export default function PopularRoutes() {
  return (
    <section className="bg-gray-50">

      <Container>

        <SectionHeading
          subtitle="Popular Routes"
          title="Most Loved Travel Routes In Ujjain"
        />

        <div className="grid md:grid-cols-3 gap-6">

          {routes.map((route, i) => (
            <div
              key={i}
              className="relative rounded-[30px] overflow-hidden group h-[420px]"
            >

              <img
                src={route.image}
                alt={route.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              <div className="absolute bottom-0 left-0 p-6 text-white">

                <h3 className="text-2xl font-bold mb-2">
                  {route.title}
                </h3>

                <p className="text-orange-300 font-medium">
                  Starting {route.price}
                </p>

              </div>

            </div>
          ))}

        </div>

      </Container>

    </section>
  );
}