import SectionHeader from "@/components/SectionHeader";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-blue-600 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Contact Us
                        </h1>
                        <p className="text-xl">
                            Have questions or need help? We're here for you.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
                    <div>
                        <SectionHeader title="Get In Touch" />
                        <div className="space-y-6">
                            <p className="text-gray-600">
                                Whether you have a question about our courses,
                                pricing, or anything else, our team is ready to
                                answer all your questions.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                                        <MapPin
                                            className="text-blue-600"
                                            size={20}
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium">
                                            Address
                                        </h3>
                                        <p className="text-gray-600">
                                            Mahalaxmi Plaza, Pradyangan Trust,
                                            <br />
                                            Mumbai - Goa Hwy, opp. S.T. Stand,
                                            near State Bank,
                                            <br />
                                            Kankavli, Talere, Maharashtra 416801
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                                        <Phone
                                            className="text-blue-600"
                                            size={20}
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium">
                                            Phone
                                        </h3>
                                        <p className="text-gray-600">
                                            +91 94059 28865
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                                        <Mail
                                            className="text-blue-600"
                                            size={20}
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium">
                                            Email
                                        </h3>
                                        <p className="text-gray-600">
                                            shravnicomputers@gmail.com
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                                        <Clock
                                            className="text-blue-600"
                                            size={20}
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium">
                                            Hours
                                        </h3>
                                        <p className="text-gray-600">
                                            Monday - Friday: 9:00 AM - 6:00 PM
                                            <br />
                                            Saturday: 10:00 AM - 4:00 PM
                                            <br />
                                            Sunday: 9:00 AM - 6:00 PM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        title="Find Us"
                        subtitle="Visit our campus or reach out online - we're here to help"
                        centered
                    />
                    <div className="aspect-[16/9] w-full h-96 mt-8 rounded-lg overflow-hidden shadow-md">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d437754.1090912375!2d73.38977809455992!3d16.527533136603836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc03aa9b17d0f2f%3A0x6fd14dbfaebcd7d!2sSHRAVNI%20COMPUTER%20EDUCATIONS%2C%20TALERE.!5e0!3m2!1sen!2sin!4v1743411780001!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="EduLearn Location"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
