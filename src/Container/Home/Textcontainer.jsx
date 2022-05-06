import React from "react";
import { Stack, Heading, Text, Square, VStack, Center } from "@chakra-ui/react";
import { SidebarSocial } from "../SocialMediaSideBar/SidebarSocial";
import "./textcontainer.css";
import Typewriter from "typewriter-effect";

const Textcontainer = () => {
  return (
    <>
      <VStack>
        <Center>
          <Stack>
            <Heading pl="1rem" className="Heading1">
              <span className="text-left-animation">Hi ! I am </span>
              <Square id="text-drop">
                <span className="I">I</span>
                <span className="R">R</span>
                <span className="S">S</span>
                <span className="H">H</span>
                <span className="I2">I</span>
                <span className="T">T</span>
                <span className="_">&nbsp; </span>
                <span className="M">M</span>
                <span className="U">U</span>
                <span className="K">K</span>
                <span className="H2">H</span>
                <span className="E">E</span>
                <span className="R2">R</span>
                <span className="J">J</span>
                <span className="E2">E</span>
                <span className="E3">E</span>
              </Square>
              <Text>
                <Typewriter
                  options={{
                    loop: true,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Web Developer")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Problem Solver")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Designer")
                      .start();
                  }}
                />
              </Text>
            </Heading>
          </Stack>
        </Center>
        <SidebarSocial />
      </VStack>
    </>
  );
};

export default Textcontainer;
