import { Image, Box, Heading, Center } from "@chakra-ui/react";
import wave3 from "../../images/wave3.svg";
import wave4 from "../../images/wave4.svg";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./form.css";

const FeedbackContainer = () => {
  const form = useRef();

  const sendEmail = (e) => {
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
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <Box bg="brand.100" justifyContent="center" h="auto">
        <Heading textAlign="Center" color="brand.200">
          Send FeedBack
        </Heading>

        <Center>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="email"
              name="user_email"
              placeholder="enter your email here"
              className="form-control"
              autocomplete="off"
            />
            <br></br>

            <input
              name="message"
              placeholder="write down your reviews"
              className="form-control"
              autocomplete="off"
            />
            <br></br>
            <Center>
              <input type="submit" value="Send" className="btn-submit" />
            </Center>
            <br></br>
          </form>
        </Center>
      </Box>
    </>
  );
};

export default FeedbackContainer;
