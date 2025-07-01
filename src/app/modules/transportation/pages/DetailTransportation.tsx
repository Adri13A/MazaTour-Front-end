import MapComponent from "@/app/components/MapComponent";
import { JSX } from "react";

interface DetailTransportationProps {
  readonly params: Promise<{ idRuta: string }>;
}

const DetailTransportation = async ({ params }: DetailTransportationProps): Promise<JSX.Element> => {
  const resolvedParams = await params;
  const { idRuta } = resolvedParams;

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Detalle de la ruta</h1>
      <p>ID de la ruta: {idRuta}</p>

      <div className="mt-10">
        <MapComponent idRuta={idRuta} />
      </div>
    </div>
  );
};

export default DetailTransportation;
