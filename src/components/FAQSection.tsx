import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Apakah aplikasi ini membutuhkan internet?",
    answer:
      "Tidak, KasirGo dirancang dengan sistem offline-first. Anda dapat melakukan transaksi, mengelola produk, dan melihat laporan tanpa koneksi internet. Internet hanya dibutuhkan untuk update aplikasi.",
  },
  {
    question: "Bagaimana cara backup data saya?",
    answer:
      "Data tersimpan secara lokal di perangkat. Namun, Anda dapat memanfaatkan fitur Ekspor Laporan (XLSX, CSV, PDF) untuk mencadangkan data transaksi. File hasil ekspor dapat disimpan ke layanan cloud seperti Google Drive atau dikelola menggunakan Microsoft Excel dan Google Sheets.",
  },
  {
    question: "Apakah bisa menghubungkan printer thermal?",
    answer:
      "Ya, KasirGo mendukung pencetakan struk menggunakan printer thermal Bluetooth (ukuran 58mm atau 80mm). Anda dapat menghubungkan printer melalui menu Pengaturan > Printer.",
  },
  {
    question: "Apakah data saya aman?",
    answer:
      "Data Anda tersimpan lokal di perangkat Anda dan tidak dikirim ke server eksternal kami, sehingga privasi data transaksi Anda terjamin penuh di tangan Anda.",
  },
  {
    question: "Apakah bisa digunakan di banyak perangkat (multi-device)?",
    answer:
      "Saat ini KasirGo didesain untuk penggunaan satu perangkat (single device). Data antar perangkat tidak saling terhubung (sinkronisasi) secara real-time.",
  },
  {
    question: "Bagaimana cara menampilkan QRIS?",
    answer:
      "Anda dapat mengupload gambar QRIS toko Anda di menu Pengaturan > QRIS. Saat checkout dengan metode QRIS, kode QR tersebut akan ditampilkan ke pelanggan untuk discan.",
  },
  {
    question: "Apakah perlu membuat akun atau login?",
    answer:
      "Tidak, KasirGo dapat langsung digunakan tanpa perlu pendaftaran atau login. Data tersimpan di perangkat Anda.",
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
