import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const footerLinks = {
  company: [
    { label: "Tentang Kami", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Karir", href: "#" },
  ],
  help: [
    { label: "Pusat Bantuan", href: "#" },
    { label: "Kebijakan Privasi", href: "#" },
    { label: "Syarat & Ketentuan", href: "#" },
    { label: "FAQ", href: "#faq" },
  ],
  contact: [
    { label: "hello@kasirgo.id", href: "mailto:hello@kasirgo.id", icon: Mail },
    { label: "Jakarta, Indonesia", href: "#", icon: MapPin },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "Youtube" },
];

export const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription
    setEmail("");
  };

  return (
    <footer className="bg-foreground text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-primary-foreground/10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-black mb-4">KasirGo</h3>
            <p className="text-primary-foreground/70 mb-6 max-w-xs">
              Solusi kasir offline terbaik untuk UMKM Indonesia. Mudah, cepat, dan terpercaya.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold mb-4">Perusahaan</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-bold mb-4">Bantuan</h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Stay Updated */}
          <div>
            <h4 className="font-bold mb-4">Tetap Update</h4>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Anda"
                className="w-full px-4 py-2.5 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary transition-colors text-sm"
              />
              <Button 
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg h-10"
              >
                Subscribe
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </form>

            {/* Contact Info */}
            <div className="mt-6 space-y-2">
              <h4 className="font-bold mb-3 text-sm">Info Kontak</h4>
              {footerLinks.contact.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <item.icon size={14} />
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 KasirGo. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Kebijakan Privasi
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Syarat Layanan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
