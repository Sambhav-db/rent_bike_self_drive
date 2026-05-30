import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

export default function BlogsPage() {
  const blogs = [
    {
      title:
        "Best Places To Visit In Ujjain On Bike",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title:
        "Mahakal Darshan Travel Guide",
      image:
        "https://images.unsplash.com/photo-1517846693594-1567da72af75?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title:
        "Omkareshwar Road Trip Guide",
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <>
      <Header />

      <section className="pt-24">

        <Container>

          <SectionHeading
            subtitle="Blogs"
            title="Travel Guides & Rental Tips"
          />

          <div className="grid md:grid-cols-3 gap-6">

            {blogs.map((blog, i) => (
              <div
                key={i}
                className="bg-white rounded-[30px] overflow-hidden card-shadow"
              >

                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-[250px] object-cover"
                />

                <div className="p-6">

                  <h3 className="text-2xl font-bold leading-snug">
                    {blog.title}
                  </h3>

                </div>

              </div>
            ))}

          </div>

        </Container>

      </section>

      <Footer />
    </>
  );
}