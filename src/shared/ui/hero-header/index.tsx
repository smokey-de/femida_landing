"use client";

import { Box, Container, Flex, Group, Text } from "@mantine/core";

import { useEffect, useRef, useState } from "react";

import gsap from "gsap";

import { BtnBasic } from "@/shared/ui";

import s from "./style.module.scss";

const headlines = [
  "comprehensive planning",
  "expert guidance",
  "cutting-edge technology",
  "strategic insights",
  "personalized advice",
];

const images = [
  "https://beratung.vamtam.com/wp-content/uploads/2023/07/GettyImages-1426960043.jpg",
  "https://beratung.vamtam.com/wp-content/uploads/2023/07/GettyImages-1150296494.jpg",
  "https://beratung.vamtam.com/wp-content/uploads/2023/07/GettyImages-1371643065.jpg",
  "https://beratung.vamtam.com/wp-content/uploads/2023/07/GettyImages-1358389594.jpg",
  "https://beratung.vamtam.com/wp-content/uploads/2023/07/GettyImages-1446755424.jpg",
];

export const HeroHeader = () => {
  const [index, setIndex] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);
  const [letters, setLetters] = useState<string[]>([]);
  const letterRefs = useRef<HTMLSpanElement[]>([]);
  const bgRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    setLetters(headlines[0].split(""));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (index + 1) % headlines.length;
      const current = headlines[index].padEnd(25, " ").split("");
      const next = headlines[nextIndex].padEnd(25, " ").split("");

      next.forEach((nextChar, i) => {
        const el = letterRefs.current[i];
        if (!el) return;

        gsap.to(el, {
          rotateY: 90,
          duration: 0.25,
          ease: "power1.in",
          delay: i * 0.06,
          onComplete: () => {
            el.textContent = nextChar === " " ? "\u00A0" : nextChar;
            gsap.to(el, {
              rotateY: 0,
              duration: 0.25,
              ease: "power1.out",
            });
          },
        });
      });

      setIndex(nextIndex);
    }, 10000);

    return () => clearInterval(interval);
  }, [index]);

  useEffect(() => {
    const bgInterval = setInterval(() => {
      const current = bgIndex % images.length;
      const next = (bgIndex + 1) % images.length;

      const currentEl = bgRefs.current[current];
      const nextEl = bgRefs.current[next];

      if (currentEl && nextEl) {
        gsap.to(currentEl, { opacity: 0, duration: 1 });
        gsap.set(nextEl, { zIndex: 1 });
        gsap.fromTo(nextEl, { opacity: 0 }, { opacity: 1, duration: 1 });
        setBgIndex(next);
      }
    }, 10000);

    return () => clearInterval(bgInterval);
  }, [bgIndex]);

  return (
    <Box className={s.heroWrapper}>
      {images.map((img, i) => (
        <Box
          key={i}
          ref={(el) => {
            if (el) bgRefs.current[i] = el;
          }}
          className={s.heroBg}
          style={{
            backgroundImage: `url(${img})`,
            opacity: i === 0 ? 1 : 0,
            zIndex: i === 0 ? 1 : 0,
          }}
        />
      ))}

      <Container
        size="xl"
        className={s.heroTextContainer}
      >
        <Flex
          direction={"column"}
          align={"flex-start"}
        >
          <Flex
            className={s.heroText}
            direction={"column"}
          >
            <Text
              fz={"60px"}
              fw={500}
              lh={"1.2em"}
            >
              Unlock your financial potential with
            </Text>
            <Group className={s.line}>
              {Array(25)
                .fill("")
                .map((_, i) => (
                  <Text
                    fz={"60px"}
                    fw={500}
                    lh={"1.2em"}
                    mb={"20px"}
                    key={i}
                    ref={(el) => {
                      if (el) letterRefs.current[i] = el;
                    }}
                    classNames={{
                      root: s.mtr,
                    }}
                  >
                    {letters[i] ?? "\u00A0"}
                  </Text>
                ))}
            </Group>
            <Text
              fz={"24px"}
              fw={500}
              lh={"1.2em"}
              mb={"30px"}
            >
              Comprehensive financial consulting services tailored to your needs
            </Text>
          </Flex>
          <BtnBasic
            variant="filled"
            size="xl"
            style={{ color: "black" }}
            color="rgba(255, 255, 255, 1)"
          >
            Schedule a free consultation
          </BtnBasic>
        </Flex>
      </Container>
    </Box>
  );
};
