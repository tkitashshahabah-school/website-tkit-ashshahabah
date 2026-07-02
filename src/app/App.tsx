import { Phone, MapPin, Instagram, Youtube, Menu, X, Star, Heart, Award, Users, BookOpen, Smile, Dumbbell, Sprout, Monitor } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { useState, useEffect, useRef } from 'react';
import { t, Lang } from './translations';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logoTK from '../imports/logo_tk.png';
import heroImage from '../imports/IMG_2313.jpg';
import jurnalPagiImage from '../imports/IMG_4055.jpg';
import KunjunganEdukasiImage from '../imports/kunjunganedukasi.jpg';
import RihlahImage from '../imports/rihlah.jpg';
import SholatDhuhaImage from '../imports/sholatdhuha.JPG';
import KreativitasImage from '../imports/Kreativitas.jpg';
import MarketDayImage from '../imports/MarketDay.jpg';
import kreatif1Image from '../imports/kreatif1_done.jpg';
import kreatif3Image from '../imports/kreatif3_done.jpg';
import kreatif5Image from '../imports/kreatif5.jpg';
import marketday1Image from '../imports/marketday1.jpg';
import marketday2Image from '../imports/marketday2.jpg';
import marketday3Image from '../imports/marketday3.jpg';
import marketday4Image from '../imports/marketday4.jpg';
import marketday5Image from '../imports/marketday5.JPG';
import areaLapanganImage from '../imports/arealapangab.jpg';
import fotosekolahImage from '../imports/fotosekolah.jpg';
import halamansekolahImage from '../imports/halamansekolah.jpg';
import areaOutdoorImage from '../imports/areaoutdoor.jpg';
import areaKelasImage from '../imports/areakelas.jpg';
import tkaImage from '../imports/tka.jpg';
import tkumarImage from '../imports/tkumar.jpg';
import tkutsmanImage from '../imports/tkutsman.jpg';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ src: string | any | (string | any)[]; title: string; currentIndex?: number } | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lang, setLang] = useState<Lang>('id');
  const tr = t[lang];

  useEffect(() => {
    AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, offset: 80 });
  }, []);

  useEffect(() => {
    setTimeout(() => AOS.refreshHard(), 50);
  }, [lang]);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Navbar */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <img src={logoTK} alt="TKIT ASH-SHAHABAH" className="h-14 w-14 object-contain" />
              <div>
                <h1 className="text-base sm:text-lg font-bold" style={{ color: '#27583B' }}>TKIT ASH - SHAHABAH</h1>
                <p className="text-xs text-gray-600 hidden sm:block">Tumbuh Cerdas, Berakhlak Mulia</p>
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-6">
              {[
                { name: tr.nav_home, href: '#' },
                { name: tr.nav_about, href: '#tentang' },
                { name: tr.nav_facility, href: '#fasilitas' },
                { name: tr.nav_activity, href: '#kegiatan' },
                { name: tr.nav_faq, href: '#faq' },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-gray-700 hover:text-[#27583B] font-medium transition-colors py-1 
                            after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full 
                            after:origin-left after:scale-x-0 after:bg-[#27583B] 
                            after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  {item.name}
                </a>
              ))}
              <LangToggle lang={lang} setLang={setLang} />
            </nav>

            <a href="https://wa.link/pjcbpj" target="_blank" rel="noopener noreferrer" className="hidden lg:block px-6 py-2.5 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105 text-center" style={{ background: 'linear-gradient(135deg, #EC5F2D 0%, #FFA45B 100%)' }}>
              {tr.nav_register}
            </a>

            <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" style={{ color: '#27583B' }} /> : <Menu className="w-6 h-6" style={{ color: '#27583B' }} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            <nav className="px-4 py-4 space-y-2">
              <a href="#" className="block text-gray-700 hover:text-[#27583B] font-medium py-2.5 px-4 rounded-xl hover:bg-[#FFF7EE] transition-colors" onClick={() => setMobileMenuOpen(false)}>{tr.nav_home}</a>
              <a href="#tentang" className="block text-gray-700 hover:text-[#27583B] font-medium py-2.5 px-4 rounded-xl hover:bg-[#FFF7EE] transition-colors" onClick={() => setMobileMenuOpen(false)}>{tr.nav_about}</a>
              <a href="#fasilitas" className="block text-gray-700 hover:text-[#27583B] font-medium py-2.5 px-4 rounded-xl hover:bg-[#FFF7EE] transition-colors" onClick={() => setMobileMenuOpen(false)}>{tr.nav_facility}</a>
              <a href="#kegiatan" className="block text-gray-700 hover:text-[#27583B] font-medium py-2.5 px-4 rounded-xl hover:bg-[#FFF7EE] transition-colors" onClick={() => setMobileMenuOpen(false)}>{tr.nav_activity}</a>
              <a href="#faq" className="block text-gray-700 hover:text-[#27583B] font-medium py-2.5 px-4 rounded-xl hover:bg-[#FFF7EE] transition-colors" onClick={() => setMobileMenuOpen(false)}>{tr.nav_faq}</a>
              <div className="px-4"><LangToggle lang={lang} setLang={setLang} /></div>
              <a href="https://wa.link/pjcbpj" target="_blank" rel="noopener noreferrer" className="block w-full px-6 py-3 rounded-full font-semibold text-white shadow-lg mt-4 text-center" style={{ background: 'linear-gradient(135deg, #EC5F2D 0%, #FFA45B 100%)' }}>
                {tr.nav_register}
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ background: '#FFF7EE' }}>
        {/* Decorative Doodles */}
        <div className="absolute top-10 left-10 w-20 h-20 opacity-30 float">
          <Star className="w-full h-full" style={{ color: '#FFA45B' }} fill="#FFA45B" />
        </div>
        <div className="absolute top-20 right-20 w-16 h-16 opacity-30 float-slow">
          <div className="w-full h-full rounded-full" style={{ background: '#EC5F2D' }}></div>
        </div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 opacity-20 float-reverse">
          <Heart className="w-full h-full" style={{ color: '#27583B' }} fill="#27583B" />
        </div>

        {/* Cloud Doodles */}
        <svg className="absolute top-32 right-1/3 w-24 h-16 opacity-20 float-slow" viewBox="0 0 100 60" fill="#27583B">
          <path d="M20,40 Q10,40 10,30 Q10,20 20,20 Q20,10 35,10 Q50,10 50,20 Q60,20 60,30 Q60,40 50,40 Z" />
        </svg>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-6" data-aos="fade-right">
              {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: 'rgba(39, 88, 59, 0.1)' }}>
              </div>  */}

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span style={{ color: '#27583B' }}>{tr.hero_title1}</span>
                <br />
                <span style={{ color: '#EC5F2D' }}>{tr.hero_title2}</span>
              </h1>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                {tr.hero_desc}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#tentang" className="px-8 py-3.5 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105 text-center" style={{ background: '#27583B' }}>
                  {tr.hero_btn_about}
                </a>
                {/* <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105 text-center" style={{ background: 'linear-gradient(135deg, #EC5F2D 0%, #FFA45B 100%)' }}>
                  Daftar Sekarang
                </a> */}
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full opacity-50 float" style={{ background: 'linear-gradient(135deg, #FFA45B 0%, #EC5F2D 100%)' }}></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full opacity-30 float-reverse" style={{ background: '#27583B' }}></div>

              <AboutSlider images={[heroImage, tkaImage, tkumarImage, tkutsmanImage]} onImageClick={(i) => { setSelectedImage({ src: [heroImage, tkaImage, tkumarImage, tkutsmanImage], title: 'Beranda', currentIndex: i }); setLightboxIndex(i); }} />

              {/* Sun Doodle */}
              <div className="absolute -top-4 -right-4 w-16 h-16 float-slow">
                <div className="w-full h-full rounded-full flex items-center justify-center" style={{ background: '#FFA45B' }}>
                  <div className="w-8 h-8 rounded-full" style={{ background: '#EC5F2D' }}></div>
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

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: <BookOpen className="w-8 h-8" />, title: tr.feat_learn, color: '#EC5F2D' },
              { icon: <Users className="w-8 h-8" />, title: tr.feat_teacher, color: '#27583B' },
              { icon: <Award className="w-8 h-8" />, title: tr.feat_akhlak, color: '#FFA45B' },
              { icon: <Heart className="w-8 h-8" />, title: tr.feat_environment, color: '#EC5F2D' },
              { icon: <Smile className="w-8 h-8" />, title: tr.feat_potential, color: '#27583B' },
            ].map((item, i) => (
              <div key={item.title} data-aos="fade-up" data-aos-delay={i * 80}>
                <FeatureCard icon={item.icon} title={item.title} color={item.color} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-16 sm:py-20" style={{ background: '#FFF7EE' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right" data-aos-duration="700">
              <div className="space-y-6">
                <div className="inline-block">
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: '#27583B' }}>
                  {tr.about_title}
                </h2>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>{tr.about_p1}</p>
                  <p>{tr.about_p2}</p>
                </div>

                <a href="#tentang" className="inline-block px-8 py-3.5 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105 text-center" style={{ background: 'linear-gradient(135deg, #EC5F2D 0%, #FFA45B 100%)' }}>
                  {tr.about_btn}
                </a>
              </div>
            </div>

            <div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl opacity-20" style={{ background: '#27583B' }}></div>
                <img
                  src={fotosekolahImage}
                  alt="TKIT ASH - SHA"
                  className="photo-hover relative w-full h-auto rounded-3xl shadow-2xl"
                  onClick={() => setSelectedImage({ src: fotosekolahImage, title: 'Tentang Kami' })}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visi Misi Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" data-aos-duration="600">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#27583B' }}>Visi & Misi</h2>
              <div className="w-20 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(135deg, #EC5F2D 0%, #FFA45B 100%)' }}></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Visi */}
            <div data-aos="fade-right" data-aos-duration="700">
              <div className="visi-misi-hover relative overflow-hidden rounded-3xl shadow-xl p-8" style={{ background: 'linear-gradient(135deg, #27583B 0%, #2d6b47 100%)' }}>
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <Star className="w-full h-full" fill="white" />
                </div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'rgba(255, 255, 255, 0.2)' }}>
                      <Star className="w-7 h-7 text-white" fill="white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{tr.vision}</h3>
                  </div>
                  <p className="text-white text-lg leading-relaxed">
                    {tr.vision_text}
                  </p>
                </div>
              </div>
            </div>

            {/* Misi */}
            <div data-aos="fade-left" data-aos-duration="700" data-aos-delay="150">
            <div className="visi-misi-hover relative overflow-hidden rounded-3xl shadow-xl p-8" style={{ background: 'linear-gradient(135deg, #EC5F2D 0%, #FFA45B 100%)' }}>
              <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10">
                <Award className="w-full h-full" fill="white" />
              </div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'rgba(255, 255, 255, 0.2)' }}>
                    <Award className="w-7 h-7 text-white" fill="white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{tr.mission}</h3>
                </div>
                <ul className="space-y-3 text-white">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white flex items-center justify-center text-xs font-bold" style={{ color: '#EC5F2D' }}>1</span>
                    <span>{tr.mission_1}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white flex items-center justify-center text-xs font-bold" style={{ color: '#EC5F2D' }}>2</span>
                    <span>{tr.mission_2}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white flex items-center justify-center text-xs font-bold" style={{ color: '#EC5F2D' }}>3</span>
                    <span>{tr.mission_3}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white flex items-center justify-center text-xs font-bold" style={{ color: '#EC5F2D' }}>4</span>
                    <span>{tr.mission_4}</span>
                  </li>
                </ul>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fasilitas Section */}
      <section id="fasilitas" className="py-16 sm:py-20" style={{ background: '#FFF7EE' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up">
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#27583B' }}>{tr.facility_title}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">{tr.facility_desc}</p>
              <div className="w-20 h-1 mx-auto rounded-full mt-4" style={{ background: 'linear-gradient(135deg, #EC5F2D 0%, #FFA45B 100%)' }}></div>
            </div>
          </div>

          {/* Fasilitas grid 3 kolom */}
          <div className="grid lg:grid-cols-3 gap-6">
            <FasilitasPhotoCard
              image={areaOutdoorImage}
              title={tr.facility_playground}

              icon={<Dumbbell className="w-5 h-5" />}
              color="#27583B"
              large
              onClick={() => setSelectedImage({ src: areaOutdoorImage, title: tr.facility_playground })}
            />
            <FasilitasPhotoCard
              image={areaKelasImage}
              title={tr.facility_classroom}
              icon={<BookOpen className="w-5 h-5" />}
              color="#EC5F2D"
              large
              onClick={() => setSelectedImage({ src: areaKelasImage, title: tr.facility_classroom })}
            />
            <FasilitasSliderCard
              images={[areaLapanganImage, halamansekolahImage]}
              title={tr.facility_field}
              icon={<Sprout className="w-5 h-5" />}
              color="#27583B"
              onImageClick={(i) => { setSelectedImage({ src: [areaLapanganImage, halamansekolahImage], title: tr.facility_field, currentIndex: i }); setLightboxIndex(i); }}
            />
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="kegiatan" className="py-16 sm:py-20" style={{ background: '#FFF7EE' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#27583B' }}>{tr.activity_title}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">{tr.activity_desc}</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
              onImageClick={(i) => { const imgs = [KreativitasImage, kreatif1Image, kreatif3Image, kreatif1Image, kreatif5Image]; setSelectedImage({ src: imgs, title: tr.activity_kreativitas, currentIndex: i }); setLightboxIndex(i); }}
            />
            <ActivitySliderCard
              images={[MarketDayImage, marketday1Image, marketday2Image, marketday3Image, marketday4Image, marketday5Image]}
              title={tr.activity_marketday}
              tag={tr.activity_marketday_tag}
              onImageClick={(i) => { const imgs = [MarketDayImage, marketday1Image, marketday2Image, marketday3Image, marketday4Image, marketday5Image]; setSelectedImage({ src: imgs, title: tr.activity_marketday, currentIndex: i }); setLightboxIndex(i); }}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 rounded-full text-sm font-semibold" style={{ background: 'rgba(39, 88, 59, 0.1)', color: '#27583B' }}>
                {tr.faq_badge}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#27583B' }}>{tr.faq_title}</h2>
            <div className="w-20 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(135deg, #EC5F2D 0%, #FFA45B 100%)' }}></div>
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

          <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="200">
            <p className="text-gray-500 mb-6">{tr.faq_contact}</p>
            <a
              href="https://wa.link/pjcbpj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #EC5F2D 0%, #FFA45B 100%)' }}
            >
              <WhatsAppIcon className="w-6 h-6 text-white" />
              {tr.faq_wa}
            </a>
          </div>
        </div>
      </section>

      {/* News Section */}
      {/* <section id="info" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#27583B' }}>Berita & Pengumuman</h2>
            <p className="text-g
          ray-600">Informasi terkini seputar kegiatan sekolah</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <NewsCard
              date="15 Mei 2026"
              category="Kegiatan"
              title="Kegiatan Outbound Seru di Taman Kota"
              description="Siswa-siswi antusias mengikuti kegiatan outbound yang penuh dengan permainan edukatif."
            />
            <NewsCard
              date="10 Mei 2026"
              category="Pendaftaran"
              title="Pendaftaran Siswa Baru 2026/2027 Dibuka"
              description="Segera daftarkan putra-putri Anda dan dapatkan diskon early bird!"
            />
            <NewsCard
              date="5 Mei 2026"
              category="Prestasi"
              title="Juara 1 Lomba Mewarnai Tingkat Kecamatan"
              description="Siswa TKIT Ash-Shahabah meraih juara 1 dalam lomba mewarnai."
            />
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="relative overflow-hidden text-white pt-16 pb-8" style={{ background: '#27583B' }}>
        {/* Decorative Elements */}
        {/* <div className="absolute bottom-0 right-0 w-64 h-64 opacity-5">
          <img src={logoTK} alt="" className="w-full h-full object-contain" />
        </div> */}

        {/* House Doodle */}
        {/* <svg className="absolute bottom-8 right-8 w-32 h-32 opacity-10" viewBox="0 0 100 100" fill="white">
          <path d="M50,10 L10,40 L20,40 L20,80 L40,80 L40,60 L60,60 L60,80 L80,80 L80,40 L90,40 Z" />
          <rect x="30" y="50" width="10" height="10" />
          <rect x="60" y="50" width="10" height="10" />
        </svg> */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div data-aos="fade-up" data-aos-duration="700">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={logoTK} alt="TKIT Ash-Shahabah" className="h-16 w-16 bg-white rounded-full p-2" />
                <div>
                  <h3 className="font-bold text-lg">TKIT Ash-Shahabah</h3>
                  <p className="text-sm opacity-80">Bekasi</p>
                </div>
              </div>
              <p className="text-sm opacity-90 mb-6">{tr.footer_tagline}</p>
              <div className="flex gap-3 flex-wrap">
                <SocialIcon icon={<TikTokIcon className="w-5 h-5" />} href="https://www.tiktok.com/@tkit.ash.shahabah" />
                <SocialIcon icon={<Instagram className="w-5 h-5" />} href="https://www.instagram.com/tkit.ashshahabah" />
                <SocialIcon icon={<Youtube className="w-5 h-5" />} href="https://youtube.com/@tkitashshahabah?si=hdgcV1TowFb7XmGp" />
                <SocialIcon icon={<WhatsAppIcon className="w-5 h-5" />} href="https://wa.link/pjcbpj" />
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">{tr.footer_menu}</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li><a href="#" className="hover:opacity-100 transition-opacity">{tr.nav_home}</a></li>
                <li><a href="#tentang" className="hover:opacity-100 transition-opacity">{tr.nav_about}</a></li>
                <li><a href="#fasilitas" className="hover:opacity-100 transition-opacity">{tr.nav_facility}</a></li>
                <li><a href="#kegiatan" className="hover:opacity-100 transition-opacity">{tr.nav_activity}</a></li>
                <li><a href="#faq" className="hover:opacity-100 transition-opacity">{tr.nav_faq}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">{tr.footer_contact}</h4>
              <ul className="space-y-3 text-sm opacity-90">
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

            {/* <div>
              <h4 className="font-bold text-lg mb-4">Newsletter</h4>
              <p className="text-sm opacity-90 mb-4">Dapatkan info terbaru dari kami</p>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Email Anda"
                  className="px-4 py-2.5 rounded-full text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#EC5F2D]"
                />
                <button className="px-6 py-2.5 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all" style={{ background: 'linear-gradient(135deg, #EC5F2D 0%, #FFA45B 100%)' }}>
                  Kirim
                </button>
              </div>
            </div> */}
          </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-sm opacity-80">
            <p>{tr.footer_copy}</p>
          </div>
        </div>
      </footer>

      {/* Image Lightbox */}
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
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => {
              setSelectedImage(null);
              setLightboxIndex(0);
            }}
          >
            <button
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              onClick={() => {
                setSelectedImage(null);
                setLightboxIndex(0);
              }}
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation Arrows for Lightbox */}
            {hasMultipleImages && (
              <>
                <button
                  onClick={goToPrevLightbox}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all"
                >
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={goToNextLightbox}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all"
                >
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={imgSrc}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[85vh] object-contain rounded-2xl"
              />
              <div className="flex items-center justify-center gap-3 mt-4">
                <p className="text-white text-center text-xl font-semibold">{selectedImage.title}</p>
                {hasMultipleImages && (
                  <span className="px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium">
                    {lightboxIndex + 1} / {images.length}
                  </span>
                )}
              </div>

              {/* Dots Indicator */}
              {hasMultipleImages && (
                <div className="flex justify-center gap-2 mt-4">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setLightboxIndex(index);
                      }}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === lightboxIndex ? 'bg-white w-6' : 'bg-white/50'
                      }`}
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
      {/* Decorative background offset */}
      <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl opacity-20 pointer-events-none" style={{ background: '#27583B' }}></div>

      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Tentang Kami ${i + 1}`}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
          style={{ opacity: i === current ? 1 : 0 }}
        />
      ))}

      {/* Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
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
        className="px-2 py-0.5 transition-all duration-200"
        style={{ background: lang === 'en' ? '#27583B' : 'transparent', color: lang === 'en' ? 'white' : '#27583B' }}
      >
        EN
      </button>
      <div className="w-px self-stretch" style={{ background: '#27583B' }}></div>
      <button
        onClick={() => setLang('id')}
        className="px-2 py-0.5 transition-all duration-200"
        style={{ background: lang === 'id' ? '#27583B' : 'transparent', color: lang === 'id' ? 'white' : '#27583B' }}
      >
        ID
      </button>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  color: string;
}) {
  return (
    <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer card-hover">
      <div className="flex flex-col items-center text-center gap-4">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
          style={{ background: `${color}15` }}
        >
          <div style={{ color }}>{icon}</div>
        </div>

        <h3 className="font-bold text-gray-800">
          {title}
        </h3>
      </div>
    </div>
  );
}

function FasilitasSliderCard({
  images,
  title,
  description,
  icon,
  color,
  onImageClick,
}: {
  images: any[];
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  onImageClick?: (index: number) => void;
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

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
    resetTimer();
  };

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c + 1) % images.length);
    resetTimer();
  };

  return (
    <div className="photo-hover group relative overflow-hidden rounded-3xl shadow-lg h-80 cursor-pointer" onClick={() => onImageClick && onImageClick(current)}>
      {/* Images */}
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`${title} ${i + 1}`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none"></div>

      {/* Badge */}
      <div className="absolute top-4 left-4">
        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white backdrop-blur-sm" style={{ background: `${color}CC` }}>
          {icon}
          {title}
        </span>
      </div>

      {/* Counter */}
      <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white text-xs font-medium">
        {current + 1} / {images.length}
      </div>

      {/* Arrow Buttons */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/25 hover:bg-white/50 backdrop-blur-sm flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-10"
      >
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/25 hover:bg-white/50 backdrop-blur-sm flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-10"
      >
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-14 left-0 right-0 flex justify-center gap-1.5 pointer-events-none">
        {images.map((_, i) => (
          <div
            key={i}
            className="h-1.5 rounded-full transition-all duration-300"
            style={{ width: i === current ? '20px' : '6px', background: i === current ? 'white' : 'rgba(255,255,255,0.5)' }}
          />
        ))}
      </div>

    </div>
  );
}

