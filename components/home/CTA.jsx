import Container from "../common/Container";

export default function CTA() {
  return (
    <section>

      <Container>

        <div className="bg-orange-500 rounded-[40px] p-8 md:p-14 text-center text-white relative overflow-hidden">

          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

          <h2 className="text-3xl md:text-5xl font-bold mb-5 relative z-10">
            Ready To Explore Ujjain?
          </h2>

          <p className="max-w-2xl mx-auto text-white/80 mb-8 relative z-10">
            Rent premium bikes, scooties and self drive cars
            for your next Mahakal or Omkareshwar trip.
          </p>

          <a
            href="https://wa.me/919999999999"
            className="inline-flex bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition relative z-10"
          >
            Book On WhatsApp
          </a>

        </div>

      </Container>

    </section>
  );
}