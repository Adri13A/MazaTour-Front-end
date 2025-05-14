import { ArrowUpRight, MapPin } from "lucide-react";

interface CardPlacesTransportationProps {
    readonly imagen: string;
    readonly nombreLugar: string;
    readonly nombreRuta: string;
  }
  
export default function CardPlacesTransportation({ imagen, nombreLugar, nombreRuta }: CardPlacesTransportationProps) {
  return (
    <div className="relative aspect-[3/5] min-w-[120px] max-w-[18rem] w-full h-auto rounded-2xl overflow-hidden shadow-md">
    {/* Imagen de fondo personalizada */}
        <div className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${imagen})` }}>        
        </div>

        {/* Icono circular en esquina superior derecha */}
        <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm flex items-center justify-center shadow-md">
            <ArrowUpRight className="w-4 h-4 text-white" />
        </div>

        {/* Texto en parte inferior */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent px-3 py-2 sm:px-4 sm:py-3">
            <div className="flex flex-col items-start gap-1 w-full">
                <h3 className="text-white font-bold text-lg md:text-2xl drop-shadow-2xl leading-snug line-clamp-2">
                    {nombreLugar}
                </h3>

                <div className="flex items-center gap-2 text-white/80 text-xs sm:text-sm md:text-base">
                    <MapPin className="w-4 h-4" />
                    <p className="text-white/90 max-w-3xl mx-auto drop-shadow-md line-clamp-3">{nombreRuta}</p>
                </div>
            </div>
        </div>
    </div>
  );
}