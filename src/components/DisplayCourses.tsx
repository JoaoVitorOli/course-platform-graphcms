import { Stack } from "@chakra-ui/react";
import CourseCard from "./CourseCard";

export function DisplayCourses() {
  return (
    <Stack 
      flexDirection={'row'} 
      justifyContent="center"
      gap={8}
      px={12}
      flexWrap='wrap'
    >
      {/* <CourseCard />
      <CourseCard />
      <CourseCard /> */}
    </Stack>
  )
}