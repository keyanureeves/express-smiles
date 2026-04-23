"use client";

import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import QuizSection from "@/components/home/QuizSection";
import LocationSection from "@/components/home/LocationSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQsSection from "@/components/home/FAQsSection";
import BlogSection from "@/components/home/BlogSection";
import CtaSection from "@/components/home/CtaSection";
import NRICornerSection from "@/components/home/NRICornerSection";
import AchievementsSection from "@/components/home/AchievementsSection";
import CommunityImpactSection from "@/components/home/CommunityImpactSection";
import AppointmentPopup from "@/components/AppointmentPopup";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (process.env.NODE_ENV === "development") {
      sessionStorage.removeItem("appointmentPopupShown");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content">
        <HeroSection />
        <ServicesSection />
        <AchievementsSection />
        <NRICornerSection />
        <QuizSection />
        <LocationSection />
        <TestimonialsSection />
        <FAQsSection />
        <CommunityImpactSection />
        <BlogSection />
        <CtaSection />
      </main>
      <Footer />
      <AppointmentPopup />
    </div>
  );
}