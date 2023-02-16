import { Center, Box, Heading } from "@chakra-ui/react";
import chatAppvideo from "../../ProjectVideos/ChatAppvideo.mp4";
import ScreeenRecordervideo from "../../ProjectVideos/ScreenrecorderPrjct.mp4";
import ProjectsSEction from "./ProjectsSEction";
import ingenium from "../../ProjectVideos/AotIngenium.mp4";
import CureConenctvdo from "../../ProjectVideos/CureConnect (2).mp4";
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
      videoSrc: CureConenctvdo,
      Title: "Cure Connect",
      Info: "This is realtime video conferencing webApp.Where a patient can consult with their doctor in Video Chat. For implementing Realtime communication we used webRTC and socket Io. In authentication used JWT and SAWO tool.  ",
      TechStack: "REACT, MONGODB, NODEJS, EXPRESSJS",
      Githubsrc: "https://github.com/rwiteshbera/Cure-Connect-Hack-The-League",
    },
    {
      videoSrc:
        "https://ik.imagekit.io/dgyjhsxq7/Sol-1__1__-_Copy_v9uTb4RmH.m4v?ik-sdk-version=javascript-1.4.3&updatedAt=1652716321687",
      Title: "SOLGUIDE",
      Info: "This is a doubt solving WebApp where people can solve their doubts by posting it to the feed and others will help them in realtime communication system ",
      TechStack: "REACT, APPWRITE SDK TOOL (WEB)",
      Githubsrc: "https://github.com/IRSHIT033/Appwrite",
    },
    {
      videoSrc:
        "https://ik.imagekit.io/egfxwp4jill/videoplayback_Xhziuqh7_.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1676536818395",
      Title: "Decent Mail",
      Info: "Decent Mail is which is built on blockchain rather than a normal smtp server. Allows users to e-mail a smart contract that will be generated and accepted peer to peer via e-mail. Users can control & manage their data and information. ",
      TechStack: "React Ethers.js Polygon Solidity Filecoin Alchemy",
      Githubsrc: "https://github.com/IRSHIT033/Hacking-Heist-2.0__Decent_mail",
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
