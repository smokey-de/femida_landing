"use client";

import { Box, Text, Image, Flex, Container } from "@mantine/core";

import { useMemo, useLayoutEffect, useRef } from "react";

import { useParams } from "next/navigation";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import s from "./style.module.scss";

import { people } from "@/pages/people/page";
import { BaseLink, Navbar, OtherFooter } from "@/shared/ui";

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
      const elements = rightRef.current!.querySelectorAll("div, p, h1, h2, h3, span");

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
            end: "bottom 20%",
            scrub: true,
          },
        }
      );
    }, rightRef);

    return () => ctx.revert();
  }, []);

  if (!person) return <Text p="md">Person Not Found</Text>;

  return (
    <Flex direction="column">
      <Navbar />

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
        >
          <Box
            w="50%"
            pos="sticky"
            top="50%"
            className={s.vector}
            style={{ transform: "translateY(-45%)", alignSelf: "flex-start" }}
          >
            <Image
              src={person.img}
              alt={person.title}
            />
          </Box>

          <Flex
            direction="column"
            gap="md"
            w="50%"
            ref={rightRef}
          >
            <Text
              fz={48}
              fw={700}
            >
              {person.title}
            </Text>
            <Text
              fz={24}
              style={{color: "#8fd299"}}
            >
              {person.subtitle}
            </Text>
            <Text
              fz={18}
              mt="md"
            >
              {person.about}
            </Text>
            <Text fz={18}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              recusandae voluptatem, modi in numquam inventore laborum, non,
              ipsa ducimus officiis beatae earum est vel? Recusandae iusto amet
              culpa porro commodi. Quisquam enim, dignissimos fugiat quia,
              debitis perferendis earum ex nulla sunt veniam eius eligendi ipsum
              quaerat qui animi. Sequi voluptate possimus temporibus voluptatem
              sint iure praesentium ea. Eveniet, nesciunt illum? Possimus
              suscipit eaque vero optio incidunt eveniet, consequuntur,
              dignissimos nesciunt fuga quo illo mollitia sed odio cupiditate
              labore rerum provident harum maiores doloribus corrupti accusamus!
              Exercitationem perferendis ipsum at repellat. Sequi corporis,
              esse, quod incidunt eos dolorem officia enim neque delectus
              laboriosam deleniti aspernatur asperiores. Minus sit porro
              voluptates, omnis numquam ea ex laudantium illum quibusdam impedit
              a maxime animi! Accusamus ullam nemo necessitatibus deleniti
              assumenda natus culpa sed molestiae accusantium, quae ex, modi
              sint nisi perferendis maiores vitae aliquid et facilis, error
              quaerat mollitia unde praesentium. Non, molestias id?
            </Text>
            <BaseLink style={{color:"#8fd299"}} maw={130} mt={60}>Back to our people</BaseLink>
          </Flex>
        </Flex>
      </Container>

      <OtherFooter />
    </Flex>
  );
};
