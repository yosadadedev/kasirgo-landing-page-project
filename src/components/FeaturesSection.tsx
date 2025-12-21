import {
  WifiOff,
  Printer,
  BarChart3,
  QrCode,
  Users,
  Shield,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: WifiOff,
    title: "Mode Offline",
    description:
      "Transaksi tetap lancar tanpa internet, sinkronisasi otomatis saat online.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: BarChart3,
    title: "Laporan Lengkap",
    description:
      "Pantau omzet, laba rugi, dan performa produk secara real-time dengan grafik intuitif.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Printer,
    title: "Cetak Struk Instan",
    description:
      "Kompatibel dengan printer bluetooth 58mm & 80mm untuk cetak struk cepat.",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: QrCode,
    title: "Pembayaran Digital",
    description:
      "Terima pembayaran QRIS dan e-wallet dengan mudah. Upload QR toko Anda sendiri.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Users,
    title: "Multi Karyawan",
    description:
      "Atur hak akses kasir dan manager dengan sistem role yang aman.",
    color: "bg-pink-50 text-pink-600",
  },
  {
    icon: Shield,
    title: "Data Terenkripsi",
    description:
      "Keamanan data bisnis Anda terjamin dengan enkripsi dan backup otomatis.",
    color: "bg-teal-50 text-teal-600",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="fitur" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6">
            Semua yang Anda Butuhkan.
            <br />
            <span className="text-muted-foreground">Tidak Ada yang Tidak.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Fitur lengkap untuk manajemen bisnis yang simpel dan powerful.
          </p>
        </div>

        {/* Features Grid - Bento style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-card rounded-2xl p-6 md:p-8 border border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-300"
            >
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

              {/* Learn More Link */}
              <a 
                href="#" 
                className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors group-hover:gap-2"
              >
                Pelajari Lebih
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button variant="outline" className="rounded-full px-8 h-12 text-primary border-primary hover:bg-primary hover:text-primary-foreground">
            Lihat Semua Fitur
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
