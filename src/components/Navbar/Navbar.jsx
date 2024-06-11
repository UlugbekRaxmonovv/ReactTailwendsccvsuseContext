import React, { useState } from 'react';

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    return (
        <header className="bg-slate-400 shadow-xl py-5">
            <nav className="container mx-auto flex justify-between items-center px-4">
                <h1 className="text-green-500 font-montserrat text-xl">Logo</h1>
                <ul className={`xs:flex gap-5 font-montserrat ${menu ? 'block' : 'hidden'} xs:block`}>
                    <li>
                        <a href="#home" className="text-purple hover:text-green">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="text-purple hover:text-green">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#services" className="text-purple hover:text-green">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="text-purple hover:text-green">
                            Contact
                        </a>
                    </li>
                </ul>
                <button 
                    className="xs:hidden block text-green-500" 
                    onClick={() => setMenu(!menu)}
                    aria-expanded={menu}
                    aria-controls="menu"
                >
                    Menu
                </button>
            </nav>
        </header>
    );
}

export default Navbar;
