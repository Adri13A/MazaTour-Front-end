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
        <div className="absolute top-2 right-2 w-8 h-8 rounded-full faded-transparant">
            <ArrowUpRight className="w-4 h-4"style={{ color: "var(--color-accent2)" }} />
        </div>

        {/* Texto en parte inferior */}
        <div className="absolute bottom-0 left-0 w-full px-3 py-2 sm:px-4 sm:py-3 faded-black">
            <div className="flex flex-col items-start gap-1 w-full">
                <h3 className="card-title">
                    {nombreLugar}
                </h3>

                <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" style={{ color: "var(--color-accent2)" }} />
                    <p className="card-subtitle" >{nombreRuta}</p>
                </div>
            </div>
        </div>
    </div>
  );
}