import React from "react";
import Home from "./Container/Home/Home";
import { Nav } from "./Container/Navbar/Nav";
import { ChakraProvider } from "@chakra-ui/provider";
import { Customtheme } from "./Theme/Customtheme";
import Skill_section from "./Container/skills/Skill_section";
import ProjectsContainer from "./Container/Projects/ProjectsContainer";
import FeedbackContainer from "./Container/SendFeedback/FeedbackContainer";
import { SidebarSocial } from "./Container/SocialMediaSideBar/SidebarSocial";
const App = () => {
  return (
    <>
      <ChakraProvider resetCss={true} theme={Customtheme}>
        <Nav />
        <SidebarSocial />
        <Home />
        <Skill_section />
        <ProjectsContainer />
        <FeedbackContainer />
      </ChakraProvider>
    </>
  );
};
export default App;
