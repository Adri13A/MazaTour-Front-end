'use client';

import React, { useState, useRef, useEffect } from 'react';
import { LucideIcon } from 'lucide-react';
import {
    ChevronDown, BusFront, House, FerrisWheel, Telescope,
    Bus, CarTaxiFront, Bike, TreeDeciduous, TreePalm,
    Landmark, Utensils, VenetianMask, Book, Church
} from 'lucide-react';
import '@/styles/header.css';
import Weather from '../ui/weather/weather';
import { motion, Variants } from 'framer-motion';

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


// Animations
const navVariants: Variants = {
    hidden: { y: -50, opacity: 0 },
    show:  { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 20 } }
  };
  const containerVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, when: 'beforeChildren' } }
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    show:  { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };
  const dropdownVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    show:  { opacity: 1, y: 0, transition: { duration: 0.2 } }
  };
  const dockVariants: Variants = {
    hidden: { y: 80, opacity: 0 },
    show:  { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 20 } }
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
    <motion.div key={item.name} className="relative dropdown dropdown-hover" variants={itemVariants}>
        <motion.button
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
            whileHover={{ scale: 1.1 }}
        >
            {IconComponent && <IconComponent size={18} className="mr-1 inline" />}
            {item.name}
            {item.dropdown && (
                <ChevronDown className={`inline w-4 h-4 ml-1 transition-transform duration-200 ${hovered === item.name || active === item.name ? 'rotate-180' : ''}`} />
            )}
        </motion.button>

        {item.dropdown && (hovered === item.name || active === item.name) && (
            <motion.ul 
            className="dropdown-content dropdown-glass cursor-pointer"
            initial="hidden" 
            animate="show" 
            variants={dropdownVariants}>

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
            </motion.ul>
        )}
    </motion.div>
);

export default function Header() {
    const [active, setActive] = useState('Inicio');
    const [hovered, setHovered] = useState<string | null>(null);
    const [highlight, setHighlightStyle] = useState({ left: 0, width: 0 });
    const menuRef = useRef<HTMLDivElement | null>(null);

     // Nuevos estados para controlar el dock móvil
     const [isDockVisible, setIsDockVisible] = useState(true);
     const lastScrollY = useRef(0);
     const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
     const dockRef = useRef<HTMLDivElement | null>(null);
     const [dockHighlight, setDockHighlight] = useState({ left: 0, width: 0 });



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

    // Efecto para detectar dirección del scroll
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollDifference = currentScrollY - lastScrollY.current;

            // Umbral de 5px para evitar activaciones múltiples
            if (Math.abs(scrollDifference) > 5) {
                if (scrollDifference > 0) {
                    // Scroll hacia abajo
                    setIsDockVisible(false);
                } else {
                    // Scroll hacia arriba
                    setIsDockVisible(true);
                }
                lastScrollY.current = currentScrollY;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.nav 
                className="navbar"
                variants={navVariants}
                initial="hidden"
                animate="show"
                >
                {/* Logo */}
                <motion.div className="navbar-logo" variants={itemVariants}>
                    <span>Maza</span>
                    <span className="text-black">Tour</span>
                </motion.div>

                {/* Menú */}
                <motion.div
                    ref={menuRef}
                    className="menu-container"
                    onMouseLeave={() => {
                        updateHighlight(active);
                    }}
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    <motion.div
                        className="menu-highlight"
                        style={{
                            left: `${highlight.left}px`,
                            width: `${highlight.width}px`,
                        }}
                        variants={itemVariants}
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
                </motion.div>

                {/* Clima */}
               <motion.div
               variants={itemVariants}>
                    <Weather />
               </motion.div>

            </motion.nav>

           {/* Dock Móvil Modificado */}
            <motion.div
                ref={dockRef}
                className="dock mobile-menu"
                variants={dockVariants}
                initial="show"
                animate={isDockVisible ? "show" : "hidden"}
                transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                onTouchStart={() => {
                    updateDockHighlight(active);
                    setHovered(null);
                }}
            >
                <motion.div
                    className="menu-highlight"
                    style={{
                        left: `${dockHighlight.left}px`,
                        width: `${dockHighlight.width}px`,
                    }}
                    variants={itemVariants}
                />
                {menuItems.map(item => {
                    const IconComponent = iconMap[item.name];
                    const isActive = active === item.name;
                    const isDropdownOpen = mobileDropdown === item.name;

                    return (
                        <motion.div 
                            key={`mobile-${item.name}`} 
                            className="relative dropdown dropdown-top dropdown-end"
                            variants={containerVariants}
                        >
                            <motion.button
                                id={`mobile-${item.name}`}

                                onClick={() => {
                                    updateDockHighlight(item.name);
                                    setActive(item.name);
                                    if (item.dropdown) {
                                        setMobileDropdown(prev => prev === item.name ? null : item.name);
                                    } else {
                                        setMobileDropdown(null);
                                    }
                                }}
                                className={`menu-button w-full flex flex-col items-center ${isActive ? 'menu-button-active' : 'menu-button-inactive'}`}
                                aria-label={`Botón móvil para ${item.name}`}
                                whileHover={{ scale:1.1 }}
                            >
                                {IconComponent && <IconComponent size={24} className="mr-1 inline" />}
                                <span id={`label-${item.name}`}>{item.name}</span>
                            </motion.button>

                            {item.dropdown && isDropdownOpen && (
                                <motion.ul 
                                className="dropdown-content dropdown-glass cursor-pointer"
                                variants={dropdownVariants}
                                initial="hidden"
                                animate="show">
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
                                                <motion.a className="flex items-center gap-2">
                                                    {SubIcon && <SubIcon size={16} />}
                                                    {subItem}
                                                </motion.a>
                                            </li>
                                        );
                                    })}
                                </motion.ul>
                            )}
                        </motion.div>
                    );
                })}
            </motion.div>
        </>
    );
}