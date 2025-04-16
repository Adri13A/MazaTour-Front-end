import { Utensils } from "lucide-react";

interface CardFoodsProps {
  readonly imagen: string;
  readonly nombre: string;
}

export default function CardFoods({ imagen, nombre }: CardFoodsProps) {
  return (
    <div className="relative aspect-[3/5] min-w-[120px] max-w-[18rem] w-full h-auto rounded-2xl overflow-hidden shadow-md">
      {/* Imagen de fondo personalizada */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imagen})` }}
      ></div>

      {/* Capa con degradado y contenido */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent px-3 py-2 sm:px-4 sm:py-3">
        <div className="flex items-end justify-between gap-2 w-full">
          <h3 className="text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg drop-shadow leading-snug line-clamp-2">
            {nombre}
          </h3>

          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full p-1 sm:p-1.5">
            <Utensils className="text-white w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
          </div>
        </div>
      </div>
    </div>
  );
}