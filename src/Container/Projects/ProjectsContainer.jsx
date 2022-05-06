import { Center, Box, Heading } from "@chakra-ui/react";
import chatAppvideo from "../../ProjectVideos/ChatAppvideo.mp4";
import ScreeenRecordervideo from "../../ProjectVideos/ScreenrecorderPrjct.mp4";
import ProjectsSEction from "./ProjectsSEction";
import ingenium from "../../ProjectVideos/AotIngenium.mp4";
import "./font.css";

const ProjectsContainer = () => {
  const prjcts = [
    {
      videoSrc: ScreeenRecordervideo,
      Title: "Screen Recorder",
      Info: "This is a screen recorder Webapp. Where u can record your screen without using any external software.",
      TechStack: "HTML, CSS ,JS",
      Githubsrc: "https://github.com/IRSHIT033/ScreeenRecorder",
    },
    {
      videoSrc: chatAppvideo,
      Title: "Real Time Chat Application",
      Info: "This is a real time Chat Application. Where u can Talk to your friends in real time, with  realtime Notification ,check other user is typing or not features. Also groupchat is available with add remove user functionality.User Authentication Available. Implemented Authentication using JWT. For password hashing used BycrptJS",
      TechStack: "MongoDB , Express, React ,Node ,Socket.io ,Chakra UI",
      Githubsrc: "https://github.com/IRSHIT033/MERN_CHAT_APP_VIBEn",
    },
    {
      videoSrc: ingenium,
      Title: "College Web Magazine",
      Info: "This is our college's official web Magazine.Where everyone can show off their talents online. Worked in a college developer .Where we put the data(Article ,blogs, story, Artwork,College event news) in Sql database and then fetch data from database.We used php in backend .",
      TechStack: "HTML, CSS ,JS, PHP, MySQL",
      Githubsrc:
        "https://github.com/Utkarshi-Development-Team/Ingenium-Website-2021",
    },
    {
      videoSrc: "",
      Title: "Cure Connect",
      Info: "This is realtime video conferencing webApp.Where a patient can consult with their doctor in Video Chat. For implementing Realtime communication we used webRTC and socket Io. In authentication used JWT and SAWO tool.  ",
      TechStack: "REACT, MONGODB, NODEJS, EXPRESSJS",
      Githubsrc: "https://github.com/rwiteshbera/Cure-Connect-Hack-The-League",
    },
  ];
  return (
    <>
      <Center id="Projects">
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
              Githubsrc={i.Githubsrc}
            />
          );
        })}
      </Box>
    </>
  );
};

export default ProjectsContainer;
