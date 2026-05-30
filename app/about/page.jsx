import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

export default function AboutPage() {
  return (
    <>
      <Header />

      <section className="pt-24">

        <Container>

          <SectionHeading
            subtitle="About Us"
            title="Your Trusted Rental Partner In Ujjain"
          />

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <img
              src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop"
              alt=""
              className="rounded-[30px]"
            />

            <div>

              <p className="text-gray-600 leading-relaxed mb-6">
                RentBike Ujjain provides premium bike, scooty and
                self drive car rental services for tourists and
                travelers visiting Ujjain.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Whether you are visiting Mahakal Temple,
                Omkareshwar or exploring the city locally,
                we provide affordable and reliable rental vehicles.
              </p>

            </div>

          </div>

        </Container>

      </section>

      <Footer />
    </>
  );
}