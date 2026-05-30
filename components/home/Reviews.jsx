"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

import { testimonials } from "@/data/testimonials";

import { Star } from "lucide-react";

export default function Reviews() {
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

              <div className="bg-white rounded-[30px] p-8 border border-gray-100 card-shadow mb-14">

                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill="#ff7a00"
                      color="#ff7a00"
                    />
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {item.review}
                </p>

                <h4 className="font-bold text-lg">
                  {item.name}
                </h4>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </Container>

    </section>
  );
}