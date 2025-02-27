import React from "react"
import { NavLink } from 'react-router'

const Navbar = () => {
    return (
        <header>
            <nav>
                <NavLink to="/meal/breakfast" className={({isActive}) => isActive ? 'active' : ''}>
                    Breakfast
                </NavLink>
                <NavLink to="/meal/lunch" className={({isActive}) => isActive ? 'active' : ''}>
                    Lunch
                </NavLink>
                <NavLink to="/meal/dinner" className={({isActive}) => isActive ? 'active' : ''}>
                    Dinner
                </NavLink>
            </nav>
        </header>
    )
}

export default Navbar