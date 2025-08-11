"use client";

import { Box, Container, Divider, Flex, Text } from "@mantine/core";
import { ContactForm } from "@/features/contact-form";
import s from "@/pages/contact/style.module.scss";
import { Navbar, Footer, OtherHeader } from "@/shared/ui";
import { useTranslations } from "next-intl";

const ContactPage = () => {
  const t = useTranslations("contact");

  return (
    <Flex direction="column" className={s.page}>
      <Navbar darkMode />

      <Box>
        <OtherHeader
          aboutTitle={t("aboutTitle")}
          title={t("title")}
          description={t("description")}
        />
      </Box>

      <Container size="xl" mb="40px" maw={1280} w="100%">
        <Divider size="1px" color="#00000026" />
        <Text
          size="xl"
          fw={600}
          fz={{ base: 32, md: 48 }}
          h="100%"
          my="60px"
          w="100%"
        >
          {t("formTitle")}
        </Text>
        <ContactForm />
      </Container>

      <Footer />
    </Flex>
  );
};

export default ContactPage;
