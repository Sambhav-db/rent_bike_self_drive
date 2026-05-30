import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

import {
  ShieldCheck,
  FileText,
  CreditCard,
} from "lucide-react";

export default function DocumentsPage() {
  const docs = [
    {
      icon: FileText,
      title: "Aadhar Card",
      desc: "Valid original or photocopy required.",
    },

    {
      icon: CreditCard,
      title: "Driving Licence",
      desc: "Valid driving licence is mandatory.",
    },

    {
      icon: ShieldCheck,
      title: "Refundable Deposit",
      desc: "₹1000 refundable security amount.",
    },
  ];

  return (
    <>
      <Header />

      <section className="pt-24">

        <Container>

          <SectionHeading
            subtitle="Documents"
            title="Documents Required For Rental"
          />

          <div className="grid md:grid-cols-3 gap-6">

            {docs.map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="bg-white rounded-[30px] p-8 card-shadow border border-gray-100"
                >

                  <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center mb-5">
                    <Icon className="text-orange-500" />
                  </div>

                  <h3 className="text-2xl font-bold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>

                </div>
              );
            })}

          </div>

        </Container>

      </section>

      <Footer />
    </>
  );
}