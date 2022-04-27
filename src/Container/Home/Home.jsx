import React, { useState } from "react";
import { Image, Flex, Box, Center } from "@chakra-ui/react";
import Textcontainer from "./Textcontainer";
import "./Home.css";
import ImageContainer from "./ImageContainer";
import lamp from "../../images/lamp-svgrepo-com.svg";
import wave1 from "../../images/wave1.svg";

const Home = () => {
  const [switchClicked, setswitchClicked] = useState(false);
  return (
    <>
      <Box
        onClick={() => {
          setswitchClicked(!switchClicked);
        }}
      >
        <Image src={lamp} w="90px" className="lamp" />
        <Box
          w="100vw"
          h="100vh"
          d={switchClicked ? "block" : "none"}
          p={2}
          className="lamp_light"
        />
      </Box>
      <Flex h="100vh" className="Home-container">
        <Center w="50%">
          <Textcontainer />
        </Center>
        <Center w="50%" d="flex" justifyContent="center" alignItems="center">
          <ImageContainer />
        </Center>
      </Flex>
    </>
  );
};

export default Home;
