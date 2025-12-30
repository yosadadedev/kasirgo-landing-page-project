import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import mockupKasir from "@/assets/mockup-kasir.png";
import mockupCheckout from "@/assets/mockup-checkout.png";
import mockupLaporan from "@/assets/mockup-laporan.png";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.yl.kasirgo";

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

          {/* Play Store Button */}
          <div className="flex justify-center animate-fade-up stagger-3">
            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
              <Button className="bg-foreground text-background hover:bg-foreground/90 h-14 px-8 rounded-xl gap-3">
                <Play className="w-6 h-6 fill-current" />
                <div className="text-left">
                  <p className="text-[10px] opacity-80">Download di</p>
                  <p className="text-sm font-semibold -mt-0.5">Google Play</p>
                </div>
              </Button>
            </a>
          </div>
        </div>

        {/* Phone Mockups */}
        <div className="relative flex justify-center items-end gap-4 md:gap-8 animate-fade-up stagger-4">
          {/* Left Phone - tilted */}
          <div className="hidden md:block relative -mr-8 z-10 transform -rotate-6 translate-y-4">
            <img 
              src={mockupCheckout} 
              alt="KasirGo Checkout" 
              className="w-[200px] md:w-[260px] h-auto drop-shadow-2xl"
            />
          </div>
          
          {/* Center Phone - main */}
          <div className="relative z-20 animate-float">
            <img 
              src={mockupKasir} 
              alt="KasirGo Kasir" 
              className="w-[240px] md:w-[300px] h-auto drop-shadow-2xl"
            />
          </div>
          
          {/* Right Phone - tilted */}
          <div className="hidden md:block relative -ml-8 z-10 transform rotate-6 translate-y-4">
            <img 
              src={mockupLaporan} 
              alt="KasirGo Laporan" 
              className="w-[200px] md:w-[260px] h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

