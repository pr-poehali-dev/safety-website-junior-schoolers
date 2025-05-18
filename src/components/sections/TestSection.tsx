
import React from "react";
import { Button } from "@/components/ui/button";

const TestSection: React.FC = () => {
  return (
    <section className="bg-blue-50 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-blue-800 mb-4">
          Проверь свои знания!
        </h2>
        <p className="text-lg font-rubik text-gray-700 mb-8 max-w-2xl mx-auto">
          Готов проверить, насколько хорошо ты знаешь правила безопасности? 
          Пройди наш весёлый тест и получи диплом знатока безопасности!
        </p>
        <Button className="bg-green-500 hover:bg-green-600 text-white font-medium px-8 py-4 rounded-xl text-lg shadow-lg">
          Пройти тест
        </Button>
      </div>
    </section>
  );
};

export default TestSection;
