import { Flex, Box, Center, Image } from "@chakra-ui/react";
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

import { motion } from "framer-motion";

const Skill_container = () => {
  return (
    <Box bg="brand.100" overflow="hidden">
      <Box
        d="flex"
        justifyContent="center"
        w="100%"
        h={{ base: "400px", md: "auto" }}
        alignItems="center"
        borderRadius="50%"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        >
          <Center
            width="650px"
            minHeight="300px"
            height="650px"
            minWidth="300px"
            border="5px solid #001220"
            borderRadius="50%"
            transform={{
              base: "scale(0.4)",
              md: "scale(0.8)",
              lg: "scale(1)",
            }}
          >
            <Center
              width="400px"
              height="400px"
              border="5px solid #001220"
              borderRadius="50%"
            >
              <Box>
                <Box p="1rem" backgroundColor="#fff" my={6} borderRadius="50%">
                  <Image src={reactLogo} height="75px" width="75px" />
                </Box>
                <Box p="1rem" backgroundColor="#fff" my={6} borderRadius="50%">
                  <Image src={cppLogo} height="75px" width="75px" />
                </Box>
                <Box p="1rem" backgroundColor="#fff" my={6} borderRadius="50%">
                  <Image src={jsLogo} height="75px" width="75px" />
                </Box>
                <Box p="1rem" backgroundColor="#fff" my={6} borderRadius="50%">
                  <Image src={dockerlogo} height="75px" width="75px" />
                </Box>
                <Box p="1rem" backgroundColor="#fff" my={6} borderRadius="50%">
                  <Image src={pythonlogo} height="75px" width="75px" />
                </Box>
              </Box>

              <Box position="absolute" transform="rotate(-60deg)">
                <Box p="1rem" backgroundColor="#fff" my={6} borderRadius="50%">
                  <Image src={NodeLogo} height="75px" width="75px" />
                </Box>
                <Box p="1rem" backgroundColor="#fff" my={6} borderRadius="50%">
                  <Image src={css3logo} height="75px" width="75px" />
                </Box>
                <Box
                  p="1rem"
                  backgroundColor="#fff"
                  my={6}
                  borderRadius="50%"
                  opacity="0"
                >
                  <Image src={jsLogo} height="75px" width="75px" />
                </Box>
                <Box p="1rem" backgroundColor="#fff" my={6} borderRadius="50%">
                  <Image src={expresslogo} height="75px" width="75px" />
                </Box>
                <Box p="1rem" backgroundColor="#fff" my={6} borderRadius="50%">
                  <Image src={Clogo} height="75px" width="75px" />
                </Box>
              </Box>

              <Box position="absolute" transform="rotate(60deg)">
                <Box p="1rem" backgroundColor="#fff" my={6} borderRadius="50%">
                  <Image src={html5glogo} height="75px" width="75px" />
                </Box>
                <Box p="1rem" backgroundColor="#fff" my={6} borderRadius="50%">
                  <Image src={solidity} height="75px" width="75px" />
                </Box>
                <Box
                  p="1rem"
                  backgroundColor="#fff"
                  my={6}
                  borderRadius="50%"
                  opacity="0"
                >
                  <Image src={jsLogo} height="75px" width="75px" />
                </Box>
                <Box p="1rem" backgroundColor="#fff" my={6} borderRadius="50%">
                  <Image src={mysql} height="75px" width="75px" />
                </Box>
                <Box p="1rem" backgroundColor="#fff" my={6} borderRadius="50%">
                  <Image src={Mongodblogo} height="75px" width="75px" />
                </Box>
              </Box>
            </Center>
          </Center>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Skill_container;
