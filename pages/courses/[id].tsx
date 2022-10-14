import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
} from '@chakra-ui/react'
import { PrismaClient, Video } from '@prisma/client'
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next'
import React from 'react'
import { VideoList } from '../../components/VideoList'
import { VideoView } from '../../components/VideoView'

const prisma = new PrismaClient()

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const id = context.params?.id as any

  const course = await prisma.course.findUnique({
    where: {
      id: id,
    },
    include: {
      videos: true,
    },
  })

  return {
    props: { course },
  }
}

export default function VideoPage(
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
  if (props.course === null) {
    return <h1>Course not found</h1>
  }
  const [idx, setIdx] = React.useState(0)

  const handleClick = (idx: number) => {
    setIdx(idx)
  }

  const video = props?.course?.videos[idx]
  return (
    <>
      <Center>
        <Heading>{props.course.title}</Heading>
      </Center>
      <SimpleGrid columns={2}>
        <VideoView video={video as Video} />
        <VideoList videos={props.course.videos} onClick={handleClick} />
      </SimpleGrid>
    </>
  )
}

{
  /* <Flex>
        <Box
          width="100px"
          backgroundColor="black"
          height="100%"
          float="left"
        ></Box> */
}
