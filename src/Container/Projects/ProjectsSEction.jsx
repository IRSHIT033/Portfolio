import { Flex, Box, Text, Center, Heading, Image } from "@chakra-ui/react";
import React from "react";
import video from "../../ProjectVideos/ScreenrecorderPrjct.mp4";
import githublogo from "../../images/iconmonstr-github-1.svg";
const ProjectsSEction = () => {
  return (
    <>
      <Flex
        h="80vh"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
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
            <source src={video} type="video/mp4" />
          </video>
        </Box>
        <Heading
          position="absolute"
          fontSize={{ base: "5rem", md: "7rem" }}
          bottom="13%"
        >
          01
        </Heading>
        <Box w={{ base: "60%", lg: "40%" }} m="0rem">
          <Box p={{ base: "0.5rem", lg: "2rem" }}>
            <Text
              textAlign={{ base: "center", md: "left" }}
              fontSize={{ base: "1.5rem", lg: "2rem" }}
              textTransform="Capitalise"
              fontWeight="bold"
            >
              Screen Recorder
            </Text>
            <Text
              textAlign={{ base: "center", md: "left" }}
              fontSize={{ base: "1rem", lg: "1.5rem" }}
              pt={5}
            >
              This is a screen recorder Webapp. Where u can record your screen
              without using any external software.{" "}
              <Text fontweight="bold"> Tech stack :- HTML, CSS, JS</Text>
            </Text>

            <Center
              w="45px"
              p="0.3rem"
              backgroundColor="brand.100"
              borderRadius="5px"
              m="1rem"
              mx={{ base: "auto", md: "0px" }}
            >
              <a href="https://github.com/IRSHIT033/ScreeenRecorder">
                <Image src={githublogo} h="35px" borderRadius="50%" />
              </a>
            </Center>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default ProjectsSEction;
