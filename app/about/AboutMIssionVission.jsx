import Container from "@/components/common/Container";
import { Rocket, Target } from "lucide-react";

export default function AboutMissionVision() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid md:grid-cols-2 gap-10">

          {/* MISSION CARD */}
          <div className="relative group rounded-[36px] p-[1px] bg-gradient-to-br from-orange-200 via-orange-100 to-transparent hover:from-orange-300 transition">

            <div className="bg-white rounded-[36px] p-8 h-full shadow-sm group-hover:shadow-xl transition duration-300">

              {/* ICON */}
              <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center mb-6 group-hover:scale-105 transition">
                <Rocket className="w-7 h-7 text-orange-500" />
              </div>

              <h3 className="text-3xl font-bold mb-4">
                Our Mission
              </h3>

              <p className="text-gray-600 leading-relaxed text-lg">
                To provide safe, affordable and premium self-drive bikes,
                scooties and cars that make exploring Ujjain effortless,
                comfortable and memorable for every traveler.
              </p>

              {/* subtle badge */}
              <div className="mt-6 inline-flex items-center text-sm text-orange-500 font-semibold">
                Driving comfort & trust in Ujjain
              </div>
            </div>
          </div>

          {/* VISION CARD */}
          <div className="relative group rounded-[36px] p-[1px] bg-gradient-to-br from-orange-200 via-orange-100 to-transparent hover:from-orange-300 transition">

            <div className="bg-white rounded-[36px] p-8 h-full shadow-sm group-hover:shadow-xl transition duration-300">

              {/* ICON */}
              <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center mb-6 group-hover:scale-105 transition">
                <Target className="w-7 h-7 text-orange-500" />
              </div>

              <h3 className="text-3xl font-bold mb-4">
                Our Vision
              </h3>

              <p className="text-gray-600 leading-relaxed text-lg">
                To become Ujjain’s most trusted and loved travel mobility
                brand by offering reliable, transparent and high-quality
                rental services for every visitor.
              </p>

              {/* subtle badge */}
              <div className="mt-6 inline-flex items-center text-sm text-orange-500 font-semibold">
                Building the future of local travel
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}