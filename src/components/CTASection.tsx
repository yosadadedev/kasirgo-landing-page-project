import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 gradient-primary opacity-95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_transparent_0%,_hsl(var(--primary)/0.3)_100%)]" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary-foreground mb-6">
            Siap Mengembangkan Bisnis Anda?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Bergabung dengan ribuan pengusaha Indonesia yang sudah merasakan
            kemudahan KasirGo. Mulai gratis sekarang!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="xl"
              className="bg-background text-primary hover:bg-background/90 shadow-elevated"
            >
              Download Sekarang
              <ArrowRight className="ml-1" size={20} />
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground"
            >
              Hubungi Tim Sales
            </Button>
          </div>

          {/* Trust badge */}
          <p className="mt-8 text-primary-foreground/60 text-sm">
            ✓ Gratis selamanya untuk fitur dasar &nbsp;&nbsp; ✓ Tanpa kartu kredit &nbsp;&nbsp; ✓ Setup 2 menit
          </p>
        </div>
      </div>
    </section>
  );
};
