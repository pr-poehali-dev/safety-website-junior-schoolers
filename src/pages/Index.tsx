
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-blue-50">
      {/* Навигация */}
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

      {/* Герой-секция */}
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

      {/* Категории безопасности */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-blue-800 text-center mb-8">
            Что нужно знать о безопасности?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SafetyCard 
              title="Безопасность дома" 
              icon="Home" 
              color="bg-green-100" 
              borderColor="border-green-400"
              iconColor="text-green-600"
            >
              <ul className="list-disc pl-5 space-y-2">
                <li>Не открывай дверь незнакомцам</li>
                <li>Не трогай острые и опасные предметы</li>
                <li>Знай номера экстренных служб</li>
              </ul>
            </SafetyCard>

            <SafetyCard 
              title="Безопасность на улице" 
              icon="MapPin" 
              color="bg-blue-100" 
              borderColor="border-blue-400"
              iconColor="text-blue-600"
            >
              <ul className="list-disc pl-5 space-y-2">
                <li>Переходи дорогу только по зебре</li>
                <li>Не уходи с незнакомыми людьми</li>
                <li>Если потерялся, обратись к полицейскому</li>
              </ul>
            </SafetyCard>

            <SafetyCard 
              title="Безопасность в интернете" 
              icon="Laptop" 
              color="bg-purple-100" 
              borderColor="border-purple-400"
              iconColor="text-purple-600"
            >
              <ul className="list-disc pl-5 space-y-2">
                <li>Не сообщай личные данные</li>
                <li>Расскажи родителям о странных сообщениях</li>
                <li>Не встречайся с интернет-знакомыми</li>
              </ul>
            </SafetyCard>

            <SafetyCard 
              title="Пожарная безопасность" 
              icon="Flame" 
              color="bg-red-100" 
              borderColor="border-red-400"
              iconColor="text-red-600"
            >
              <ul className="list-disc pl-5 space-y-2">
                <li>Не играй со спичками и зажигалками</li>
                <li>Знай план эвакуации из дома</li>
                <li>При пожаре звони 01 или 112</li>
              </ul>
            </SafetyCard>

            <SafetyCard 
              title="Безопасность на воде" 
              icon="Droplets" 
              color="bg-cyan-100" 
              borderColor="border-cyan-400"
              iconColor="text-cyan-600"
            >
              <ul className="list-disc pl-5 space-y-2">
                <li>Купайся только под присмотром взрослых</li>
                <li>Не ныряй в незнакомых местах</li>
                <li>Используй спасательный жилет</li>
              </ul>
            </SafetyCard>

            <SafetyCard 
              title="Безопасность со животными" 
              icon="Cat" 
              color="bg-amber-100" 
              borderColor="border-amber-400"
              iconColor="text-amber-600"
            >
              <ul className="list-disc pl-5 space-y-2">
                <li>Не подходи к незнакомым животным</li>
                <li>Не дразни домашних питомцев</li>
                <li>Мой руки после контакта с животными</li>
              </ul>
            </SafetyCard>
          </div>
        </div>
      </section>

      {/* Интерактивный совет */}
      <section className="bg-yellow-300 py-10">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center text-white text-4xl">
                💡
              </div>
            </div>
            <div>
              <h3 className="text-xl font-montserrat font-bold text-blue-800 mb-2">Совет дня от Спасайки:</h3>
              <p className="text-lg font-rubik text-gray-700">
                Всегда сообщай родителям или учителям, куда ты идёшь и когда планируешь вернуться. 
                Это поможет взрослым знать, что ты в безопасности!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Тест на знание */}
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

      {/* Секция для родителей */}
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

      {/* Футер */}
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
    </div>
  );
};

// Компонент карточки безопасности
const SafetyCard = ({ 
  title, 
  icon, 
  color, 
  borderColor, 
  iconColor, 
  children 
}: { 
  title: string; 
  icon: string; 
  color: string; 
  borderColor: string;
  iconColor: string;
  children: React.ReactNode;
}) => {
  return (
    <Card className={`${color} border-2 ${borderColor} overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center ${iconColor}`}>
            <Icon name={icon} size={24} />
          </div>
          <h3 className="text-xl font-montserrat font-bold text-gray-800">{title}</h3>
        </div>
        <div className="font-rubik text-gray-700">
          {children}
        </div>
        <Button variant="ghost" className={`mt-4 ${iconColor} hover:bg-white/50`}>
          Узнать больше
          <Icon name="ChevronRight" size={16} />
        </Button>
      </CardContent>
    </Card>
  );
};

export default Index;
