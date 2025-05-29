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
        <div className="absolute bottom-0 left-0 w-full px-3 py-2 sm:px-4 sm:py-3 faded-black">
          <div className="flex items-end justify-between gap-2 w-full">
            <h3 className="card-title"> 
              {nombre}
            </h3>

            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full p-1 sm:p-1.5">
              <Utensils className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"style={{ color: "var(--color-accent2)" }} />
            </div>
        </div>
      </div>
    </div>
  );
}