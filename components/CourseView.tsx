import { Box, Container, Flex, Heading, Link, Text } from '@chakra-ui/react'
import type { Course } from '@prisma/client'

interface CourseProps {
  course: Course
}

export const CourseView = ({ course }: CourseProps) => {
  return (
    <Container mt="10">
      <Box bg="blue.200" h="100px" boxSizing="content-box" p="4">
        <Flex flexDirection="column" gap="2">
          <Heading fontSize="lg" textDecoration="underline">
            <Link href={`/courses/${course.id}`}>{course.title}</Link>
          </Heading>
          <Text fontSize="md">{course.description}</Text>
        </Flex>
      </Box>
    </Container>
  )
}

// w="180px" h="80px"
