import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Pak Budi",
    business: "Warung Kopi Sederhana",
    quote:
      "Sangat membantu warung kopi saya, laporan jadi rapi! Dulu saya cuma pakai buku catatan, sekarang semua tercatat otomatis.",
    rating: 5,
    avatar: "B",
  },
  {
    name: "Ibu Sari",
    business: "Toko Kelontong Sejahtera",
    quote:
      "Fitur offline-nya luar biasa! Di desa saya sinyal sering hilang, tapi transaksi tetap lancar. Sangat recommended!",
    rating: 5,
    avatar: "S",
  },
  {
    name: "Mas Rizki",
    business: "Cafe Kekinian",
    quote:
      "Printer bluetooth-nya langsung connect, struk keluar cepat. Pelanggan jadi lebih percaya dengan bisnis saya.",
    rating: 5,
    avatar: "R",
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimoni" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            Testimoni
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6">
            Dipercaya oleh{" "}
            <span className="text-gradient">Ribuan Pengusaha</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Lihat apa kata mereka tentang pengalaman menggunakan KasirGo.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative bg-card rounded-2xl p-6 md:p-8 shadow-card hover:shadow-elevated transition-all duration-300 border border-border/50 group"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-amber-400 fill-current"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-soft">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-bold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.business}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
