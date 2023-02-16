import {
  SimpleGrid,
  Text,
  Box,
  Center,
  VStack,
  HStack,
} from "@chakra-ui/react";

import { motion } from "framer-motion";
import SkillStack from "./SkillStack";
import React, { useEffect } from "react";
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
import goLanglogo from "../../images/Go-Logo_Blue.svg";
import mysql from "../../images/mysql-icon.svg";
import bootstrap from "../../images/bootstrap-4-logo-svgrepo-com.svg";
import sass from "../../images/sass-svgrepo-com.svg";
import tailwind from "../../images/tailwind-svgrepo-com.svg";
import chakraui from "../../images/chakraui-svgrepo-com.svg";
import giticon from "../../images/git-icon-logo-svgrepo-com.svg";
import c_lang from "../../images/c-program.svg";
import solidity from "../../images/light-solidity-svgrepo-com.svg";
import python from "../../images/python.png";
import other from "../../images/code-svgrepo-com.svg";
import nginxlogo from "../../images/nginx-icon.svg";
import grpclogo from "../../images/grpcio-ar21.svg";
import bashlogo from "../../images/icons8-bash.svg";

import githubactionlogo from "../../images/githubactions-svgrepo-com.svg";

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

  const Frontendname = [
    "",
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "REACT",
    "TAILWIND",
    "SCSS",
    "BOOTSTRAP",
    "CHAKRA UI",
  ];
  const BackgendImgs = [
    server_img,
    NodeLogo,
    goLanglogo,
    Mongodblogo,
    mysql,
    SockerIo,
    nginxlogo,
    grpclogo,
  ];
  const othersIMgs = [
    other,
    dockerlogo,
    giticon,
    cppLogo,
    c_lang,
    solidity,
    python,
    githubactionlogo,
    bashlogo,
  ];
  const others = [
    "",
    "DOCKER",
    "GIT",
    "C++",
    "C",
    "SOLIDITY",
    "PYTHON",
    "GITHUB_ACTION",
    "BASH",
  ];
  const backendnames = [
    "",
    "NODE",
    "GO",
    "MONGODB",
    "MYSQL",
    "SOCKET IO",
    "NGINX",
    "GRPC",
  ];

  return (
    <Center bg="brand.100" w="100vw">
      <SimpleGrid
        overflow="hidden"
        columns={{ base: 1, md: 2, lg: 3 }}
        gap={5}
        w="100%"
        my={10}
      >
        <Center
          as={motion.div}
          initial={{ opacity: 0, transform: "translateX(-100px)" }}
          whileInView={{ opacity: 1, transform: "translateX(0px)" }}
          transition="0.8s ease-in-out"
        >
          <Box
            height="550px"
            width="20rem"
            overflow="hidden"
            borderRadius="15px"
            bg="brand.200"
          >
            <VStack>
              <Center>
                <Text p={2} fontSize="1.5rem">
                  Frontend
                </Text>
              </Center>

              {FrontendImgs.map((i, idx) => {
                return (
                  <SkillStack
                    pics={i}
                    key={idx}
                    idx={idx}
                    height={idx != 0 ? "25px" : "65px"}
                    name={Frontendname[idx]}
                  />
                );
              })}
            </VStack>
          </Box>
        </Center>

        <Center
          as={motion.div}
          initial={{ opacity: 0, transform: "translateY(100px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          transition="0.8s ease-in-out"
        >
          <Box
            height="550px"
            width="20rem"
            bg="brand.200"
            overflow="hidden"
            borderRadius="15px"
          >
            <VStack>
              <Text p={2} fontSize="1.5rem">
                Backend
              </Text>
              {BackgendImgs.map((i, idx) => {
                return (
                  <SkillStack
                    pics={i}
                    key={idx + 89}
                    idx={idx}
                    height={idx != 0 ? "25px" : "65px"}
                    name={backendnames[idx]}
                  />
                );
              })}
            </VStack>
          </Box>
        </Center>

        <Center
          as={motion.div}
          initial={{ opacity: 0, transform: "translateX(100px)" }}
          whileInView={{ opacity: 1, transform: "translateX(0px)" }}
          transition="0.8s ease-in-out"
        >
          <Box
            height="550px"
            width="20rem"
            bg="brand.200"
            overflow="hidden"
            borderRadius="15px"
          >
            <VStack>
              <Text p={2} fontSize="1.5rem">
                Others
              </Text>
              {othersIMgs.map((i, idx) => {
                return (
                  <SkillStack
                    pics={i}
                    key={idx + 100}
                    idx={idx}
                    height={idx != 0 ? "35px" : "65px"}
                    name={others[idx]}
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
