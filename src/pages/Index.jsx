import React from "react";
import { Box, Heading, Text, Flex, Image, Link, Stack, Icon, SimpleGrid } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const projects = [
  {
    title: "Project 1",
    description: "A brief description of project 1",
    image: "https://images.unsplash.com/photo-1646723907212-a61af18b6884?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHBsaWNhdGlvbiUyMHNjcmVlbnNob3R8ZW58MHx8fHwxNzExOTEzODUwfDA&ixlib=rb-4.0.3&q=80&w=1080",
    link: "https://project1.com",
  },
  {
    title: "Project 2",
    description: "A brief description of project 2",
    image: "https://images.unsplash.com/photo-1531986362435-16b427eb9c26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBzY3JlZW5zaG90fGVufDB8fHx8MTcxMTkxMzg1MHww&ixlib=rb-4.0.3&q=80&w=1080",
    link: "https://project2.com",
  },
  {
    title: "Project 3",
    description: "A brief description of project 3",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjB1aXxlbnwwfHx8fDE3MTE5MTM4NTB8MA&ixlib=rb-4.0.3&q=80&w=1080",
    link: "https://project3.com",
  },
];

const Index = () => {
  return (
    <Box maxWidth="960px" margin="0 auto" padding="2rem">
      <Flex alignItems="center" marginBottom="2rem">
        <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTE5MTM4NTF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Developer" borderRadius="full" boxSize="150px" marginRight="2rem" />
        <Box>
          <Heading as="h1" size="xl" marginBottom="1rem">
            John Doe
          </Heading>
          <Text fontSize="xl">Full-Stack Developer</Text>
        </Box>
      </Flex>

      <Box marginBottom="2rem">
        <Heading as="h2" size="lg" marginBottom="1rem">
          About Me
        </Heading>
        <Text>I am a passionate full-stack developer with expertise in React, Node.js, and MongoDB. I enjoy building scalable and performant web applications.</Text>
      </Box>

      <Box marginBottom="2rem">
        <Heading as="h2" size="lg" marginBottom="1rem">
          Projects
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing="2rem">
          {projects.map((project, index) => (
            <Link key={index} href={project.link} isExternal>
              <Box borderWidth="1px" borderRadius="lg" padding="1rem">
                <Image src={project.image} alt={project.title} marginBottom="1rem" />
                <Heading as="h3" size="md" marginBottom="0.5rem">
                  {project.title}
                </Heading>
                <Text>{project.description}</Text>
              </Box>
            </Link>
          ))}
        </SimpleGrid>
      </Box>

      <Box>
        <Heading as="h2" size="lg" marginBottom="1rem">
          Contact Me
        </Heading>
        <Stack direction="row" spacing="1rem">
          <Link href="https://github.com/johndoe" isExternal>
            <Icon as={FaGithub} boxSize="2rem" />
          </Link>
          <Link href="https://linkedin.com/in/johndoe" isExternal>
            <Icon as={FaLinkedin} boxSize="2rem" />
          </Link>
          <Link href="mailto:johndoe@example.com">
            <Icon as={FaEnvelope} boxSize="2rem" />
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};

export default Index;
