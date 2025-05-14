import { ArrowUpRight } from "lucide-react";

interface CardCostTransportationProps {
    readonly imagen: string;
    readonly tipoUnidad: string;
    readonly tipoPago: string;
    readonly costo: string;
    readonly tipoPasaje: string;
  }
  
export default function CardCostTransportation({ imagen, tipoUnidad, tipoPago, costo, tipoPasaje }: CardCostTransportationProps) {
  return (
    <div className="relative aspect-[3/5] min-w-[120px] max-w-[18rem] w-full h-auto rounded-2xl overflow-hidden shadow-md">
    {/* Imagen de fondo personalizada */}
        <div className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${imagen})` }}>        
        </div>

        {/* Contenedor absoluto con ícono y textos */}
        <div className="absolute inset-x-0 top-2 px-3 sm:px-4">
            <div className="flex justify-between items-start">
                {/* Textos alineados a la izquierda en columna */}
                <div className="flex flex-col">
                <p className="text-white/90 font-bold text-xs sm:text-sm md:text-base drop-shadow-md">
                    {tipoUnidad}
                </p>
                <p className="text-white/90 font-light text-xs sm:text-sm md:text-base drop-shadow-md">
                    {tipoPago}
                </p>
                </div>

                {/* Icono a la derecha con tamaño responsivo y proporción cuadrada */}
                <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 aspect-square rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm flex items-center justify-center shadow-md">
                <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                </div>
            </div>
        </div>

        {/* Texto en parte inferior */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent px-3 py-2 sm:px-4 sm:py-3">
            <div className="flex flex-col items-start gap-1 w-full">
                
                <div className="items-center text-white/90 text-xs sm:text-sm md:text-base">
                    <p className="text-white/90 font-light max-w-3xl mx-auto drop-shadow-md line-clamp-3">{tipoPasaje}</p>
                    <p className="text-white/90 font-bold max-w-3xl mx-auto drop-shadow-md line-clamp-3">Costo del Pasaje</p>
                </div>
                <h3 className="text-white font-bold text-lg md:text-3xl drop-shadow-2xl leading-snug line-clamp-2">
                    {costo}
                </h3>
            </div>
        </div>
    </div>
  );
}