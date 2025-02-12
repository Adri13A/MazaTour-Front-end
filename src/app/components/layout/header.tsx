'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';
//import dynamic from 'next/dynamic'
//const Search = dynamic(() => import('./Search'))

export default function Header(){

    //const[scrolled, setScrolled] = useState(false);
  

    const[isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => setIsOpen(false),[pathname]);

    useEffect(() =>{
        const handleScroll = () => setIsOpen(false);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);

    }, []);


    return (

        <nav className="bg-white/90 backdrop-blur-sm border-b shadow-sm fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px8">
                <div></div>
            </div>
        </nav>

       /* <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><a>Homepage</a></li>
                    <li><a>Portfolio</a></li>
                    <li><a>About</a></li>
                </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
                </button>
                <button className="btn btn-ghost btn-circle">
                <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
                    <span className="badge badge-xs badge-primary indicator-item"></span>
                </div>
                </button>
            </div>
        </div>*/
        /*----------------*/
        /*
        <nav className={`fixed m-2  w-[calc(100%-16px)] transition-all duration-300 ${scrolled ? 'bg-black bg-opacity-80' : 'bg-white bg-opacity-5 backdrop-blur-md '} z-50 rounded-2xl`}>
        <div className="container mx-auto flex items-center justify-between p-3">
            <Link href="/inicio" className="text-2xl font-bold text-white">
                <span className="text-green-500">Ixtl</span>Mazatlán
            </Link>
            <button className="lg:hidden text-white text-2xl" aria-label='Toggle menu' onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
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
                    <button className="p-2 hover:bg-white hover:bg-opacity-10 rounded-md" onClick={toggleMenu}>Categorías</button>
                    <ul className={`absolute mt-2 bg-black bg-opacity-80 p-2 rounded-md ${isOpen ? 'block' : 'hidden' }`} >
                        <li><Link href="#" className="block px-4 py-2 hover:bg-white hover:bg-opacity-10">Galería</Link></li>
                        <li><Link href="/busqueda" className="block px-4 py-2 hover:bg-white hover:bg-opacity-10">Búsqueda (Beta)</Link></li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>*/

        /*<div className={`navbar fixed m-2 w-[calc(100%-16px)] transition-all duration-300 ${scrolled ? 'bg-black bg-opacity-80' : 'bg-white bg-opacity-5 backdrop-blur-md '} z-50 rounded-2xl`}>
            <div className='navbar-start mx-auto flex items-center justify-between p-1'>
                <Link href="/inicio" className="text-2xl font-bold text-white">
                    <span className="text-green-500">Ixtl</span>Mazatlán
                </Link>

                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost">
                   <FaBars/>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><a>Homepage</a></li>
                    <li><a>Portfolio</a></li>
                    <li><a>About</a></li>
                </ul>
                </div>
            </div>*/

        
    );
}