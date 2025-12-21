import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-10">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      
      {/* Floating blur decorations */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
      <div className="absolute top-40 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* Badge */}
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6 animate-fade-up">
            #1 Aplikasi Kasir Offline Indonesia
          </span>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight mb-6 animate-fade-up stagger-1">
            Kelola Bisnis Anda{" "}
            <span className="text-gradient">Kapan Saja,</span>
            <br />
            <span className="text-gradient">Di Mana Saja.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up stagger-2">
            KasirGo membantu Anda mengelola penjualan, stok barang, dan laporan keuangan — semua dalam satu aplikasi mudah.
          </p>

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up stagger-3">
            <Button className="bg-foreground text-background hover:bg-foreground/90 h-14 px-6 rounded-xl gap-3">
              <Apple className="w-6 h-6" />
              <div className="text-left">
                <p className="text-[10px] opacity-80">Download on the</p>
                <p className="text-sm font-semibold -mt-0.5">App Store</p>
              </div>
            </Button>
            <Button className="bg-foreground text-background hover:bg-foreground/90 h-14 px-6 rounded-xl gap-3">
              <Play className="w-6 h-6 fill-current" />
              <div className="text-left">
                <p className="text-[10px] opacity-80">Get it on</p>
                <p className="text-sm font-semibold -mt-0.5">Google Play</p>
              </div>
            </Button>
          </div>
        </div>

        {/* Phone Mockups */}
        <div className="relative flex justify-center items-end gap-4 md:gap-8 animate-fade-up stagger-4">
          {/* Left Phone - tilted */}
          <div className="hidden md:block relative -mr-8 z-10 transform -rotate-6 translate-y-4">
            <PhoneMockup variant="chat" />
          </div>
          
          {/* Center Phone - main */}
          <div className="relative z-20 animate-float">
            <PhoneMockup variant="main" />
          </div>
          
          {/* Right Phone - tilted */}
          <div className="hidden md:block relative -ml-8 z-10 transform rotate-6 translate-y-4">
            <PhoneMockup variant="stats" />
          </div>
        </div>
      </div>
    </section>
  );
};

const PhoneMockup = ({ variant }: { variant: "main" | "chat" | "stats" }) => {
  return (
    <div className="relative">
      {/* Phone frame */}
      <div className="bg-foreground rounded-[2.5rem] p-2 shadow-elevated">
        <div className="bg-background rounded-[2rem] overflow-hidden w-[200px] md:w-[260px] aspect-[9/19]">
          {/* Phone screen content */}
          <div className="h-full bg-gradient-to-b from-primary/5 to-background p-3 md:p-4">
            {/* Status bar */}
            <div className="flex justify-between items-center text-[10px] text-muted-foreground mb-3">
              <span>9:41</span>
              <div className="flex gap-0.5">
                <div className="w-3 h-1.5 bg-foreground/30 rounded-sm" />
                <div className="w-3 h-1.5 bg-foreground/30 rounded-sm" />
                <div className="w-4 h-1.5 bg-primary rounded-sm" />
              </div>
            </div>

            {variant === "main" && (
              <>
                {/* App header */}
                <div className="text-center mb-4">
                  <h3 className="text-base font-black text-gradient">KasirGo</h3>
                  <p className="text-[10px] text-muted-foreground">Dashboard Utama</p>
                </div>

                {/* Stats cards */}
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="bg-card rounded-lg p-2 shadow-card">
                    <p className="text-[9px] text-muted-foreground">Hari Ini</p>
                    <p className="text-sm font-bold text-primary">Rp 2.5jt</p>
                  </div>
                  <div className="bg-card rounded-lg p-2 shadow-card">
                    <p className="text-[9px] text-muted-foreground">Transaksi</p>
                    <p className="text-sm font-bold text-foreground">48</p>
                  </div>
                </div>

                {/* Recent transactions */}
                <div className="bg-card rounded-lg p-2 shadow-card">
                  <p className="text-[9px] font-semibold text-foreground mb-1.5">Transaksi Terakhir</p>
                  {[
                    { name: "Kopi Latte", price: "25.000" },
                    { name: "Nasi Goreng", price: "30.000" },
                    { name: "Es Teh Manis", price: "8.000" },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-1.5 border-b border-border last:border-0">
                      <span className="text-[9px] text-muted-foreground">{item.name}</span>
                      <span className="text-[9px] font-semibold text-foreground">Rp {item.price}</span>
                    </div>
                  ))}
                </div>
              </>
            )}

            {variant === "chat" && (
              <>
                <div className="mb-3">
                  <p className="text-[10px] font-bold text-foreground mb-2">Bantuan Kasir</p>
                  <div className="bg-primary/10 rounded-lg p-2 mb-2">
                    <p className="text-[9px] text-foreground">Bagaimana cara cetak struk?</p>
                  </div>
                  <div className="bg-card rounded-lg p-2 shadow-card">
                    <p className="text-[9px] text-muted-foreground">Tap ikon printer di halaman transaksi untuk cetak struk Anda.</p>
                  </div>
                </div>
                <div className="bg-card rounded-lg p-2 shadow-card">
                  <p className="text-[9px] font-bold text-foreground mb-1">Dokter Terdekat</p>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/20" />
                    <div>
                      <p className="text-[9px] text-foreground">Support 24/7</p>
                      <p className="text-[8px] text-muted-foreground">Online</p>
                    </div>
                  </div>
                </div>
              </>
            )}

            {variant === "stats" && (
              <>
                <div className="mb-3">
                  <p className="text-[10px] font-bold text-foreground mb-2">Statistik Penjualan</p>
                </div>
                <div className="bg-card rounded-lg p-2 shadow-card mb-2">
                  <p className="text-[9px] text-muted-foreground">Total Minggu Ini</p>
                  <p className="text-lg font-bold text-primary">Rp 15.2jt</p>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-[8px] text-green-500">↑ 24%</span>
                    <span className="text-[8px] text-muted-foreground">vs minggu lalu</span>
                  </div>
                </div>
                <div className="bg-card rounded-lg p-2 shadow-card">
                  <p className="text-[9px] font-bold text-foreground mb-1">Produk Terlaris</p>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-[8px] text-muted-foreground">Kopi Susu</span>
                      <span className="text-[8px] font-bold text-foreground">156</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[8px] text-muted-foreground">Roti Bakar</span>
                      <span className="text-[8px] font-bold text-foreground">98</span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 md:w-20 h-5 bg-foreground rounded-full" />
      </div>
    </div>
  );
};
