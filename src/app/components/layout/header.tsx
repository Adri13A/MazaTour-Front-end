'use client';

import React, { useState, useRef, useEffect } from 'react';
import { LucideIcon } from 'lucide-react';
import {
    ChevronDown, BusFront, House, FerrisWheel, Telescope,
    Bus, CarTaxiFront, Bike, TreeDeciduous, TreePalm,
    Landmark, Utensils, VenetianMask, Book, Church
} from 'lucide-react';
import '@/styles/header.css';
import Weather from '../ui/weather';

const iconMap: Record<string, LucideIcon> = {
    Inicio: House,
    Transporte: BusFront,
    Atracciones: FerrisWheel,
    Explorar: Telescope,
};

const subIconMap: Record<string, LucideIcon> = {
    Autobuses: Bus,
    Taxis: CarTaxiFront,
    Bicicletas: Bike,
    Playas: TreePalm,
    Parques: TreeDeciduous,
    Museos: Landmark,
    Teatros: VenetianMask,
    Gastronomía: Utensils,
    Cultura: Church,
    Historia: Book
};

interface MenuItemProps {
    item: {
        name: string;
        dropdown?: boolean;
        items?: string[];
    };
    icon?: LucideIcon;
    active: string;
    hovered: string | null;
    setHovered: (name: string | null) => void;
    setActive: (name: string) => void;
    updateHighlight: (name: string) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
    item,
    icon: IconComponent,
    active,
    hovered,
    setHovered,
    setActive,
    updateHighlight }) => (
    <div key={item.name} className="relative dropdown dropdown-hover">
        <button
            id={item.name}
            onMouseEnter={() => {
                setHovered(item.name);
                updateHighlight(item.name);
            }}
            onMouseLeave={() => {
                setHovered(null);
                updateHighlight(active);
            }}
            onClick={() => {
                setActive(item.name);
                updateHighlight(item.name);
            }}
            className={`menu-button ${active === item.name || hovered === item.name ? 'menu-button-active' : 'menu-button-inactive'}`}
            aria-label={`Botón para ${item.name}`}
        >
            {IconComponent && <IconComponent size={18} className="mr-1 inline" />}
            {item.name}
            {item.dropdown && (
                <ChevronDown className={`inline w-4 h-4 ml-1 transition-transform duration-200 ${hovered === item.name || active === item.name ? 'rotate-180' : ''}`} />
            )}
        </button>

        {item.dropdown && (hovered === item.name || active === item.name) && (
            <ul className="dropdown-content dropdown-glass cursor-pointer">
                {item.items?.map(subItem => {
                    const SubIcon = subIconMap[subItem];
                    return (
                        <li
                            key={subItem}
                            className="dropdown-item"
                            onClick={() => {
                                setActive(item.name);
                                setHovered(null);
                            }}
                        >
                            <a className="flex items-center gap-2">
                                {SubIcon && <SubIcon size={16} />}
                                {subItem}
                            </a>
                        </li>
                    );
                })}
            </ul>
        )}
    </div>
);

export default function Header() {
    const [active, setActive] = useState('Inicio');
    const [hovered, setHovered] = useState<string | null>(null);
    const [highlight, setHighlightStyle] = useState({ left: 0, width: 0 });
    const menuRef = useRef<HTMLDivElement | null>(null);

    const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
    const [dockHighlight, setDockHighlight] = useState({ left: 0, width: 0 });
    const dockRef = useRef<HTMLDivElement | null>(null);

    const menuItems = [
        { name: 'Inicio' },
        {
            name: 'Transporte',
            dropdown: true,
            items: ['Autobuses', 'Taxis', 'Bicicletas'],
        },
        {
            name: 'Atracciones',
            dropdown: true,
            items: ['Playas', 'Parques', 'Museos', 'Teatros'],
        },
        {
            name: 'Explorar',
            dropdown: true,
            items: ['Gastronomía', 'Cultura', 'Historia'],
        },
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
        const item = document.getElementById(`label-${itemName}`);
        if (item && dockRef.current) {
            const { left, width } = item.getBoundingClientRect();
            const dockLeft = dockRef.current.getBoundingClientRect().left;
            setDockHighlight({ left: left - dockLeft, width });
        }
    };

    useEffect(() => {
        updateHighlight(active);
        updateDockHighlight(active);
        return () => {
            setHighlightStyle({ left: 0, width: 0 });
            setDockHighlight({ left: 0, width: 0 });
        };
    }, [active]);

    return (
        <>
            <nav className="navbar">
                {/* Logo */}
                <div className="navbar-logo">
                    <span>Maza</span>
                    <span className="text-black">Tour</span>
                </div>

                {/* Menú */}
                <div
                    ref={menuRef}
                    className="menu-container"
                    onMouseLeave={() => {
                        updateHighlight(active);
                    }}
                >
                    <div
                        className="menu-highlight"
                        style={{
                            left: `${highlight.left}px`,
                            width: `${highlight.width}px`,
                        }}
                    />
                    {menuItems.map(item => {
                        const IconComponent = iconMap[item.name];
                        return (
                            <MenuItem
                                key={item.name}
                                item={item}
                                icon={IconComponent}
                                active={active}
                                hovered={hovered}
                                setHovered={setHovered}
                                setActive={setActive}
                                updateHighlight={updateHighlight}
                            />
                        );
                    })}
                </div>

                {/* Clima */}
                <Weather />
            </nav>

            {/* Dock Móvil */}
            <div
                ref={dockRef}
                className="dock mobile-menu"
                onTouchStart={() => {
                    updateDockHighlight(active);
                    setHovered(null);
                }}
            >
                <div
                    className="menu-highlight"
                    style={{
                        left: `${dockHighlight.left}px`,
                        width: `${dockHighlight.width}px`,
                    }}
                />
                {menuItems.map(item => {
                    const IconComponent = iconMap[item.name];
                    const isActive = active === item.name;
                    const isDropdownOpen = mobileDropdown === item.name;

                    return (
                        <div key={`mobile-${item.name}`} className="relative dropdown dropdown-top dropdown-end">
                            <button
                                id={`mobile-${item.name}`}
                                onTouchStart={() => {
                                    updateDockHighlight(item.name);
                                    setActive(item.name);
                                    if (item.dropdown) {
                                        setMobileDropdown(prev => prev === item.name ? null : item.name);
                                    } else {
                                        setMobileDropdown(null);
                                    }
                                }}
                                onClick={() => setActive(item.name)}
                                className={`menu-button w-full flex flex-col items-center ${isActive ? 'menu-button-active' : 'menu-button-inactive'}`}
                                aria-label={`Botón móvil para ${item.name}`}
                            >
                                {IconComponent && <IconComponent size={24} className="mr-1 inline" />}
                                <span id={`label-${item.name}`}>{item.name}</span>
                            </button>

                            {item.dropdown && isDropdownOpen && (
                                <ul className="dropdown-content dropdown-glass cursor-pointer">
                                    {item.items?.map(subItem => {
                                        const SubIcon = subIconMap[subItem];
                                        return (
                                            <li
                                                key={subItem}
                                                className="dropdown-item"
                                                onClick={() => {
                                                    setActive(item.name);
                                                    setMobileDropdown(null);
                                                }}
                                            >
                                                <a className="flex items-center gap-2">
                                                    {SubIcon && <SubIcon size={16} />}
                                                    {subItem}
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </div>
                    );
                })}
            </div>
        </>
    );
}
