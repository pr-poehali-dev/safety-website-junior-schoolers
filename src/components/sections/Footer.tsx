
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center gap-2">
              <span className="text-xl font-montserrat font-bold">БезопасныйМир</span>
              <span className="text-yellow-200">🚸</span>
            </div>
            <p className="text-sm text-blue-200 mt-2">
              Учимся безопасности вместе!
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Разделы</h4>
              <ul className="space-y-1 text-blue-200">
                <li><a href="#" className="hover:text-white">Главная</a></li>
                <li><a href="#" className="hover:text-white">Уроки</a></li>
                <li><a href="#" className="hover:text-white">Игры</a></li>
                <li><a href="#" className="hover:text-white">Тесты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Ресурсы</h4>
              <ul className="space-y-1 text-blue-200">
                <li><a href="#" className="hover:text-white">Для родителей</a></li>
                <li><a href="#" className="hover:text-white">Для учителей</a></li>
                <li><a href="#" className="hover:text-white">Скачать материалы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Контакты</h4>
              <ul className="space-y-1 text-blue-200">
                <li><a href="#" className="hover:text-white">О нас</a></li>
                <li><a href="#" className="hover:text-white">Обратная связь</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-blue-700 text-center text-sm text-blue-300">
          © 2025 БезопасныйМир. Все права защищены. Сделано с заботой о детях.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
