import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

interface CardPlaceProps {
  readonly imagen: string;
  readonly nombre: string;
  readonly descripcion: string;
  readonly nombreCategoria: string;
}

const CardPlace = ({ imagen, nombre, descripcion,nombreCategoria }: CardPlaceProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
          className="relative aspect-[3/5] min-w-[120px] max-w-[20rem] w-full h-auto rounded-2xl overflow-hidden transition-transform duration-300 transform hover:-translate-y-1 hover:scale-[1.02] bg-white"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-300"
              style={{ backgroundImage: `url(${imagen})` }}
            />

            <div className={`absolute inset-0 transition-all duration-300 ${isHovered ? 'bg-black/50' : 'bg-gradient-to-t from-black/60 via-black/0 to-transparent'}`} />

            <div className="absolute top-2 right-2 w-8 h-8 rounded-full faded-transparant">
              <ArrowUpRight className="w-4 h-4" />
            </div>

            <div className={`absolute bottom-4 left-4 transition-all duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
                <h3 className="card-title">
                  {nombre}
                </h3>
                <p className="card-subtitle">
                {nombreCategoria}
                </p>
                <span className="inline-block mt-4 px-2 py-1 max-w-2xl mx-auto drop-shadow-md rounded-lg backdrop-blur-sm bg-gradient-to-br from-white/10 via-white/5 to-transparent hover:scale-105 transition text-white">
                  Ver más
                </span>
            </div>

            <div className={`absolute inset-3 bottom-3 bg-white/10 backdrop-blur-md rounded-2xl p-4 transition-all duration-500 ease-in-out overflow-y-auto 
              [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent
              ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                <div className="h-full flex flex-col">
                    <h3 className="card-title" >
                        {nombre}
                    </h3>
                    <div className="card-text">
                        {descripcion}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardPlace;
