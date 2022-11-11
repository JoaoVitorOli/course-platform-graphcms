import { Stack } from "@chakra-ui/react";
import { CoursesType } from "../types/courses.type";
import CourseCard from "./CourseCard";

interface DisplayCoursesProps {
  courses: CoursesType[]
}

export function DisplayCourses({ courses }: DisplayCoursesProps) {
  return (
    <Stack 
      flexDirection={'row'} 
      justifyContent="center"
      gap={8}
      px={12}
      flexWrap='wrap'
    >
      {courses.map(item => (
        <CourseCard 
          key={item.id}
          image={item.assets[1].url}
          title={item.title}
          slug={item.slug}
        />
      ))}
    </Stack>
  )
}