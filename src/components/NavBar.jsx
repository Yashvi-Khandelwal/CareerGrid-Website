import { NavLink } from "react-router-dom"
import "./NavBar.css"
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

export const NavBar = ()=>{
      const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
    return(
        <nav className="navBar-container">
            <div className="app-title">
                CareerGrid
            </div>

              <button
        className="hamburger"
        onClick={toggleDrawer}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <AiOutlineClose size={30} /> : <GiHamburgerMenu size={30} />}
      </button>

            <div className={`nav-items ${isOpen ? "open" : ""}`}>
                <NavLink to="/"   className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink>
                <NavLink to="/about"   className={({ isActive }) => isActive ? "active-link" : ""}>About</NavLink>
                <NavLink to="/templates" className={({ isActive }) => isActive ? "active-link" : ""}>Templates</NavLink>
                <NavLink to="/companies" className={({ isActive }) => isActive ? "active-link" : ""}>Companies</NavLink>
                <NavLink to="/remote" className={({ isActive }) => isActive ? "active-link" : ""}>Remote</NavLink>
            </div>

            {isOpen && <div className="overlay" onClick={toggleDrawer}></div>}
        </nav>
    )
}