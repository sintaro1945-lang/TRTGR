/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  Anchor, 
  Ship, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight, 
  ChevronRight, 
  Globe, 
  ShieldCheck, 
  Clock,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const services = [
    {
      title: "Logistik Maritim",
      description: "Layanan pengiriman kargo laut yang efisien dan aman ke seluruh penjuru nusantara.",
      icon: <Ship className="w-8 h-8" />,
    },
    {
      title: "Manajemen Armada",
      description: "Pengelolaan armada kapal profesional dengan standar keamanan internasional.",
      icon: <Anchor className="w-8 h-8" />,
    },
    {
      title: "Solusi Rantai Pasok",
      description: "Integrasi logistik end-to-end untuk mengoptimalkan operasional bisnis Anda.",
      icon: <Globe className="w-8 h-8" />,
    },
  ];

  const stats = [
    { label: "Tahun Pengalaman", value: "15+" },
    { label: "Armada Kapal", value: "40+" },
    { label: "Rute Pelayaran", value: "120+" },
    { label: "Klien Puas", value: "500+" },
  ];

  return (
    <div className="min-h-screen bg-brand-bg selection:bg-brand-accent selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-accent z-[60] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "glass-nav py-4" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-brand-primary flex items-center justify-center rounded-lg">
              <Anchor className="text-brand-accent w-6 h-6" />
            </div>
            <span className="font-serif text-xl font-bold tracking-tight">
              AMBON JAYA <span className="text-brand-accent">MAHE</span>
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {["Beranda", "Layanan", "Tentang", "Kontak"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium hover:text-brand-accent transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="btn-primary text-sm">Hubungi Kami</button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-white border-b border-black/5 p-6 md:hidden flex flex-col gap-4"
          >
            {["Beranda", "Layanan", "Tentang", "Kontak"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="btn-primary w-full">Hubungi Kami</button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="beranda" className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=2000" 
            alt="Shipping Vessel" 
            className="w-full h-full object-cover brightness-[0.4]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-bg/20 to-brand-bg"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            style={{ opacity, scale }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-widest mb-6">
              Pelayaran & Logistik Terpercaya
            </span>
            <h1 className="text-5xl md:text-8xl font-serif text-white leading-[1.1] mb-8">
              Mengarungi Samudera, <br />
              <span className="italic text-brand-accent">Menghubungkan Nusantara.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-xl">
              PT AMBON JAYA MAHE menghadirkan solusi pelayaran modern dengan integritas tinggi, berbasis di Temanggung untuk melayani kebutuhan logistik global Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center justify-center gap-2 group">
                Mulai Kerjasama <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-outline !border-white !text-white hover:!bg-white hover:!text-brand-primary">
                Lihat Armada Kami
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  delay: idx * 0.1 
                }}
                className="text-center group"
              >
                <div className="text-4xl md:text-5xl font-serif font-bold text-brand-primary mb-2 group-hover:text-brand-accent transition-colors duration-500">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-widest font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-serif mb-6">Layanan Unggulan Kami</h2>
              <p className="text-gray-600 text-lg">
                Kami menyediakan berbagai layanan pelayaran dan logistik yang dirancang untuk memenuhi standar industri tertinggi dengan efisiensi maksimal.
              </p>
            </div>
            <button className="text-brand-primary font-bold flex items-center gap-2 hover:text-brand-accent transition-colors">
              Lihat Semua Layanan <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                whileHover={{ y: -10 }}
                className="p-10 bg-white rounded-3xl border border-black/5 hover:shadow-2xl hover:shadow-brand-primary/10 transition-all group cursor-default"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="w-16 h-16 bg-brand-bg rounded-2xl flex items-center justify-center text-brand-primary mb-8 group-hover:bg-brand-primary group-hover:text-white transition-colors"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-2xl font-serif mb-4">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="w-10 h-1 bg-brand-accent/30 group-hover:w-full transition-all duration-700 ease-in-out"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-32 bg-brand-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <Anchor className="w-full h-full -rotate-12 translate-x-1/4" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "circOut" }}
              className="relative group"
            >
              <div className="aspect-square rounded-3xl overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 1.5 }}
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=1000" 
                  alt="Office in Temanggung" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-10 -right-10 bg-brand-accent p-10 rounded-3xl hidden lg:block shadow-2xl"
              >
                <div className="text-brand-primary font-serif text-3xl font-bold mb-2 italic">Temanggung</div>
                <div className="text-brand-primary/80 font-medium tracking-widest uppercase text-xs">Pusat Operasional Kami</div>
              </motion.div>
            </motion.div>

            <div>
              <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">Berakar di Temanggung, <br />Melayani Dunia.</h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                PT AMBON JAYA MAHE lahir dari visi untuk memodernisasi industri pelayaran di Indonesia. Meskipun berbasis di Temanggung, jangkauan operasional kami mencakup seluruh perairan nusantara dan internasional.
              </p>
              
              <div className="space-y-6 mb-10">
                {[
                  { icon: <ShieldCheck className="text-brand-accent" />, text: "Keamanan Kargo Prioritas Utama" },
                  { icon: <Clock className="text-brand-accent" />, text: "Ketepatan Waktu Pengiriman" },
                  { icon: <Globe className="text-brand-accent" />, text: "Jaringan Global yang Luas" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              <button className="btn-primary !bg-brand-accent !text-brand-primary hover:!bg-white">
                Pelajari Selengkapnya
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[3rem] overflow-hidden border border-black/5 shadow-xl">
            <div className="grid md:grid-cols-2">
              <div className="p-12 md:p-20">
                <h2 className="text-4xl font-serif mb-8">Mari Berdiskusi</h2>
                <p className="text-gray-500 mb-12">
                  Siap untuk mengoptimalkan logistik Anda? Tim ahli kami di Temanggung siap membantu Anda menemukan solusi terbaik.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-brand-bg flex items-center justify-center text-brand-primary shrink-0">
                      <MapPin />
                    </div>
                    <div>
                      <div className="font-bold mb-1">Lokasi Kantor</div>
                      <div className="text-gray-500">Jl. Raya Temanggung No. 123, <br />Jawa Tengah, Indonesia</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-brand-bg flex items-center justify-center text-brand-primary shrink-0">
                      <Phone />
                    </div>
                    <div>
                      <div className="font-bold mb-1">Telepon</div>
                      <div className="text-gray-500">+62 293 1234 5678</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-brand-bg flex items-center justify-center text-brand-primary shrink-0">
                      <Mail />
                    </div>
                    <div>
                      <div className="font-bold mb-1">Email</div>
                      <div className="text-gray-500">info@ambonjayamahe.com</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-brand-bg p-12 md:p-20">
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Nama Lengkap</label>
                      <input type="text" className="w-full bg-white border border-black/5 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent/50" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email</label>
                      <input type="email" className="w-full bg-white border border-black/5 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent/50" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Subjek</label>
                    <input type="text" className="w-full bg-white border border-black/5 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent/50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Pesan</label>
                    <textarea rows={4} className="w-full bg-white border border-black/5 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent/50"></textarea>
                  </div>
                  <button className="btn-primary w-full">Kirim Pesan</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-20 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-brand-primary flex items-center justify-center rounded-lg">
                  <Anchor className="text-brand-accent w-5 h-5" />
                </div>
                <span className="font-serif text-xl font-bold tracking-tight">
                  AMBON JAYA <span className="text-brand-accent">MAHE</span>
                </span>
              </div>
              <p className="text-gray-500 max-w-sm leading-relaxed">
                Menjadi mitra pelayaran terpercaya yang menghubungkan setiap pulau di Indonesia dengan keunggulan operasional dan integritas tanpa kompromi.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Tautan Cepat</h4>
              <ul className="space-y-4 text-gray-500">
                <li><a href="#beranda" className="hover:text-brand-accent transition-colors">Beranda</a></li>
                <li><a href="#layanan" className="hover:text-brand-accent transition-colors">Layanan</a></li>
                <li><a href="#tentang" className="hover:text-brand-accent transition-colors">Tentang Kami</a></li>
                <li><a href="#kontak" className="hover:text-brand-accent transition-colors">Kontak</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Ikuti Kami</h4>
              <div className="flex gap-4">
                {["Instagram", "LinkedIn", "Facebook"].map(social => (
                  <a key={social} href="#" className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all">
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 bg-gray-200 rounded-sm"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-black/5 text-sm text-gray-400">
            <p>© 2026 PT AMBON JAYA MAHE. Seluruh hak cipta dilindungi.</p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <a href="#" className="hover:text-brand-primary">Kebijakan Privasi</a>
              <a href="#" className="hover:text-brand-primary">Syarat & Ketentuan</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
