import React, { useState } from "react";
import { Grid, Image, Flex, Box, Center, GridItem } from "@chakra-ui/react";
import Textcontainer from "./Textcontainer";
import "./Home.css";
import ImageContainer from "./ImageContainer";
import lamp from "../../images/lamp-svgrepo-com.svg";
import wave from "../../images/wave.svg";

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
      <Flex flexDirection="column">
        <Flex h="100vh" className="Home-container">
          <Center w="50%">
            <Textcontainer />
          </Center>
          <Center w="50%" d="flex" justifyContent="center" alignItems="center">
            <ImageContainer />
          </Center>
        </Flex>
        <Flex marginTop="-20rem">
          <img src={wave} className="wave-form" />
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
