import {
  SimpleGrid,
  Image,
  Box,
  Center,
  VStack,
  HStack,
} from "@chakra-ui/react";
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
import pythonlogo from "../../images/python.png";
import html5glogo from "../../images/html5-svgrepo-com.svg";
import css3logo from "../../images/css3-svgrepo-com.svg";
import Clogo from "../../images/c-program.svg";
import expresslogo from "../../images/expressjs-icon.svg";
import mysql from "../../images/mysql-icon.svg";
import solidity from "../../images/light-solidity-svgrepo-com.svg";

export const Card_section = () => {
  return (
    <Center bg="brand.100" w="100vw">
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={5} w="100%" my={10}>
        <Center>
          <Box
            height="500px"
            width="22rem"
            overflow="hidden"
            borderRadius="10px"
            bg="brand.200"
          >
            <VStack>
              <HStack>
                <Image src={frontend_img} h="70px" m={3} />
              </HStack>
              <HStack>
                <Image src={html5glogo} h="20px" m={3} />
              </HStack>
              <HStack>
                <Image src={css3logo} h="20px" m={3} />
              </HStack>
              <HStack>
                <Image src={reactLogo} h="20px" m={3} />
              </HStack>
              <HStack>
                <Image src={jsLogo} h="20px" m={3} />
              </HStack>
            </VStack>
          </Box>
        </Center>
        <Center>
          <Box
            height="500px"
            width="22rem"
            bg="brand.200"
            overflow="hidden"
            borderRadius="10px"
          >
            <VStack>
              <HStack>
                <Image src={server_img} h="70px" m={3} />
              </HStack>
              <HStack>
                <Image src={NodeLogo} h="20px" m={3} />
              </HStack>
              <HStack>
                <Image
                  src={expresslogo}
                  backgroundColor="#fff"
                  borderRadius="50%"
                  h="20px"
                  m={3}
                />
              </HStack>
              <HStack>
                <Image src={mysql} h="20px" m={3} />
              </HStack>
              <HStack>
                <Image src={Mongodblogo} h="20px" m={3} />
              </HStack>
              <HStack>
                <Image src={SockerIo} h="20px" m={3} />
              </HStack>
            </VStack>
          </Box>
        </Center>
        <Center>
          <Box
            height="500px"
            width="22rem"
            bg="brand.200"
            overflow="hidden"
            borderRadius="10px"
          >
            <VStack>
              <HStack>
                <Image src={devops_img} h="70px" m={3} />
              </HStack>
              <HStack>
                <Image src={dockerlogo} h="20px" m={3} />
              </HStack>
            </VStack>
          </Box>
        </Center>
      </SimpleGrid>
    </Center>
  );
};
