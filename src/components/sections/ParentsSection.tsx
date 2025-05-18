
import React from "react";
import { Button } from "@/components/ui/button";

const ParentsSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-blue-800 mb-4">
            Для родителей и учителей
          </h2>
          <p className="text-lg font-rubik text-gray-700 mb-6">
            Дорогие взрослые! Помогите детям освоить правила безопасности, 
            обсуждайте с ними материалы с нашего сайта и регулярно повторяйте 
            важные правила в игровой форме.
          </p>
          <div className="flex gap-4">
            <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-100">
              Методические материалы
            </Button>
            <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-100">
              Скачать плакаты
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentsSection;
