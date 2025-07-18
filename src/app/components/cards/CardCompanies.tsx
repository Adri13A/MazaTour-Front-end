import Image from "next/image";

interface CardCompaniesProps {
  imagen: string;
  nombre: string;
  descripcion: string;
  ubicacion: string;
}

const CardCompanies = ({ imagen, nombre, descripcion, ubicacion }: CardCompaniesProps) => {
  return (
    <div className="relative w-full aspect-[4/2] md:aspect-[6/2] overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-gray-300">
            <Image  
              src={imagen}
              fill
              alt={`Negocios locales ${nombre}`}
              className="w-full h-full object-cover"
            />
        </div>

        <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8 text-white bg-gradient-to-t from-black/80 to-transparent w-full">
            <div className="pl-3 sm:pl-5 mx-auto">
                <div className="flex flex-col items-start space-y-1 sm:space-y-2 md:space-y-3">
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg">Negocios Locales</p>
                    <h2 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase">
                        {nombre}
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                        {descripcion}
                        <br className="hidden sm:block" />
                        {ubicacion}
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default CardCompanies;
