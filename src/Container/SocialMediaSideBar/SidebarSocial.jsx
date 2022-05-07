import { Box, Center, HStack } from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

export const SidebarSocial = () => {
  return (
    <>
      <Box
        position="fixed"
        right="0"
        top="40%"
        bg="brand.200"
        d="flex"
        flexDirection="column"
        m={2}
      >
        <Center m={3} cursor="pointer">
          <a href="https://www.facebook.com/irshit.mukherjee.1">
            <FaFacebookF size={25} />
          </a>
        </Center>

        <Center m={3} cursor="pointer">
          <a href="https://www.linkedin.com/in/irshit-mukherjee-693a99219/">
            {" "}
            <FaLinkedin size={25} />
          </a>
        </Center>
        <Center m={3} cursor="pointer">
          {" "}
          <a href="https://github.com/IRSHIT033">
            <AiFillGithub size={25} />
          </a>
        </Center>
        <Center m={3} cursor="pointer">
          {" "}
          <a href="https://www.instagram.com/irshit_mukerjee_10/?hl=en">
            <FaInstagram size={25} />
          </a>
        </Center>
      </Box>
    </>
  );
};
