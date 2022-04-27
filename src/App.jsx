import React from "react";
import Home from "./Container/Home/Home";
import { Nav } from "./Container/Navbar/Nav";
import { ChakraProvider } from "@chakra-ui/provider";
import { Customtheme } from "./Theme/Customtheme";
const App = () => {
  return (
    <>
      <ChakraProvider resetCss={true} theme={Customtheme}>
        <Nav />
        <Home bg="brand.900" />
      </ChakraProvider>
    </>
  );
};

export default App;
