import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import GalleryCarousel from '@/components/GalleryCarousel';
import ImpactStats from '@/components/ImpactStats';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden">
      <Header />
      <main className="w-full max-w-full overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <GalleryCarousel />
        <ImpactStats />
      </main>
      <Footer />
    </div>
  );
}
