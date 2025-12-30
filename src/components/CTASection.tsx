import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.yl.kasirgo";

export const CTASection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Purple Gradient Background */}
      <div className="absolute inset-0 gradient-primary" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_transparent_0%,_hsl(var(--primary)/0.5)_100%)]" />
      
      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-primary-foreground/10 rounded-full" />
      <div className="absolute bottom-10 right-10 w-48 h-48 border border-primary-foreground/10 rounded-full" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-primary-foreground/5 rounded-full" />

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary-foreground mb-6">
            Download KasirGo &<br />
            Kelola Bisnis Anda
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-10 max-w-xl mx-auto">
            Tersedia gratis di Google Play Store. Scan kode QR atau klik tombol di bawah.
          </p>

          {/* Play Store Button & QR Code */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Play Store Button */}
            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
              <Button className="bg-foreground text-background hover:bg-foreground/90 h-14 px-8 rounded-xl gap-3">
                <Play className="w-6 h-6 fill-current" />
                <div className="text-left">
                  <p className="text-[10px] opacity-80">Download di</p>
                  <p className="text-sm font-semibold -mt-0.5">Google Play</p>
                </div>
              </Button>
            </a>

            {/* QR Code */}
            <div className="hidden md:flex flex-col items-center">
              <div className="bg-primary-foreground p-3 rounded-xl shadow-elevated">
                <div className="w-24 h-24 bg-foreground rounded-lg flex items-center justify-center">
                  {/* QR Code placeholder */}
                  <div className="grid grid-cols-5 gap-0.5">
                    {Array.from({ length: 25 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 ${
                          Math.random() > 0.4 ? "bg-primary-foreground" : "bg-transparent"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-xs text-primary-foreground/60 mt-2">Scan QR Code</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
