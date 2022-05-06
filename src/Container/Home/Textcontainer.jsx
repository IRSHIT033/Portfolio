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
                <span class="I">I</span>
                <span class="R">R</span>
                <span class="S">S</span>
                <span class="H">H</span>
                <span class="I2">I</span>
                <span class="T">T</span>
                <span class="_">&nbsp; </span>
                <span class="M">M</span>
                <span class="U">U</span>
                <span class="K">K</span>
                <span class="H2">H</span>
                <span class="E">E</span>
                <span class="R2">R</span>
                <span class="J">J</span>
                <span class="E2">E</span>
                <span class="E3">E</span>
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
