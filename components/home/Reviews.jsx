"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

import { testimonials } from "@/data/testimonials";

import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";

export default function Reviews() {
  const GoogleLogo = () => (
    <img
      src="https://www.google.com/favicon.ico"
      alt="Google"
      className="w-5 h-5"
    />
  );

  const avatarColors = [
  "bg-orange-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-red-500",
  "bg-cyan-500",
  "bg-indigo-500",
  "bg-amber-500",
  "bg-emerald-500",
];

  return (
    <section className="bg-gray-50">
      <Container>
        <SectionHeading
          subtitle="Testimonials"
          title="What Our Customers Say"
        />

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={24}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },

            768: {
              slidesPerView: 2,
            },

            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 mb-14 h-full">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-4">
                  <div
  className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl ${
    avatarColors[i % avatarColors.length]
  }`}
>
  {item.name.charAt(0)}
</div>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.name}</h4>
<p className="text-sm text-gray-500">
  Google Review
</p>
                    </div>
                  </div>

                  <GoogleLogo />
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#ff7a00" color="#ff7a00" />
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed line-clamp-3">"{item.review}"</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center mt-4">
          <a
            href="https://share.google/BNjQNfjAsruh46xHQ"
            target="_blank"
            rel="noopener noreferrer"
            className="
      group inline-flex items-center gap-2
      bg-gradient-to-r from-orange-500 to-orange-600
      text-white
      px-7 py-3.5
      rounded-full
      font-semibold
      shadow-lg shadow-orange-500/25
      hover:shadow-xl hover:shadow-orange-500/35
      transition-all duration-300
      hover:-translate-y-1
    "
          >
            Rate Us On Google
            <ArrowRight
              size={18}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </a>
        </div>
      </Container>
    </section>
  );
}
