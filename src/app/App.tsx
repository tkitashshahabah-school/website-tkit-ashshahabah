import { Phone, MapPin, Instagram, Youtube, Menu, X, Star, Heart, Award, Users, BookOpen, Smile, Dumbbell, Sprout, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { useState, useEffect, useRef } from 'react';
import { t, Lang } from './translations';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logoTK from '../imports/logo_tk.webp';
import heroImage from '../imports/IMG_2313.webp';
import jurnalPagiImage from '../imports/IMG_4055.webp';
import KunjunganEdukasiImage from '../imports/kunjunganedukasi.webp';
import RihlahImage from '../imports/rihlah.webp';
import SholatDhuhaImage from '../imports/sholatdhuha.webp';
import KreativitasImage from '../imports/Kreativitas.webp';
import MarketDayImage from '../imports/MarketDay.webp';
import kreatif1Image from '../imports/kreatif1_done.webp';
import kreatif3Image from '../imports/kreatif3_done.webp';
import kreatif5Image from '../imports/kreatif5.webp';
import marketday1Image from '../imports/marketday1.webp';
import marketday2Image from '../imports/marketday2.webp';
import marketday3Image from '../imports/marketday3.webp';
import marketday4Image from '../imports/marketday4.webp';
import marketday5Image from '../imports/marketday5.webp';
import areaLapanganImage from '../imports/arealapangan.webp';
import fotosekolahImage from '../imports/fotosekolah.webp';
import halamansekolahImage from '../imports/halamansekolah.webp';
import areaOutdoorImage from '../imports/areaoutdoor.webp';
import areaKelasImage from '../imports/areakelas.webp';
import tkaImage from '../imports/tka.webp';
import tkumarImage from '../imports/tkumar.webp';
import tkutsmanImage from '../imports/tkutsman.webp';
import bualifiaImage from '../imports/bualifia.webp';
import buftriImage from '../imports/buftri.webp';
import bulalaImage from '../imports/bulala.webp';
import bumurtiImage from '../imports/bumurti.webp';
import bunisaImage from '../imports/bunisa.webp';
import buririImage from '../imports/buriri.webp';
import busariImage from '../imports/busari.webp';
import butiniImage from '../imports/butini.webp';
import paromdonImage from '../imports/paromdon.webp';

// ─── Teacher Data ─────────────────────────────────────────────────────────────
// TODO: Perbarui dengan nama asli Kepala Sekolah dan para guru
const KEPALA_SEKOLAH = {
  name: 'Murtiasih, S.Pd.',
  title: 'Kepala Sekolah TKIT Ash-Shahabah',
  quote: 'Setiap anak adalah bintang yang bersinar dengan caranya sendiri. Di sini, kami hadir dengan sepenuh hati untuk membantu cahaya itu terpancar melalui pendidikan yang penuh kasih sayang, ilmu bermanfaat, dan nilai-nilai Islam yang mulia.',
  photo: bumurtiImage,
  initials: 'M'
};

const TEACHERS: { name: string; initials: string; color: string; photo?: any; role?: string }[] = [
  { name: 'Suwastini', initials: 'S', color: '#EC5F2D', photo: butiniImage },
  { name: 'Fitriawati, S.Pd.I.', initials: 'FA', color: '#27583B', photo: buftriImage },
  { name: 'Sari Wahyuni', initials: 'RM', color: '#4E9D6A', photo: busariImage },
  { name: 'Riri Priyanti, S.Pd.', initials: 'G1', color: '#27583B', photo: buririImage },
  { name: 'Oktaviani Choirotun Nisa S.Pd', initials: 'G2', color: '#EC5F2D', photo: bunisaImage },
  { name: 'Siti Maulanah S.sos', initials: 'G3', color: '#4E9D6A', photo: bulalaImage },
  { name: 'Alifia Fathihah Rahma', initials: 'G4', color: '#D4882A', photo: bualifiaImage },
  { name: 'Romdon', initials: 'OB', color: '#27583B', photo: paromdonImage },
];

// ─── Main App ─────────────────────────────────────────────────────────────────
export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ src: string | any | (string | any)[]; title: string; currentIndex?: number; isProfile?: boolean } | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lang, setLang] = useState<Lang>('id');
  const [activeSection, setActiveSection] = useState('beranda');
  const tr = t[lang];

  useEffect(() => {
    AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, offset: 80 });

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = ['beranda', 'tentang', 'fasilitas', 'kegiatan', 'faq'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(targetId);
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    setTimeout(() => AOS.refreshHard(), 50);
  }, [lang]);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <style>{`
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.85); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeInOverlay {
          from { opacity: 0; backdrop-filter: blur(0px); }
          to { opacity: 1; backdrop-filter: blur(4px); }
        }
      `}</style>

      {/* ═══ NAVBAR ═══════════════════════════════════════════════════════════ */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <img src={logoTK} alt="TKIT ASH-SHAHABAH" className="h-14 w-14 object-contain" />
              <div>
                <p className="text-base sm:text-lg font-bold" style={{ color: '#27583B', fontFamily: 'Nunito, sans-serif' }}>TKIT ASH-SHAHABAH</p>
                <p className="text-xs text-gray-500 hidden sm:block">Tumbuh Cerdas, Berakhlak Mulia</p>
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-6">
              {[
                { name: tr.nav_home, id: 'beranda' },
                { name: tr.nav_about, id: 'tentang' },
                { name: tr.nav_facility, id: 'fasilitas' },
                { name: tr.nav_activity, id: 'kegiatan' },
                { name: tr.nav_faq, id: 'faq' },
              ].map((item) => (
                <a
                  key={item.name}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`relative font-medium transition-colors py-1 text-sm duration-300
                            after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full
                            after:origin-left after:transition-transform after:duration-300
                            ${activeSection === item.id
                      ? 'text-[#EC5F2D] after:scale-x-100 after:bg-[#EC5F2D]'
                      : 'text-gray-600 hover:text-[#27583B] after:scale-x-0 after:bg-[#27583B] hover:after:scale-x-100'
                    }`}
                >
                  {item.name}
                </a>
              ))}
              <LangToggle lang={lang} setLang={setLang} />
            </nav>

            <a
              href="https://wa.link/pjcbpj"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:block px-6 py-2.5 rounded-full font-semibold text-white shadow-md hover:shadow-lg transition-all transform hover:scale-105 text-center text-sm"
              style={{ background: 'linear-gradient(135deg, #EC5F2D 0%, #FFA45B 100%)', fontFamily: 'Nunito, sans-serif' }}
            >
              {tr.nav_register}
            </a>

            <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" style={{ color: '#27583B' }} /> : <Menu className="w-6 h-6" style={{ color: '#27583B' }} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            <nav className="px-4 py-4 space-y-1">
              {[
                { name: tr.nav_home, id: 'beranda' },
                { name: tr.nav_about, id: 'tentang' },
                { name: tr.nav_facility, id: 'fasilitas' },
                { name: tr.nav_activity, id: 'kegiatan' },
                { name: tr.nav_faq, id: 'faq' },
              ].map((item) => (
                <a
                  key={item.name}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`block font-medium py-2.5 px-4 rounded-xl transition-all duration-300
                    ${activeSection === item.id
                      ? 'text-[#EC5F2D] bg-[#FFF7EE]'
                      : 'text-gray-600 hover:text-[#27583B] hover:bg-gray-50'
                    }`}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-4 pt-2"><LangToggle lang={lang} setLang={setLang} /></div>
              <a
                href="https://wa.link/pjcbpj"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-3 rounded-full font-semibold text-white shadow-md mt-4 text-center"
                style={{ background: 'linear-gradient(135deg, #EC5F2D 0%, #FFA45B 100%)' }}
              >
                {tr.nav_register}
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* ═══ HERO SECTION ═════════════════════════════════════════════════════ */}
      <section id="beranda" className="relative overflow-hidden" style={{ background: '#FFF7EE' }}>

        {/* Floating Decorations */}
        <div className="floating-deco absolute right-10 bottom-32 deco-float-a" style={{ zIndex: 1, pointerEvents: 'none', opacity: 0.60 }}>
          <StarIllustration color="#FFA45B" size={40} />
        </div>

        {/* Background doodles */}
        <div className="absolute top-10 left-10 w-16 h-16 opacity-15 float" style={{ zIndex: 0 }}>
          <Star className="w-full h-full" style={{ color: '#FFA45B' }} fill="#FFA45B" />
        </div>
        <div className="absolute top-20 right-20 w-14 h-14 opacity-15 float-slow" style={{ zIndex: 0 }}>
          <div className="w-full h-full rounded-full" style={{ background: '#EC5F2D' }}></div>
        </div>
        <div className="absolute bottom-24 left-1/4 w-10 h-10 opacity-12 float-reverse" style={{ zIndex: 0 }}>
          <Heart className="w-full h-full" style={{ color: '#27583B' }} fill="#27583B" />
        </div>
        <svg className="absolute top-32 right-1/3 w-20 h-14 opacity-12 float-slow" viewBox="0 0 100 60" fill="#27583B">
          <path d="M20,40 Q10,40 10,30 Q10,20 20,20 Q20,10 35,10 Q50,10 50,20 Q60,20 60,30 Q60,40 50,40 Z" />
        </svg>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 relative" style={{ zIndex: 2 }}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-6" data-aos="fade-right">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight" style={{ fontFamily: 'Nunito, sans-serif' }}>
                <span style={{ color: '#27583B' }}>{tr.hero_title1}</span>
                <br />
                <span style={{ color: '#EC5F2D' }}>{tr.hero_title2}</span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                {tr.hero_desc}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#tentang"
                  onClick={(e) => handleNavClick(e, 'tentang')}
                  className="px-8 py-3.5 rounded-full font-semibold text-white shadow-md hover:shadow-lg transition-all transform hover:scale-105 text-center"
                  style={{ background: '#27583B', fontFamily: 'Nunito, sans-serif' }}
                >
                  {tr.hero_btn_about}
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full opacity-35 float" style={{ background: 'linear-gradient(135deg, #FFA45B 0%, #EC5F2D 100%)' }}></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full opacity-22 float-reverse" style={{ background: '#27583B' }}></div>
              <AboutSlider
                images={[heroImage, tkaImage, tkumarImage, tkutsmanImage]}
                onImageClick={(i) => {
                  setSelectedImage({ src: [heroImage, tkaImage, tkumarImage, tkutsmanImage], title: 'Beranda', currentIndex: i });
                  setLightboxIndex(i);
                }}
              />
              <div className="absolute -top-4 -right-4 w-14 h-14 float-slow">
                <div className="w-full h-full rounded-full flex items-center justify-center" style={{ background: '#FFA45B' }}>
                  <div className="w-7 h-7 rounded-full" style={{ background: '#EC5F2D' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" className="w-full h-auto" fill="#FFFFFF">
            <path d="M0,50 Q360,10 720,50 T1440,50 L1440,100 L0,100 Z"></path>
          </svg>
        </div>
      </section>

      {/* ═══ FEATURES SECTION ════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
        {/* Floating Decorations */}
        <div className="floating-deco absolute left-12 bottom-12 deco-float-d" style={{ zIndex: 0, pointerEvents: 'none', opacity: 0.15 }}>
          <Heart className="w-16 h-16" style={{ color: '#EC5F2D' }} fill="#EC5F2D" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { icon: <BookOpen className="w-7 h-7" strokeWidth={1.75} />, title: tr.feat_learn, color: '#EC5F2D' },
              { icon: <Users className="w-7 h-7" strokeWidth={1.75} />, title: tr.feat_teacher, color: '#27583B' },
              { icon: <Award className="w-7 h-7" strokeWidth={1.75} />, title: tr.feat_akhlak, color: '#D4882A' },
              { icon: <Heart className="w-7 h-7" strokeWidth={1.75} />, title: tr.feat_environment, color: '#EC5F2D' },
              { icon: <Smile className="w-7 h-7" strokeWidth={1.75} />, title: tr.feat_potential, color: '#27583B' },
            ].map((item, i) => (
              <div key={item.title} data-aos="fade-up" data-aos-delay={i * 80}>
                <FeatureCard icon={item.icon} title={item.title} color={item.color} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ABOUT SECTION ═══════════════════════════════════════════════════ */}
      <section id="tentang" className="py-20 sm:py-28 relative overflow-hidden" style={{ background: '#FFF7EE' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right" data-aos-duration="700">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: '#27583B', fontFamily: 'Nunito, sans-serif' }}>
                  {tr.about_title}
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed text-[15px]">
                  <p>{tr.about_p1}</p>
                  <p>{tr.about_p2}</p>
                </div>
                <a
                  href="#tentang"
                  onClick={(e) => handleNavClick(e, 'tentang')}
                  className="inline-block px-8 py-3.5 rounded-full font-semibold text-white shadow-md hover:shadow-lg transition-all transform hover:scale-105 text-center"
                  style={{ background: 'linear-gradient(135deg, #EC5F2D 0%, #FFA45B 100%)', fontFamily: 'Nunito, sans-serif' }}
                >
                  {tr.about_btn}
                </a>
              </div>
            </div>

            <div data-aos="fade-left" data-aos-duration="700">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl opacity-12" style={{ background: '#27583B' }}></div>
                <img
                  src={fotosekolahImage}
                  alt="TKIT Ash-Shahabah"
                  className="photo-hover relative w-full h-auto rounded-3xl shadow-2xl"
                  onClick={() => setSelectedImage({ src: fotosekolahImage, title: 'Tentang Kami' })}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MENGENAL PENDIDIK KAMI ══════════════════════════════════════════ */}
      <section id="pendidik" className="py-20 sm:py-28 relative overflow-hidden" style={{ background: '#F0F7F3' }}>
        {/* Floating Cartoon Decorations */}
        <div className="floating-deco absolute right-12 bottom-20 deco-float-b" style={{ zIndex: 0, pointerEvents: 'none', opacity: 0.40 }}>
          <StarIllustration color="#27583B" size={45} />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: '#27583B', fontFamily: 'Nunito, sans-serif' }}>
                Mengenal Pendidik Kami
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-[15px] leading-relaxed">
                Tenaga pendidik kami yang profesional dan berdedikasi siap mendampingi putra-putri Anda tumbuh dan berkembang dengan penuh kasih sayang
              </p>
              <div className="w-20 h-1 mx-auto rounded-full mt-4" style={{ background: 'linear-gradient(135deg, #EC5F2D 0%, #FFA45B 100%)' }}></div>
            </div>
          </div>
          <TeacherSlider onImageClick={(src, title) => setSelectedImage({ src, title, isProfile: true })} />
        </div>
      </section>

      {/* ═══ VISI MISI SECTION ══════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
        {/* Floating Decorations */}
        <div className="floating-deco absolute right-10 top-20 deco-float-a" style={{ zIndex: 0, pointerEvents: 'none', opacity: 0.30 }}>
          <StarIllustration color="#27583B" size={35} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" style={{ zIndex: 1 }}>
          <div data-aos="fade-up" data-aos-duration="600">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: '#27583B', fontFamily: 'Nunito, sans-serif' }}>Visi & Misi</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-[15px]">Pondasi utama kami dalam mendidik generasi masa depan yang cerdas dan berakhlak mulia</p>
              <div className="w-20 h-1 mx-auto rounded-full mt-4" style={{ background: 'linear-gradient(135deg, #EC5F2D 0%, #FFA45B 100%)' }}></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Visi — deeper green for WCAG AA contrast */}
            <div data-aos="fade-right" data-aos-duration="700">
              <div
                className="visi-misi-hover relative overflow-hidden rounded-3xl shadow-xl p-8 sm:p-10"
                style={{ background: 'linear-gradient(140deg, #163825 0%, #1f4f33 50%, #27583B 100%)' }}
              >
                <div className="absolute top-0 right-0 w-40 h-40" style={{ opacity: 0.07 }}>
                  <Star className="w-full h-full" fill="white" />
                </div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'rgba(255, 255, 255, 0.15)' }}>
                      <Star className="w-7 h-7 text-white" strokeWidth={1.75} fill="white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Nunito, sans-serif' }}>{tr.vision}</h3>
                  </div>
                  <p className="text-white text-base sm:text-lg leading-relaxed font-medium">
                    {tr.vision_text}
                  </p>
                </div>
              </div>
            </div>

            {/* Misi — deeper orange-red for WCAG AA contrast */}
            <div data-aos="fade-left" data-aos-duration="700" data-aos-delay="150">
              <div
                className="visi-misi-hover relative overflow-hidden rounded-3xl shadow-xl p-8 sm:p-10"
                style={{ background: 'linear-gradient(140deg, #9a3515 0%, #b84020 50%, #C94E1F 100%)' }}
              >
                <div className="absolute bottom-0 right-0 w-40 h-40" style={{ opacity: 0.07 }}>
                  <Award className="w-full h-full" fill="white" />
                </div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'rgba(255, 255, 255, 0.15)' }}>
                      <Award className="w-7 h-7 text-white" strokeWidth={1.75} fill="white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Nunito, sans-serif' }}>{tr.mission}</h3>
                  </div>
                  <ul className="space-y-3.5 text-white">
                    {[tr.mission_1, tr.mission_2, tr.mission_3, tr.mission_4].map((m, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span
                          className="flex-shrink-0 w-6 h-6 rounded-full bg-white flex items-center justify-center text-xs font-bold"
                          style={{ color: '#C94E1F' }}
                        >
                          {i + 1}
                        </span>
                        <span className="text-[15px] leading-relaxed font-medium">{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FASILITAS SECTION ══════════════════════════════════════════════ */}
      <section id="fasilitas" className="py-20 sm:py-28 relative overflow-hidden" style={{ background: '#FFF7EE' }}>
        {/* Floating Decorations */}
        <div className="floating-deco absolute left-12 bottom-20 deco-float-d" style={{ zIndex: 0, pointerEvents: 'none', opacity: 0.15 }}>
          <Heart className="w-14 h-14" style={{ color: '#27583B' }} fill="#27583B" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: '#27583B', fontFamily: 'Nunito, sans-serif' }}>{tr.facility_title}</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-[15px]">{tr.facility_desc}</p>
              <div className="w-20 h-1 mx-auto rounded-full mt-4" style={{ background: 'linear-gradient(135deg, #EC5F2D 0%, #FFA45B 100%)' }}></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <FasilitasPhotoCard
              image={areaOutdoorImage}
              title={tr.facility_playground}
              icon={<Dumbbell className="w-5 h-5" strokeWidth={1.75} />}
              color="#27583B"
              large
              onClick={() => setSelectedImage({ src: areaOutdoorImage, title: tr.facility_playground })}
            />
            <FasilitasPhotoCard
              image={areaKelasImage}
              title={tr.facility_classroom}
              icon={<BookOpen className="w-5 h-5" strokeWidth={1.75} />}
              color="#EC5F2D"
              large
              onClick={() => setSelectedImage({ src: areaKelasImage, title: tr.facility_classroom })}
            />
            <FasilitasSliderCard
              images={[areaLapanganImage, halamansekolahImage]}
              title={tr.facility_field}
              icon={<Sprout className="w-5 h-5" strokeWidth={1.75} />}
              color="#27583B"
              onImageClick={(i) => {
                setSelectedImage({ src: [areaLapanganImage, halamansekolahImage], title: tr.facility_field, currentIndex: i });
                setLightboxIndex(i);
              }}
            />
          </div>
        </div>
      </section>

      {/* ═══ ACTIVITIES SECTION ══════════════════════════════════════════════ */}
      <section id="kegiatan" className="py-20 sm:py-28 relative overflow-hidden" style={{ background: '#FFF7EE' }}>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" style={{ zIndex: 1 }}>
          <div data-aos="fade-up">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: '#27583B', fontFamily: 'Nunito, sans-serif' }}>{tr.activity_title}</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-[15px]">{tr.activity_desc}</p>
              <div className="w-20 h-1 mx-auto rounded-full mt-4" style={{ background: 'linear-gradient(135deg, #EC5F2D 0%, #FFA45B 100%)' }}></div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ActivityCard
              image={jurnalPagiImage}
              title={tr.activity_jurnal}
              tag={tr.activity_jurnal_tag}
              onClick={() => setSelectedImage({ src: jurnalPagiImage, title: tr.activity_jurnal })}
            />
            <ActivityCard
              image={KunjunganEdukasiImage}
              title={tr.activity_kunjungan}
              tag={tr.activity_kunjungan_tag}
              onClick={() => setSelectedImage({ src: KunjunganEdukasiImage, title: tr.activity_kunjungan })}
            />
            <ActivityCard
              image={RihlahImage}
              title={tr.activity_rihlah}
              tag={tr.activity_rihlah_tag}
              onClick={() => setSelectedImage({ src: RihlahImage, title: tr.activity_rihlah })}
            />
            <ActivityCard
              image={SholatDhuhaImage}
              title={tr.activity_sholat}
              tag={tr.activity_sholat_tag}
              onClick={() => setSelectedImage({ src: SholatDhuhaImage, title: tr.activity_sholat })}
            />
            <ActivitySliderCard
              images={[KreativitasImage, kreatif1Image, kreatif3Image, kreatif1Image, kreatif5Image]}
              title={tr.activity_kreativitas}
              tag={tr.activity_kreativitas_tag}
              onImageClick={(i) => {
                const imgs = [KreativitasImage, kreatif1Image, kreatif3Image, kreatif1Image, kreatif5Image];
                setSelectedImage({ src: imgs, title: tr.activity_kreativitas, currentIndex: i });
                setLightboxIndex(i);
              }}
            />
            <ActivitySliderCard
              images={[MarketDayImage, marketday1Image, marketday2Image, marketday3Image, marketday4Image, marketday5Image]}
              title={tr.activity_marketday}
              tag={tr.activity_marketday_tag}
              onImageClick={(i) => {
                const imgs = [MarketDayImage, marketday1Image, marketday2Image, marketday3Image, marketday4Image, marketday5Image];
                setSelectedImage({ src: imgs, title: tr.activity_marketday, currentIndex: i });
                setLightboxIndex(i);
              }}
            />
          </div>
        </div>
      </section>

      {/* ═══ FAQ SECTION ═════════════════════════════════════════════════════ */}
      <section id="faq" className="py-20 sm:py-28 bg-white relative overflow-hidden">
        {/* Floating Cartoon Decorations */}
        <div className="floating-deco absolute left-12 top-20 deco-float-c" style={{ zIndex: 0, pointerEvents: 'none', opacity: 0.40 }}>
          <StarIllustration color="#FFA45B" size={35} />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: '#27583B', fontFamily: 'Nunito, sans-serif' }}>{tr.faq_title}</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-[15px]">Temukan jawaban atas pertanyaan yang sering ditanyakan orang tua</p>
              <div className="w-20 h-1 mx-auto rounded-full mt-4" style={{ background: 'linear-gradient(135deg, #EC5F2D 0%, #FFA45B 100%)' }}></div>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { q: tr.faq_q1, a: tr.faq_a1 },
              { q: tr.faq_q2, a: tr.faq_a2 },
              { q: tr.faq_q3, a: tr.faq_a3 },
              { q: tr.faq_q4, a: tr.faq_a4 },
              { q: tr.faq_q5, a: tr.faq_a5 },
            ].map((item, i) => (
              <FAQItem key={i} question={item.q} answer={item.a} index={i} />
            ))}
          </div>

          <div className="mt-14 text-center" data-aos="fade-up" data-aos-delay="200">
            <p className="text-gray-400 mb-6 text-[15px]">{tr.faq_contact}</p>
            <a
              href="https://wa.link/pjcbpj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #EC5F2D 0%, #FFA45B 100%)', fontFamily: 'Nunito, sans-serif' }}
            >
              <WhatsAppIcon className="w-6 h-6 text-white" />
              {tr.faq_wa}
            </a>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ══════════════════════════════════════════════════════════ */}
      <footer className="relative overflow-hidden text-white pt-16 pb-8" style={{ background: '#27583B' }}>
        {/* Floating Cartoon Decorations */}
        <div className="floating-deco absolute right-16 top-16 deco-float-a" style={{ zIndex: 0, pointerEvents: 'none', opacity: 0.20 }}>
          <StarIllustration color="#FFFFFF" size={40} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div data-aos="fade-up" data-aos-duration="700">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <img src={logoTK} alt="TKIT Ash-Shahabah" className="h-16 w-16 bg-white rounded-full p-2" />
                  <div>
                    <h3 className="font-bold text-lg" style={{ fontFamily: 'Nunito, sans-serif' }}>TKIT Ash-Shahabah</h3>
                    <p className="text-sm opacity-75">Bekasi</p>
                  </div>
                </div>
                <p className="text-sm opacity-85 mb-6 leading-relaxed">{tr.footer_tagline}</p>
                <div className="flex gap-3 flex-wrap">
                  <SocialIcon icon={<TikTokIcon className="w-5 h-5" />} href="https://www.tiktok.com/@tkit.ash.shahabah" />
                  <SocialIcon icon={<Instagram className="w-5 h-5" />} href="https://www.instagram.com/tkit.ashshahabah" />
                  <SocialIcon icon={<Youtube className="w-5 h-5" />} href="https://youtube.com/@tkitashshahabah?si=hdgcV1TowFb7XmGp" />
                  <SocialIcon icon={<WhatsAppIcon className="w-5 h-5" />} href="https://wa.link/pjcbpj" />
                </div>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>{tr.footer_menu}</h4>
                <ul className="space-y-2 text-sm opacity-85">
                  <li><a href="#" className="hover:opacity-100 transition-opacity">{tr.nav_home}</a></li>
                  <li><a href="#tentang" className="hover:opacity-100 transition-opacity">{tr.nav_about}</a></li>
                  <li><a href="#fasilitas" className="hover:opacity-100 transition-opacity">{tr.nav_facility}</a></li>
                  <li><a href="#kegiatan" className="hover:opacity-100 transition-opacity">{tr.nav_activity}</a></li>
                  <li><a href="#faq" className="hover:opacity-100 transition-opacity">{tr.nav_faq}</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>{tr.footer_contact}</h4>
                <ul className="space-y-3 text-sm opacity-85">
                  <li className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>{tr.footer_address}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="w-5 h-5 flex-shrink-0" />
                    <span>(0821) 1515-0486</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-sm opacity-70">
            <p>{tr.footer_copy}</p>
          </div>
        </div>
      </footer>

      {/* ═══ IMAGE LIGHTBOX ══════════════════════════════════════════════════ */}
      {selectedImage && (() => {
        const images = Array.isArray(selectedImage.src) ? selectedImage.src : [selectedImage.src];
        const currentImg = images[lightboxIndex];
        const imgSrc = typeof currentImg === 'string' ? currentImg : currentImg;
        const hasMultipleImages = images.length > 1;

        const goToPrevLightbox = (e: React.MouseEvent) => {
          e.stopPropagation();
          setLightboxIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
        };
        const goToNextLightbox = (e: React.MouseEvent) => {
          e.stopPropagation();
          setLightboxIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        };

        return (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85"
            onClick={() => { setSelectedImage(null); setLightboxIndex(0); }}
            style={{ animation: 'fadeInOverlay 0.3s ease-out forwards' }}
          >
            <button
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
              onClick={() => { setSelectedImage(null); setLightboxIndex(0); }}
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {hasMultipleImages && !selectedImage.isProfile && (
              <>
                <button onClick={goToPrevLightbox} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button onClick={goToNextLightbox} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            <div className="max-w-5xl w-full flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <img 
                src={imgSrc} 
                alt={selectedImage.title} 
                className={selectedImage.isProfile 
                  ? "w-[85vw] max-w-[400px] aspect-square object-cover rounded-full shadow-2xl border-4" 
                  : "w-full h-auto max-h-[85vh] object-contain rounded-2xl"}
                style={selectedImage.isProfile 
                  ? { borderColor: 'rgba(255,255,255,0.15)', animation: 'scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards' } 
                  : {}}
              />
              <div className="flex items-center justify-center gap-3 mt-5" style={selectedImage.isProfile ? { animation: 'scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards' } : {}}>
                <p className="text-white text-center text-xl font-semibold tracking-wide">{selectedImage.title}</p>
                {hasMultipleImages && !selectedImage.isProfile && (
                  <span className="px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium">
                    {lightboxIndex + 1} / {images.length}
                  </span>
                )}
              </div>
              {hasMultipleImages && !selectedImage.isProfile && (
                <div className="flex justify-center gap-2 mt-4">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => { e.stopPropagation(); setLightboxIndex(index); }}
                      className={`w-2 h-2 rounded-full transition-all ${index === lightboxIndex ? 'bg-white w-6' : 'bg-white/50'}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      })()}
    </div>
  );
}

// ═════════════════════════════════════════════════════════════════════════════
// TEACHER SLIDER COMPONENT
// ═════════════════════════════════════════════════════════════════════════════
function TeacherSlider({ onImageClick }: { onImageClick?: (src: string, title: string) => void }) {
  const slides = [
    { type: 'principal' as const },
    ...TEACHERS.map((_, i) => ({ type: 'teacher' as const, teacherIndex: i })),
  ];

  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const prev = () => { setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1)); resetTimer(); };
  const next = () => { setCurrent((c) => (c + 1) % slides.length); resetTimer(); };

  return (
    <div className="relative" data-aos="fade-up" data-aos-duration="700">
      {/* Slides Container */}
      <div className="relative rounded-3xl overflow-hidden" style={{ minHeight: '460px' }}>
        {slides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out"
            style={{
              opacity: i === current ? 1 : 0,
              zIndex: i === current ? 1 : 0,
              pointerEvents: i === current ? 'auto' : 'none',
            }}
          >
            {slide.type === 'principal' ? (
              <PrincipalSlide onImageClick={onImageClick} />
            ) : (
              <TeacherSlideCard teacher={TEACHERS[slide.teacherIndex]} onImageClick={onImageClick} />
            )}
          </div>
        ))}
      </div>

      {/* Navigation Arrows — desktop */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-10 hidden sm:flex"
        style={{ background: '#27583B' }}
        aria-label="Sebelumnya"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-10 hidden sm:flex"
        style={{ background: '#27583B' }}
        aria-label="Berikutnya"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Navigation Arrows — mobile */}
      <div className="flex justify-between sm:hidden mt-4 gap-3">
        <button
          onClick={prev}
          className="flex-1 py-2.5 rounded-full text-white text-sm font-semibold flex items-center justify-center gap-1"
          style={{ background: '#27583B' }}
        >
          <ChevronLeft className="w-4 h-4" /> Sebelumnya
        </button>
        <button
          onClick={next}
          className="flex-1 py-2.5 rounded-full text-white text-sm font-semibold flex items-center justify-center gap-1"
          style={{ background: '#27583B' }}
        >
          Berikutnya <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setCurrent(i); resetTimer(); }}
            className="h-2.5 rounded-full transition-all duration-300"
            style={{
              width: i === current ? '28px' : '10px',
              background: i === current ? '#27583B' : '#CBD5E1',
            }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Principal Slide (Kepala Sekolah) ────────────────────────────────────────
function PrincipalSlide({ onImageClick }: { onImageClick?: (src: string, title: string) => void }) {
  return (
    <div
      className="w-full rounded-3xl overflow-hidden"
      style={{ background: 'linear-gradient(140deg, #163825 0%, #1f4f33 45%, #27583B 100%)', minHeight: '460px' }}
    >
      <div className="grid md:grid-cols-2 h-full" style={{ minHeight: '460px' }}>
        {/* Left — Avatar & Name */}
        <div className="flex flex-col items-center justify-center p-8 sm:p-12 relative">
          {/* Subtle background circles */}
          <div className="absolute top-8 left-8 w-28 h-28 rounded-full" style={{ background: 'rgba(255,255,255,0.04)' }}></div>
          <div className="absolute bottom-8 right-4 w-20 h-20 rounded-full" style={{ background: 'rgba(255,255,255,0.04)' }}></div>

          {/* Avatar */}
          <div className="relative mb-5">
            {KEPALA_SEKOLAH.photo ? (
              <img 
                src={KEPALA_SEKOLAH.photo} 
                alt={KEPALA_SEKOLAH.name} 
                className="w-36 h-36 rounded-full object-cover shadow-2xl border-4 cursor-pointer hover:scale-105 transition-transform duration-300" 
                style={{ borderColor: 'rgba(255,255,255,0.25)' }} 
                onClick={() => onImageClick && onImageClick(KEPALA_SEKOLAH.photo, KEPALA_SEKOLAH.name)}
              />
            ) : (
              <div
                className="w-36 h-36 rounded-full flex items-center justify-center text-4xl font-black shadow-2xl border-4"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.08) 100%)',
                  borderColor: 'rgba(255,255,255,0.25)',
                  color: 'white',
                  fontFamily: 'Nunito, sans-serif',
                  backdropFilter: 'blur(12px)',
                }}
              >
                {KEPALA_SEKOLAH.initials}
              </div>
            )}
            {/* Badge */}
            <div
              className="absolute -bottom-2 -right-2 w-11 h-11 rounded-full flex items-center justify-center shadow-lg"
              style={{ background: '#EC5F2D' }}
            >
              <Star className="w-5 h-5 text-white" fill="white" />
            </div>
          </div>

          {/* Name & Title */}
          <h3 className="text-2xl font-bold text-white text-center mb-2" style={{ fontFamily: 'Nunito, sans-serif' }}>
            {KEPALA_SEKOLAH.name}
          </h3>
          <span
            className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase"
            style={{ background: 'rgba(236,95,45,0.85)', color: 'white' }}
          >
            Kepala Sekolah
          </span>
        </div>

        {/* Right — Kata Pengantar */}
        <div
          className="flex flex-col justify-center p-8 sm:p-12"
          style={{ borderLeft: '1px solid rgba(255,255,255,0.12)' }}
        >
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-5 uppercase tracking-widest"
            style={{ background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.85)' }}
          >
            Kata Pengantar Kepala Sekolah
          </span>

          {/* Decorative quote mark */}
          <div
            className="text-8xl leading-none mb-1 select-none"
            style={{ color: 'rgba(255,255,255,0.12)', fontFamily: 'Georgia, serif', lineHeight: '1' }}
          >
            "
          </div>

          <p
            className="text-white text-base sm:text-lg leading-relaxed -mt-5"
            style={{ opacity: 0.95 }}
          >
            {KEPALA_SEKOLAH.quote}
          </p>

          <div className="mt-6 flex items-center gap-3">
            <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.18)' }}></div>
            <span className="text-sm italic" style={{ color: 'rgba(255,255,255,0.6)' }}>— {KEPALA_SEKOLAH.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Teacher Slide Card ───────────────────────────────────────────────────────
function TeacherSlideCard({ teacher, onImageClick }: { teacher: typeof TEACHERS[0]; onImageClick?: (src: string, title: string) => void }) {
  return (
    <div
      className="w-full rounded-3xl flex items-center justify-center p-8 sm:p-12"
      style={{ background: 'white', minHeight: '460px', border: '1px solid #E4EDE8' }}
    >
      <div className="text-center max-w-xs mx-auto">
        {/* Avatar */}
        <div className="relative inline-block mb-5">
          {teacher.photo ? (
            <img 
              src={teacher.photo} 
              alt={teacher.name} 
              className="w-36 h-36 rounded-full object-cover mx-auto shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300" 
              style={{ border: `3px solid ${teacher.color}25` }} 
              onClick={() => onImageClick && onImageClick(teacher.photo, teacher.name)}
            />
          ) : (
            <div
              className="w-36 h-36 rounded-full flex items-center justify-center text-4xl font-black mx-auto shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${teacher.color}20 0%, ${teacher.color}10 100%)`,
                color: teacher.color,
                fontFamily: 'Nunito, sans-serif',
                border: `3px solid ${teacher.color}25`,
              }}
            >
              {teacher.initials}
            </div>
          )}
          <div
            className="absolute -bottom-1.5 -right-1.5 w-10 h-10 rounded-full flex items-center justify-center shadow-md"
            style={{ background: teacher.color }}
          >
            <BookOpen className="w-4 h-4 text-white" strokeWidth={2} />
          </div>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: '#1a3828', fontFamily: 'Nunito, sans-serif' }}>
          {teacher.name}
        </h3>
        {teacher.role && (
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold"
            style={{ background: `${teacher.color}12`, color: teacher.color }}
          >
            {teacher.role}
          </span>
        )}

        <div className="mt-6 pt-6" style={{ borderTop: '1px solid #E4EDE8' }}>
          <p className="text-gray-400 text-sm">TKIT Ash-Shahabah, Bekasi</p>
        </div>
      </div>
    </div>
  );
}

