import { Box, HStack, Image, keyframes } from "@chakra-ui/react";
import { motion } from "framer-motion";
const SkillStack = ({ pics, height, idx }) => {
  const animationKeyframes = keyframes`
  from {width:100%;}
  to{width:0%;}
`;
  const animation = `${animationKeyframes} infinte 5s linear`;
  return (
    <>
      <HStack>
        <Image src={pics} h={height} m={3} />
      </HStack>
    </>
  );
};

export default SkillStack;
