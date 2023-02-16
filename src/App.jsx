import React, { useEffect } from "react";
import Home from "./Container/Home/Home";
import { Nav } from "./Container/Navbar/Nav";

import { ChakraProvider } from "@chakra-ui/provider";
import { Customtheme } from "./Theme/Customtheme";
import Skill_section from "./Container/skills/Skill_section";
import FeedbackContainer from "./Container/SendFeedback/FeedbackContainer";
import ProjectsContainer from "./Container/Projects/ProjectsContainer";
const App = () => {
  return (
    <>
      <ChakraProvider resetCss={true} theme={Customtheme}>
        <Nav />
        <Home />
        <Skill_section />
        <ProjectsContainer />
        <FeedbackContainer />
      </ChakraProvider>
    </>
  );
};
export default App;
