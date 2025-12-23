import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import HowItWorks from '@/components/landing/HowItWorks';
import Testimonials from '@/components/landing/Testimonials';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}
