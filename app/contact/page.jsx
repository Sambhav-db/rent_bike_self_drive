import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

export default function ContactPage() {
  return (
    <>
      <Header />

      <section className="pt-24">
        <Container>
          <SectionHeading subtitle="Contact" title="Get In Touch With Us" />

          <div className="grid lg:grid-cols-2 gap-10">
            {/* 
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.2964824480227!2d75.77669379999999!3d23.1958634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963757b44f4d557%3A0xebf11d36aafb0740!2sRENT%20BIKE%20SELF%20DRIVE!5e0!3m2!1sen!2sin!4v1780055552779!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

             <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.2964824480227!2d75.77669379999999!3d23.1958634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963757b44f4d557%3A0xebf11d36aafb0740!2sRENT%20BIKE%20SELF%20DRIVE!5e0!3m2!1sen!2sin!4v1780055552779!5m2!1sen!2sinfade"
              className="w-full h-[450px] rounded-[30px]"
              loading="lazy"
            /> 

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-[24px] card-shadow">
                <h3 className="font-bold mb-2">Address</h3>

                <p className="text-gray-600">Ujjain, Madhya Pradesh</p>
              </div>

              <div className="bg-white p-6 rounded-[24px] card-shadow">
                <h3 className="font-bold mb-2">Phone</h3>

                <p className="text-gray-600">+91 9999999999</p>
              </div>

              <div className="bg-white p-6 rounded-[24px] card-shadow">
                <h3 className="font-bold mb-2">Email</h3>

                <p className="text-gray-600">info@rentbikeujjain.com</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
