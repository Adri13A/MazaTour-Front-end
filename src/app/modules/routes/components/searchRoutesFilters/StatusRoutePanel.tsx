'use client'

import React from 'react';
import { Coins, MapPinHouse, XOctagon, AlertTriangle } from 'lucide-react';

const StatusRoutePanel = () => {

    return (
        <div className='pt-3'>
            <div className="font-gantari flex flex-wrap md:max-w-full p-1 px-2 md:mx-auto items-center rounded-xl justify-start gap-2 bg-gray-100">
                <button className="flex items-center bg-white rounded-xl px-2 py-1 md:px-4 md:py-2 text-gray-700 text-xs md:text-sm font-medium hover:bg-gray-200 transition duration-200">
                    <span className="md:hidden"><MapPinHouse className="w-5 h-5" /></span>
                    <span className="hidden md:flex items-center">
                        <MapPinHouse className="w-4 h-4 mr-1" />
                        Locales
                    </span>
                    <span className="ml-1 text-gray-500 text-sm">45</span>
                </button>

                <button className="flex items-center  bg-white  rounded-xl px-2 py-1 md:px-4 md:py-2 text-gray-700 text-xs md:text-sm font-medium hover:bg-gray-200 transition duration-200">
                    <span className="md:hidden"><XOctagon className="w-5 h-5" /></span>
                    <span className="hidden md:flex items-center">
                        <XOctagon className="w-4 h-4 mr-1" />
                        Suspendidas
                    </span>
                    <span className="ml-1 text-gray-500 text-sm">45</span>
                </button>

                <button className="flex items-center  bg-white  rounded-xl px-2 py-1 md:px-4 md:py-2 text-gray-700 text-xs md:text-sm font-medium hover:bg-gray-200 transition duration-200">
                    <span className="md:hidden"><AlertTriangle className="w-5 h-5" /></span>
                    <span className="hidden md:flex items-center">
                        <AlertTriangle className="w-4 h-4 mr-1" />
                        Desplazadas
                    </span>
                    <span className="ml-1 text-gray-500 text-sm">45</span>
                </button>

                <button className="flex items-center bg-white rounded-xl px-2 py-1 md:px-4 md:py-2 text-gray-700 text-xs md:text-sm font-medium hover:bg-gray-200 transition duration-200">
                    {/* Icono visible en móvil */}
                    <span className="md:hidden"><Coins className="w-5 h-5" /></span>
                    {/* Icono pequeño y texto visible en escritorio */}
                    <span className="hidden md:flex items-center">
                        <Coins className="w-4 h-4 mr-1" />
                        Tarifa Estudiante
                    </span>
                    <span className="ml-1 text-gray-500 text-sm">$3.50</span>
                </button>
            </div>
        </div>
    );
};

export default StatusRoutePanel;