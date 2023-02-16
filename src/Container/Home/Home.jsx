import React, { useState } from "react";
import { Image, Flex, Box, Center, useMediaQuery } from "@chakra-ui/react";
import Textcontainer from "./Textcontainer";
import "./Home.css";
import ImageContainer from "./ImageContainer";
import lamp from "../../images/lamp-svgrepo-com.svg";
import wave from "../../images/wave.svg";

const Home = () => {
  const [isSmallerThan900] = useMediaQuery("(max-width: 900px)");
  const [switchClicked, setswitchClicked] = useState(false);
  return (
    <>
      <Box
        position="relative"
        onClick={() => {
          setswitchClicked(!switchClicked);
        }}
        _after={{
          display: switchClicked && !isSmallerThan900 ? null : "none",

          content: '""',
          position: "absolute",
          right: "5.5rem",
          top: "2rem",
          width: "100rem",
          height: "40rem",
          opacity: "0.2",
          background: "linear-gradient(192deg, #ffcb15 30%, transparent 60%)",
          clipPath: "polygon(100% 0, 0% 100%, 93% 100%)",
        }}
      >
        <Image src={lamp} w="90px" className="lamp" />
      </Box>
      <Flex flexDirection="column" h="100vh" w="100vw" id="Home">
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
