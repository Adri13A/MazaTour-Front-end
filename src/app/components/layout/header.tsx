'use client';

import { useState } from 'react';
import { FaCloudSun } from "react-icons/fa";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Link from 'next/link';
//import { usePathname } from 'next/navigation';
import { FaBars } from 'react-icons/fa';


export default function Header(){
    const[active, setActive] = useState("Inicio");

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-3`}>
            {/*Logo
            flex items-center bg-gray-700 px-3 py-1 rounded-lg text-sm
            */}
            <div className={`flex items-center backdrop-blur-lg rounded-lg py-2 px-10`}>
                <span className={`txt-gray-400`}>Maza</span>Tour
            </div>

            {/* Menú 
            
            flex items-center gap-2 bg-gray-700 px-3 py-1 rounded-lg text-sm
            */}
            <div className={`flex items-center gap-2 backdrop-blur-lg rounded-lg`}>
                {[
                { name: "Inicio" },
                { name: "Transporte", dropdown: true },
                { name: "Atracciones", dropdown: true },
                { name: "Explorar", dropdown: true },
                ].map((item) => (
                <div key={item.name} className="relative">
                    <button
                    onClick={() => setActive(item.name)}
                    className={`px-3 py-1 rounded-md ${
                        active === item.name ? "text-white border-b-2 border-white" : "text-gray-300"
                    } hover:text-white focus:outline-none`}
                    >
                    {item.name}
                    {item.dropdown && <ChevronDownIcon className="inline w-4 h-4 ml-1" />}
                    </button>
                </div>
                ))}
            </div>

            {/* Clima 
            
            flex items-center gap-2 bg-gray-700 px-3 py-1 rounded-lg text-sm*/}
            <div className={`flex items-center gap-2 backdrop-blur-lg rounded-lg`}>
                <FaCloudSun className="text-yellow-300" />
                <span>24° C Mazatlán</span>
            </div>
        </nav>
    );

}