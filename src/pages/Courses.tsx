import { useState } from "react";
import CourseCard from "@/components/CourseCard";
import SectionHeader from "@/components/SectionHeader";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

// Sample course data
const allCourses = [
    {
        id: "1",
        title: "MS-CIT",
        instructor: "MKCL Trainers",
        description:
            "MS-CIT, launched in 2001 by MKCL, is Maharashtra's leading IT literacy course. In the digital age, where knowledge is created, stored, and accessed digitally, MS-CIT aims to bridge the digital divide through IT awareness and functionality.",
        image: "https://www.mkcl.org/images/courses/logo/ms-cit.webp",
        duration: "9 weeks",
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
        duration: "12 weeks",
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
        duration: "12 weeks",
        level: "Advanced" as const,
        category: "Accounting",
        enrollLink: "https://klic.mkcl.org/accounting/tally-prime-with-gst",
    },
    {
        id: "4",
        title: "Klic Google Workspace Expert",
        instructor: "MKCL Trainers",
        description:
            "The KLiC Google Workspace Expert offers a comprehensive and in-depth exploration of the entire Google Workspace ecosystem. Designed to empower learners with a diverse skill set, this course covers a wide range of tools and applications that are integral to modern digital productivity and collaboration.",
        image: "https://klic.mkcl.org/user/pages/images/courses/KLiC-Google-Workspace-Expert-2024.jpg",
        duration: "6 weeks",
        level: "Beginner" as const,
        category: "Marketing",
        enrollLink: "https://klic.mkcl.org/back-office/google-workspace-expert",
    },
    {
        id: "5",
        title: "Klic Data Entry & Data Management Course",
        instructor: "MKCL Trainers",
        description:
            "The duties of a data entry operator include gathering and entering data into databases and maintaining accurate records of valuable company data. The ideal applicant has essential data entry skills, like fast typing with an eye for details and familiarity with spreadsheets and online forms. Data entry operator works with Data Team and Data Manager.",
        image: "https://klic.mkcl.org/user/pages/images/courses/KLiC-Google-Workspace-Expert-2024.jpg",
        duration: "8 weeks",
        level: "Advanced" as const,
        category: "Data Management",
        enrollLink:
            "https://klic.mkcl.org/accounting/data-entry-and-data-management",
    },
    {
        id: "6",
        title: "Klic Social Media Marketing",
        instructor: "MKCL Trainers",
        description:
            "In this Social Media Marketing course, you’ll explore key concepts and the importance of digital marketing in today’s business landscape. You’ll learn to identify various channels, compare traditional and digital methods, and understand SEO's role in visibility.",
        image: "https://klic.mkcl.org/user/pages/images/courses/KLiC-Social-Media%20Marketing-2024.png",
        duration: "4 weeks",
        level: "Intermediate" as const,
        category: "Marketing",
        enrollLink:
            "https://klic.mkcl.org/digital-freelancing/social-media-marketing",
    },
];

const categories = [
    "All Categories",
    "Student Friendly",
    "Marketing",
    "Data Management",
    "Accounting",
];
const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];

const Courses = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All Categories");
    const [selectedLevel, setSelectedLevel] = useState("All Levels");

    const filteredCourses = allCourses.filter((course) => {
        const matchesSearch =
            course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.description.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCategory =
            selectedCategory === "All Categories" ||
            course.category === selectedCategory;
        const matchesLevel =
            selectedLevel === "All Levels" || course.level === selectedLevel;

        return matchesSearch && matchesCategory && matchesLevel;
    });

    return (
        <div className="container mx-auto px-4 py-12">
            <SectionHeader
                title="Explore Our Courses"
                subtitle="Discover the perfect course to advance your skills and career"
                centered
            />

            {/* Filters */}
            <div className="mb-12 bg-white p-6 rounded-lg shadow-sm border">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="relative">
                        <Input
                            type="text"
                            placeholder="Search courses..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10"
                        />
                        <Search
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            size={18}
                        />
                    </div>

                    <Select
                        value={selectedCategory}
                        onValueChange={setSelectedCategory}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                            {categories.map((category) => (
                                <SelectItem key={category} value={category}>
                                    {category}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <Select
                        value={selectedLevel}
                        onValueChange={setSelectedLevel}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Select level" />
                        </SelectTrigger>
                        <SelectContent>
                            {levels.map((level) => (
                                <SelectItem key={level} value={level}>
                                    {level}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Course Grid */}
            {filteredCourses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCourses.map((course) => (
                        <CourseCard key={course.id} {...course} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <h3 className="text-2xl font-semibold text-gray-800">
                        No courses found
                    </h3>
                    <p className="text-gray-600 mt-4">
                        Try adjusting your search or filters to find what you're
                        looking for.
                    </p>
                    <Button
                        variant="outline"
                        className="mt-6"
                        onClick={() => {
                            setSearchTerm("");
                            setSelectedCategory("All Categories");
                            setSelectedLevel("All Levels");
                        }}
                    >
                        Reset Filters
                    </Button>
                </div>
            )}
        </div>
    );
};

export default Courses;
