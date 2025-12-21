import { MessageSquare, Package, Smartphone } from "lucide-react";

const benefits = [
  {
    icon: MessageSquare,
    title: "Transaksi Cepat & Mudah",
    description:
      "Proses penjualan dalam hitungan detik dengan antarmuka yang intuitif. Tidak perlu pelatihan khusus.",
    highlight: "3 detik per transaksi",
  },
  {
    icon: Package,
    title: "Kelola Stok Otomatis",
    description:
      "Stok berkurang otomatis setiap transaksi. Dapatkan notifikasi saat stok hampir habis.",
    highlight: "Peringatan stok rendah",
  },
  {
    icon: Smartphone,
    title: "Akses Multi-Perangkat",
    description:
      "Pantau bisnis Anda dari mana saja. Data tersinkronisasi antar perangkat secara realtime.",
    highlight: "Sinkronisasi instan",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="keunggulan" className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            ✨ Dipercaya Ribuan UMKM
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6">
            Mengapa Ribuan Pengusaha
            <br />
            <span className="text-gradient">Memilih KasirGo?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Karena KasirGo membuat pengelolaan bisnis jadi mudah dan efisien.
          </p>
        </div>

        {/* Benefits with Phone Mockups */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div key={benefit.title} className="text-center">
              {/* Phone Mockup */}
              <div className="relative mb-8 flex justify-center">
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-primary/20 rounded-[2rem] blur-2xl scale-75 opacity-50" />
                  
                  {/* Phone frame */}
                  <div className="relative bg-foreground rounded-[2rem] p-2 shadow-elevated">
                    <div className="bg-background rounded-[1.75rem] overflow-hidden w-[180px] aspect-[9/16]">
                      <div className="h-full bg-gradient-to-b from-primary/5 to-background p-3 flex flex-col items-center justify-center">
                        <div className={`w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-4 shadow-soft`}>
                          <benefit.icon className="w-7 h-7 text-primary-foreground" />
                        </div>
                        <p className="text-xs font-bold text-foreground text-center">{benefit.highlight}</p>
                      </div>
                    </div>
                    {/* Notch */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-14 h-4 bg-foreground rounded-full" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
