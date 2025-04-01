import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CourseCard from "@/components/CourseCard";
import SectionHeader from "@/components/SectionHeader";

const featuredCourses = [
    {
        id: "1",
        title: "Web Development Fundamentals",
        instructor: "MKCL Trainers",
        description:
            "Learn the basics of HTML, CSS, and JavaScript to build responsive websites from scratch.",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",

        duration: "8 weeks",
        level: "Beginner" as const,
        enrollLink: "",
    },
    {
        id: "2",
        title: "Data Science Essentials",
        instructor: "MKCL Trainers",
        description:
            "Master the fundamentals of data analysis, visualization, and machine learning algorithms.",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800",

        duration: "10 weeks",
        level: "Intermediate" as const,
        enrollLink: "",
    },
    {
        id: "3",
        title: "Mobile App Development",
        instructor: "MKCL Trainers",
        description:
            "Build cross-platform mobile applications using React Native and modern JavaScript frameworks.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",

        duration: "12 weeks",
        level: "Advanced" as const,
        enrollLink: "",
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
