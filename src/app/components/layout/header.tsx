'use client';

import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown, BusFront, House, FerrisWheel, Telescope } from 'lucide-react';
import Image from "next/image";
import imagenWeather from '../../../public/images/cloudy.png';
import '../../../styles/header.css';
//import Link from 'next/link';
//import { usePathname } from 'next/navigation';


export default function Header() {
    const [active, setActive] = useState("Inicio");
    const [hovered, setHovered] = useState<string | null>(null);
    const [highlight, setHighlightStyle] = useState({ left: 0, width: 0 });
    const menuRef = useRef<HTMLDivElement | null>(null);

    // Estados para el dock móvil
    const [mobileActive, setMobileActive] = useState("Inicio");
    const dockRef = useRef<HTMLDivElement | null>(null);
    const [dockHighlight, setDockHighlight] = useState({ left: 0, width: 0 });

    const menuItems = [
        { name: "Inicio" },
        { name: "Transporte", dropdown: true },
        { name: "Atracciones", dropdown: true },
        { name: "Explorar", dropdown: true },
    ];

    const updateHighlight = (itemName: string) => {
        const item = document.getElementById(itemName);
        if (item && menuRef.current) {
            const { left, width } = item.getBoundingClientRect();
            const menuLeft = menuRef.current.getBoundingClientRect().left;
            setHighlightStyle({ left: left - menuLeft, width });
        }
    };

    const updateDockHighlight = (itemName: string) => {
        const item = document.getElementById(`mobile-${itemName}`);
        if (item && dockRef.current) {
            const { left, width } = item.getBoundingClientRect();
            const dockLeft = dockRef.current.getBoundingClientRect().left;
            setDockHighlight({ left: left - dockLeft, width });
        }
    };

    //Actualizar cuando cambie el active
    useEffect(() => {
        updateHighlight(active);
        updateDockHighlight(mobileActive);
    }, [active, mobileActive]);

    return (
        <>
            <nav className={`items-stretch navbar`}>
                {/*Logo*/}
                <div className={`navbar-logo`}>
                    <span className={`txt-gray-400 `}>Maza</span>
                    <span className={`text-black`}>Tour</span>
                </div>

                {/* Menú */}
                <div
                    ref={menuRef}
                    className={`menu-container`}
                    onMouseLeave={() => {
                        updateHighlight(active);
                        setHovered(null); // Regresar al activo si el mouse sale del menú
                    }}// Regresar al activo si el mouse sale del menú

                >

                    {/* Barra inferior animada */}
                    <div
                        className={`menu-highlight`}
                        style={{ left: `${highlight.left}px`, width: `${highlight.width}px` }}
                    >
                    </div>

                    {menuItems.map((item) => (
                        <button
                            key={item.name}
                            id={item.name}
                            onMouseEnter={() => {
                                updateHighlight(item.name);
                                setHovered(item.name); // Cambiar el hovered al elemento actual
                            }}
                            onClick={() => {
                                setActive(item.name)
                            }}
                            className={`menu-button inline  ${active === item.name || hovered === item.name
                                ? "menu-button-active"
                                : "menu-button-inactive"
                                }`}
                        >
                            {item.name}
                            {item.dropdown && <ChevronDown className="inline w-4 h-4 ml-1" />}
                        </button>
                    ))}
                </div>

                {/* Clima */}
                <div className={`weather-info`}>
                    <Image
                        src={imagenWeather}
                        alt='weather'
                    />
                    <span>24° C</span>
                    <span className='city-name'>Mazatlán</span>
                </div>

            </nav>


            {/* Dock en la parte inferior para móviles */}


           {/* Dock Móvil */}
           <div className="dock mobile-menu" ref={dockRef}>
                <div
                    className="menu-highlight"
                    style={{
                        left: `${dockHighlight.left}px`,
                        width: `${dockHighlight.width}px`,
                        top: '0',
                        height: '3px'
                    }}
                ></div>

                <button
                    id="mobile-Inicio"
                    className={`${mobileActive === "Inicio" ? "dock-active" : ""}`}
                    onTouchStart={() => setMobileActive("Inicio")}
                >
                    <House size={24} />
                    <span className="dock-label">Inicio</span>
                </button>

                <button
                    id="mobile-Transporte"
                    className={`${mobileActive === "Transporte" ? "dock-active" : ""}`}
                    onTouchStart={() => setMobileActive("Transporte")}
                >
                    <BusFront size={24} />
                    <span className="dock-label">Transporte</span>
                </button>

                <button
                    id="mobile-Atracciones"
                    className={`${mobileActive === "Atracciones" ? "dock-active" : ""}`}
                    onTouchStart={() => setMobileActive("Atracciones")}
                >
                    <FerrisWheel size={24} />
                    <span className="dock-label">Atracciones</span>
                </button>

                <button
                    id="mobile-Explorar"
                    className={`${mobileActive === "Explorar" ? "dock-active" : ""}`}
                    onTouchStart={() => setMobileActive("Explorar")}
                >
                    <Telescope size={24} />
                    <span className="dock-label">Explorar</span>
                </button>
            </div>

        </>
    );


}