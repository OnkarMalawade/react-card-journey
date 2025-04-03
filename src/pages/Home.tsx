import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CourseCard from "@/components/CourseCard";
import SectionHeader from "@/components/SectionHeader";

const featuredCourses = [
    {
        id: "1",
        title: "MS-CIT",
        instructor: "MKCL Trainers",
        description:
            "MS-CIT, launched in 2001 by MKCL, is Maharashtra's leading IT literacy course. In the digital age, where knowledge is created, stored, and accessed digitally, MS-CIT aims to bridge the digital divide through IT awareness and functionality.",
        image: "https://www.mkcl.org/images/courses/logo/ms-cit.webp",
        duration: "9 weeks / 120 hrs",
        level: "Beginner" as const,
        category: "Student Friendly",
        enrollLink: "https://www.mkcl.org/#/courses/ms-cit",
    },
    {
        id: "2",
        title: "Klic Advanced Excel",
        instructor: "MKCL Trainers",
        description:
            "Excel skills are as important as the subject knowledge. Those who know Excel can find a better paying job. An Excel Expert collects, edits, analyses data, creates data bases and reports. The conclusions made by the data expert are helpful for organizations to forecast the business speculations.",
        image: "https://klic.mkcl.org/user/pages/images/courses/KLiC-Advanced-Excel-2023.jpg",
        duration: "12 weeks / 120 hrs",
        level: "Intermediate" as const,
        category: "Accounting",
        enrollLink: "https://klic.mkcl.org/accounting/advanced-excel",
    },
    {
        id: "3",
        title: "KLiC Tally Prime with GST",
        instructor: "MKCL Trainers",
        description:
            "Enroll in KLiC Tally Prime with GST and learn everything about Accounting! You will learn to make accurate and quick reports in no time! Become proficient in GST, voucher, currency, inventories and excise reports. The course also offers business management and data management skills.",
        image: "https://klic.mkcl.org/user/pages/images/courses/KLiC-Tally-Prime-with-GST-2023.jpg",
        duration: "12 weeks / 120 hrs",
        level: "Advanced" as const,
        category: "Accounting",
        enrollLink: "https://klic.mkcl.org/accounting/tally-prime-with-gst",
    },
];

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative bg-blue-600 text-white">
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center"></div>
                <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Unlock Your Potential with MKCL & Us
                        </h1>
                        <p className="text-xl mb-8">
                            Access over 1,000 high-quality courses taught by
                            industry experts and transform your career.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button asChild size="lg">
                                <Link to="/courses">Explore Courses</Link>
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="bg-white/10 hover:bg-white/20"
                            >
                                Learn More
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Courses Section */}
            <section className="container mx-auto px-4 py-16 md:py-24">
                <SectionHeader
                    title="Featured Courses"
                    subtitle="Expand your knowledge with our most popular courses"
                    centered
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredCourses.map((course) => (
                        <CourseCard key={course.id} {...course} />
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <Button asChild variant="outline" size="lg">
                        <Link to="/courses" className="flex items-center gap-2">
                            View All Courses <ArrowRight size={16} />
                        </Link>
                    </Button>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-6">
                            <div className="text-4xl font-bold text-blue-600 mb-2">
                                10,000+
                            </div>
                            <p className="text-gray-600">Students Counts</p>
                        </div>
                        <div className="p-6">
                            <div className="text-4xl font-bold text-blue-600 mb-2">
                                200+
                            </div>
                            <p className="text-gray-600">Expert Instructors</p>
                        </div>
                        <div className="p-6">
                            <div className="text-4xl font-bold text-blue-600 mb-2">
                                1,000+
                            </div>
                            <p className="text-gray-600">Courses</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-blue-600 py-16 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Start Learning?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Join thousands of students who are already learning and
                        growing with MKCL.
                    </p>
                    <Button asChild size="lg" variant="secondary">
                        <Link to="/courses">Get Started Today</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default Home;
