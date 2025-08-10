"use client";

import { Box, Text, Image, Flex, Container } from "@mantine/core";

import { useMemo, useLayoutEffect, useRef } from "react";

import { useParams } from "next/navigation";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { people } from "@/pages/people/page";
import { BaseLink, Navbar, Footer } from "@/shared/ui";

import s from "./style.module.scss";

gsap.registerPlugin(ScrollTrigger);

export const PersonPage = () => {
  const params = useParams();
  const slug = params?.slug as string;
  const rightRef = useRef<HTMLDivElement>(null);

  const person = useMemo(() => {
    return people.find((p) => p.slug === slug);
  }, [slug]);

  useLayoutEffect(() => {
    if (!rightRef.current) return;

    const ctx = gsap.context(() => {
      const elements = rightRef.current!.querySelectorAll(
        "div, p, h1, h2, h3, span",
      );

      gsap.fromTo(
        elements,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 50,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: rightRef.current!,
            start: "top 80%",
            end: "bottom 100%",
            scrub: true,
          },
        },
      );
    }, rightRef);

    return () => ctx.revert();
  }, []);

  if (!person) return <Text p="md">Сотрудник не найден</Text>;

  return (
    <Flex direction="column">
      <Navbar darkMode />

      <Container
        size="xl"
        w="100%"
        maw={1280}
        mt={121}
        mb={80}
      >
        <Flex
          gap={140}
          align="flex-start"
          direction={{ base: "column", md: "row" }}
        >
          <Box
            w={"50%"}
            pos={"sticky"}
            top="50%"
            className={s.vector}
            style={{ transform: "translateY(-45%)", alignSelf: "flex-start" }}
            visibleFrom="md"
          >
            <Image
              src={person.img}
              alt={person.title}
            />
          </Box>

          <Flex
            w={"100%"}
            hiddenFrom="md"
            align={"center"}
            justify={"center"}
            pos={"relative"}
          >
            <Image
              w={"70%"}
              src={person.img}
              alt={person.title}
            />
          </Flex>

          <Flex
            direction="column"
            justify={"center"}
            align={{ base: "center", md: "flex-start" }}
            gap="md"
            w={{ base: "100%", md: "50%" }}
            ref={rightRef}
          >
            <Text
              fz={{ base: 32, md: 48 }}
              fw={700}
            >
              {person.title}
            </Text>
            <Text
              fz={{ base: 20, md: 24 }}
              style={{ color: "#8fd299" }}
            >
              {person.subtitle}
            </Text>
            <Text
              fz={{ base: 16, md: 18 }}
              mt="md"
            >
              {person.about}
            </Text>
            <Text fz={18}>
              Наша команда объединяет специалистов с уникальным опытом и
              глубокими знаниями в своей области. Мы ценим внимание к деталям,
              умение находить нестандартные решения и стремление к совершенству.
              Виктория и Камила работают в тесном взаимодействии с клиентами и
              партнёрами, помогая достигать поставленных целей и создавать
              долгосрочные ценности. Их профессионализм и вовлечённость — это
              надёжная основа для успешной реализации даже самых сложных
              проектов.
            </Text>

            <BaseLink
              style={{ color: "#8fd299" }}
              maw={130}
              mt={60}
              href="/people"
            >
              Назад к команде
            </BaseLink>
          </Flex>
        </Flex>
      </Container>

      <Footer />
    </Flex>
  );
};
