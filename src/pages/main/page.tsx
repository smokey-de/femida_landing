"use client";

import { useGSAP } from "@gsap/react";
import {
  Box,
  Card,
  Center,
  Container,
  Divider,
  Flex,
  Image,
  Paper,
  Space,
  Text,
} from "@mantine/core";
import { IconArmchair2, IconBrain, IconChartBar } from "@tabler/icons-react";

import { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ContactForm } from "@/features/contact-form";
import {
  ClientReviews,
  Footer,
  GuidePrinciples,
  HeroHeader,
  Navbar,
  SplitterBanner,
  TeamBanner,
  TrustSection,
} from "@/shared/ui";

import s from "./style.module.scss";

gsap.registerPlugin(ScrollTrigger);

const serviceData = [
  {
    icon: <IconChartBar />,
    title: "Investment planning",
    description:
      "Tailored investment strategies to help clients grow their wealth and achieve their financial goals.",
  },
  {
    icon: <IconArmchair2 />,
    title: "Retirement planning",
    description:
      "Comprehensive retirement strategies to ensure financial security in later years.",
  },
  {
    icon: <IconBrain />,
    title: "Tax optimization",
    description:
      "Effective tax strategies to minimize liabilities and maximize returns.",
  },
];

export const MainPage = () => (
  <Flex
    direction="column"
    className={s.page}
  >
    <Navbar />
    <HeroHeader />
    <ShowServices />
    <SplitterBanner />
    <TrustSection />
    <GuidePrinciples />
    <ClientReviews />
    <TeamBanner />
    <ContactSection />
    <Footer />
  </Flex>
);

const ShowServices = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const panels = gsap.utils.toArray<HTMLElement>(".scroll-panel");

      panels.forEach((panel, index) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          end: () => `+=${panel.offsetHeight}`,
          pin: true,
          pinSpacing: false,
          scrub: true,
          id: `panel-${index}`,
        });
      });

      ScrollTrigger.create({
        trigger: panels[0],
        start: "top top",
        endTrigger: panels[panels.length - 1],
        end: "bottom bottom",
        snap: 1 / (panels.length - 1),
        id: "panel-snap",
      });

      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    },
    { scope: containerRef },
  );

  return (
    <Box
      ref={containerRef}
      mb={{ base: "130vh", sm: "120vh", md: "130vh" }}
    >
      <Container
        size="xl"
        mt="7.5rem"
        mb="2.813rem"
      >
        <Text
          component="h5"
          fw={400}
          lh="1.5rem"
          fz="1.25rem"
        >
          Services
        </Text>
        <Text
          component="h2"
          fw={600}
          lh={{ base: "2.875rem", md: "3.875rem" }}
          fz={{ base: "2.25rem", md: "3rem" }}
          lts={"-1px"}
        >
          To meet your needs
        </Text>
      </Container>

      <MainServiceContainer>
        {[
          {
            type: "Financial",
            image:
              "https://beratung.vamtam.com/wp-content/uploads/2023/07/GettyImages-1125619200-square.jpg",
          },
          {
            type: "Insurance",
            image:
              "https://beratung.vamtam.com/wp-content/uploads/2023/07/GettyImages-1138996754-1024x686.jpg",
          },
          {
            type: "Advisory",
            image:
              "https://beratung.vamtam.com/wp-content/uploads/2023/07/GettyImages-1138996754-1024x686.jpg",
          },
        ].map((section, i) => (
          <ContentWrapper
            className="scroll-panel"
            key={i}
          >
            <Box
              maw="1280px"
              m={{ base: "0 0", md: "0 auto" }}
              pos="relative"
            >
              <Center visibleFrom="md">
                <ServiceText>
                  0{i + 1} {section.type}
                </ServiceText>
              </Center>
              <Flex justify={{ base: "center", md: "flex-start" }}>
                <ServiceTitle
                  mt={{ base: "0", md: "250px" }}
                  pos={"relative"}
                  fz={{ base: "2.5rem", md: "4.375rem" }}
                  style={{ zIndex: 1000 }}
                >
                  {section.type} planning
                </ServiceTitle>
              </Flex>
              <CardWrapper>
                <Flex
                  justify={{ base: "center", md: "flex-start" }}
                  direction={{ base: "column", md: "row" }}
                  w={"100%"}
                >
                  {serviceData.map((service, index) => (
                    <ServiceCard
                      key={index}
                      p={{ base: "15px", md: "4.375rem 1.875rem 3.125rem" }}
                      maw={{ base: "100%", md: "25%" }}
                    >
                      <Flex direction={{ base: "column", md: "column" }}>
                        <CardIcon>{service.icon}</CardIcon>
                        <CardTitle>{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </Flex>
                    </ServiceCard>
                  ))}
                </Flex>
              </CardWrapper>
              <Space h="xl" />
              <Box
                pos="absolute"
                w="500px"
                h="470px"
                bottom="0"
                right="0"
                className="clipped-image"
              >
                <Image
                  w="100%"
                  h="100%"
                  src={section.image}
                  alt={section.type}
                  visibleFrom="md"
                />
              </Box>
            </Box>
          </ContentWrapper>
        ))}
      </MainServiceContainer>
    </Box>
  );
};

