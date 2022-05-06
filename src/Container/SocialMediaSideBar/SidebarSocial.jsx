import { Box, Center, HStack } from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

export const SidebarSocial = () => {
  return (
    <>
      <Box bg="brand.200" d="flex" flexDirection="row" m={2}>
        <Center m={3} cursor="pointer">
          <a href="https://www.facebook.com/irshit.mukherjee.1">
            <FaFacebookF size={30} />
          </a>
        </Center>

        <Center m={3} cursor="pointer">
          <a href="https://www.linkedin.com/in/irshit-mukherjee-693a99219/">
            {" "}
            <FaLinkedin size={30} />
          </a>
        </Center>
        <Center m={3} cursor="pointer">
          {" "}
          <a href="https://github.com/IRSHIT033">
            <AiFillGithub size={30} />
          </a>
        </Center>
        <Center m={3} cursor="pointer">
          {" "}
          <a href="https://www.instagram.com/irshit_mukerjee_10/?hl=en">
            <FaInstagram size={30} />
          </a>
        </Center>
      </Box>
    </>
  );
};
