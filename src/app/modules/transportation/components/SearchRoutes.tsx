'use client'


import React from 'react';
import { Search } from 'lucide-react';

export default function BuscadorRuta() {
    return (

            <div className="font-gantari flex flex-row md:flex-row md:max-w-full mt-5 md:mx-auto md:mt-5 items-center justify-between gap-4">
                <div className="flex items-center w-full border border-gray-300 rounded-xl px-2 ">
                    <Search className="w-5 h-5 text-gray-400 mr-2" />
                    <input
                        type="text"
                        placeholder="Buscar ruta..."
                        className="w-full p-2 bg-transparent focus:outline-none text-black "
                    />
                </div>
               
            </div>

    );
}