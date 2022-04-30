import { Box } from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

export const SidebarSocial = () => {
  return (
    <>
      <Box>
        <FaFacebookF />
        <FaLinkedin />
        <AiFillGithub />
        <FaInstagram />
      </Box>
    </>
  );
};
