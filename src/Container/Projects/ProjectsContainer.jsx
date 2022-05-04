import { Center, Box, Heading } from "@chakra-ui/react";
import chatAppvideo from "../../ProjectVideos/ChatAppvideo.mp4";
import ScreeenRecordervideo from "../../ProjectVideos/ScreenrecorderPrjct.mp4";
import ProjectsSEction from "./ProjectsSEction";
import "./font.css";

const ProjectsContainer = () => {
  const prjcts = [
    {
      videoSrc: ScreeenRecordervideo,
      Title: "Screen Recorder",
      Info: "This is a screen recorder Webapp. Where u can record your screen without using any external software.",
      TechStack: "HTML, CSS ,JS",
    },
    {
      videoSrc: chatAppvideo,
      Title: "Real Time Chat Application",
      Info: "This is a real time Chat Application. Where u can Talk to your friends in real time, with  realtime Notification ,check other user is typing or not features. Also groupchat is available with add remove user functionality.User Authentication Available. Implemented Authentication using JWT. For password hashing used BycrptJS",
      TechStack: "MongoDB , Express, React ,Node ,Socket.io ,Chakra UI",
    },
  ];
  return (
    <>
      <Center>
        <Heading size="4xl" className="title" color="brand.200">
          PROJECTS
        </Heading>
      </Center>
      <Box>
        {prjcts.map((i, idx) => {
          return (
            <ProjectsSEction
              key={idx}
              idx={idx + 1}
              videoSrc={i.videoSrc}
              Title={i.Title}
              info={i.Info}
              techStack={i.TechStack}
            />
          );
        })}
      </Box>
    </>
  );
};

export default ProjectsContainer;
