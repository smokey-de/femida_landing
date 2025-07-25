"use client";

import {
  Container,
  Divider,
  Flex,
  Image,
  Space,
  Text,
  Box,
  Card,
  Center,
  Paper,
} from "@mantine/core";

import { ContactForm } from "@/features/contact-form";
import {
  ClientReviews,
  GuidePrinciples,
  HeroHeader,
  IndustriesSection,
  Navbar,
  SplitterBanner,
  TrustSection,
  MotivationInsight,
  TeamBanner,
} from "@/shared/ui";

import s from "./style.module.scss";

export const MainPage = () => (
  <Flex
    direction="column"
    className={s.page}
  >
    <Navbar />
    <HeroHeader />
    <IndustriesSection />
    <SplitterBanner />
    <TrustSection />
    <GuidePrinciples />
    <ClientReviews />
    <TeamBanner />
    <MainServiceContainer>
      <ContentWrapper>
        <Box
          maw={"1280px"}
          m={"0 auto"}
          pos={"relative"}
        >
          <Center>
            <ServiceText>01 Financial</ServiceText>
          </Center>
          <ServiceTitle mt={"250px"}>Financial planning</ServiceTitle>
          <CardWrapper>
            <ServiceCard>
              <CardIcon>icon</CardIcon>
              <CardTitle>Investment planning </CardTitle>
              <CardDescription>
                Tailored investment strategies to help clients grow their wealth
                and achieve their financial goals.
              </CardDescription>
            </ServiceCard>
            <ServiceCard>
              <CardIcon>icon2</CardIcon>
              <CardTitle>Investment planning </CardTitle>
              <CardDescription>
                Tailored investment strategies to help clients grow their wealth
                and achieve their financial goals.
              </CardDescription>
            </ServiceCard>
            <ServiceCard>
              <CardIcon>icon3</CardIcon>
              <CardTitle>Investment planning </CardTitle>
              <CardDescription>
                Tailored investment strategies to help clients grow their wealth
                and achieve their financial goals.
              </CardDescription>
            </ServiceCard>
          </CardWrapper>
          <Space h="xl" />
          <Box
            pos={"absolute"}
            w={"500px"}
            h={"470px"}
            bottom={"0"}
            right={"0"}
            className="clipped-image"
          >
            <Image
              w={"100%"}
              h={"100%"}
              src={
                "https://beratung.vamtam.com/wp-content/uploads/2023/07/GettyImages-1125619200-square.jpg"
              }
              alt="service"
            />
          </Box>
        </Box>
      </ContentWrapper>
    </MainServiceContainer>
    <ContactSection />
    <MotivationInsight />
  </Flex>
);

const ContactSection = () => (
  <Container
    size={"lg"}
    component={"section"}
    id="contact"
  >
    <Space h={"8.125rem"} />
    <Box>
      <Text
        component="h5"
        fw={400}
        lh={"1.5rem"}
        fz={"1.25rem"}
      >
        Get started
      </Text>
      <Text
        component="h2"
        fw={600}
        lh={"3.875rem"}
        fz={"3rem"}
      >
        Schedule your personalized consultation today
      </Text>
    </Box>
    <Space h={"1rem"} />

    <Flex>
      <Flex
        direction={"column"}
        gap={"0.75rem"}
        flex={1}
      >
        <Image
          src="https://beratung.vamtam.com/wp-content/uploads/2023/07/GettyImages-1138996754-1024x686.jpg"
          alt="Contact Us"
        />
        <Text
          fz={"0.875rem"}
          fw={500}
          lh={"1.313rem"}
          c={"rgb(95, 101, 103)"}
        >
          OR REACH US AT:
        </Text>
        <Divider my="md" />
        <Text
          fz={"1rem"}
          fw={400}
          lh={"1.375rem"}
          c={"rgb(95, 101, 103)"}
        >
          T: 1-800-356-8933
        </Text>
        <Text
          fz={"1rem"}
          fw={400}
          lh={"1.375rem"}
          c={"rgb(95, 101, 103)"}
        >
          E: office@beratung.com
        </Text>
        <Text
          fz={"1rem"}
          fw={400}
          lh={"1.375rem"}
          c={"rgb(95, 101, 103)"}
        >
          Seventh Ave, 20th Floor New York
        </Text>
      </Flex>
      <Paper
        flex={1}
        bdrs={0}
        px={"1rem"}
      >
        <ContactForm />
      </Paper>
    </Flex>
  </Container>
);

const MainServiceContainer = Container.withProps({
  fluid: true,
  px: "2rem",
});

const ContentWrapper = Paper.withProps({
  bdrs: 0,
  shadow: "none",
  bg: "#E7E8DB",
  p: "1rem 1.25rem 3.125rem",
});

const ServiceText = Text.withProps({
  component: "p",
  fw: 600,
  fz: "0.875rem",
  lh: "1.25rem",
  c: "rgba(0, 0, 0, 0.5)",
});

const ServiceTitle = Text.withProps({
  component: "h3",
  fw: 700,
  fz: "4.375rem",
  lh: "4.375rem",
  c: "rgba(0, 0, 0, 0.5)",
  mb: "1.25rem",
});

const CardWrapper = Flex.withProps({
  gap: "1px",
  pos: "relative",
});

const ServiceCard = Card.withProps({
  bg: "#fff",
  bdrs: "0",
  maw: "25%",
  p: "4.375rem 1.875rem 3.125rem",
});

const CardIcon = Text.withProps({
  component: "span",
  w: "100%",
  mb: "1rem",
});

const CardTitle = Text.withProps({
  component: "h5",
  fz: "1.25rem",
  fw: 400,
  lh: "1.5rem",
  c: "rgb(22, 22, 22)",
  m: "0.875rem 0 1.25rem",
});

const CardDescription = Text.withProps({
  component: "p",
  fw: 400,
  fz: "0.875rem",
  lh: "1.25rem",
  c: "rgb(95, 101, 103)",
});

const CardImage = {};
