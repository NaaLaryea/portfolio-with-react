import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="flex justify-between py-1 px-3" style={{background: '#608770'}}>
            <div className="logo">
                <h2 className=" text-2xl lg:text-4xl">
                    <Link to="/">NaaLaryea<span className="w-3 h-3 bg-blue-100 inline-block rounded-full"></span></Link>
                </h2>
            </div>

            <nav>
                <ul className="flex">
                    <li className="ml-5 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 rounded-full">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 rounded-full">
                        <Link to="/about">About</Link>
                    </li>
                    <li className=" bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 rounded-full">
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li className="mr-5 bg-green-300 hover:bg-green-500 text-gray-800 font-bold py-2 px-2 rounded-full">
                        <Link to="/hire">Hire</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
