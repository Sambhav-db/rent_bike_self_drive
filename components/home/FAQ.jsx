"use client";

import { useState } from "react";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

import { faq } from "@/data/faq";

import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section>

      <Container className="max-w-4xl">

        <SectionHeading
          subtitle="FAQs"
          title="Frequently Asked Questions"
        />

        <div className="space-y-5">

          {faq.map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-[24px] overflow-hidden"
            >

              <button
                onClick={() =>
                  setActive(active === i ? null : i)
                }
                className="w-full flex items-center justify-between p-5 md:p-7 text-left"
              >

                <span className="font-semibold text-base md:text-lg">
                  {item.question}
                </span>

                <ChevronDown
                  className={`transition ${
                    active === i ? "rotate-180" : ""
                  }`}
                />

              </button>

              <div
                className={`grid transition-all duration-300 ${
                  active === i
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 md:px-7 pb-6 text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>

            </div>
          ))}

        </div>

      </Container>

    </section>
  );
}