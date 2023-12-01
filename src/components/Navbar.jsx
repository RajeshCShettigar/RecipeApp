import React, { useState } from 'react'
import Logo from '../images/logo.png'
import { HiMenuAlt3 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import Button from './Button'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <header className='w-full fixed z-10 bg-slate-800 font-shantell border-b-2 border-pink-500'>
            <nav className='flex w-full py-2 md:py-3 px-4 md:px-20 items-center justify-between'>
                <a href="/" className='flex items-center justify-center text-white text-2xl cursor-pointer font-shantell'>
                    Foodie<span className='font-semibold text-pink-600'>Fare</span>
                </a>
                <ul className='hidden md:flex text-white gap-6'>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/#recipes">Explore</a>
                    </li>
                    <li>
                        <a href="#">Favorites</a>
                    </li>
                </ul>

                <button className='block md:hidden text-white text-xl'
                    onClick={() => setOpen(prev => !prev)}>
                    {open ? <AiOutlineClose /> : <HiMenuAlt3 />}
                </button>
            </nav>
            <div className={`${open ? "flex" : "hidden"} bg-slate-800 flex-col w-full px-4 pt-4 pb-4 text-white gap-6 text-[14px]`}>
                <a href="/"  className="hover:text-pink-500">Home</a>
                <a href="/#recipes" className="hover:text-pink-500">Recipes</a>
                <a href="/" className="hover:text-pink-500">Favorites</a>
            </div>
        </header>
    )
}

export default Navbar