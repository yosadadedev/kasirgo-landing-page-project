import {
  WifiOff,
  Printer,
  BarChart3,
  QrCode,
  Users,
  Tag,
} from "lucide-react";

const features = [
  {
    icon: WifiOff,
    title: "Mode Offline",
    description:
      "Transaksi tetap lancar tanpa internet, sinkronisasi otomatis saat online.",
  },
  {
    icon: Printer,
    title: "Support Printer Thermal",
    description:
      "Kompatibel dengan printer bluetooth 58mm & 80mm untuk cetak struk.",
  },
  {
    icon: BarChart3,
    title: "Laporan Lengkap",
    description:
      "Pantau omzet, laba rugi, dan performa produk secara real-time.",
  },
  {
    icon: QrCode,
    title: "Support QRIS",
    description:
      "Terima pembayaran digital dengan mudah (Upload QRIS Toko).",
  },
  {
    icon: Users,
    title: "Manajemen Karyawan",
    description: "Atur hak akses kasir dan manager dengan aman.",
  },
  {
    icon: Tag,
    title: "Diskon & Promosi",
    description: "Kelola diskon persen atau nominal untuk pelanggan setia.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="fitur" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            Fitur Unggulan
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6">
            Semua yang Anda Butuhkan untuk{" "}
            <span className="text-gradient">Bisnis Sukses</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            KasirGo dilengkapi fitur lengkap yang dirancang khusus untuk
            kebutuhan UMKM Indonesia.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-card rounded-2xl p-6 md:p-8 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-5 shadow-soft group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover decoration */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
