"use client";

import { Box, Text, Image, Flex, Container } from "@mantine/core";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

import { BaseLink, Navbar, Footer } from "@/shared/ui";

import s from "@/pages/person/style.module.scss";

gsap.registerPlugin(ScrollTrigger);

interface Person {
  slug: string;
  img: string;
  titleKey: string;
  subtitleKey: string;
  aboutKey: string;
}

interface PersonDetailsClientProps {
  person: Person;
}

const PersonDetailsClient = ({ person }: PersonDetailsClientProps) => {
  const t = useTranslations("people");
  const rightRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!rightRef.current) return;

    const ctx = gsap.context(() => {
      const elements = rightRef.current!.querySelectorAll(
        "div, p, h1, h2, h3, span"
      );

      gsap.fromTo(
        elements,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: rightRef.current!,
            start: "top 80%",
            end: "bottom 100%",
            scrub: true,
          },
        }
      );
    }, rightRef);

    return () => ctx.revert();
  }, []);

  return (
    <Flex direction="column">
      <Navbar darkMode />

      <Container size="xl" w="100%" maw={1280} mt={121} mb={80}>
        <Flex gap={140} align="flex-start" direction={{ base: "column", md: "row" }}>
          <Box
            w={"50%"}
            pos={"sticky"}
            top="50%"
            className={s.vector}
            style={{ transform: "translateY(-45%)", alignSelf: "flex-start" }}
            visibleFrom="md"
          >
            <Image src={person.img} alt={t(person.titleKey)} />
          </Box>

          <Flex w={"100%"} hiddenFrom="md" align={"center"} justify={"center"} pos={"relative"}>
            <Image w={"70%"} src={person.img} alt={t(person.titleKey)} />
          </Flex>

          <Flex
            direction="column"
            justify={"center"}
            align={{ base: "center", md: "flex-start" }}
            gap="md"
            w={{ base: "100%", md: "50%" }}
            ref={rightRef}
          >
            <Text fz={{ base: 32, md: 48 }} fw={700}>
              {t(person.titleKey)}
            </Text>
            <Text fz={{ base: 20, md: 24 }} style={{ color: "#8fd299" }}>
              {t(person.subtitleKey)}
            </Text>
            <Text fz={{ base: 16, md: 18 }} mt="md">
              {t(person.aboutKey)}
            </Text>
            <Text fz={18}>
                {t("personpage_more")}
            </Text>

            <BaseLink style={{ color: "#8fd299" }} maw={130} mt={60} href="/people">
            {t("personpage_btn")}
            </BaseLink>
          </Flex>
        </Flex>
      </Container>

      <Footer />
    </Flex>
  );
};

export default PersonDetailsClient;
