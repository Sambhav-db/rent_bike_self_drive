import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

const stats = [
  {
    value: "5000+",
    label: "Happy Travelers",
  },
  {
    value: "5.0★",
    label: "Google Rating",
  },
  {
    value: "24/7",
    label: "Support Available",
  },
  {
    value: "100+",
    label: "Monthly Rentals",
  },
];

export default function AboutStats() {
  return (
    <div className="py-20">
      <Container>
        <SectionHeading
          subtitle="Our Impact"
          title="Trusted by Thousands"
        />
        <div className="rounded-[40px] bg-gradient-to-r from-orange-500 to-orange-600 p-8 md:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((item) => (
              <div
                key={item.label}
                className="text-center text-white"
              >
                <h3 className="text-4xl md:text-5xl font-bold">
                  {item.value}
                </h3>

                <p className="mt-2 text-orange-100">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}