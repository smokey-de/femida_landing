"use client";

import { Anchor, Box, Container, Flex, Image, Text } from "@mantine/core";
import { IconCaretRightFilled, IconPhoneFilled } from "@tabler/icons-react";

import { BtnBasic } from "../btn-basic/ui";
import { BaseLink } from "../link";
import s from "./style.module.scss";

export const OtherFooter = () => (
  <Flex
    mt={"65px"}
    direction={"column"}
  >
    <Flex
      w={"100%"}
      align={"center"}
      justify={"center"}
    >
      <Flex
        w={"50%"}
        justify={"flex-end"}
        style={{ backgroundColor: "#374b47" }}
        pos={"relative"}
      >
        <Image
          src={
            "https://beratung.vamtam.com/wp-content/uploads/2023/06/fav-icon-150x150.png"
          }
          pos={"absolute"}
          w={"130px"}
          bottom={0}
          left={198}
        />

        <BtnBasic
          variant="filled"
          color="#374b47"
          leftSection={<IconPhoneFilled />}
          className={s.topLeft}
          size="xl"
          w={"55%"}
        >
          1-800-356-8933
        </BtnBasic>
      </Flex>
      <Flex
        w={"50%"}
        justify={"flex-start"}
        style={{ backgroundColor: "#8fd299" }}
      >
        <BtnBasic
          variant="filled"
          color="#8fd299"
          rightSection={<IconCaretRightFilled />}
          className={s.topRight}
          size="xl"
          w={"80%"}
        >
          Schedule a free consultation
        </BtnBasic>
      </Flex>
    </Flex>

    <Flex
      direction={"column"}
      style={{ backgroundColor: "#1B2524" }}
    >
      <Container size={"xl"}>
        <Flex
          direction={"row"}
          style={{ borderBottom: "1px solid #e4edf3" }} 
          className={s.secTop}
        >
          <Flex
            align={"flex-start"}
            w={"15%"}
          >
            <Anchor
              unstyled
              fz={"15px"}
              fw={700}
              tt={"uppercase"}
              lh={"1.5em"}
              lts={"-.3px"}
              ff={"Geologica"}
              className={s.logoLink}
            >
              Beratung
            </Anchor>
          </Flex>
          <Flex
            direction={"column"}
            pr={"435px"}
            pt={45}
            pb={45}
            gap={10}
          >
            <Text
              className={s.titleText}
              ff={"Geologica"}
              fz={30}
              fw={500}
              fs={"normal"}
              lh={"1.3em"}
              lts={"-1px"}
            >
              Building wealth, creating futures.
            </Text>
            <Text
              fz={14}
              lh={"1.4em"}
              className={s.about}
            >
              Trusted financial consulting firm providing expert guidance and
              personalized solutions to help clients unlock their full financial
              potential.
            </Text>
          </Flex>
        </Flex>

        <Flex
          direction={"row"}
          align={"center"}
          gap={50}
          pt={45}
          pb={45}
          className={s.secBot}
        >
          <Image
            src={
              "https://beratung.vamtam.com/wp-content/uploads/2023/07/expertise-award.svg"
            }
            w={118}
            h={80}
          />

          <BaseLink>Services</BaseLink>
          <BaseLink>People</BaseLink>
          <BaseLink>About</BaseLink>
          <BaseLink>Contact</BaseLink>
        </Flex>
      </Container>
    </Flex>
  </Flex>
);
    