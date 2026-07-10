import { Phone, MapPin, Instagram, Youtube, Menu, X, Star, Heart, Award, Users, BookOpen, Smile, Dumbbell, Sprout, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
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
  photo: bumurtiImage,
  initials: 'M'
};

const TEACHERS: { name: string; initials: string; color: string; photo?: any; roleKey?: string }[] = [
  { name: 'Suwastini', initials: 'S', color: '#EC5F2D', photo: butiniImage, roleKey: 'role_wali_kelas_b_utsman' },
  { name: 'Fitriawati, S.Pd.I.', initials: 'FA', color: '#27583B', photo: buftriImage, roleKey: 'role_wali_kelas_b_umar' },
  { name: 'Sari Wahyuni', initials: 'RM', color: '#4E9D6A', photo: busariImage, roleKey: 'role_wali_kelas_a_ali' },
  { name: 'Riri Priyanti, S.Pd.', initials: 'G1', color: '#27583B', photo: buririImage, roleKey: 'role_wali_kelas_b_ubaidillah' },
  { name: 'Oktaviani Choirotun Nisa S.Pd', initials: 'G2', color: '#EC5F2D', photo: bunisaImage, roleKey: 'role_guru_pendamping_a_ali' },
  { name: 'Siti Maulanah S.sos', initials: 'G3', color: '#4E9D6A', photo: bulalaImage, roleKey: 'role_guru_pendamping_b_utsman' },
  { name: 'Alifia Fathihah Rahma', initials: 'G4', color: '#D4882A', photo: bualifiaImage, roleKey: 'role_guru_pendamping_b_umar' },
  { name: 'Romdon', initials: 'OB', color: '#27583B', photo: paromdonImage, roleKey: 'role_office_boy' },
];

