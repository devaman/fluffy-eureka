import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = (props) => {
    return (
        <nav className="flex z-20 fixed left-0 top-0 right-0 justify-around h-10 items-center px-20">
            <Link to="/" className="brand font-bold text-2xl">ShowStar</Link>
            <div>
                <Link to="/fav">Favorites</Link>
            </div>
        </nav>
    )
}
export default Navbar;