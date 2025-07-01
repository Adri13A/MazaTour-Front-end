'use client'
import CardDetailTransportation from "@/app/components/cards/CardDetailTransportation";
import CarouselCost from "../components/carouselCost/CarouselCost";
import transportationDetail from '../../../data/tranportationDetail';

const DetailTransportation = () => {
  return (
    <div> 
    <section className="p-5 md:pl-20 md:pr-20 md:pb-10 md:pt-10 bg-white">
      {transportationDetail.map((detail) => (
        <CardDetailTransportation
          key={detail.id}
          idRuta={detail.idRuta}
          nombreRuta={detail.nombreRuta}
          organizacion={detail.organizacion}
          destinoOrigen={detail.destinoOrigen}
        />
      ))}
    </section>

      {/* Carousel PlacesRoutes */}
      <section>
        <div className="p-5 md:pl-20 md:pr-20 md:pb-10 md:pt-10 bg-white">
          <CarouselCost/>
        </div>
      </section>
    </div>
  );
};

export default DetailTransportation;
