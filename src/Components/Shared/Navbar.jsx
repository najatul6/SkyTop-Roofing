import { useState } from "react";
import Logo from "./Logo";
import { NavLink } from "react-router";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const navLinkClass = ({ isActive }) =>
        isActive
            ? "relative text-blue-600 font-semibold after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:bg-blue-600 after:rounded-full after:transition-all after:duration-300 after:w-full"
            : "relative text-gray-700 hover:text-blue-600 after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:bg-blue-600 after:rounded-full after:transition-all after:duration-300 after:w-0 hover:after:w-full";

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <Logo />

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 text-base">
                    <li className="animate__animated animate__bounceInDown" style={{ animationDelay: '0.2s' }}>
                        <NavLink to="/" className={navLinkClass}>Home</NavLink>
                    </li>
                    <li className="animate__animated animate__bounceInDown" style={{ animationDelay: '0.4s' }}>
                        <NavLink to="/about" className={navLinkClass}>About</NavLink>
                    </li>
                    <li className="animate__animated animate__bounceInDown" style={{ animationDelay: '0.6s' }}>
                        <NavLink to="/services" className={navLinkClass}>Services</NavLink>
                    </li>
                    <li className="animate__animated animate__bounceInDown" style={{ animationDelay: '0.8s' }}>
                        <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
                    </li>
                </ul>

                {/* Hamburger Icon */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <svg
                            className="w-6 h-6 text-gray-800"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="md:hidden px-4 pb-4 space-y-2 text-base">
                <li className="animate__animated animate__bounceInDown" style={{ animationDelay: '0.2s' }}>
                  <NavLink to="/" className={navLinkClass} onClick={() => setIsOpen(false)}>Home</NavLink>
                </li>
                <li className="animate__animated animate__bounceInDown" style={{ animationDelay: '0.4s' }}>
                  <NavLink to="/about" className={navLinkClass} onClick={() => setIsOpen(false)}>About</NavLink>
                </li>
                <li className="animate__animated animate__bounceInDown" style={{ animationDelay: '0.6s' }}>
                  <NavLink to="/services" className={navLinkClass} onClick={() => setIsOpen(false)}>Services</NavLink>
                </li>
                <li className="animate__animated animate__bounceInDown" style={{ animationDelay: '0.8s' }}>
                  <NavLink to="/contact" className={navLinkClass} onClick={() => setIsOpen(false)}>Contact</NavLink>
                </li>
              </ul>
              
            )}

        </nav>
    )
}

export default Navbar