// ═════════════════════════════════════════════════════════════════════════════
// EXISTING COMPONENTS (preserved, minor style updates)
// ═════════════════════════════════════════════════════════════════════════════

function AboutSlider({ images, onImageClick }: { images: any[]; onImageClick?: (index: number) => void }) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [images.length]);

  return (
    <div className="photo-hover group relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] cursor-pointer" onClick={() => onImageClick && onImageClick(current)}>
      <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl opacity-15 pointer-events-none" style={{ background: '#27583B' }}></div>
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Beranda ${i + 1}`}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
          style={{ opacity: i === current ? 1 : 0 }}
        />
      ))}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
            className="h-2 rounded-full transition-all duration-300"
            style={{ width: i === current ? '24px' : '8px', background: i === current ? '#EC5F2D' : 'rgba(255,255,255,0.6)' }}
          />
        ))}
      </div>
    </div>
  );
}

function LangToggle({ lang, setLang }: { lang: 'id' | 'en'; setLang: (l: 'id' | 'en') => void }) {
  return (
    <div className="inline-flex items-center rounded-full overflow-hidden border-2 text-xs font-bold" style={{ borderColor: '#27583B' }}>
      <button
        onClick={() => setLang('en')}
        className="px-2.5 py-1 transition-all duration-200"
        style={{ background: lang === 'en' ? '#27583B' : 'transparent', color: lang === 'en' ? 'white' : '#27583B' }}
      >
        EN
      </button>
      <div className="w-px self-stretch" style={{ background: '#27583B' }}></div>
      <button
        onClick={() => setLang('id')}
        className="px-2.5 py-1 transition-all duration-200"
        style={{ background: lang === 'id' ? '#27583B' : 'transparent', color: lang === 'id' ? 'white' : '#27583B' }}
      >
        ID
      </button>
    </div>
  );
}

function FeatureCard({ icon, title, color }: { icon: React.ReactNode; title: string; color: string }) {
  return (
    <div className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 cursor-pointer card-hover border border-gray-50">
      <div className="flex flex-col items-center text-center gap-4">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
          style={{ background: `${color}14` }}
        >
          <div style={{ color }}>{icon}</div>
        </div>
        <h3 className="font-bold text-gray-800 text-sm" style={{ fontFamily: 'Nunito, sans-serif' }}>
          {title}
        </h3>
      </div>
    </div>
  );
}

function FasilitasSliderCard({
  images, title, icon, color, onImageClick,
}: {
  images: any[]; title: string; description?: string; icon: React.ReactNode; color: string; onImageClick?: (index: number) => void;
}) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
  };

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [images.length]);

  const prev = (e: React.MouseEvent) => { e.stopPropagation(); setCurrent((c) => (c === 0 ? images.length - 1 : c - 1)); resetTimer(); };
  const next = (e: React.MouseEvent) => { e.stopPropagation(); setCurrent((c) => (c + 1) % images.length); resetTimer(); };

  return (
    <div className="photo-hover group relative overflow-hidden rounded-3xl shadow-lg h-80 cursor-pointer" onClick={() => onImageClick && onImageClick(current)}>
      {images.map((src, i) => (
        <img key={i} src={src} alt={`${title} ${i + 1}`} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700" style={{ opacity: i === current ? 1 : 0 }} />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none"></div>

      <div className="absolute top-4 left-4">
        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white backdrop-blur-sm" style={{ background: `${color}CC` }}>
          {icon}{title}
        </span>
      </div>
      <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white text-xs font-medium">
        {current + 1} / {images.length}
      </div>

      <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/25 hover:bg-white/50 backdrop-blur-sm flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-10">
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/25 hover:bg-white/50 backdrop-blur-sm flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-10">
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>

      <div className="absolute bottom-14 left-0 right-0 flex justify-center gap-1.5 pointer-events-none">
        {images.map((_, i) => (
          <div key={i} className="h-1.5 rounded-full transition-all duration-300" style={{ width: i === current ? '20px' : '6px', background: i === current ? 'white' : 'rgba(255,255,255,0.5)' }} />
        ))}
      </div>
    </div>
  );
}

function FasilitasPhotoCard({ image, title, icon, color, large, onClick }: { image: string | any; title: string; description?: string; icon: React.ReactNode; color: string; large?: boolean; onClick?: () => void }) {
  return (
    <div className={`photo-hover group relative overflow-hidden rounded-3xl shadow-lg ${large ? 'h-80' : 'h-64'}`} onClick={onClick}>
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent"></div>
      <div className="absolute top-4 left-4">
        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white backdrop-blur-sm" style={{ background: `${color}CC` }}>
          {icon}{title}
        </span>
      </div>
    </div>
  );
}

function ActivityCard({ image, title, tag, onClick }: { image: string | any | (string | any)[]; title: string; tag: string; onClick?: () => void }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = Array.isArray(image) ? image : [image];
  const currentImage = images[currentImageIndex];
  const imageSrc = typeof currentImage === 'string' ? currentImage : currentImage;
  const hasMultipleImages = images.length > 1;

  const goToPrevious = (e: React.MouseEvent) => { e.stopPropagation(); setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1)); };
  const goToNext = (e: React.MouseEvent) => { e.stopPropagation(); setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1)); };

  return (
    <div className="photo-hover group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer" onClick={onClick}>
      {typeof currentImage === 'string' ? (
        <ImageWithFallback src={imageSrc} alt={title} className="w-full h-64 object-cover" />
      ) : (
        <img src={imageSrc} alt={title} className="w-full h-64 object-cover" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

      {hasMultipleImages && (
        <>
          <button onClick={goToPrevious} className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/30 hover:bg-white/50 backdrop-blur-sm flex items-center justify-center transition-all opacity-0 group-hover:opacity-100">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button onClick={goToNext} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/30 hover:bg-white/50 backdrop-blur-sm flex items-center justify-center transition-all opacity-0 group-hover:opacity-100">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </>
      )}

      <div className="absolute top-4 left-4">
        <span className="px-3 py-1 rounded-full text-xs font-semibold text-white" style={{ background: '#EC5F2D' }}>{tag}</span>
      </div>

      {hasMultipleImages && (
        <div className="absolute top-4 right-4 flex gap-1">
          {images.map((_, index) => (
            <div key={index} className={`w-1.5 h-1.5 rounded-full transition-all ${index === currentImageIndex ? 'bg-white w-4' : 'bg-white/50'}`} />
          ))}
        </div>
      )}

      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
        <h3 className="text-white font-bold text-xl" style={{ fontFamily: 'Nunito, sans-serif' }}>{title}</h3>
        {hasMultipleImages && (
          <span className="text-white/80 text-sm font-medium">{currentImageIndex + 1}/{images.length}</span>
        )}
      </div>
    </div>
  );
}

function ActivitySliderCard({ images, title, tag, onImageClick }: { images: (string | any)[]; title: string; tag: string; onImageClick?: (index: number) => void }) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => { setCurrent((prev) => (prev + 1) % images.length); }, 3000);
  };

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [images.length]);

  const prev = (e: React.MouseEvent) => { e.stopPropagation(); setCurrent((c) => (c === 0 ? images.length - 1 : c - 1)); resetTimer(); };
  const next = (e: React.MouseEvent) => { e.stopPropagation(); setCurrent((c) => (c + 1) % images.length); resetTimer(); };

  return (
    <div className="photo-hover group relative overflow-hidden rounded-2xl shadow-lg h-64 cursor-pointer" onClick={() => onImageClick && onImageClick(current)}>
      {images.map((src, i) => (
        <img key={i} src={src} alt={`${title} ${i + 1}`} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700" style={{ opacity: i === current ? 1 : 0 }} />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none"></div>

      <div className="absolute top-4 left-4">
        <span className="px-3 py-1 rounded-full text-xs font-semibold text-white" style={{ background: '#EC5F2D' }}>{tag}</span>
      </div>
      <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white text-xs font-medium">
        {current + 1} / {images.length}
      </div>

      <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/25 hover:bg-white/50 backdrop-blur-sm flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-10">
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/25 hover:bg-white/50 backdrop-blur-sm flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-10">
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>

      <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-1.5 pointer-events-none">
        {images.map((_, i) => (
          <div key={i} className="h-1.5 rounded-full transition-all duration-300" style={{ width: i === current ? '18px' : '6px', background: i === current ? 'white' : 'rgba(255,255,255,0.5)' }} />
        ))}
      </div>

      <div className="absolute bottom-4 left-4 right-4">
        <h3 className="text-white font-bold text-xl" style={{ fontFamily: 'Nunito, sans-serif' }}>{title}</h3>
      </div>
    </div>
  );
}

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md"
      data-aos="fade-up"
      data-aos-delay={index * 80}
    >
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-gray-800 hover:text-[#27583B] transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="flex items-center gap-3">
          <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: open ? '#EC5F2D' : '#27583B' }}>
            {index + 1}
          </span>
          <span style={{ fontFamily: 'Nunito, sans-serif' }}>{question}</span>
        </span>
        <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${open ? 'rotate-45' : ''}`} style={{ background: open ? 'rgba(236,95,45,0.1)' : 'rgba(39,88,59,0.08)' }}>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} style={{ color: open ? '#EC5F2D' : '#27583B' }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-400 ease-in-out ${open ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4 whitespace-pre-line text-[15px]">
          {answer}
        </div>
      </div>
    </div>
  );
}

function SocialIcon({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110" style={{ background: 'rgba(255, 255, 255, 0.18)' }}>
      {icon}
    </a>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ═════════════════════════════════════════════════════════════════════════════
// STAR ILLUSTRATION (still used in Visi Misi section)
// ═════════════════════════════════════════════════════════════════════════════

function StarIllustration({ color = '#FFA45B', size = 30 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15 2L18.5 11.5H28.5L20.8 17.7L23.8 27.2L15 21L6.2 27.2L9.2 17.7L1.5 11.5H11.5L15 2Z"
        fill={color}
        opacity="0.88"
      />
    </svg>
  );
}
