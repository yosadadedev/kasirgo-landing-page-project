import {
  Store,
  Zap,
  BarChart3,
  Package,
  Printer,
  Settings,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import mockupKasir from "@/assets/mockup-kasir.png";
import mockupCheckout from "@/assets/mockup-checkout.png";
import mockupTransaksi from "@/assets/mockup-transaksi.png";
import mockupLaporan from "@/assets/mockup-laporan.png";
import mockupExport from "@/assets/mockup-export.png";
import mockupPengaturan from "@/assets/mockup-pengaturan.png";

const features = [
  {
    icon: Store,
    title: "Multi-Toko / Multi-Bisnis",
    description:
      "Kelola Toko Kelontong, Cafe, dan Barbershop dalam satu aplikasi. Data terpisah rapi untuk setiap bisnis.",
    badge: "NEW!",
    color: "bg-primary/10 text-primary",
    mockup: mockupKasir,
  },
  {
    icon: Zap,
    title: "Transaksi Super Cepat",
    description:
      "Desain antarmuka yang 'sat-set' dengan keranjang pintar, pencarian cepat, dan barcode scanner.",
    color: "bg-amber-50 text-amber-600",
    mockup: mockupCheckout,
  },
  {
    icon: BarChart3,
    title: "Laporan & Analitik Bisnis",
    description:
      "Dashboard real-time, analisa produk best seller, dan laporan laba rugi otomatis.",
    color: "bg-green-50 text-green-600",
    mockup: mockupLaporan,
  },
  {
    icon: Package,
    title: "Manajemen Produk & Stok",
    description:
      "Dukungan varian produk, kategori, dan stok opname. Kontrol penuh atas inventaris Anda.",
    color: "bg-blue-50 text-blue-600",
    mockup: mockupTransaksi,
  },
  {
    icon: Printer,
    title: "Dukungan Hardware & Struk",
    description:
      "Cetak struk ke printer thermal Bluetooth, kustomisasi header/footer, dan kirim struk via WhatsApp.",
    color: "bg-orange-50 text-orange-600",
    mockup: mockupExport,
  },
  {
    icon: Settings,
    title: "Fitur Manajemen Lengkap",
    description:
      "Manajemen karyawan, pelanggan (CRM), diskon, dan dukungan pembayaran QRIS.",
    color: "bg-teal-50 text-teal-600",
    mockup: mockupPengaturan,
  },
];

export const FeaturesSection = () => {
  return (
    <section id="fitur" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6">
            Fitur Unggulan
            <br />
            <span className="text-muted-foreground">untuk Bisnis Anda</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Semua yang Anda butuhkan untuk mengelola bisnis dalam satu aplikasi.
          </p>
        </div>

        {/* Features Grid - Bento style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-card rounded-2xl p-6 md:p-8 border border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-300 overflow-hidden"
            >
              {/* Badge */}
              {feature.badge && (
                <span className="absolute top-4 right-4 px-2 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full z-10">
                  {feature.badge}
                </span>
              )}

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-5`}>
                <feature.icon className="w-6 h-6" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {feature.description}
              </p>

              {/* Phone Mockup Preview */}
              <div className="relative mt-4 flex justify-center">
                <img 
                  src={feature.mockup} 
                  alt={feature.title}
                  className="w-32 h-auto opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
