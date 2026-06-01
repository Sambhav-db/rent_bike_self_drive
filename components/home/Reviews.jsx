"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

import { testimonials } from "@/data/testimonials";

import { Star } from "lucide-react";
import Image from "next/image";

export default function Reviews() {

  const GoogleLogo = () => (
  <img
    src="https://www.google.com/favicon.ico"
    alt="Google"
    className="w-5 h-5"
  />
);

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

      <Image
        src={item.image}
        alt={item.name}
        width={56}
        height={56}
        className="rounded-full object-cover border-2 border-orange-100"
      />

      <div>
        <h4 className="font-bold text-gray-900">
          {item.name}
        </h4>

        <p className="text-sm text-gray-500">
          Verified Customer
        </p>
      </div>

    </div>

    <GoogleLogo />

  </div>

  <div className="flex gap-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={16}
        fill="#ff7a00"
        color="#ff7a00"
      />
    ))}
  </div>

  <p className="text-gray-600 leading-relaxed">
    "{item.review}"
  </p>

</div>

            </SwiperSlide>
          ))}

        </Swiper>

      </Container>

    </section>
  );
}