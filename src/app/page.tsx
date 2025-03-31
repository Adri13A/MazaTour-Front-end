import Image from "next/image";
import imagenMain from '../public/images/Mazatlan-Malecon.webp';
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";


export default function Home() {
  return (
    <div>
      <Header />
      
      <div className="">
        <Image 
          src={imagenMain}
          width={1920} 
          height={1080} 
          alt="Mazatlán"
          className="w-full h-auto"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl font-bold">Mazatlán</h1>
          <p className="mt-2 text-lg">
            Su voz nahuatl <span className="font-bold">Mazatlan</span> significa Tierra de Venados.
          </p>
        </div>
      </div>

      <section className="container mx-auto p-6">
        <h2 className="text-3xl font-semibold">Historia</h2>
        <p className="mt-4 text-justify">
          Mazatlan, ubicado en el estado de Sinaloa, también conocido como <span className="font-bold">La Perla del Pacifico</span>, fue fundado en 1531...
        </p>
      </section>
      <Footer />
      
    </div>
  );
}
