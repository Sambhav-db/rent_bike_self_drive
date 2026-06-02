import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

export default function TermsPage() {
  const terms = [
    {
      title: "Eligibility",
      content:
        "The renter must be at least 18 years old and possess a valid Driving Licence. A valid Government-issued ID proof is required at the time of vehicle pickup.",
    },
    {
      title: "Required Documents",
      content:
        "Aadhar Card and a valid Driving Licence are mandatory for renting any bike, scooty, or self-drive car.",
    },
    {
      title: "Security Deposit",
      content:
        "A refundable security deposit of ₹1000 is required before vehicle handover. The deposit will be returned after successful vehicle inspection.",
    },
    {
      title: "Rental Duration & Charges",
      content:
        "Rental charges are calculated on a per-day basis. Additional charges may apply for delayed returns beyond the agreed rental period.",
    },
    {
      title: "Vehicle Usage",
      content:
        "Vehicles must be driven responsibly and in accordance with traffic laws. Racing, stunts, illegal activities, or transferring the vehicle to another person are strictly prohibited.",
    },
    {
      title: "Fuel Policy",
      content:
        "Vehicles should be returned with approximately the same fuel level as provided at the time of delivery.",
    },
    {
      title: "Damage & Liability",
      content:
        "The renter is responsible for any damage, loss, theft, or misuse of the vehicle during the rental period. Applicable repair costs may be charged.",
    },
    {
      title: "Traffic Violations",
      content:
        "Any challans, parking fines, traffic penalties, or legal violations incurred during the rental period shall be borne by the renter.",
    },
    {
      title: "Vehicle Return",
      content:
        "The vehicle must be returned on the agreed date and time. Late returns may attract additional rental charges.",
    },
    {
      title: "Right to Refuse Service",
      content:
        "We reserve the right to refuse rental services if required verification or eligibility criteria are not met.",
    },
  ];

  return (
    <>
      <Header />

      <div className="pt-24 pb-16 md:pb-28">
        <Container>
          <SectionHeading
            subtitle="Legal Information"
            title="Terms & Conditions"
          />

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl md:rounded-[40px] p-6 md:p-10 border border-gray-100 shadow-sm">
              
              <div className="mb-10 pb-6 border-b border-gray-100">
                <span className="inline-flex items-center rounded-full bg-orange-50 px-4 py-2 text-sm font-medium text-orange-600">
                  Last Updated: June 2026
                </span>

                <p className="mt-5 text-gray-600 leading-relaxed">
                  By renting a vehicle from Rent Bike Self Drive, you agree
                  to comply with the following terms and conditions. These
                  guidelines are intended to ensure a safe, transparent, and
                  hassle-free rental experience for all customers.
                </p>
              </div>

              <div className="space-y-8">
                {terms.map((term, index) => (
                  <div
                    key={index}
                    className="flex gap-4 md:gap-6"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 text-white font-semibold flex items-center justify-center">
                      {index + 1}
                    </div>

                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                        {term.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed">
                        {term.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-gray-100">
                <p className="text-sm text-gray-500">
                  If you have any questions regarding these Terms &
                  Conditions, please contact us through the Contact Page
                  or WhatsApp support.
                </p>
              </div>

            </div>
          </div>
        </Container>
      </div>

      <Footer />
    </>
  );
}