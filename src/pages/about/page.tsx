"use client";

import { Box, Divider, Flex } from "@mantine/core";

import { Navbar, Footer, OtherHeader } from "@/shared/ui";

import s from "./style.module.scss";

export const AboutPage = () => {
  return (
    <Flex
      direction="column"
      className={s.page}
    >
      <Navbar />

      <Box>
        <OtherHeader
          aboutTitle="About"
          title="Building Bridges for Sustainable and Inclusive Growth"
          description="At Breatung, we are a renowned global consulting firm committed to collaborating with business and societal leaders in overcoming their most critical challenges and seizing their greatest opportunities. 
            Our achievements are rooted in fostering deep collaboration and cultivating a global community of diverse individuals who are dedicated to making positive contributions to the world and to one another on a daily basis."
        />
      </Box>

      <Divider
        size={"1px"}
        color="#00000026"
      />

      <Footer />
    </Flex>
  );
};
