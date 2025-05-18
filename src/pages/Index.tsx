import React from "react";
import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import SafetyCategories from "@/components/sections/SafetyCategories";
import DailyTip from "@/components/sections/DailyTip";
import TestSection from "@/components/sections/TestSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-blue-50">
      <Header />
      <HeroSection />
      <SafetyCategories />
      <DailyTip />
      <TestSection />
      <Footer />
    </div>
  );
};

export default Index;
