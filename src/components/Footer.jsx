import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Button from "./Button"

const Footer = () => {
    return (
        <footer className="text-white py-2 shadow-lg font-shantell border-t-2 border-pink-500">
            <div className="container mx-auto px-20 lg:px-20 py-4 flex flex-col gap-10 md:flex-row justify-between border-t border-slate-800">
                <div className="flex">
                    <p className="font-bold text-center text-2xl">
                        Foodie<span className="text-pink-500 text-xl">Fare</span>
                    </p>
                </div>

                <div className="">
                    <p>QUICK LINKS</p>

                    <div className="flex flex-col text-start mb-4 md:mb-0">
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-pink-500 hover:text-md'
                        >
                            Home
                        </a>
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-pink-500 hover:text-md'
                        >
                            About
                        </a>
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-pink-500 hover:text-md'
                        >
                            Services
                        </a>
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-pink-500 hover:text-md'
                        >
                            Contact
                        </a>
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-pink-500 hover:text-md'
                        >
                            Chiefs
                        </a>
                    </div>
                </div>

                <div>
                    <p>LEGAL</p>
                    <div className='flex flex-col text-start mb-4 md:mb-0 text-[14px]'>
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-pink-500 hover:text-md'
                        >
                            Terms and Conditions
                        </a>
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-pink-500 hover:text-md'
                        >
                            License Agreement
                        </a>
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-pink-500 hover:text-md'
                        >
                            Privacy Policy
                        </a>
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-pink-500 hover:text-md'
                        >
                            Copyright Information
                        </a>
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-pink-500 hover:text-md'
                        >
                            Cookies Policy
                        </a>
                    </div>
                </div>

                <div className="flex flex-col">
                    <p>SOCIAL MEDIA</p>
                    <div className="flex mt-4 gap-3">
                        <a
                            href='#'
                            className='bg-blue-600 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110'
                        >
                            <FaFacebook size={18} />
                        </a>

                        <a
                            href='#'
                            className='bg-pink-600 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110'
                        >
                            <FaInstagram size={18} />
                        </a>
                        <a
                            href='#'
                            className='bg-blue-600 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110'
                        >
                            <FaTwitter size={18} />
                        </a>
                        <a
                            href='#'
                            className='bg-red-600 p-1.5 rounded-sm text-white hover:scale-110'
                        >
                            <FaYoutube size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer