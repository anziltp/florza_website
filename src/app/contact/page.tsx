import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | FLORZA",
  description: "Get in touch with Florza for inquiries about our premium sanitary ware collections and dealer network.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-[70vh] pt-32 pb-16 px-4">
      <div className="wrap max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Contact Us</h1>
        <section className="space-y-6 text-lg text-muted-foreground">
          <p>
            Have a question about our collections or want to become a dealer? We'd love to hear from you.
          </p>
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Experience Centre</h3>
            <address className="not-italic">
              Florza Sanitary Ware<br />
              Wandoor Road<br />
              Malappuram District<br />
              Kerala, India<br />
            </address>
            <div className="mt-4">
              <a href="mailto:info@florza.in" className="text-primary hover:underline">info@florza.in</a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
