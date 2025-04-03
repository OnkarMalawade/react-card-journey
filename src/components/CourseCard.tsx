import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CourseCardProps {
    id: string;
    title: string;
    instructor: string;
    description: string;
    image: string;
    duration: string;
    level: "Beginner" | "Intermediate" | "Advanced";
    enrollLink: string; // Add enroll link
}

const CourseCard = ({
    title,
    instructor,
    description,
    image,
    duration,
    level,
    enrollLink,
}: CourseCardProps) => {
    const getLevelColor = (level: string) => {
        switch (level) {
            case "Beginner":
                return "bg-green-100 text-green-800";
            case "Intermediate":
                return "bg-yellow-100 text-yellow-800";
            case "Advanced":
                return "bg-red-100 text-red-800";
            default:
                return "bg-blue-100 text-blue-800";
        }
    };

    return (
        <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:transform-y-2 hover:-translate-y-2 h-full flex flex-col">
            <div className="aspect-video overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
            </div>
            <CardHeader>
                <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{title}</CardTitle>
                    <Badge className={`${getLevelColor(level)}`}>{level}</Badge>
                </div>
                <CardDescription>By {instructor}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
                <p className="text-sm text-gray-600">
                    {description.slice(0, 50) + " ..."}
                </p>
                <div className="flex items-center mt-4 text-sm text-gray-500">
                    <span>{duration}</span>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center border-t pt-4">
                <Button onClick={() => window.open(enrollLink, "_blank")}>
                    Enroll Now
                </Button>
            </CardFooter>
        </Card>
    );
};

export default CourseCard;
