import { Smartphone, Shield, Coins } from "lucide-react";

const benefits = [
  {
    icon: Smartphone,
    title: "Mudah Digunakan",
    description:
      "Desain antarmuka intuitif, siap pakai dalam hitungan menit. Tidak perlu pelatihan khusus.",
  },
  {
    icon: Shield,
    title: "Data Aman",
    description:
      "Penyimpanan database lokal yang aman dengan opsi backup otomatis dan enkripsi data.",
  },
  {
    icon: Coins,
    title: "Tanpa Biaya Tersembunyi",
    description:
      "Solusi kasir hemat untuk bisnis berkembang. Transparan tanpa biaya tambahan.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="keunggulan" className="py-20 md:py-28 gradient-hero relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-60 h-60 bg-primary/8 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            Mengapa KasirGo?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6">
            Keunggulan yang Membuat{" "}
            <span className="text-gradient">Bisnis Anda Maju</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Kami memahami kebutuhan UMKM Indonesia dan memberikan solusi terbaik.
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="relative bg-card rounded-2xl p-8 text-center shadow-elevated border border-border/50 group hover:-translate-y-2 transition-all duration-300"
            >
              {/* Large number */}
              <span className="absolute top-4 right-4 text-6xl font-black text-primary/10">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6 shadow-soft group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-10 h-10 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
