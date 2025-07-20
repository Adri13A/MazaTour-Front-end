import { ChevronLeft } from 'lucide-react';
import { JSX } from "react";
import DetailMapRoute from "../components/DetailMapRoute";
import Title from '@/app/components/letters/Title';
import Subtitle from '@/app/components/letters/Subtitle';

interface PageDetailRouteProps {
  readonly params: Promise<{ idRuta: string }>;
}

const PageDetailRoute = async ({ params }: PageDetailRouteProps): Promise<JSX.Element> => {
  const resolvedParams = await params;
  const { idRuta } = resolvedParams;

  return (
    <>
      <div className="p-5 md:pl-40 md:pr-40 md:pb-10 md:pt-10 bg-white">
        <Title className="pt-4">20 de Noviembre - Juarez</Title>
        <Subtitle>Huerta Grande - Centro {idRuta}</Subtitle>
        
        <div className="md:text-left">
            <span className="inline-flex items-center gap-2 text-white py-1 px-5 rounded-2xl font-semibold justify-center md:justify-start" style={{ background: "var(--color-accent2)" }}>
              <button className="focus:outline-none">
                <ChevronLeft 
                  className="w-4 h-4 text-white hover:fill-white transition-all duration-200 hover:scale-110 hover:animate-pulse cursor-pointer"
                />
              </button>
              Regresar
            </span>
          </div>
      </div>

      <div className="p-5 md:pl-40 md:pr-40 md:pb-10 md:pt-0 bg-white">
        <DetailMapRoute idRuta={idRuta} />
      </div>
    </>
  );

};

export default PageDetailRoute;
