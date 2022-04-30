import React from "react";
import Home from "./Container/Home/Home";
import { Nav } from "./Container/Navbar/Nav";
import { ChakraProvider } from "@chakra-ui/provider";
import { Customtheme } from "./Theme/Customtheme";
import Skill_container from "./Container/skills/Skill_container";
import { SidebarSocial } from "./Container/SocialMediaSideBar/SidebarSocial";
const App = () => {
  return (
    <>
      <ChakraProvider resetCss={true} theme={Customtheme}>
        <Nav />
        {/* <SidebarSocial /> */}
        <Home />
        <Skill_container bg="brand.100" />
      </ChakraProvider>
    </>
  );
};
export default App;
