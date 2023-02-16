import { Center, Image, keyframes, Spacer, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
const SkillStack = ({ pics, height, name, idx }) => {
  const animationKeyframes = keyframes`
  from {width:100%;}
  to{width:0%;}
`;
  const animation = `${animationKeyframes} infinte 5s linear`;
  return (
    <>
      <Center w="100%" padding="0.2rem 1.5rem ">
        <Image src={pics} h={height} />
        {idx != 0 ? (
          <>
            <Spacer />
            <Text>{name}</Text>
          </>
        ) : null}
      </Center>
    </>
  );
};

export default SkillStack;
