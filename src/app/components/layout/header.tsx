'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars } from 'react-icons/fa';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`fixed top-0 w-full transition-all duration-300 ${scrolled ? 'bg-black bg-opacity-80' : 'bg-black bg-opacity-40'} backdrop-blur-md z-50`}>
            <div className="container mx-auto flex items-center justify-between p-4">
                <Link href="/inicio" className="text-2xl font-bold text-white">
                    <span className="text-green-500">Ixtl</span>Mazatlán
                </Link>
                <button className="lg:hidden text-white text-2xl" onClick={toggleMenu}>
                    <FaBars />
                </button>
                <ul className={`lg:flex lg:items-center space-y-4 lg:space-y-0 lg:space-x-6 text-white ${isOpen ? 'block' : 'hidden'} lg:flex`}> 
                    {[
                        { href: '/inicio', label: 'Inicio' },
                        { href: '/contacto', label: 'Contacto' },
                        { href: '/acerca-de', label: 'Acerca de' },
                        { href: '/explorar', label: 'Explorar' }
                    ].map(({ href, label }) => (
                        <li key={href}>
                            <Link href={href} className={`p-2 ${pathname === href ? 'border-b-2 border-green-500' : ''} hover:bg-white hover:bg-opacity-10 rounded-md`}>{label}</Link>
                        </li>
                    ))}
                    <li className="relative">
                        <button className="p-2 hover:bg-white hover:bg-opacity-10 rounded-md">Categorías</button>
                        <ul className="absolute mt-2 bg-black bg-opacity-80 p-2 rounded-md hidden group-hover:block">
                            <li><Link href="#" className="block px-4 py-2 hover:bg-white hover:bg-opacity-10">Galería</Link></li>
                            <li><Link href="/busqueda" className="block px-4 py-2 hover:bg-white hover:bg-opacity-10">Búsqueda (Beta)</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