// ─── Main App ─────────────────────────────────────────────────────────────────
export default function App() {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ src: string | any | (string | any)[]; title: string; currentIndex?: number; isProfile?: boolean } | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activeSection, setActiveSection] = useState('beranda');

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
  }, [i18n.language]);

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
                { name: t('nav_home'), id: 'beranda' },
                { name: t('nav_about'), id: 'tentang' },
                { name: t('nav_facility'), id: 'fasilitas' },
                { name: t('nav_activity'), id: 'kegiatan' },
                { name: t('nav_faq'), id: 'faq' },
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
              <LangToggle />
            </nav>

            <a
              href="https://wa.link/pjcbpj"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:block px-6 py-2.5 rounded-full font-semibold text-white shadow-md hover:shadow-lg transition-all transform hover:scale-105 text-center text-sm"
              style={{ background: 'linear-gradient(135deg, #EC5F2D 0%, #FFA45B 100%)', fontFamily: 'Nunito, sans-serif' }}
            >
              {t('nav_register')}
            </a>

            <button className="lg:hidden p-3" aria-label="Toggle Menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" style={{ color: '#27583B' }} /> : <Menu className="w-6 h-6" style={{ color: '#27583B' }} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            <nav className="px-4 py-4 space-y-1">
              {[
                { name: t('nav_home'), id: 'beranda' },
                { name: t('nav_about'), id: 'tentang' },
                { name: t('nav_facility'), id: 'fasilitas' },
                { name: t('nav_activity'), id: 'kegiatan' },
                { name: t('nav_faq'), id: 'faq' },
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
              <div className="px-4 pt-2"><LangToggle /></div>
              <a
                href="https://wa.link/pjcbpj"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-3 rounded-full font-semibold text-white shadow-md mt-4 text-center"
                style={{ background: 'linear-gradient(135deg, #EC5F2D 0%, #FFA45B 100%)' }}
              >
                {t('nav_register')}
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* ═══ HERO SECTION ═════════════════════════════════════════════════════ */}
      <section id="beranda" className="relative overflow-hidden scroll-mt-20" style={{ background: '#FFF7EE' }}>

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
                <span style={{ color: '#27583B' }}>{t('hero_title1')}</span>
                <br />
                <span style={{ color: '#EC5F2D' }}>{t('hero_title2')}</span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                {t('hero_desc')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#tentang"
                  onClick={(e) => handleNavClick(e, 'tentang')}
                  className="px-8 py-3.5 rounded-full font-semibold text-white shadow-md hover:shadow-lg transition-all transform hover:scale-105 text-center"
                  style={{ background: '#27583B', fontFamily: 'Nunito, sans-serif' }}
                >
                  {t('hero_btn_about')}
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

        {/* Wave Divider Bottom */}
        <div className="absolute bottom-0 left-0 right-0" style={{ zIndex: 1 }}>
          <svg viewBox="0 0 1440 100" className="w-full h-auto" fill="#FFFFFF" preserveAspectRatio="none">
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
              { icon: <BookOpen className="w-7 h-7" strokeWidth={1.75} />, title: t('feat_learn'), color: '#EC5F2D' },
              { icon: <Users className="w-7 h-7" strokeWidth={1.75} />, title: t('feat_teacher'), color: '#27583B' },
              { icon: <Award className="w-7 h-7" strokeWidth={1.75} />, title: t('feat_akhlak'), color: '#D4882A' },
              { icon: <Heart className="w-7 h-7" strokeWidth={1.75} />, title: t('feat_environment'), color: '#EC5F2D' },
              { icon: <Smile className="w-7 h-7" strokeWidth={1.75} />, title: t('feat_potential'), color: '#27583B' },
            ].map((item, i) => (
              <div key={item.title} data-aos="fade-up" data-aos-delay={i * 80}>
                <FeatureCard icon={item.icon} title={item.title} color={item.color} />
              </div>
            ))}
          </div>
        </div>
        {/* Wave Divider Bottom */}
        <div className="absolute bottom-0 left-0 right-0" style={{ zIndex: 1 }}>
          <svg viewBox="0 0 1440 100" className="w-full h-12 sm:h-20" fill="#FFF7EE" preserveAspectRatio="none">
            <path d="M0,50 Q360,10 720,50 T1440,50 L1440,100 L0,100 Z"></path>
          </svg>
        </div>
      </section>

      {/* ═══ ABOUT SECTION ═══════════════════════════════════════════════════ */}
      <section id="tentang" className="py-20 sm:py-28 relative overflow-hidden scroll-mt-20" style={{ background: '#FFF7EE' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right" data-aos-duration="700">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: '#27583B', fontFamily: 'Nunito, sans-serif' }}>
                  {t('about_title')}
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed text-[15px]">
                  <p>{t('about_p1')}</p>
                  <p>{t('about_p2')}</p>
                </div>
                <a
                  href="#tentang"
                  onClick={(e) => handleNavClick(e, 'tentang')}
                  className="inline-block px-8 py-3.5 rounded-full font-semibold text-white shadow-md hover:shadow-lg transition-all transform hover:scale-105 text-center"
                  style={{ background: 'linear-gradient(135deg, #EC5F2D 0%, #FFA45B 100%)', fontFamily: 'Nunito, sans-serif' }}
                >
                  {t('about_btn')}
                </a>
              </div>
            </div>

            <div data-aos="fade-left" data-aos-duration="700">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl opacity-12" style={{ background: '#27583B' }}></div>
                
                {/* Decorative overlapping circles from Hero */}
                <div className="absolute -top-6 -right-6 w-28 sm:w-32 h-28 sm:h-32 rounded-full opacity-35 float" style={{ background: 'linear-gradient(135deg, #FFA45B 0%, #EC5F2D 100%)', zIndex: 1 }}></div>

                <img
                  src={fotosekolahImage}
                  alt="TKIT Ash-Shahabah"
                  className="photo-hover relative w-full h-auto rounded-3xl shadow-2xl"
                  onClick={() => setSelectedImage({ src: fotosekolahImage, title: 'Tentang Kami' })}
                  style={{ zIndex: 2 }}
                />

                <div className="absolute -top-4 -right-4 w-14 sm:w-16 h-14 sm:h-16 float-slow" style={{ zIndex: 3 }}>
                  <div className="w-full h-full rounded-full flex items-center justify-center" style={{ background: '#FFA45B' }}>
                    <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-full" style={{ background: '#EC5F2D' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MENGENAL PENDIDIK KAMI ══════════════════════════════════════════ */}
      <section id="pendidik" className="py-24 sm:py-32 relative overflow-hidden scroll-mt-20" style={{ background: '#FFF7EE' }}>

        {/* Floating Cartoon Decorations */}
        <div className="absolute top-16 left-12 w-10 h-10 opacity-50 float" style={{ zIndex: 0 }}>
          <Star className="w-full h-full" style={{ color: '#FFA45B' }} fill="#FFA45B" />
        </div>
        <div className="absolute top-24 right-20 w-8 h-8 opacity-40 float-slow" style={{ zIndex: 0 }}>
          <div className="w-full h-full rounded-full" style={{ background: '#EC5F2D' }}></div>
        </div>
        <div className="absolute bottom-32 left-1/4 w-8 h-8 opacity-40 float-reverse" style={{ zIndex: 0 }}>
          <Heart className="w-full h-full" style={{ color: '#27583B' }} fill="#27583B" />
        </div>
        <div className="floating-deco absolute right-12 bottom-28 deco-float-b" style={{ zIndex: 0, pointerEvents: 'none', opacity: 0.50 }}>
          <StarIllustration color="#27583B" size={40} />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative" style={{ zIndex: 2 }}>
          <div data-aos="fade-up">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: '#27583B', fontFamily: 'Nunito, sans-serif' }}>
                {t('teacher_section_title')}
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-[15px] leading-relaxed">
                {t('teacher_section_desc')}
              </p>
              <div className="w-20 h-1 mx-auto rounded-full mt-4" style={{ background: 'linear-gradient(135deg, #EC5F2D 0%, #FFA45B 100%)' }}></div>
            </div>
          </div>

          {/* Kepala Sekolah Card (Statis) */}
          <div className="mb-16 max-w-4xl mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
             <div className="rounded-3xl p-6 sm:p-10 flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10 shadow-2xl" style={{ background: '#085041' }}>
                <div className="flex-shrink-0">
                   {KEPALA_SEKOLAH.photo ? (
                      <img src={KEPALA_SEKOLAH.photo} alt="Murtiasih, S.Pd." className="w-[130px] h-[130px] rounded-full object-cover shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300" style={{ border: '4px solid rgba(255,255,255,0.15)' }} onClick={() => setSelectedImage({ src: KEPALA_SEKOLAH.photo, title: "Murtiasih, S.Pd.", isProfile: true })} />
                   ) : (
                      <div className="w-[130px] h-[130px] rounded-full flex items-center justify-center text-4xl font-black shadow-lg" style={{ background: 'rgba(255,255,255,0.1)', border: '4px solid rgba(255,255,255,0.15)', color: 'white' }}>{KEPALA_SEKOLAH.initials}</div>
                   )}
                </div>
                <div className="text-center sm:text-left flex-1 mt-2">
                   <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Nunito, sans-serif' }}>Murtiasih, S.Pd.</h3>
                   <p className="text-sm sm:text-base font-bold uppercase tracking-widest mb-4" style={{ color: '#5DCAA5' }}>{t('principal_title')}</p>
                   <p className="text-white text-[15px] sm:text-base leading-relaxed italic" style={{ opacity: 0.9 }}>"{t('principal_quote')}"</p>
                </div>
             </div>
          </div>

          <TeacherSlider onImageClick={(src, title) => setSelectedImage({ src, title, isProfile: true })} />
        </div>

        {/* Wave Divider Bottom */}
        <div className="absolute bottom-0 left-0 right-0" style={{ zIndex: 1 }}>
          <svg viewBox="0 0 1440 100" className="w-full h-12 sm:h-20" fill="#FFFFFF" preserveAspectRatio="none">
            <path d="M0,50 Q360,10 720,50 T1440,50 L1440,100 L0,100 Z"></path>
          </svg>
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: '#27583B', fontFamily: 'Nunito, sans-serif' }}>{t('vision_mission_title')}</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-[15px]">{t('vision_mission_desc')}</p>
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
                    <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Nunito, sans-serif' }}>{t('vision')}</h3>
                  </div>
                  <p className="text-white text-base sm:text-lg leading-relaxed font-medium">
                    {t('vision_text')}
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
                    <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Nunito, sans-serif' }}>{t('mission')}</h3>
                  </div>
                  <ul className="space-y-3.5 text-white">
                    {[t('mission_1'), t('mission_2'), t('mission_3'), t('mission_4')].map((m, i) => (
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
      <section id="fasilitas" className="py-20 sm:py-28 relative overflow-hidden scroll-mt-20" style={{ background: '#FFF7EE' }}>
        {/* Wave Divider Top */}
        <div className="absolute top-0 left-0 right-0 transform rotate-180" style={{ zIndex: 1 }}>
          <svg viewBox="0 0 1440 100" className="w-full h-12 sm:h-20" fill="#FFFFFF" preserveAspectRatio="none">
            <path d="M0,50 Q360,10 720,50 T1440,50 L1440,100 L0,100 Z"></path>
          </svg>
        </div>
        {/* Floating Decorations */}
        <div className="floating-deco absolute left-12 bottom-20 deco-float-d" style={{ zIndex: 0, pointerEvents: 'none', opacity: 0.15 }}>
          <Heart className="w-14 h-14" style={{ color: '#27583B' }} fill="#27583B" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: '#27583B', fontFamily: 'Nunito, sans-serif' }}>{t('facility_title')}</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-[15px]">{t('facility_desc')}</p>
              <div className="w-20 h-1 mx-auto rounded-full mt-4" style={{ background: 'linear-gradient(135deg, #EC5F2D 0%, #FFA45B 100%)' }}></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <FasilitasPhotoCard
              image={areaOutdoorImage}
              title={t('facility_playground')}
              icon={<Dumbbell className="w-5 h-5" strokeWidth={1.75} />}
              color="#27583B"
              large
              onClick={() => setSelectedImage({ src: areaOutdoorImage, title: t('facility_playground') })}
            />
            <FasilitasPhotoCard
              image={areaKelasImage}
              title={t('facility_classroom')}
              icon={<BookOpen className="w-5 h-5" strokeWidth={1.75} />}
              color="#EC5F2D"
              large
              onClick={() => setSelectedImage({ src: areaKelasImage, title: t('facility_classroom') })}
            />
            <FasilitasSliderCard
              images={[areaLapanganImage, halamansekolahImage]}
              title={t('facility_field')}
              icon={<Sprout className="w-5 h-5" strokeWidth={1.75} />}
              color="#27583B"
              onImageClick={(i) => {
                setSelectedImage({ src: [areaLapanganImage, halamansekolahImage], title: t('facility_field'), currentIndex: i });
                setLightboxIndex(i);
              }}
            />
          </div>
        </div>
      </section>

      {/* ═══ ACTIVITIES SECTION ══════════════════════════════════════════════ */}
      <section id="kegiatan" className="py-20 sm:py-28 bg-white relative overflow-hidden scroll-mt-20">
        {/* Wave Divider Top */}
        <div className="absolute top-0 left-0 right-0 transform rotate-180" style={{ zIndex: 1 }}>
          <svg viewBox="0 0 1440 100" className="w-full h-12 sm:h-20" fill="#FFF7EE" preserveAspectRatio="none">
            <path d="M0,50 Q360,10 720,50 T1440,50 L1440,100 L0,100 Z"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" style={{ zIndex: 1 }}>
          <div data-aos="fade-up">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: '#27583B', fontFamily: 'Nunito, sans-serif' }}>{t('activity_title')}</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-[15px]">{t('activity_desc')}</p>
              <div className="w-20 h-1 mx-auto rounded-full mt-4" style={{ background: 'linear-gradient(135deg, #EC5F2D 0%, #FFA45B 100%)' }}></div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ActivityCard
              image={jurnalPagiImage}
              title={t('activity_jurnal')}
              tag={t('activity_jurnal_tag')}
              onClick={() => setSelectedImage({ src: jurnalPagiImage, title: t('activity_jurnal') })}
            />
            <ActivityCard
              image={KunjunganEdukasiImage}
              title={t('activity_kunjungan')}
              tag={t('activity_kunjungan_tag')}
              onClick={() => setSelectedImage({ src: KunjunganEdukasiImage, title: t('activity_kunjungan') })}
            />
            <ActivityCard
              image={RihlahImage}
              title={t('activity_rihlah')}
              tag={t('activity_rihlah_tag')}
              onClick={() => setSelectedImage({ src: RihlahImage, title: t('activity_rihlah') })}
            />
            <ActivityCard
              image={SholatDhuhaImage}
              title={t('activity_sholat')}
              tag={t('activity_sholat_tag')}
              onClick={() => setSelectedImage({ src: SholatDhuhaImage, title: t('activity_sholat') })}
            />
            <ActivitySliderCard
              images={[KreativitasImage, kreatif1Image, kreatif3Image, kreatif1Image, kreatif5Image]}
              title={t('activity_kreativitas')}
              tag={t('activity_kreativitas_tag')}
              onImageClick={(i) => {
                const imgs = [KreativitasImage, kreatif1Image, kreatif3Image, kreatif1Image, kreatif5Image];
                setSelectedImage({ src: imgs, title: t('activity_kreativitas'), currentIndex: i });
                setLightboxIndex(i);
              }}
            />
            <ActivitySliderCard
              images={[MarketDayImage, marketday1Image, marketday2Image, marketday3Image, marketday4Image, marketday5Image]}
              title={t('activity_marketday')}
              tag={t('activity_marketday_tag')}
              onImageClick={(i) => {
                const imgs = [MarketDayImage, marketday1Image, marketday2Image, marketday3Image, marketday4Image, marketday5Image];
                setSelectedImage({ src: imgs, title: t('activity_marketday'), currentIndex: i });
                setLightboxIndex(i);
              }}
            />
          </div>
        </div>
      </section>

      {/* ═══ FAQ SECTION ═════════════════════════════════════════════════════ */}
      <section id="faq" className="py-20 sm:py-28 relative overflow-hidden scroll-mt-20" style={{ background: '#FFF7EE' }}>
        {/* Wave Divider Top */}
        <div className="absolute top-0 left-0 right-0 transform rotate-180" style={{ zIndex: 1 }}>
          <svg viewBox="0 0 1440 100" className="w-full h-12 sm:h-20" fill="#FFFFFF" preserveAspectRatio="none">
            <path d="M0,50 Q360,10 720,50 T1440,50 L1440,100 L0,100 Z"></path>
          </svg>
        </div>
        {/* Floating Cartoon Decorations */}
        <div className="floating-deco absolute left-12 top-20 deco-float-c" style={{ zIndex: 0, pointerEvents: 'none', opacity: 0.40 }}>
          <StarIllustration color="#FFA45B" size={35} />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: '#27583B', fontFamily: 'Nunito, sans-serif' }}>{t('faq_title')}</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-[15px]">{t('faq_desc')}</p>
              <div className="w-20 h-1 mx-auto rounded-full mt-4" style={{ background: 'linear-gradient(135deg, #EC5F2D 0%, #FFA45B 100%)' }}></div>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { q: t('faq_q1'), a: t('faq_a1') },
              { q: t('faq_q2'), a: t('faq_a2') },
              { q: t('faq_q3'), a: t('faq_a3') },
              { q: t('faq_q4'), a: t('faq_a4') },
              { q: t('faq_q5'), a: t('faq_a5') },
            ].map((item, i) => (
              <FAQItem key={i} question={item.q} answer={item.a} index={i} />
            ))}
          </div>

          <div className="mt-14 text-center" data-aos="fade-up" data-aos-delay="200">
            <p className="text-gray-400 mb-6 text-[15px]">{t('faq_contact')}</p>
            <a
              href="https://wa.link/pjcbpj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #EC5F2D 0%, #FFA45B 100%)', fontFamily: 'Nunito, sans-serif' }}
            >
              <WhatsAppIcon className="w-6 h-6 text-white" />
              {t('faq_wa')}
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
                <p className="text-sm opacity-85 mb-6 leading-relaxed">{t('footer_tagline')}</p>
                <div className="flex gap-3 flex-wrap">
                  <SocialIcon icon={<TikTokIcon className="w-5 h-5" />} href="https://www.tiktok.com/@tkit.ash.shahabah" />
                  <SocialIcon icon={<Instagram className="w-5 h-5" />} href="https://www.instagram.com/tkit.ashshahabah" />
                  <SocialIcon icon={<Youtube className="w-5 h-5" />} href="https://youtube.com/@tkitashshahabah?si=hdgcV1TowFb7XmGp" />
                  <SocialIcon icon={<WhatsAppIcon className="w-5 h-5" />} href="https://wa.link/pjcbpj" />
                </div>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>{t('footer_menu')}</h4>
                <ul className="space-y-2 text-sm opacity-85">
                  <li><a href="#" className="hover:opacity-100 transition-opacity">{t('nav_home')}</a></li>
                  <li><a href="#tentang" className="hover:opacity-100 transition-opacity">{t('nav_about')}</a></li>
                  <li><a href="#fasilitas" className="hover:opacity-100 transition-opacity">{t('nav_facility')}</a></li>
                  <li><a href="#kegiatan" className="hover:opacity-100 transition-opacity">{t('nav_activity')}</a></li>
                  <li><a href="#faq" className="hover:opacity-100 transition-opacity">{t('nav_faq')}</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>{t('footer_contact')}</h4>
                <ul className="space-y-3 text-sm opacity-85">
                  <li className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>{t('footer_address')}</span>
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
            <p>{t('footer_copy')}</p>
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
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TEACHERS.length);
    }, 5000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleManualAction = (action: () => void) => {
    action();
    startTimer();
  };

  const prev = () => handleManualAction(() => setCurrent((c) => (c === 0 ? TEACHERS.length - 1 : c - 1)));
  const next = () => handleManualAction(() => setCurrent((c) => (c + 1) % TEACHERS.length));
  const goTo = (i: number) => handleManualAction(() => setCurrent(i));

  const getCardState = (i: number) => {
    let diff = (i - current) % TEACHERS.length;
    if (diff < 0) diff += TEACHERS.length;
    
    if (diff === 0) return 'active';
    if (diff === 1) return 'next1';
    if (diff === TEACHERS.length - 1) return 'prev1';
    
    if (diff === 2) return 'hidden-next';
    if (diff === TEACHERS.length - 2) return 'hidden-prev';
    return 'hidden';
  };

  return (
    <div className="relative" data-aos="fade-up" data-aos-duration="700">
      <style>{`
        .teacher-queue-container {
           height: 480px;
           perspective: 1000px;
        }
        .teacher-queue-card {
           position: absolute;
           width: 100%;
           max-width: 280px; /* max desktop width */
           left: 50%;
           top: 0;
           margin-left: -140px; /* half of max-width */
           transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
           opacity: 0;
           visibility: hidden;
           transform: translateX(150px) scale(0.5);
           z-index: 0;
        }
        .teacher-queue-card.state-active {
           opacity: 1;
           visibility: visible;
           transform: translateX(0) scale(1);
           z-index: 10;
        }
        .teacher-queue-card.state-active .inner-card {
           box-shadow: 0 16px 40px rgba(0,0,0,0.18);
        }
        .teacher-queue-card.state-next1 {
           opacity: 0.4;
           visibility: visible;
           transform: translateX(240px) scale(0.85);
           z-index: 9;
        }
        .teacher-queue-card.state-prev1 {
           opacity: 0.4;
           visibility: visible;
           transform: translateX(-240px) scale(0.85);
           z-index: 9;
        }
        .teacher-queue-card.state-hidden-next {
           opacity: 0;
           visibility: hidden;
           transform: translateX(450px) scale(0.5);
           z-index: 0;
        }
        .teacher-queue-card.state-hidden-prev {
           opacity: 0;
           visibility: hidden;
           transform: translateX(-450px) scale(0.5);
           z-index: 0;
        }
        .teacher-queue-card.state-hidden {
           opacity: 0;
           visibility: hidden;
           transform: scale(0.5);
           z-index: 0;
        }
        
        @media (max-width: 640px) {
           .teacher-queue-container {
              height: 400px;
           }
           .teacher-queue-card {
              max-width: clamp(240px, 80vw, 260px);
              margin-left: calc(-0.5 * clamp(240px, 80vw, 260px));
           }
           .teacher-queue-card.state-next1 {
              transform: translateX(120px) scale(0.85);
              opacity: 0.4;
           }
           .teacher-queue-card.state-prev1 {
              transform: translateX(-120px) scale(0.85);
              opacity: 0.4;
           }
           .teacher-queue-card.state-hidden-next,
           .teacher-queue-card.state-hidden-prev,
           .teacher-queue-card.state-hidden {
              transform: translateX(0) scale(0.5);
              opacity: 0; 
              visibility: hidden;
           }
        }
      `}</style>
      
      {/* Slides Container */}
      <div 
        className="relative overflow-hidden w-full teacher-queue-container"
      >
        {TEACHERS.map((teacher, i) => {
          const state = getCardState(i);
          return (
            <div 
              key={i} 
              className={`teacher-queue-card state-${state}`}
            >
              <TeacherSlideCard teacher={teacher as any} index={i} onImageClick={onImageClick} />
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows — desktop */}
      <button
        onClick={prev}
        className="absolute -left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-10 hidden sm:flex"
        style={{ background: '#27583B' }}
        aria-label="Sebelumnya"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={next}
        className="absolute -right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-10 hidden sm:flex"
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
      <div className="flex justify-center flex-wrap gap-2 mt-6">
        {TEACHERS.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
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

// ─── Teacher Slide Card ───────────────────────────────────────────────────────
const CARD_PALETTE = [
  { bg: '#F0997B', text: '#4A1C0E', roleText: '#7A2E16' }, // Coral
  { bg: '#FAC775', text: '#593C0C', roleText: '#8A5D13' }, // Amber
  { bg: '#5DCAA5', text: '#12402F', roleText: '#1B634A' }, // Teal
];

function TeacherSlideCard({ teacher, index, onImageClick }: { teacher: typeof TEACHERS[0]; index: number; onImageClick?: (src: string, title: string) => void }) {
  const { t } = useTranslation();
  const palette = CARD_PALETTE[index % CARD_PALETTE.length];
  
  return (
    <div
      className="w-full rounded-3xl flex items-center justify-center px-8 py-10 sm:py-12 shadow-sm transition-shadow duration-300 inner-card"
      style={{ background: palette.bg, minHeight: '380px' }}
    >
      <div className="text-center w-full">
        {/* Avatar */}
        <div className="relative inline-block mb-6">
          {teacher.photo ? (
            <img
              src={teacher.photo}
              alt={teacher.name}
              loading="lazy"
              className="w-[clamp(100px,25vw,150px)] h-[clamp(100px,25vw,150px)] rounded-full object-cover mx-auto shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
              style={{ border: '3px solid rgba(255,255,255,0.4)' }}
              onClick={() => onImageClick && onImageClick(teacher.photo, teacher.name)}
            />
          ) : (
            <div
              className="w-[clamp(100px,25vw,150px)] h-[clamp(100px,25vw,150px)] rounded-full flex items-center justify-center text-5xl font-black mx-auto shadow-lg"
              style={{
                background: 'rgba(255,255,255,0.2)',
                color: palette.text,
                fontFamily: 'Nunito, sans-serif',
                border: '3px solid rgba(255,255,255,0.4)',
              }}
            >
              {teacher.initials}
            </div>
          )}
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: palette.text, fontFamily: 'Nunito, sans-serif' }}>
          {teacher.name}
        </h3>
        {teacher.roleKey && (
          <p className="text-[15px] sm:text-base font-bold tracking-wide uppercase mt-2" style={{ color: palette.roleText }}>
            {t(teacher.roleKey)}
          </p>
        )}
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

function LangToggle() {
  const { i18n } = useTranslation();
  const lang = i18n.language || 'id';

  const setLang = (l: 'id' | 'en') => {
    i18n.changeLanguage(l);
  };

  return (
    <div className="inline-flex items-center rounded-full overflow-hidden border-2 text-xs font-bold" style={{ borderColor: '#27583B' }}>
      <button
        onClick={() => setLang('en')}
        className="px-3 py-2 transition-all duration-200"
        style={{ background: lang.startsWith('en') ? '#27583B' : 'transparent', color: lang.startsWith('en') ? 'white' : '#27583B' }}
      >
        EN
      </button>
      <div className="w-px self-stretch" style={{ background: '#27583B' }}></div>
      <button
        onClick={() => setLang('id')}
        className="px-3 py-2 transition-all duration-200"
        style={{ background: lang.startsWith('id') ? '#27583B' : 'transparent', color: lang.startsWith('id') ? 'white' : '#27583B' }}
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
        <img key={i} src={src} alt={`${title} ${i + 1}`} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700" style={{ opacity: i === current ? 1 : 0 }} />
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
      <img src={image} alt={title} loading="lazy" className="w-full h-full object-cover" />
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
        <ImageWithFallback src={imageSrc} alt={title} loading="lazy" className="w-full h-64 object-cover" />
      ) : (
        <img src={imageSrc} alt={title} loading="lazy" className="w-full h-64 object-cover" />
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
        <img key={i} src={src} alt={`${title} ${i + 1}`} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700" style={{ opacity: i === current ? 1 : 0 }} />
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
