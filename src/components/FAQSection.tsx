import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Apakah aplikasi ini berbayar?",
    answer:
      "KasirGo menyediakan versi gratis dengan fitur dasar yang sudah sangat lengkap untuk UMKM. Untuk fitur premium seperti multi-outlet dan laporan advanced, tersedia paket berlangganan dengan harga terjangkau.",
  },
  {
    question: "Bisa dipakai tanpa internet?",
    answer:
      "Ya, tentu saja! KasirGo dirancang khusus untuk bekerja secara offline. Semua transaksi tersimpan di perangkat Anda dan akan otomatis tersinkronisasi ke cloud saat koneksi internet tersedia.",
  },
  {
    question: "Printer apa saja yang didukung?",
    answer:
      "KasirGo mendukung berbagai printer thermal bluetooth dengan lebar kertas 58mm dan 80mm. Kompatibel dengan merek populer seperti Epson, XPrinter, dan berbagai printer thermal lainnya yang tersedia di pasaran Indonesia.",
  },
  {
    question: "Bagaimana cara backup data?",
    answer:
      "Data Anda aman dengan fitur backup otomatis ke cloud. Anda juga bisa melakukan backup manual kapan saja ke penyimpanan lokal atau Google Drive untuk keamanan ekstra.",
  },
  {
    question: "Apakah bisa digunakan di banyak perangkat?",
    answer:
      "Ya, Anda bisa menggunakan KasirGo di beberapa perangkat sekaligus dengan satu akun. Data akan tersinkronisasi secara otomatis antar perangkat saat online.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-20 md:py-28 gradient-hero">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6">
            Pertanyaan yang{" "}
            <span className="text-gradient">Sering Diajukan</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Temukan jawaban untuk pertanyaan umum tentang KasirGo.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border/50 shadow-card px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
