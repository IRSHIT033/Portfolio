import { SimpleGrid, Text, Box, Center, VStack } from "@chakra-ui/react";
import SkillStack from "./SkillStack";
import React from "react";
import SockerIo from "../../images/cdnlogo.com_socket-io.svg";
import frontend_img from "../../images/illustration.png";
import server_img from "../../images/server.png";
import devops_img from "../../images/devops-svgrepo-com.svg";
import jsLogo from "../../images/1486640684.svg";
import cppLogo from "../../images/c-.png";
import NodeLogo from "../../images/node-svgrepo-com.svg";
import reactLogo from "../../images/react-svgrepo-com.svg";
import Mongodblogo from "../../images/mongodb-svgrepo-com.svg";
import dockerlogo from "../../images/docker-logo-svgrepo-com.svg";
import html5glogo from "../../images/html5-svgrepo-com.svg";
import css3logo from "../../images/css3-svgrepo-com.svg";
import expresslogo from "../../images/expressjs-icon.svg";
import mysql from "../../images/mysql-icon.svg";
import bootstrap from "../../images/bootstrap-4-logo-svgrepo-com.svg";
import sass from "../../images/sass-svgrepo-com.svg";
import tailwind from "../../images/tailwind-svgrepo-com.svg";
import chakraui from "../../images/chakraui-svgrepo-com.svg";

export const Card_section = () => {
  const FrontendImgs = [
    frontend_img,
    html5glogo,
    css3logo,
    jsLogo,
    reactLogo,
    tailwind,
    sass,
    bootstrap,
    chakraui,
  ];
  const BackgendImgs = [
    server_img,
    NodeLogo,
    expresslogo,
    Mongodblogo,
    mysql,
    SockerIo,
  ];
  const devopsImgs = [devops_img, dockerlogo];
  return (
    <Center bg="brand.100" w="100vw">
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={5} w="100%" my={10}>
        <Center>
          <Box
            height="600px"
            width="22rem"
            overflow="hidden"
            borderRadius="15px"
            bg="brand.200"
          >
            <VStack>
              <Text p={2}>Frontend</Text>
              {FrontendImgs.map((i, idx) => {
                return (
                  <SkillStack
                    pics={i}
                    key={idx}
                    idx={idx}
                    height={idx != 0 ? "25px" : "65px"}
                  />
                );
              })}
            </VStack>
          </Box>
        </Center>
        <Center>
          <Box
            height="600px"
            width="22rem"
            bg="brand.200"
            overflow="hidden"
            borderRadius="15px"
          >
            <VStack>
              <Text p={2}>Backend</Text>
              {BackgendImgs.map((i, idx) => {
                return (
                  <SkillStack
                    pics={i}
                    key={idx + 89}
                    idx={idx}
                    height={idx != 0 ? "25px" : "65px"}
                  />
                );
              })}
            </VStack>
          </Box>
        </Center>
        <Center>
          <Box
            height="600px"
            width="22rem"
            bg="brand.200"
            overflow="hidden"
            borderRadius="15px"
          >
            <VStack>
              <Text p={2}>DevOps</Text>
              {devopsImgs.map((i, idx) => {
                return (
                  <SkillStack
                    pics={i}
                    key={idx + 100}
                    idx={idx}
                    height={idx != 0 ? "35px" : "65px"}
                  />
                );
              })}
            </VStack>
          </Box>
        </Center>
      </SimpleGrid>
    </Center>
  );
};