const ContactSection = () => (
  <Container
    size="xl"
    component="section"
    id="contact"
    mb={80}
  >
    <Space h="8.125rem" />
    <Box>
      <Text
        component="h5"
        fw={400}
        lh="1.5rem"
        fz="1.25rem"
      >
        Get started
      </Text>
      <Text
        component="h2"
        fw={600}
        lh={{ base: "2.875rem", md: "3.875rem" }}
        fz={{ base: "32px", md: "48px" }}
      >
        Schedule your personalized consultation today
      </Text>
    </Box>
    <Space h="1rem" />

    <Flex visibleFrom="md">
      <Flex
        direction="column"
        gap="0.75rem"
        flex={1}
      >
        <Image
          src="https://beratung.vamtam.com/wp-content/uploads/2023/07/GettyImages-1138996754-1024x686.jpg"
          alt="Contact Us"
        />
        <Text
          fz="0.875rem"
          fw={500}
          lh="1.313rem"
          c="rgb(95, 101, 103)"
        >
          OR REACH US AT:
        </Text>
        <Divider my="md" />
        <Text
          fz="1rem"
          fw={400}
          lh="1.375rem"
          c="rgb(95, 101, 103)"
        >
          T: 1-800-356-8933
        </Text>
        <Text
          fz="1rem"
          fw={400}
          lh="1.375rem"
          c="rgb(95, 101, 103)"
        >
          E: office@beratung.com
        </Text>
        <Text
          fz="1rem"
          fw={400}
          lh="1.375rem"
          c="rgb(95, 101, 103)"
        >
          Seventh Ave, 20th Floor New York
        </Text>
      </Flex>
      <Paper
        flex={1}
        bdrs={0}
        px="1rem"
      >
        <ContactForm />
      </Paper>
    </Flex>

    <Flex
      direction={"column"}
      hiddenFrom="md"
    >
      <Flex
        direction="column"
        gap="0.75rem"
        flex={1}
      >
        <Image
          src="https://beratung.vamtam.com/wp-content/uploads/2023/07/GettyImages-1138996754-1024x686.jpg"
          alt="Contact Us"
        />
        <Divider my="md" />

        <ContactForm />
      </Flex>
      <Flex
        flex={1}
        bdrs={0}
        px="1rem"
        direction={"column"}
        gap={"0.75rem"}
      >
        <Divider my="md" />

        <Text
          fz="0.875rem"
          fw={500}
          lh="1.313rem"
          c="rgb(95, 101, 103)"
        >
          OR REACH US AT:
        </Text>

        <Text
          fz="1rem"
          fw={400}
          lh="1.375rem"
          c="rgb(95, 101, 103)"
        >
          T: 1-800-356-8933
        </Text>
        <Text
          fz="1rem"
          fw={400}
          lh="1.375rem"
          c="rgb(95, 101, 103)"
        >
          E: office@beratung.com
        </Text>
        <Text
          fz="1rem"
          fw={400}
          lh="1.375rem"
          c="rgb(95, 101, 103)"
        >
          Seventh Ave, 20th Floor New York
        </Text>
      </Flex>
    </Flex>
  </Container>
);

const MainServiceContainer = Container.withProps({
  fluid: true,
  m: 0,
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
  style: { zIndex: 1 },
});

const ServiceCard = Card.withProps({
  bg: "#fff",
  bdrs: "0",
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
