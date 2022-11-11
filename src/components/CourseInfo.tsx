import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
} from '@chakra-ui/react';
import { CoursesType } from '../types/courses.type';
import TeacherCard from './TeacherCard';

interface CourseInfoProps {
  courses: CoursesType;
}

export default function CourseInfo({ courses }: CourseInfoProps) {
  return (
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Flex>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={
              courses.assets[0].url
            }
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                {courses.title}
            </Heading>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <div
                dangerouslySetInnerHTML={{__html: courses.content.html}}
              />
            </VStack>
          </Stack>

          <Stack flexDir={"row"} gap={8}>
            {courses.teachers.map(item => (
              <TeacherCard 
                key={item.id}
                name={item.name}
                picture={item.picture.url}
              />
            ))}
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}