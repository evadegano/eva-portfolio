import Container from "../components/Container";
import {
  Heading,
  Text,
  Button,
  Avatar,
  Box,
  HStack,
  VStack,
  Divider
} from '@chakra-ui/react';

import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiReact,
  SiExpress
} from "react-icons/si";

import {
  FaNodeJs
} from "react-icons/fa";

import { NextSeo } from 'next-seo';


const url = 'https://example.io/'
const title = 'Home'
const description = 'Website and portfolio of Eva Degano.'

export default function Home() {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description
        }}/>

      <Container>
        <VStack> 
          <Avatar size='2xl' name='Eva Degano' src="/images/avatar.png" />

          <Box>
            <Heading className="chakra-code" as="h1" size="xl" align="center" color="tomato">Hi, I&apos;m Eva Degano.</Heading>
            <Text fontSize="xl" align="center" my={4}>I&apos;m full stack web developer based in Paris with a background in UX/UI and Project Management.</Text>
          </Box>

          <Box>
            <Heading as="h2" size="lg">Tech stack I use</Heading>

            <HStack>
              <SiPython style={{color: 'black', fontSize: '30px'}} />
              <SiJavascript style={{color: 'black', fontSize: '30px'}} />
              <SiTypescript style={{color: 'black', fontSize: '30px'}} />
              <SiMongodb style={{color: 'black', fontSize: '30px'}} />
              <SiReact style={{color: 'black', fontSize: '30px'}} />
              <FaNodeJs style={{color: 'black', fontSize: '30px'}} />
              <SiExpress style={{color: 'black', fontSize: '30px'}} />
            </HStack>
          </Box>

          <Button bg="#5944E4" _hover={{ bg: '#402BCA' }} color="white" borderRadius="2px" size="lg">GET IN TOUCH</Button>

          <Box>
            <Heading as="h2" size="lg" align="left" color="tomato">I love to share my knowledge through writing.</Heading>
            <Text fontSize="xl" align="left" my={4}>Check out some of my most recent posts.</Text>
            <Divider />
          </Box>

        </VStack>
      </Container>
    </>
  )
}
