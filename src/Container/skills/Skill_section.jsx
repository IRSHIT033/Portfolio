import React from "react";
import { Card_section } from "./Card_section";
import Skill_container from "./Skill_container";
import Title from "./Title";
import wave2 from "../../images/wave1.svg";
import { Image } from "@chakra-ui/react";
const Skill_section = () => {
  return (
    <>
      <Title title={"SKILLS"} />
      <Skill_container />
      <Card_section />
      <Image src={wave2} />
    </>
  );
};

export default Skill_section;
