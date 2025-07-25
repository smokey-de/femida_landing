"use client";

import { Box, Container, Divider, Flex, Text } from "@mantine/core";

import { ContactForm } from "@/features/contact-form";
import { Navbar, Footer, OtherHeader } from "@/shared/ui";

import s from "./style.module.scss";

export const ContactPage = () => {
  return (
    <Flex
      direction="column"
      className={s.page}
    >
      <Navbar />

      <Box>
        <OtherHeader
          aboutTitle="Contacts"
          title="Expert Financial Guidance Just a Call Away"
          description="Need to find a local office? We have 12 worldwide. To contact us, please complete the form below. We will use your information to communicate with you regarding your inquiry or request. For more information, please see our Privacy Notice."
        />
      </Box>

      <Container
        size={"xl"}
        mb={"40px"}
        w={1280}
      >
        <Divider
          size={"1px"}
          color="#00000026"
        />
        <Text
          size="xl"
          fw={"600"}
          fz={"48px"}
          h={"100%"}
          my={"60px"}
          w={"100%"}
        >
          Contact form
        </Text>
        <ContactForm />
      </Container>

      <Footer />
    </Flex>
  );
};
