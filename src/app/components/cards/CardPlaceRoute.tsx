import { ArrowUpRight, MapPin } from "lucide-react";

interface CardPlaceRouteProps {
  readonly imagen: string;
  readonly nombreLugar: string;
  readonly nombreRuta: string;
}

const CardPlaceRoute = ({ imagen, nombreLugar, nombreRuta }: CardPlaceRouteProps) => {
  return (
<div className="relative aspect-[3/5] min-w-[120px] max-w-[20rem] w-full h-auto rounded-2xl overflow-hidden transition-transform duration-300 transform hover:-translate-y-1 hover:scale-[1.02] bg-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imagen})` }}
      />

      <div className="absolute top-2 right-2 w-8 h-8 rounded-full faded-transparant">
        <ArrowUpRight className="w-4 h-4 color-white" />
      </div>

      <div className="absolute bottom-0 left-0 w-full px-3 py-2 sm:px-4 sm:py-3 faded-black">
        <div className="flex flex-col items-start gap-1 w-full">
          <h3 className="card-title">{nombreLugar}</h3>

          <div className="flex items-center gap-2 w-full">
            <MapPin className="w-4 h-4 color-white" />
            <p className="truncate">
              {nombreRuta}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPlaceRoute;
