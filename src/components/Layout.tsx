import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Footer from "./Footer";

const Layout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <header className="sticky top-0 z-50 bg-white shadow-sm">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <NavLink to="/" className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-orange-600">
                            Shravni Computer Educations
                        </span>
                    </NavLink>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `text-base font-medium transition-colors hover:text-orange-600 ${
                                    isActive
                                        ? "text-orange-600"
                                        : "text-gray-700"
                                }`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/courses"
                            className={({ isActive }) =>
                                `text-base font-medium transition-colors hover:text-orange-600 ${
                                    isActive
                                        ? "text-orange-600"
                                        : "text-gray-700"
                                }`
                            }
                        >
                            Courses
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `text-base font-medium transition-colors hover:text-orange-600 ${
                                    isActive
                                        ? "text-orange-600"
                                        : "text-gray-700"
                                }`
                            }
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `text-base font-medium transition-colors hover:text-orange-600 ${
                                    isActive
                                        ? "text-orange-600"
                                        : "text-gray-700"
                                }`
                            }
                        >
                            Contact
                        </NavLink>
                    </nav>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden text-gray-500 focus:outline-none"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white py-2">
                        <nav className="flex flex-col space-y-3 px-4 pb-3">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `px-3 py-2 rounded-md text-base font-medium transition-colors hover:bg-blue-50 hover:text-orange-600 ${
                                        isActive
                                            ? "bg-blue-50 text-orange-600"
                                            : "text-gray-700"
                                    }`
                                }
                                onClick={closeMenu}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/courses"
                                className={({ isActive }) =>
                                    `px-3 py-2 rounded-md text-base font-medium transition-colors hover:bg-blue-50 hover:text-orange-600 ${
                                        isActive
                                            ? "bg-blue-50 text-orange-600"
                                            : "text-gray-700"
                                    }`
                                }
                                onClick={closeMenu}
                            >
                                Courses
                            </NavLink>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `px-3 py-2 rounded-md text-base font-medium transition-colors hover:bg-blue-50 hover:text-orange-600 ${
                                        isActive
                                            ? "bg-blue-50 text-orange-600"
                                            : "text-gray-700"
                                    }`
                                }
                                onClick={closeMenu}
                            >
                                About
                            </NavLink>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `px-3 py-2 rounded-md text-base font-medium transition-colors hover:bg-blue-50 hover:text-orange-600 ${
                                        isActive
                                            ? "bg-blue-50 text-orange-600"
                                            : "text-gray-700"
                                    }`
                                }
                                onClick={closeMenu}
                            >
                                Contact
                            </NavLink>
                        </nav>
                    </div>
                )}
            </header>

            <main className="flex-grow">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default Layout;
