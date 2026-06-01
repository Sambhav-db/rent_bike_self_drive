import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Header />

      <div className="pt-24 md:pt-32 pb-20">
        <Container>
          <SectionHeading
            subtitle="Contact Us"
            title="Get In Touch With RentBike Ujjain"
          />

          <div className="grid lg:grid-cols-2 gap-12 mt-14">
            {/* MAP */}
            <div className="relative overflow-hidden rounded-[32px] shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.2964824480227!2d75.77669379999999!3d23.1958634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963757b44f4d557%3A0xebf11d36aafb0740!2sRENT%20BIKE%20SELF%20DRIVE!5e0!3m2!1sen!2sin!4v1780055552779!5m2!1sen!2sinfade"
                className="w-full h-[475px]"
                loading="lazy"
              />
            </div>

            {/* CONTACT INFO */}
            <div className="bg-gradient-to-br from-orange-50 to-white border border-orange-100 rounded-[36px] p-8 lg:p-10 h-full">
              <span className="inline-flex px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-medium">
                Contact Information
              </span>

              <h3 className="mt-5 text-3xl font-bold">We're Here To Help</h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                Need a bike, scooty or self drive car in Ujjain?
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mt-10">
                <div>
                  <p className="text-sm text-gray-500 mb-2">Mobile Number</p>
                  <p className="font-semibold text-lg">+91 9999999999</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-2">Email Address</p>
                  <p className="font-semibold text-lg">
                    info@rentbikeujjain.com
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-2">Address</p>
                  <p className="font-semibold">1/17, Shri Krisna Colony, UJJAIN, Madhya Pradesh</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-2">Opening Hours</p>
                  <p className="font-semibold">24/7 Daily</p>
                </div>
              </div>

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 px-7 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Book On WhatsApp
              </a>
            </div>
          </div>
        </Container>
      </div>

      <Footer />
    </>
  );
}
