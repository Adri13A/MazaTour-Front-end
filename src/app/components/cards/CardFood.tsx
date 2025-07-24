import { Utensils } from "lucide-react";

interface CardFoodProps {
  readonly image: string;
  readonly name: string;
}

const CardFood = ({ image, name }: CardFoodProps) => {
    return (
      <div className="relative aspect-[3/5] min-w-[120px] max-w-[20rem] w-full h-auto rounded-2xl overflow-hidden transition-transform duration-300 transform hover:-translate-y-1 hover:scale-[1.02] bg-white">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          >
          </div>

          <div className="absolute bottom-0 left-0 w-full px-3 py-2 sm:px-4 sm:py-3 faded-black">
              <div className="flex items-end justify-between gap-2 w-full">
                  <h3 className="card-title"> 
                    {name}
                  </h3>
                  <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full p-1 sm:p-1.5">
                    <Utensils className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"/>
                  </div>
              </div>
          </div>
      </div>
    );
};

export default CardFood; 
