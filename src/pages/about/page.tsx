"use client";

import { Box, Flex } from "@mantine/core";

import {
  Navbar,
  OtherFooter,
  OtherHeader,
} from "@/shared/ui";

import s from "./style.module.scss";



export const AboutPage = () => {
  return (
    <Flex
      direction="column"
      className={s.page}
    >
      <Navbar />

      <Box mb={"40px"} style={{ borderBottom: "1px solid #00000026" }}>
        <OtherHeader
          aboutTitle="About"
          title="Building Bridges for Sustainable and Inclusive Growth"
          description="At Breatung, we are a renowned global consulting firm committed to collaborating with business and societal leaders in overcoming their most critical challenges and seizing their greatest opportunities. 
            Our achievements are rooted in fostering deep collaboration and cultivating a global community of diverse individuals who are dedicated to making positive contributions to the world and to one another on a daily basis."
        />
      </Box>    


      <OtherFooter />
    </Flex>
  );
};
