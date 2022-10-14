import { PrismaClient } from '@prisma/client'
import type { InferGetServerSidePropsType } from 'next'
import { CourseList } from '../../components/CourseList'

const prisma = new PrismaClient()

export async function getServerSideProps() {
  const courses = await prisma.course.findMany()

  return {
    props: {
      courses,
    },
  }
}

function App(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <CourseList courses={props.courses} />
}

export default App
