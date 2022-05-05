import { Box, Center } from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

export const SidebarSocial = () => {
  return (
    <>
      <Box w="45px" position="fixed" top="40%" right="0%" bg="brand.200">
        <Center my={3}>
          <FaFacebookF size={25} />
        </Center>
        <Center my={3}>
          {" "}
          <FaLinkedin size={25} />
        </Center>
        <Center my={3}>
          {" "}
          <AiFillGithub size={25} />
        </Center>
        <Center my={3}>
          {" "}
          <FaInstagram size={25} />
        </Center>
      </Box>
    </>
  );
};
