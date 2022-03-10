import fs from 'fs'
import matter from 'gray-matter'
import NextLink from 'next/link'
import path from 'path'
import { postFilePaths, POSTS_PATH } from '../lib/mdxUtils'
import {
  Heading,
  Text,
  Link,
  UnorderedList,
  ListItem
} from '@chakra-ui/react'
import Container from '../components/Container'

export default function Blog({ posts }) {
  return (
    <Container>
      <Heading as="h1">Posts</Heading>
      <Text fontSize="lg" align="left" my={4}>
      When I enrolled into a 6-month bootcamp, I had to maximise my learning in the shortest amount of time.
      <br/>This called for a clear strategy to cut out the noise and focus on the 20% that would yield a 80% return.
      <br/><br/>If you are starting your journey as a full stack web developer, I am sure you are looking for the same thing.
      <br/><br/>While the abundance of resources available over the internet is amazing, it can quickly feel overwhelming.
      <br/><br/>That&apos;s why I started this blog: to share with you the strategy that allowed me to graduate at the top of my cohort and get first place at every single project - which was the first this happened in my bootcamp.
      </Text>

      <UnorderedList>
        {posts.map((post) => (
          <ListItem key={post.filePath}>
            <NextLink
                as={`/blog/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/blog/[slug]`}>
                <Link>{post.data.title} - {post.data.description}</Link>
            </NextLink>
          </ListItem>
        ))}
      </UnorderedList>
    </Container>
  )
}

export function getStaticProps() {
    const posts = postFilePaths.map((filePath) => {
        const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
        const { content, data } = matter(source)

        return {
            content,
            data,
            filePath,
        }
    })

    return { props: { posts } }
}