function FasilitasPhotoCard({ image, title, description, icon, color, large, onClick }: { image: string | any; title: string; description: string; icon: React.ReactNode; color: string; large?: boolean; onClick?: () => void }) {
  return (
    <div className={`photo-hover group relative overflow-hidden rounded-3xl shadow-lg ${large ? 'h-80' : 'h-64'}`} onClick={onClick}>
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent"></div>
      <div className="absolute top-4 left-4">
        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white backdrop-blur-sm" style={{ background: `${color}CC` }}>
          {icon}
          {title}
        </span>
      </div>
    </div>
  );
}

function ActivityCard({ image, title, tag, onClick }: { image: string | any | (string | any)[]; title: string; tag: string; onClick?: () => void }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Normalize image to always be an array
  const images = Array.isArray(image) ? image : [image];
  const currentImage = images[currentImageIndex];
  const imageSrc = typeof currentImage === 'string' ? currentImage : currentImage;
  const hasMultipleImages = images.length > 1;

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="photo-hover group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer" onClick={onClick}>
      {typeof currentImage === 'string' ? (
        <ImageWithFallback
          src={imageSrc}
          alt={title}
          className="w-full h-64 object-cover"
        />
      ) : (
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-64 object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

      {/* Navigation Arrows - Only show if multiple images */}
      {hasMultipleImages && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/30 hover:bg-white/50 backdrop-blur-sm flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
          >
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/30 hover:bg-white/50 backdrop-blur-sm flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
          >
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      <div className="absolute top-4 left-4">
        <span className="px-3 py-1 rounded-full text-xs font-semibold text-white" style={{ background: '#EC5F2D' }}>
          {tag}
        </span>
      </div>

      {/* Image Indicators - Only show if multiple images */}
      {hasMultipleImages && (
        <div className="absolute top-4 right-4 flex gap-1">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                index === currentImageIndex ? 'bg-white w-4' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      )}

      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
        <h3 className="text-white font-bold text-xl">{title}</h3>
        {hasMultipleImages && (
          <span className="text-white/80 text-sm font-medium">
            {currentImageIndex + 1}/{images.length}
          </span>
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
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
  };

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [images.length]);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
    resetTimer();
  };

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c + 1) % images.length);
    resetTimer();
  };

  return (
    <div className="photo-hover group relative overflow-hidden rounded-2xl shadow-lg h-64 cursor-pointer" onClick={() => onImageClick && onImageClick(current)}>
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`${title} ${i + 1}`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none"></div>

      {/* Tag */}
      <div className="absolute top-4 left-4">
        <span className="px-3 py-1 rounded-full text-xs font-semibold text-white" style={{ background: '#EC5F2D' }}>
          {tag}
        </span>
      </div>

      {/* Counter */}
      <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white text-xs font-medium">
        {current + 1} / {images.length}
      </div>

      {/* Arrow prev */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/25 hover:bg-white/50 backdrop-blur-sm flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-10"
      >
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Arrow next */}
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/25 hover:bg-white/50 backdrop-blur-sm flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-10"
      >
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-1.5 pointer-events-none">
        {images.map((_, i) => (
          <div
            key={i}
            className="h-1.5 rounded-full transition-all duration-300"
            style={{ width: i === current ? '18px' : '6px', background: i === current ? 'white' : 'rgba(255,255,255,0.5)' }}
          />
        ))}
      </div>

      {/* Title */}
      <div className="absolute bottom-4 left-4 right-4">
        <h3 className="text-white font-bold text-xl">{title}</h3>
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
          {question}
        </span>
        <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${open ? 'rotate-45' : ''}`} style={{ background: open ? 'rgba(236,95,45,0.1)' : 'rgba(39,88,59,0.08)' }}>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} style={{ color: open ? '#EC5F2D' : '#27583B' }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-400 ease-in-out ${open ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4 whitespace-pre-line">
          {answer}
        </div>
      </div>
    </div>
  );
}

function NewsCard({ date, category, title, description }: { date: string; category: string; title: string; description: string }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-1">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: '#FFF7EE', color: '#EC5F2D' }}>
            {category}
          </span>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <h3 className="font-bold text-xl mb-3" style={{ color: '#27583B' }}>{title}</h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{description}</p>
        <a href="#" className="inline-flex items-center gap-2 font-semibold text-sm hover:gap-3 transition-all" style={{ color: '#EC5F2D' }}>
          Baca selengkapnya
          <span>→</span>
        </a>
      </div>
    </div>
  );
}

function SocialIcon({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110" style={{ background: 'rgba(255, 255, 255, 0.2)' }}>
      {icon}
    </a>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
