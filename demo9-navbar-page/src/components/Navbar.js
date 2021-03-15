import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className='flex justify-between items-center h-16 font-mono shadow-sm relative text-black bg-white' role='navigation'>
            <Link to="/" className='pl-8'>Navbar</Link>
            <div className='px-4 cursor-pointer md:hidden'>
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </div>
            <div className="pr-8 md:block hidden">
                <Link to='/' className='p-4'>Home</Link>
                <Link to='/menu' className='p-4'>Menu</Link>
                <Link to='/about' className='p-4'>About</Link>
                <Link to='/contact' className='p-4'>Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;