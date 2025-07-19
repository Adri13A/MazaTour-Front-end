import { ArrowUpRight } from "lucide-react";

interface CardCostRouteProps {
    readonly imagen: string;
    readonly tipoUnidad: string;
    readonly tipoPago: string;
    readonly costo: string;
    readonly tipoPasaje: string;
}
  
const CardCostRoute = ({ imagen, tipoUnidad, tipoPago, costo, tipoPasaje }: CardCostRouteProps)  =>{
    return (
        <div className="relative aspect-[3/5] min-w-[120px] max-w-[18rem] w-full h-auto rounded-2xl overflow-hidden shadow-md">
            <div className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${imagen})` }}>        
            </div>

            <div className="absolute inset-x-0 top-2 px-3 sm:px-4">
                <div className="flex justify-between items-start">
                    <div className="flex flex-col">
                        <p className="font-bold card-subtitle" >
                            {tipoUnidad}
                        </p>
                        <p className="font-light sm:text-sm md:text-base drop-shadow-md" style={{ color: "var(--color-accent2)" }} >
                            {tipoPago}
                        </p>
                    </div>

                    <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full faded-transparant">
                        <ArrowUpRight className="w-4 h-4"style={{ color: "var(--color-accent2)" }} />
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent px-3 py-2 sm:px-4 sm:py-3">
                <div className="flex flex-col items-start gap-1 w-full">
                    <div className="items-center card-subtitlee">
                        <p className="card-subtitle" style={{ color: "var(--color-accent2)" }} >{tipoPasaje}</p>
                        <p className="font-bold card-subtitle">Costo del Pasaje</p>
                    </div>
                    <h3 className="font-bold text-lg md:text-3xl drop-shadow-2xl leading-snug line-clamp-2">
                        {costo}
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default CardCostRoute