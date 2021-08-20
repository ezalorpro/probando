import React from 'react'
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div>LOGO</div>
            <ul className="navbar-list">
                <li className="navbar-list__item">Link 1</li>
                <li className="navbar-list__item">Link 2</li>
                <li className="navbar-list__item">Link 3</li>
                <li className="navbar-list__item">Link 4</li>
            </ul>
        </nav>
    )
}

export default Navbar
