import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TrustIndicators from '@/components/TrustIndicators';
import FeaturedCars from '@/components/FeaturedCars';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <TrustIndicators />
        <FeaturedCars />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
