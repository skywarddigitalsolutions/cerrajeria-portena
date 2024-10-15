"use client"
import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { BiTimeFive, BiShield, BiLike, BiKey } from "react-icons/bi";
import { IconType } from "react-icons";
interface StatItemProps {
  icon: IconType;
  value: number;
  unit: string;
  description: string;
}

const stats: StatItemProps[] = [
  { icon: BiTimeFive, value: 15, unit: "min", description: "Tiempo promedio de respuesta" },
  { icon: BiShield, value: 100, unit: "%", description: "Satisfacción del cliente" },
  { icon: BiLike, value: 5000, unit: "+", description: "Clientes satisfechos en el último año" },
  { icon: BiKey, value: 10000, unit: "+", description: "Servicios realizados" }
];

const StatItem: React.FC<StatItemProps> = ({ icon: Icon, value, unit, description }) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      const timer = setTimeout(() => {
        setCount(value);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isInView, controls, value]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
      }}
      className="flex flex-col items-center"
    >
      <div className="w-20 h-20 rounded-full bg-celeste flex items-center justify-center mb-4">
        <Icon className="text-white text-4xl" />
      </div>
      <div className="text-4xl font-bold text-azul mb-2">
        {count}
        <span className="text-celeste">{unit}</span>
      </div>
      <p className="text-sm text-azul text-center max-w-[200px]">{description}</p>
    </motion.div>
  );
};

export default function Stats() {
  return (
    <section className="py-16 bg-gris relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-azul opacity-5 transform -skew-y-6"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-azul text-center mb-12">
          Nuestro Impacto en Números
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}