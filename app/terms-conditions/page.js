import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

export default function TermsPage() {
  return (
    <>
      <Header />

      <section className="pt-24">

        <Container className="max-w-5xl">

          <SectionHeading
            subtitle="Terms"
            title="Terms & Conditions"
          />

          <div className="space-y-6 text-gray-600 leading-relaxed">

            <div className="bg-white rounded-[24px] p-6 card-shadow">
              <h3 className="text-xl font-bold mb-3">
                Security Deposit
              </h3>

              <p>
                ₹1000 refundable security deposit is required
                before vehicle delivery.
              </p>
            </div>

            <div className="bg-white rounded-[24px] p-6 card-shadow">
              <h3 className="text-xl font-bold mb-3">
                Required Documents
              </h3>

              <p>
                Valid Aadhar Card and Driving Licence are mandatory.
              </p>
            </div>

            <div className="bg-white rounded-[24px] p-6 card-shadow">
              <h3 className="text-xl font-bold mb-3">
                Fuel Policy
              </h3>

              <p>
                Vehicles should be returned with proper fuel level.
              </p>
            </div>

            <div className="bg-white rounded-[24px] p-6 card-shadow">
              <h3 className="text-xl font-bold mb-3">
                Damage Responsibility
              </h3>

              <p>
                Any major damage caused during rental duration
                will be chargeable.
              </p>
            </div>

          </div>

        </Container>

      </section>

      <Footer />
    </>
  );
}