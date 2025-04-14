import { Utensils } from "lucide-react";

interface CardFoodsProps {
  imagen: string;
  nombre: string;
};

export default function CardFoods({ imagen, nombre }: CardFoodsProps) {
  return (
  <div className="relative w-[10rem] h-[13rem] md:h-[24rem] md:w-[15rem] rounded-2xl overflow-hidden shadow-md">
      {/* Imagen de fondo personalizada */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imagen})` }}
      ></div>

      {/* Capa con degradado y contenido */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent py-3 flex items-center justify-between px-4">
        <h3 className="text-white font-semibold text-lg">{nombre}</h3>

        {/* Icono dentro de círculo con efecto glassmorphism */}
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full p-2">
          <Utensils className="text-white w-5 h-5" />
        </div>
      </div>
    </div>
  );
}
