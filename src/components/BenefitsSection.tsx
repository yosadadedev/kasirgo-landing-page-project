import { WifiOff, Feather, ShieldCheck } from "lucide-react";
import mockupKasir from "@/assets/mockup-kasir.png";
import mockupLaporan from "@/assets/mockup-laporan.png";
import mockupPengaturan from "@/assets/mockup-pengaturan.png";

const benefits = [
  {
    icon: WifiOff,
    title: "Offline-First (Tanpa Internet)",
    description:
      "Data tersimpan aman di perangkat dengan database lokal (SQLite). Tidak perlu khawatir sinyal jelek atau server down. Aplikasi tetap bisa digunakan 100% lancar tanpa kuota.",
    highlight: "100% Offline",
    mockup: mockupKasir,
  },
  {
    icon: Feather,
    title: "Ringan & Cepat",
    description:
      "Dibuat dengan teknologi terbaru, aplikasi ini tidak membebani kinerja smartphone entry-level sekalipun. Transaksi lancar tanpa lag.",
    highlight: "Super Ringan",
    mockup: mockupLaporan,
  },
  {
    icon: ShieldCheck,
    title: "Data Privacy Terjamin",
    description:
      "Data bisnis adalah milik Anda sepenuhnya. Tidak dikirim ke server eksternal. Tersedia fitur Backup & Restore serta opsi Hapus Data Total.",
    highlight: "Privasi Aman",
    mockup: mockupPengaturan,
  },
];

export const BenefitsSection = () => {
  return (
    <section id="keunggulan" className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            ✨ Keunggulan Teknis
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6">
            Mengapa Ribuan Pengusaha
            <br />
            <span className="text-gradient">Memilih KasirGo?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Solusi kasir yang dirancang khusus untuk kebutuhan UMKM Indonesia.
          </p>
        </div>

        {/* Benefits with Phone Mockups */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div key={benefit.title} className="text-center group">
              {/* Phone Mockup */}
              <div className="relative mb-8 flex justify-center">
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-primary/20 rounded-[2rem] blur-2xl scale-75 opacity-50" />
                  
                  {/* Real Screenshot */}
                  <img 
                    src={benefit.mockup} 
                    alt={benefit.title}
                    className="relative w-[180px] h-auto drop-shadow-2xl group-hover:scale-105 transition-transform duration-300"
                  />
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
