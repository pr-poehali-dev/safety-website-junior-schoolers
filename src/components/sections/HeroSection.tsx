
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <section className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-montserrat font-bold text-blue-800 mb-4">
            Привет, юный исследователь безопасности!
          </h1>
          <p className="text-lg font-rubik text-gray-700 mb-6">
            Вместе с нашим другом Спасайкой ты узнаешь, как оставаться в безопасности дома, на улице и в интернете!
          </p>
          <div className="flex gap-4">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-blue-800 font-medium px-6 py-3 rounded-xl text-base shadow-md">
              Начать приключение
            </Button>
            <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-100 px-6 py-3 rounded-xl text-base">
              Для родителей
            </Button>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500" 
            alt="Спасайка - твой друг и помощник" 
            className="w-full max-w-md rounded-full border-8 border-yellow-300 shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
