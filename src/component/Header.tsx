

"use client";

 import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi'; 
import "../styles/header.css";
import Link from 'next/link';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">Portfolio</div>
            <span className="menu-toggle" onClick={toggleMenu}>
                <FiMenu /> {/* Menu icon */}
            </span>
            <ul className={isMenuOpen ? 'active' : ''}>
            <li>
                 <Link href={"/"}>HOME</Link>
             </li>
             <li>
            <Link href="/about">ABOUT</Link>
             </li>
             <li>
            <Link href="/projects">PROJECTS</Link>
             </li>
            <li>
            <Link href="/contact">CONTACT</Link>
            </li>
            </ul>
            
        </nav>
    );
};

export default Navbar;
