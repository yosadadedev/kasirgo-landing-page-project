import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden pt-20">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-primary/5 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-primary/8 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full animate-fade-up">
                🚀 Solusi Kasir #1 untuk UMKM
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight animate-fade-up stagger-1">
                Aplikasi Kasir Offline{" "}
                <span className="text-gradient">Terbaik</span> untuk UMKM
                Indonesia
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-fade-up stagger-2">
                Kelola penjualan, stok, dan laporan bisnis dengan mudah tanpa
                tergantung koneksi internet.{" "}
                <span className="font-semibold text-foreground">
                  Hemat, Cepat, dan Efisien.
                </span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up stagger-3">
              <Button variant="hero" size="xl">
                Mulai Gratis Sekarang
                <ArrowRight className="ml-1" size={20} />
              </Button>
              <Button variant="heroOutline" size="xl">
                <Play size={18} className="mr-1" />
                Pelajari Lebih Lanjut
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start pt-4 animate-fade-up stagger-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-xs font-bold text-primary"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  <span className="font-bold text-foreground">10,000+</span>{" "}
                  Pengguna Aktif
                </span>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-amber-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
                <span className="text-sm text-muted-foreground ml-1">
                  4.9 Rating
                </span>
              </div>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end animate-fade-up stagger-2">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 rounded-[3rem] blur-3xl scale-90" />

              {/* Phone frame */}
              <div className="relative bg-foreground rounded-[2.5rem] p-3 shadow-elevated animate-float">
                <div className="bg-background rounded-[2rem] overflow-hidden w-[280px] md:w-[320px] aspect-[9/19]">
                  {/* Phone screen content */}
                  <div className="h-full bg-gradient-to-b from-primary/5 to-background p-4">
                    {/* Status bar */}
                    <div className="flex justify-between items-center text-xs text-muted-foreground mb-4">
                      <span>9:41</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-2 bg-foreground/30 rounded-sm" />
                        <div className="w-4 h-2 bg-foreground/30 rounded-sm" />
                        <div className="w-6 h-2 bg-primary rounded-sm" />
                      </div>
                    </div>

                    {/* App header */}
                    <div className="text-center mb-6">
                      <h3 className="text-lg font-black text-gradient">
                        KasirGo
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Dashboard Utama
                      </p>
                    </div>

                    {/* Stats cards */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-card rounded-xl p-3 shadow-card">
                        <p className="text-xs text-muted-foreground">
                          Hari Ini
                        </p>
                        <p className="text-lg font-bold text-primary">
                          Rp 2.5jt
                        </p>
                      </div>
                      <div className="bg-card rounded-xl p-3 shadow-card">
                        <p className="text-xs text-muted-foreground">
                          Transaksi
                        </p>
                        <p className="text-lg font-bold text-foreground">48</p>
                      </div>
                    </div>

                    {/* Recent transactions */}
                    <div className="bg-card rounded-xl p-3 shadow-card">
                      <p className="text-xs font-semibold text-foreground mb-2">
                        Transaksi Terakhir
                      </p>
                      {[
                        { name: "Kopi Latte", price: "25.000" },
                        { name: "Nasi Goreng", price: "30.000" },
                        { name: "Es Teh Manis", price: "8.000" },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="flex justify-between items-center py-2 border-b border-border last:border-0"
                        >
                          <span className="text-xs text-muted-foreground">
                            {item.name}
                          </span>
                          <span className="text-xs font-semibold text-foreground">
                            Rp {item.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Notch */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};
