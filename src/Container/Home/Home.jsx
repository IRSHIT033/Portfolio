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
          h="80vh"
          d={switchClicked ? "block" : "none"}
          p={2}
          className="lamp_light"
        />
      </Box>
      <Flex flexDirection="column" h="90vh" w="100vw">
        <Flex h="100vh" className="Home-container">
          <Center w={{ base: "100%", lg: "50%" }} mt={{ base: "3rem" }}>
            <Textcontainer />
          </Center>
          <Center
            w={{ base: "100%", lg: "50%" }}
            d="flex"
            justifyContent="center"
            alignItems="center"
          >
            <ImageContainer />
          </Center>
        </Flex>
      </Flex>
      <Flex>
        <img src={wave} className="wave-form" />
      </Flex>
    </>
  );
};

export default Home;
