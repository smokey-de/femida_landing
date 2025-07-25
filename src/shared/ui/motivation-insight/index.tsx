import { useGSAP } from "@gsap/react";
import { Box, Container, Flex, Text } from "@mantine/core";

import { use, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const MotivationInsight = () => {
  return (
    <Box
      component={"section"}
      id="motivation-insight"
      mt={"5rem"}
      w={"100%"}
      // mb={"5rem"}
    >
      <LinksWrapper />
      <CheapWords />
      <Footer />
    </Box>
  );
};

const LinksWrapper = () => (
  <Flex w={"100%"}>
    <Box
      flex={1}
      bg={"#374A47"}
      ta={"end"}
      p={"1.5rem"}
    />
    <Box
      flex={1}
      bg={"#8FD299"}
      ta={"start"}
      p={"1.5rem"}
    />
  </Flex>
);

const CheapWords = () => {
  const textBoxRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        textBoxRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textBoxRef.current,
            start: "top 90%", // <--- earlier start (from further down)
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        },
      );
    },
    { scope: textBoxRef },
  );

  return (
    <Box bg={"#1B2523"}>
      <Container
        py={"3.125rem"}
        ref={textBoxRef}
      >
        <Text
          component="h3"
          c={"#8FD299"}
          fz={"1.875rem"}
          lh={"25px"}
          fw={500}
          mb={"1.25rem"}
        >
          Building wealth, creating futures.
        </Text>
        <Text
          c={"#FFFFFF"}
          fz={"0.875rem"}
          lh={"1.25rem"}
          fw={400}
        >
          Trusted financial consulting firm providing expert guidance and
          personalized solutions to help clients unlock their full financial
          potential.
        </Text>
      </Container>
    </Box>
  );
};

const Footer = () => {
  return <Container component={"footer"}>footer</Container>;
};
