
import React from "react";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 text-white shadow-md">
      <div className="container mx-auto py-4 px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-xl font-montserrat font-bold">БезопасныйМир</span>
            <span className="text-yellow-200">🚸</span>
          </div>
          <div className="hidden md:flex gap-4">
            <Button variant="ghost" className="text-white hover:bg-blue-600">Главная</Button>
            <Button variant="ghost" className="text-white hover:bg-blue-600">Уроки</Button>
            <Button variant="ghost" className="text-white hover:bg-blue-600">Игры</Button>
            <Button variant="ghost" className="text-white hover:bg-blue-600">Для родителей</Button>
          </div>
          <Button variant="outline" className="bg-yellow-400 text-blue-800 border-none hover:bg-yellow-300">
            Тест на знание правил
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
