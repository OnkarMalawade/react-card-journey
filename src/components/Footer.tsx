import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            Shravni Computer Educations
                        </h3>
                        <p className="text-gray-300">
                            Empowering learners worldwide with premium quality
                            online education.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    to="/"
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/courses"
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    Courses
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            Contact Info
                        </h3>
                        <address className="text-gray-300 not-italic">
                            <p className="text-gray-300">
                                Mahalaxmi Plaza, Pradyangan Trust,
                                <br />
                                Mumbai - Goa Hwy, opp. S.T. Stand, near State
                                Bank,
                                <br />
                                Kankavli, Talere, Maharashtra 416801
                            </p>
                            <p className="mt-2">Phone: +91 94059 28865</p>
                            <p>Email: shravnicomputers@gmail.com</p>
                        </address>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
                    <p>
                        &copy; {new Date().getFullYear()} Shravni computer
                        Educations. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
