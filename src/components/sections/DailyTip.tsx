
import React from "react";

const DailyTip: React.FC = () => {
  return (
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
  );
};

export default DailyTip;
