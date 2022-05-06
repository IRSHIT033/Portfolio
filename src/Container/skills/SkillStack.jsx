import { Text, Box, HStack, Image, keyframes } from "@chakra-ui/react";
import { motion } from "framer-motion";
const SkillStack = ({ pics, height, name, idx }) => {
  const animationKeyframes = keyframes`
  from {width:100%;}
  to{width:0%;}
`;
  const animation = `${animationKeyframes} infinte 5s linear`;
  return (
    <>
      <Box
        w={idx == 0 ? "100%" : null}
        d="flex"
        justifyContent="center"
        alignItems="center"
        alignSelf="flex-start"
      >
        <Image src={pics} h={height} m="10px 30px" />

        <Text ml={2}>{name}</Text>
      </Box>
    </>
  );
};

export default SkillStack;
