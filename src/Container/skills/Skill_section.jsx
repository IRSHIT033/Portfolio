import React from "react";
import { Card_section } from "./Card_section";
import Skill_container from "./Skill_container";
import Title from "./Title";

const Skill_section = () => {
  return (
    <>
      <Title title={"SKILLS"} />
      <Skill_container />
      <Card_section />
    </>
  );
};

export default Skill_section;
