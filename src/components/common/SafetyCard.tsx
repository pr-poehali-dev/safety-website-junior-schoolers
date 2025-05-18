
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

interface SafetyCardProps {
  title: string;
  icon: string;
  color: string;
  borderColor: string;
  iconColor: string;
  children: React.ReactNode;
}

const SafetyCard: React.FC<SafetyCardProps> = ({
  title,
  icon,
  color,
  borderColor,
  iconColor,
  children,
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

export default SafetyCard;
