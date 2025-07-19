import { ChevronLeft } from 'lucide-react';
import { JSX } from "react";
import DetailMapRoute from "../components/DetailMapRoute";

interface PageDetailRouteProps {
  readonly params: Promise<{ idRuta: string }>;
}

const PageDetailRoute = async ({ params }: PageDetailRouteProps): Promise<JSX.Element> => {
  const resolvedParams = await params;
  const { idRuta } = resolvedParams;

  return (
    <>
      <div className="pb-2 pl-5 pr-5 pt-14 md:pl-20 md:pr-20 md:pb-0 md:pt-14 bg-white">
        <h3 className="title pt-4">20 de Noviembre - Juarez</h3>
        <p className="subtitle">Huerta Grande - Centro {idRuta}</p>
        
        <div className="md:text-left pt-2">
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

      <div className="p-5 md:pl-20 md:pr-20 md:pb-10 md:pt-10 bg-white">
        <DetailMapRoute idRuta={idRuta} />
      </div>
    </>
  );

};

export default PageDetailRoute;
