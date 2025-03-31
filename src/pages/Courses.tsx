
import { useState } from "react";
import CourseCard from "@/components/CourseCard";
import SectionHeader from "@/components/SectionHeader";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

// Sample course data
const allCourses = [
  {
    id: "1",
    title: "Web Development Fundamentals",
    instructor: "Sarah Johnson",
    description: "Learn the basics of HTML, CSS, and JavaScript to build responsive websites from scratch.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
    price: "$49.99",
    duration: "8 weeks",
    level: "Beginner" as const,
    category: "Web Development",
  },
  {
    id: "2",
    title: "Data Science Essentials",
    instructor: "Michael Chen",
    description: "Master the fundamentals of data analysis, visualization, and machine learning algorithms.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800",
    price: "$59.99",
    duration: "10 weeks",
    level: "Intermediate" as const,
    category: "Data Science",
  },
  {
    id: "3",
    title: "Mobile App Development",
    instructor: "Lisa Rodriguez",
    description: "Build cross-platform mobile applications using React Native and modern JavaScript frameworks.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    price: "$69.99",
    duration: "12 weeks",
    level: "Advanced" as const,
    category: "Mobile Development",
  },
  {
    id: "4",
    title: "UX/UI Design Principles",
    instructor: "David Wilson",
    description: "Learn to create intuitive and beautiful user interfaces that drive engagement and conversions.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    price: "$54.99",
    duration: "6 weeks",
    level: "Beginner" as const,
    category: "Design",
  },
  {
    id: "5",
    title: "Advanced JavaScript Patterns",
    instructor: "Emily Zhang",
    description: "Dive deep into advanced JavaScript concepts, design patterns, and modern ES6+ features.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800",
    price: "$64.99",
    duration: "8 weeks",
    level: "Advanced" as const,
    category: "Web Development",
  },
  {
    id: "6",
    title: "Cloud Computing with AWS",
    instructor: "Alex Thompson",
    description: "Get hands-on experience with Amazon Web Services and learn to deploy scalable applications.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800",
    price: "$79.99",
    duration: "10 weeks",
    level: "Intermediate" as const,
    category: "Cloud Computing",
  },
];

const categories = ["All Categories", "Web Development", "Data Science", "Mobile Development", "Design", "Cloud Computing"];
const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");

  const filteredCourses = allCourses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "All Categories" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "All Levels" || course.level === selectedLevel;
    
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
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
          
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
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
          
          <Select value={selectedLevel} onValueChange={setSelectedLevel}>
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
          <h3 className="text-2xl font-semibold text-gray-800">No courses found</h3>
          <p className="text-gray-600 mt-4">Try adjusting your search or filters to find what you're looking for.</p>
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
