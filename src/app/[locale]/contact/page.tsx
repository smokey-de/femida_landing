"use client";

import { Box, Container, Divider, Flex, Text } from "@mantine/core";

import { ContactForm } from "@/features/contact-form";
import s from "@/pages/contact/style.module.scss";
import { Navbar, Footer, OtherHeader } from "@/shared/ui";

const ContactPage = () => {
  return (
    <Flex
      direction="column"
      className={s.page}
    >
      <Navbar darkMode />

      <Box>
        <OtherHeader
          aboutTitle="Контакты"
          title="Профессиональная финансовая помощь — всего в одном звонке"
          description="Хотите найти ближайший офис? Чтобы связаться с нами, заполните форму ниже. Мы используем ваши данные исключительно для ответа на ваш запрос. Подробнее см. в нашей Политике конфиденциальности."
        />
      </Box>

      <Container
        size={"xl"}
        mb={"40px"}
        maw={1280}
        w={"100%"}
      >
        <Divider
          size={"1px"}
          color="#00000026"
        />
        <Text
          size="xl"
          fw={"600"}
          fz={{ base: 32, md: 48 }}
          h={"100%"}
          my={"60px"}
          w={"100%"}
        >
          Форма обратной связи
        </Text>
        <ContactForm />
      </Container>

      <Footer />
    </Flex>
  );
};

export default ContactPage;
