import { Box, Button, Flex, Text } from '@chakra-ui/react'
import type { Video } from '@prisma/client'
import { useRouter } from 'next/router'

interface VideoListProps {
  videos: Video[]
  onClick(idx: number): void
}

export const VideoList = ({ videos, onClick }: VideoListProps) => {
  const router = useRouter()
  const id = router.query.id

  return (
    <Flex gap="2" direction="column" justifyContent="space-around">
      {videos.map((video, idx) => {
        const style = id === video.id ? { color: 'red' } : {}
        return (
          <Box bg="green.200" p="4" boxSizing="content-box" maxW="250px">
            <Button
              color="blue.500"
              textDecoration="underline"
              style={style}
              onClick={() => onClick(idx)}
            >
              {video.title}
            </Button>
            <Text>{video.description}</Text>
          </Box>
        )
      })}
    </Flex>
  )
}
