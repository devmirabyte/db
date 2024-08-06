import React from 'react'
import logo from '../assets/db-logo.png'

function Navbar() {
    return (
        <>
            <nav className="bg-[#003049] shadow shadow-gray-300 w-100 px-8 md:px-auto">
                <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
                    <div className="text-red-500 md:order-1">
                        <img className='w-[145px]' src={logo} />
                    </div>
                    <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
                        <ul className="flex font-semibold justify-between">
                            <li className="md:px-4 md:py-2 text-red-500"><a href="#hero">Home</a></li>
                            <li className="md:px-4 md:py-2 hover:text-red-500"><a href="#features">Features</a></li>
                            <li className="md:px-4 md:py-2 hover:text-red-500"><a href="#about">About</a></li>
                            <li className="md:px-4 md:py-2 hover:text-red-4500"><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="order-2 md:order-3">
                        <button className="px-4 py-2 bg-red-600 hover:bg-red-900 text-gray-50 rounded-xl flex items-center gap-2">
                            <span>Login</span>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar