import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Jasmine Firdaus",
    role: "Pemilik Cafe",
    quote:
      "Tidak pernah menyangka mengelola cafe bisa semudah ini. KasirGo sangat simpel dan cepat digunakan.",
    rating: 5,
    avatar: "JF",
  },
  {
    name: "Budi Ahmad",
    role: "Toko Kelontong",
    quote:
      "Sangat membantu untuk mengatur stok dan obat-obatan. Tidak pernah lagi kehabisan stok tanpa tahu!",
    rating: 5,
    avatar: "BA",
  },
  {
    name: "Sarah Putri",
    role: "Warung Makan",
    quote:
      "Fitur laporan penjualan sangat membantu. Saya bisa lihat produk terlaris dengan mudah. Mantap!",
    rating: 5,
    avatar: "SP",
  },
  {
    name: "Tono",
    role: "Minimarket",
    quote:
      "Sudah pakai berbagai aplikasi kasir, KasirGo yang paling mudah! Tidak perlu training khusus.",
    rating: 5,
    avatar: "T",
  },
  {
    name: "Dewi Sari",
    role: "Salon Kecantikan",
    quote:
      "Akhirnya, aplikasi kasir yang bisa dipakai offline! Di tempat saya sinyal sering hilang.",
    rating: 5,
    avatar: "DS",
  },
  {
    name: "Wahyudi",
    role: "Bengkel Motor",
    quote:
      "Fitur cetak struk bluetooth sangat praktis. Pelanggan jadi lebih percaya dengan bukti transaksi.",
    rating: 5,
    avatar: "W",
  },
];

export const TestimonialsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const currentTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  return (
    <section id="testimoni" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-4">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            ⭐ Testimoni
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6">
            Orang Nyata. Hasil Nyata.
          </h2>
          <p className="text-lg text-muted-foreground">
            Ribuan pengusaha Indonesia sudah merasakan manfaat KasirGo.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-12">
          {currentTestimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative bg-card rounded-2xl p-6 md:p-8 border border-border/50 hover:shadow-card transition-all duration-300"
            >
              {/* Avatar and Name */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm shadow-soft">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              {/* Quote */}
              <p className="text-foreground leading-relaxed mb-4">
                "{testimonial.quote}"
              </p>

              {/* Rating */}
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
            disabled={currentPage === 0}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === currentPage ? "bg-primary" : "bg-border hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))}
            disabled={currentPage === totalPages - 1}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
