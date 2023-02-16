import { Box, Center } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

export const SidebarSocial = () => {
  const getToLink = (link) => window.open(link);
  return (
    <>
      <Box
        position="fixed"
        right="0"
        top="40%"
        bg="brand.200"
        d="flex"
        zIndex="1"
        flexDirection="column"
        m={2}
      >
        <Center m={3} cursor="pointer">
          <a onClick={() => getToLink("https://twitter.com/IrshitMukherjee")}>
            <FaTwitter size={25} />
          </a>
        </Center>

        <Center m={3} cursor="pointer">
          <a
            onClick={() =>
              getToLink(
                "https://www.linkedin.com/in/irshit-mukherjee-693a99219/"
              )
            }
          >
            {" "}
            <FaLinkedin size={25} />
          </a>
        </Center>
        <Center m={3} cursor="pointer">
          {" "}
          <a onClick={() => getToLink("https://github.com/IRSHIT033")}>
            <AiFillGithub size={25} />
          </a>
        </Center>
      </Box>
    </>
  );
};
