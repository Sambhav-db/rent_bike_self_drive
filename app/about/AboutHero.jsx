import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import {
  Landmark,
  MapPinned,
  Bike,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function AboutHero() {
  return (
    <div className="">
      <Container>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-medium text-sm">
              About RentBike Ujjain
            </span>

            <h3 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
              Your Trusted Bike, Scooty & Car Rental Partner In Ujjain
            </h3>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              RentBike Ujjain provides affordable bike rentals,
              scooty rentals and self-drive cars for Mahakal
              Darshan, Omkareshwar trips, local sightseeing,
              business travel and weekend rides.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Our mission is to make transportation simple,
              affordable and reliable for every traveler visiting Ujjain.
            </p>

            <div className="mt-10 space-y-8">

              {/* Mahakal */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center shrink-0">
                  <Landmark className="text-orange-500" size={22} />
                </div>

                <div>
                  <h4 className="font-bold text-lg">
                    Mahakaleshwar Temple Access
                  </h4>
                  <p className="text-gray-600 mt-1">
                    Easy and comfortable access to Mahakal and nearby temples.
                  </p>
                </div>
              </div>

              {/* Ram Ghat */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center shrink-0">
                  <MapPinned className="text-orange-500" size={22} />
                </div>

                <div>
                  <h4 className="font-bold text-lg">
                    Ram Ghat & City Exploration
                  </h4>
                  <p className="text-gray-600 mt-1">
                    Visit multiple attractions in a single day with full freedom.
                  </p>
                </div>
              </div>

              {/* Omkareshwar */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center shrink-0">
                  <Bike className="text-orange-500" size={22} />
                </div>

                <div>
                  <h4 className="font-bold text-lg">
                    Omkareshwar Road Trips
                  </h4>
                  <p className="text-gray-600 mt-1">
                    Perfect rides for spiritual and scenic long journeys.
                  </p>
                </div>
              </div>

            </div>

            <Link
  href="/bikes"
  className="mt-10 inline-flex items-center gap-2 text-orange-500 font-semibold hover:gap-3 transition-all"
>
  Explore Our Vehicles
  <ArrowRight size={18} />
</Link>
          </div>

          {/* RIGHT - 2x2 MASONRY GRID */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[650px]">

            {/* TOP LEFT - MAHAKAL */}
            <div className="relative overflow-hidden rounded-[32px] group">
              <img
                src="https://hblimg.mmtcdn.com/content/hubble/img/img/mmt/activities/m_Mahakaleshwar_jyotirlinga_ujjain_img1_p_1090_818.jpg"
                alt="Mahakaleshwar Temple"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              <div className="absolute bottom-4 left-4">
                <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold">
                  Mahakaleshwar
                </span>
              </div>
            </div>

            {/* TOP RIGHT - RAM GHAT */}
            <div className="relative overflow-hidden rounded-[32px] group">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop"
                alt="Ram Ghat"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

              <div className="absolute bottom-4 left-4">
                <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold">
                  Ram Ghat
                </span>
              </div>
            </div>

            {/* BOTTOM LEFT - OMKARESHWAR */}
            <div className="relative overflow-hidden rounded-[32px] group">
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop"
                alt="Omkareshwar"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

              <div className="absolute bottom-4 left-4">
                <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold">
                  Omkareshwar
                </span>
              </div>
            </div>

            {/* BOTTOM RIGHT - BAGLAMUKHI */}
            <div className="relative overflow-hidden rounded-[32px] group">
              <img
                src="https://images.unsplash.com/photo-1608889175117-4c3c2a6c0c3a?q=80&w=1200&auto=format&fit=crop"
                alt="Baglamukhi Temple"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

              <div className="absolute bottom-4 left-4">
                <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold">
                  Baglamukhi Temple
                </span>
              </div>
            </div>

          </div>
        </div>

      </Container>
    </div>
  );
}