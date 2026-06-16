import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

export default function AboutCTASection() {
  return (
    <section className="py-24">
      <Container>
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-[40px] p-8 md:p-8 text-center text-white">
     
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-3">Ready To Explore Ujjain?</h2>

          <p className="max-w-5xl mx-auto text-orange-100">
            Book a premium bike, scooty or self-drive
            vehicle today and enjoy hassle-free travel
            across Ujjain and nearby destinations.
          </p>

          <a
            href="https://wa.me/919644991724"
            target="_blank"
            rel="noreferrer"
            className="inline-flex mt-8 px-8 py-4 rounded-full bg-white text-orange-600 font-semibold"
          >
            Book On WhatsApp
          </a>
        </div>
      </Container>
    </section>
  );
}