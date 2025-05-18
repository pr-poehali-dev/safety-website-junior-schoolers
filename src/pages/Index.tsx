import React from "react";
import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import SafetyCategories from "@/components/sections/SafetyCategories";
import DailyTip from "@/components/sections/DailyTip";
import TestSection from "@/components/sections/TestSection";
import ParentsSection from "@/components/sections/ParentsSection";
import Footer from "@/components/sections/Footer";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-50">
      <Header />
      <HeroSection />
      <SafetyCategories />
      <DailyTip />
      <TestSection />
      <ParentsSection />
      <Footer />
    </div>
  );
};

export default Index;
