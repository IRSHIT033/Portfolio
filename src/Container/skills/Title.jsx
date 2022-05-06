import { Text, Center, Box } from "@chakra-ui/react";
import React from "react";

const Title = ({ title }) => {
  return (
    <Center bg="brand.100" marginTop="auto" id="Skills">
      <Text
        color="black"
        fontSize="3.5rem"
        fontWeight="bold"
        textTransform="uppercase"
        m="2rem"
      >
        Skills
      </Text>
    </Center>
  );
};

export default Title;
