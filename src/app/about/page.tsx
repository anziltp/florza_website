import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | FLORZA",
  description: "Learn more about Florza's journey to becoming the standard in luxury sanitary ware.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-[70vh] pt-32 pb-16 px-4">
      <div className="wrap max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">About Florza</h1>
        <section className="space-y-6 text-lg text-muted-foreground">
          <p>
            Florza opened its doors with a singular obsession: to bring unparalleled luxury and modern design to every bathroom. We source and curate only the finest sanitary ware, ensuring that every basin, closet, and fixture meets our exacting standards for quality and aesthetics.
          </p>
          <p>
            Built to outlast trends, our premium quality products are fired, glazed, and inspected to a standard that shows in the hand, not just the spec sheet.
          </p>
        </section>
      </div>
    </main>
  );
}
