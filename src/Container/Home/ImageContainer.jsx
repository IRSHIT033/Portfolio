import React from "react";
import { Box, Image } from "@chakra-ui/react";
import Portfolioimg from "../../images/Portfolio.png";
import "./imagecontainer.css";

const ImageContainer = () => {
  return (
    <>
      <Box>
        <Image src={Portfolioimg} alt="portfolio image" className="floating" />
      </Box>
    </>
  );
};

export default ImageContainer;
