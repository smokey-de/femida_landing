"use client";

import {
  Box,
  BoxProps,
  Container,
  Divider,
  Flex,
  Image,
  Space,
  Text,
} from "@mantine/core";

import { BaseLink } from "../link";

export const TrustSection = () => {
  return (
    <Container
      size="xl"
      component="section"
      id="trust"
    >
      <Space h="5rem" />
      <Flex
        direction="column"
        gap="0.75rem"
        w={{ base: "100%", md: "60%", lg: "50%" }}
      >
        <Text
          component="h5"
          fw={400}
          lh="1.5rem"
          fz="1.25rem"
        >
          Почему мы
        </Text>
        <Text
          component="h2"
          fw={600}
          lh={{ base: "2.5rem", md: "3.875rem" }}
          fz={{ base: "2rem", sm: "2.5rem", lg: "3rem" }}
        >
          Надёжные эксперты с опытом и профессиональными аккредитациями
        </Text>
      </Flex>

      <Flex
        direction={{ base: "column", lg: "row" }}
        justify="space-between"
        align="center"
        mt={{ base: "1.5rem", md: "3rem" }}
        gap={{ base: "3rem", lg: 0 }}
        mb="6.25rem"
      >
        {/* Текстовый блок */}
        <Box w={{ base: "100%", lg: "30%" }}>
          <Flex
            direction="column"
            gap="1.25rem"
            my="2rem"
          >
            <Description>
              В FEMIDA FINANCE мы сопровождаем вас в финансовых и юридических
              вопросах с экспертизой, честностью и индивидуальным подходом. Наша
              команда специалистов помогает вам достигать целей и развивать
              бизнес уверенно.
            </Description>
            <Description>
              Наша миссия — дать вам знания и инструменты для принятия верных
              решений, обеспечения стабильности и долгосрочного успеха.
            </Description>
          </Flex>
          <BaseLink
            href="/"
            c="black"
          >
            О нас
          </BaseLink>
        </Box>

        {/* Блок с изображением */}
        <Box w={{ base: "85%", sm: "55%", lg: "40%" }}>
          <Image
            width="100%"
            height="auto"
            src="https://beratung.vamtam.com/wp-content/uploads/2023/07/GettyImages-1408433542.svg"
            alt="Описание"
          />
        </Box>

        {/* Блок с цифрами */}
        <Box w={{ base: "100%", lg: "25%" }}>
          <Flex
            direction="column"
            gap="1.25rem"
            my="1rem"
          >
            <InfoContent
              ml={{ base: 0, md: "25%", lg: "50%" }}
              value="10"
              label="ЛЕТ ОПЫТА"
              description="Десятилетие проверенной практики и знаний."
            />
            <InfoContent
              hasDivider
              ml={{ base: 0, md: "10%", lg: "25%" }}
              value="110"
              label="КЛИЕНТОВ"
              description="Сотни довольных предпринимателей по всему Узбекистану."
            />
            <InfoContent
              hasDivider
              ml={0}
              value="20+"
              label="СПЕЦИАЛИСТОВ"
              description="Команда экспертов, готовых помочь в любой ситуации."
            />
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

const Description = Text.withProps({
  c: "rgb(95, 101, 103)",
  fz: "1.125rem",
  lh: "1.875rem",
  fw: 400,
});

type InfoContentProps = BoxProps & {
  hasDivider?: boolean;
  value: string;
  label: string;
  description: string;
};

const InfoContent = ({
  hasDivider,
  value,
  label,
  description,
  ...props
}: InfoContentProps) => (
  <Box {...props}>
    {hasDivider && <Divider my="md" />}
    <Text
      fw={600}
      fz={{ base: "36px", md: "48px" }}
      lh="3.875rem"
    >
      {value}
    </Text>
    <Text
      fw={500}
      fz="0.875rem"
      lh="1.125rem"
    >
      {label}
    </Text>
    <Text
      c="rgb(95, 101, 103)"
      fz="0.875rem"
      lh="1.125rem"
      fw={400}
    >
      {description}
    </Text>
  </Box>
);
