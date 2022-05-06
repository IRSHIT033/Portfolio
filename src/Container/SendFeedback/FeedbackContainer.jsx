import { Image, Box, Heading, Center } from "@chakra-ui/react";

import wave4 from "../../images/wave4.svg";
import { Spinner } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./form.css";

const FeedbackContainer = () => {
  const [loading, Setloading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    Setloading(true);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4mf34yy",
        "template_knchvva",
        form.current,
        "IIOC4Ut3yOLRkjk9t"
      )
      .then(
        (result) => {
          form.current.reset();
          console.log(result.text);
          Setloading(false);
        },
        (error) => {
          console.log(error.text);
          Setloading(false);
        }
      );
  };
  return (
    <>
      <Image src={wave4} />
      <Center
        bg="brand.100"
        justifyContent="center"
        h="60vh"
        flexDirection="column"
        id="Contact"
      >
        <Heading textAlign="Center" color="brand.200" m="1.5rem">
          Send FeedBack
        </Heading>

        <Center>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="email"
              name="user_email"
              placeholder="enter your email here"
              className="form-control"
              autoComplete="off"
            />
            <br></br>

            <input
              name="message"
              placeholder="write down your reviews"
              className="form-control"
              autoComplete="off"
            />
            <br></br>
            <Center>
              {loading ? (
                <Spinner color="brand.200" m={5} />
              ) : (
                <input type="submit" value="Send" className="btn-submit" />
              )}
            </Center>
            {/* <Spinner color="brand.200" /> */}
            <br></br>
          </form>
        </Center>
      </Center>
    </>
  );
};

export default FeedbackContainer;
