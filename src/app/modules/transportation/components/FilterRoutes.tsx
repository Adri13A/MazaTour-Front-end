'use client'

import React, { useState, useEffect } from 'react';
import { X, RotateCw, ListFilter, MapPinHouse, SortAsc, Clock, Repeat, Coins, Route } from 'lucide-react';

// Definición de la interfaz para las props del componente Dropdown
interface DropdownProps {
    title: string;
    open: boolean;
    setOpen: (open: boolean) => void;
    children: React.ReactNode;
    icon: React.ReactNode;
}

// Componente Dropdown: Renderiza un dropdown con un título, opciones y un icono
const Dropdown: React.FC<DropdownProps> = ({ title, open, setOpen, children, icon }) => {
    // Estilos para el dropdown
    const dropdownStyle = "flex items-center justify-between cursor-pointer";
    const dropdownOptionsStyle = "flex flex-wrap gap-2 mt-2 overflow-hidden transition-all duration-300 ease-in-out";
    const sectionStyle = "mb-4";
    const dividerStyle = "border-b border-gray-300 my-2";

    return (
        <div className={sectionStyle}>
            {/* Contenedor del título y el icono del dropdown */}
            <div className={dropdownStyle} onClick={() => setOpen(!open)}>
                <div className="flex items-center">
                    {icon}
                    <h4 className="text-md font-semibold ml-2">{title}</h4>
                </div>
                {/* Icono de flecha para indicar si el dropdown está abierto o cerrado */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-5 h-5 transition-transform ${open ? 'rotate-180' : ''}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
            {/* Contenedor de las opciones del dropdown */}
            <div className={`${dropdownOptionsStyle} ${open ? 'max-h-40' : 'max-h-0'}`}>
                {children}
            </div>
            <div className={dividerStyle} />
        </div>
    );
};

// Ejemplo de componente ModalBottom.tsx
interface ModalBottomProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

function ModalBottom({ open, onClose, children }: ModalBottomProps) {
    useEffect(() => {
        if (open) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        return () => document.body.classList.remove('overflow-hidden');
    }, [open]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-end justify-center backdrop-blur-sm bg-black bg-opacity-40">
            <div className="text-black relative bg-white w-full max-w-md mb-3 mx-3 rounded-3xl p-6 shadow-lg">
                <button
                    className="absolute top-2 right-4 text-gray-400 hover:text-gray-600"
                    onClick={onClose}
                >
                </button>
                
                {children}
            </div>
        </div>
    );
}

// Componente FiltroRutas: Renderiza un conjunto de dropdowns para filtrar rutas
export default function FiltroRutas() {
    // Estados para controlar la visibilidad de cada dropdown
    const [tipoRutaOpen, setTipoRutaOpen] = useState(false);
    const [categoriasOpen, setCategoriasOpen] = useState(false);
    const [distanciaOpen, setDistanciaOpen] = useState(false);
    const [horarioOpen, setHorarioOpen] = useState(false);
    const [frecuenciaOpen, setFrecuenciaOpen] = useState(false);
    const [pasajeOpen, setPasajeOpen] = useState(false);
    // Estado para controlar la visibilidad del filtro en dispositivos móviles
    const [isFilterVisible, setIsFilterVisible] = useState(false);

    // Función para resetear todos los filtros
    const handleResetFilters = () => {
        setTipoRutaOpen(false);
        setCategoriasOpen(false);
        setDistanciaOpen(false);
        setHorarioOpen(false);
        setFrecuenciaOpen(false);
        setPasajeOpen(false);
    };

    // Estilos para los botones y el divisor
    const buttonStyle = "text-gray-600 hover:text-gray-800 px-3 py-1 bg-gray-100 border-gray-200 rounded-full hover:bg-gray-200 transition duration-200 text-sm font-medium";
    const dividerStyle = "border-b border-gray-300 my-2";


    return (
        <>
            {/* Botón flotante para dispositivos móviles */}
            <button
                className="font-gantari fixed flex bottom-24 right-6 bg-black backdrop-blur-sm bg-opacity-20 text-white rounded-full p-3 shadow-lg z-50 md:hidden"
                onClick={() => setIsFilterVisible(!isFilterVisible)}
            >
                <ListFilter size={24} />
                &nbsp;
                Filtro
            </button>

            {/* Modal del filtro */}
            {isFilterVisible && (
                <ModalBottom open={isFilterVisible} onClose={() => setIsFilterVisible(false)}>
                    {/* Encabezado del filtro */}
                    <div className="flex items-center justify-between mb-4">
                        <div className={"flex items-center "}>
                            <ListFilter />
                            &nbsp;
                            <h3 className="text-lg font-semibold">Filtrar</h3>
                        </div>
                        <button className={buttonStyle + " px35 py-1 bg-[#ee2323] bg-opacity-20"} onClick={() => setIsFilterVisible(false)}>
                            <X size={19} strokeWidth={3} />
                        </button>
                    </div>

                    <div className={dividerStyle} />

                    {/* Tipo de Ruta */}
                    <Dropdown title="Tipo de Ruta" open={tipoRutaOpen} setOpen={setTipoRutaOpen} icon={<MapPinHouse size={16} />}>
                        <button className={buttonStyle}>Todas</button>
                        <button className={buttonStyle}>Locales</button>
                        <button className={buttonStyle}>Suspendidas</button>
                        <button className={buttonStyle}>Desplazadas</button>
                    </Dropdown>

                    {/* Alfabéticamente */}
                    <Dropdown title="Alfabéticamente" open={categoriasOpen} setOpen={setCategoriasOpen} icon={<SortAsc size={16} />}>
                        <button className={buttonStyle}>Ascendente</button>
                        <button className={buttonStyle}>Descendente</button>
                    </Dropdown>

                    {/* Distancia */}
                    <Dropdown title="Distancia" open={distanciaOpen} setOpen={setDistanciaOpen} icon={<Route size={16} />}>
                        <button className={buttonStyle}>Mayor</button>
                        <button className={buttonStyle}>Menor</button>
                    </Dropdown>

                    {/* Horario */}
                    <Dropdown title="Horario" open={horarioOpen} setOpen={setHorarioOpen} icon={<Clock size={16} />}>
                        <button className={buttonStyle}>Más tarde</button>
                        <button className={buttonStyle}>Más temprano</button>
                    </Dropdown>

                    {/* Frecuencia */}
                    <Dropdown title="Frecuencia" open={frecuenciaOpen} setOpen={setFrecuenciaOpen} icon={<Repeat size={16} />}>
                        <button className={buttonStyle}>Mayor</button>
                        <button className={buttonStyle}>Menor</button>
                    </Dropdown>

                    {/* Pasaje */}
                    <Dropdown title="Pasaje" open={pasajeOpen} setOpen={setPasajeOpen} icon={<Coins size={16} />}>
                        <button className={buttonStyle}>$3.50</button>
                        <button className={buttonStyle}>$11</button>
                        <button className={buttonStyle}>$12.50</button>
                        <button className={buttonStyle}>$13</button>
                    </Dropdown>
                </ModalBottom>
            )}

            {/* Filtro para pantallas grandes */}
            <aside className="text-black font-gantari md:mt-5 p-3 border rounded-xl hidden md:block" style={{ maxWidth: '270px' }}>
                {/* Encabezado del filtro */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                        <ListFilter />
                        &nbsp;
                        <h3 className="text-lg font-semibold">Filtrar</h3>
                    </div>
                    <button className={buttonStyle + " px35 py-1"} onClick={handleResetFilters}>
                        <RotateCw size={16} color="#ee2323" strokeWidth={2.2} />
                    </button>
                </div>

                <div className={dividerStyle} />

                {/* Tipo de Ruta */}
                <Dropdown title="Tipo de Ruta" open={tipoRutaOpen} setOpen={setTipoRutaOpen} icon={<MapPinHouse size={16} />}>
                    <button className={buttonStyle}>Todas</button>
                    <button className={buttonStyle}>Locales</button>
                    <button className={buttonStyle}>Suspendidas</button>
                    <button className={buttonStyle}>Desplazadas</button>
                </Dropdown>
                

                {/* Categorías */}
                <Dropdown title="Alfabéticamente" open={categoriasOpen} setOpen={setCategoriasOpen} icon={<SortAsc size={16} />}>
                    <button className={buttonStyle}>Ascendente</button>
                    <button className={buttonStyle}>Descendente</button>
                </Dropdown>

                {/* Distancia */}
                <Dropdown title="Distancia" open={distanciaOpen} setOpen={setDistanciaOpen} icon={<Route size={16} />}>
                    <button className={buttonStyle}>Mayor</button>
                    <button className={buttonStyle}>Menor</button>
                </Dropdown>

                {/* Horario */}
                <Dropdown title="Horario" open={horarioOpen} setOpen={setHorarioOpen} icon={<Clock size={16} />}>
                    <button className={buttonStyle}>Más tarde</button>
                    <button className={buttonStyle}>Más temprano</button>
                </Dropdown>

                {/* Frecuencia */}
                <Dropdown title="Frecuencia" open={frecuenciaOpen} setOpen={setFrecuenciaOpen} icon={<Repeat size={16} />}>
                    <button className={buttonStyle}>Mayor</button>
                    <button className={buttonStyle}>Menor</button>
                </Dropdown>

                {/* Pasaje */}
                <Dropdown title="Pasaje" open={pasajeOpen} setOpen={setPasajeOpen} icon={<Coins size={16} />}>
                    <button className={buttonStyle}>$3.50</button>
                    <button className={buttonStyle}>$11</button>
                    <button className={buttonStyle}>$12.50</button>
                    <button className={buttonStyle}>$13</button>
                </Dropdown>
            </aside>
        </>
    );
}