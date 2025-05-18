
import React from "react";
import SafetyCard from "@/components/common/SafetyCard";

const SafetyCategories: React.FC = () => {
  // Массив с данными для карточек безопасности
  const safetyCards = [
    {
      title: "Безопасность дома",
      icon: "Home",
      color: "bg-green-100",
      borderColor: "border-green-400",
      iconColor: "text-green-600",
      items: [
        "Не открывай дверь незнакомцам",
        "Не трогай острые и опасные предметы",
        "Знай номера экстренных служб"
      ]
    },
    {
      title: "Безопасность на улице",
      icon: "MapPin",
      color: "bg-blue-100",
      borderColor: "border-blue-400",
      iconColor: "text-blue-600",
      items: [
        "Переходи дорогу только по зебре",
        "Не уходи с незнакомыми людьми",
        "Если потерялся, обратись к полицейскому"
      ]
    },
    {
      title: "Безопасность в интернете",
      icon: "Laptop",
      color: "bg-purple-100",
      borderColor: "border-purple-400",
      iconColor: "text-purple-600",
      items: [
        "Не сообщай личные данные",
        "Расскажи родителям о странных сообщениях",
        "Не встречайся с интернет-знакомыми"
      ]
    },
    {
      title: "Пожарная безопасность",
      icon: "Flame",
      color: "bg-red-100",
      borderColor: "border-red-400",
      iconColor: "text-red-600",
      items: [
        "Не играй со спичками и зажигалками",
        "Знай план эвакуации из дома",
        "При пожаре звони 01 или 112"
      ]
    },
    {
      title: "Безопасность на воде",
      icon: "Droplets",
      color: "bg-cyan-100",
      borderColor: "border-cyan-400",
      iconColor: "text-cyan-600",
      items: [
        "Купайся только под присмотром взрослых",
        "Не ныряй в незнакомых местах",
        "Используй спасательный жилет"
      ]
    },
    {
      title: "Безопасность со животными",
      icon: "Cat",
      color: "bg-amber-100",
      borderColor: "border-amber-400",
      iconColor: "text-amber-600",
      items: [
        "Не подходи к незнакомым животным",
        "Не дразни домашних питомцев",
        "Мой руки после контакта с животными"
      ]
    }
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-blue-800 text-center mb-8">
          Что нужно знать о безопасности?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {safetyCards.map((card, index) => (
            <SafetyCard
              key={index}
              title={card.title}
              icon={card.icon}
              color={card.color}
              borderColor={card.borderColor}
              iconColor={card.iconColor}
            >
              <ul className="list-disc pl-5 space-y-2">
                {card.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </SafetyCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafetyCategories;
