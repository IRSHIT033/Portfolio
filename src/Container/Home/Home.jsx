import React from "react";
import { Box, Flex, Square, Center } from "@chakra-ui/react";
import Textcontainer from "./Textcontainer";
import "./Home.css";
import Wave from "./Wave.svg";
import ImageContainer from "./ImageContainer";

const Home = () => {
  return (
    <>
      <Flex h="100vh" className="Home-container">
        <Center>
          <Textcontainer />
        </Center>
        <Center w="100%" d="flex" justifyContent="center" alignItems="center">
          <ImageContainer />
        </Center>
      </Flex>
    </>
  );
};

export default Home;
