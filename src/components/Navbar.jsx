import React from "react"
import { NavLink } from 'react-router'

const Navbar = () => {
    return (
        <header className="w-full bg-gray-800 text-white p-4">
            <nav className="flex items-center justify-center flex-col sm:flex-row sm:space-x-8">
                <NavLink to="/meal/breakfast" className={({isActive}) => isActive ? 'text-yellow-500' : 'text-white hover:text-yellow-300'}>
                    Breakfast
                </NavLink>
                <NavLink to="/meal/lunch" className={({isActive}) => isActive ? 'text-yellow-500' : 'text-white hover:text-yellow-300'}>
                    Lunch
                </NavLink>
                <NavLink to="/meal/dinner" className={({isActive}) => isActive ? 'text-yellow-500' : 'text-white hover:text-yellow-300'}>
                    Dinner
                </NavLink>
            </nav>
        </header>
    )
}

export default Navbar