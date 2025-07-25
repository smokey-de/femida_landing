"use client";

import { Box, Container, Flex } from "@mantine/core";

import { ContactForm } from "@/features/contact-form";
import {
  Navbar,
  OtherFooter,
  OtherHeader,
} from "@/shared/ui";

import s from "./style.module.scss";


export const ContactPage = () => {
  return (
    <Flex
      direction="column"
      className={s.page}
    >
      <Navbar />

      <Box mb={"40px"} pb={110} style={{ borderBottom: "1px solid #00000026" }}>
        <OtherHeader
          aboutTitle="Contacts"
          title="Expert Financial Guidance Just a Call Away"
          description="Need to find a local office? We have 12 worldwide. To contact us, please complete the form below. We will use your information to communicate with you regarding your inquiry or request. For more information, please see our Privacy Notice."
        />
      </Box>

        <Container size={"xl"} w={1280}>

            <ContactForm  />

        </Container>

      <OtherFooter />
    </Flex>
  );
};
