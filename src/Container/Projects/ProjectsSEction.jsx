import { Flex, Box, Text, Center, Heading, Image } from "@chakra-ui/react";
import React from "react";
import githublogo from "../../images/iconmonstr-github-1.svg";
import { motion } from "framer-motion";
const ProjectsSEction = ({
  idx,
  videoSrc,
  Title,
  info,
  techStack,
  Githubsrc,
}) => {
  return (
    <>
      <Box w="100%">
        <Flex flexDirection="column" mx={10}>
          <Heading
            fontSize={{ base: "5rem", md: "7rem" }}
            textShadow="5px 5px #558abb;"
          >
            {"0" + idx}
          </Heading>
          <Flex
            flexDirection={{
              base: "column",
              md: idx % 2 ? "row" : "row-reverse",
            }}
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
            ml={{ base: "0", lg: "3.5rem" }}
          >
            <Box
              w={{ base: "60%", md: "60%", lg: "50%" }}
              borderRadius="15px"
              mx="auto"
            >
              <video
                resizemode={"cover"}
                style={{
                  aspectRatio: 1,
                  width: "100%",
                }}
                autoPlay
                muted
                loop
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
            </Box>

            <Box w={{ base: "100%", lg: "40%" }} mx="auto">
              <Box
                p={{ base: "0.5rem", lg: "2rem" }}
                as={motion.div}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ ease: "easeOut", duration: 3, delay: 0.5 }}
                variants={{
                  visible: { x: 0 },
                  hidden: idx % 2 == 0 ? { x: -100 } : { x: 100 },
                }}
              >
                <Text
                  textAlign={{ base: "center", md: "left" }}
                  fontSize={{ base: "1.5rem", lg: "2rem" }}
                  textTransform="Capitalise"
                  fontWeight="bold"
                >
                  {Title}
                </Text>
                <Text
                  textAlign={{ base: "center", md: "left" }}
                  fontSize={{ base: "1rem", lg: "1.5rem" }}
                  pt={5}
                >
                  {info}

                  <Text fontWeight="bold">Tech Stack :- {techStack}</Text>
                </Text>
                <br></br>
                <Center
                  w="45px"
                  p="0.3rem"
                  backgroundColor="brand.100"
                  borderRadius="5px"
                  m="1rem"
                  mx={{ base: "auto", md: "0px" }}
                >
                  <a href={Githubsrc}>
                    <Image src={githublogo} h="35px" borderRadius="50%" />
                  </a>
                </Center>
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default ProjectsSEction;
