"use client";

import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import {
  ActionIcon,
  Box,
  Container,
  Flex,
  Image,
  Text,
  ThemeIcon,
} from "@mantine/core";
import {
  IconArrowBadgeLeftFilled,
  IconArrowBadgeRightFilled,
  IconQuote,
} from "@tabler/icons-react";

import { useRef } from "react";

import { EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";

import s from "./styles.module.scss";

export const ClientReviews = () => {
  const carouselRef = useRef<EmblaCarouselType>(null);
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  return (
    <Container
      size="xl"
      component="section"
      mt="7.5rem"
      pos="relative"
      m={{ base: "7.5rem 0", md: "auto" }}
    >
      <Flex
        align="center"
        direction="column"
        gap="1rem"
      >
        <Text
          lh="1.625rem"
          fz={{ base: "1.125rem", sm: "1.25rem" }}
          fw={400}
        >
          Отзывы
        </Text>
        <Text
          lh={{ base: "2.5rem", sm: "3.875rem" }}
          fz={{ base: "2rem", sm: "3rem" }}
          fw={400}
          ta="center"
        >
          Те, кто нам доверяют
        </Text>
      </Flex>

      <Box
        pos="relative"
        w="100%"
        mt="2rem"
      >
        <ActionIcon
          variant="subtle"
          onClick={() => carouselRef.current?.scrollPrev()}
          size="lg"
          pos="absolute"
          left={0}
          top="50%"
          style={{ transform: "translateY(-50%)", zIndex: 100 }}
          visibleFrom="sm"
        >
          <IconArrowBadgeLeftFilled
            color="gray"
            size="2rem"
          />
        </ActionIcon>

        <Carousel
          withControls={false}
          plugins={[autoplay.current]}
          emblaOptions={{ loop: true }}
          getEmblaApi={(api) => (carouselRef.current = api)}
          withIndicators
          classNames={{
            indicators: s.indicators,
            indicator: s.indicator,
          }}
        >
          {client.map((item, index) => (
            <Carousel.Slide key={index}>
              <Review {...item} />
            </Carousel.Slide>
          ))}
        </Carousel>

        <ActionIcon
          variant="subtle"
          onClick={() => carouselRef.current?.scrollNext()}
          size="lg"
          pos="absolute"
          right={0}
          top="50%"
          style={{ transform: "translateY(-50%)" }}
          visibleFrom="sm"
        >
          <IconArrowBadgeRightFilled
            color="gray"
            size="2rem"
          />
        </ActionIcon>
      </Box>
    </Container>
  );
};

const client: ReviewProps[] = [
  {
    url: "https://beratung.vamtam.com/wp-content/uploads/2023/07/GettyImages-1412591716-reviews.jpg",
    name: "Алишер Т.",
    review:
      "Консультации и поддержка, которые я получил, оказались бесценными. Команда прекрасно понимает мои потребности и помогает легко принимать сложные финансовые решения.",
  },
  {
    url: "https://beratung.vamtam.com/wp-content/uploads/2023/07/GettyImages-475566446-reviews.jpg",
    name: "Абдул Р.",
    review:
      "Сотрудничество с FEMIDA FINANCE стало переломным моментом для моего финансового будущего. Их опыт и индивидуальный подход помогли мне уверенно достичь своих целей.",
  },
  {
    url: "https://beratung.vamtam.com/wp-content/uploads/2023/07/GettyImages-1138997324-reviews.jpg",
    name: "Аня Б.",
    review:
      "Я сотрудничаю с FEMIDA FINANCE уже продолжительное время, и всегда убеждаюсь в их высоком профессионализме, честности и полной отдаче делу. Они надёжны и всегда идут навстречу.",
  },
];

type ReviewProps = {
  url: string;
  name: string;
  review: string;
};

const Review = ({ url, name, review }: ReviewProps) => (
  <Flex
    direction={{ base: "column", md: "row" }}
    align={{ base: "center", md: "center" }}
    gap="md"
    w="100%"
  >
    <Box w={{ base: "100%", md: "50%" }}>
      <Image
        src={url}
        alt="Client Review"
      />
    </Box>
    <Box
      w={{ base: "100%", md: "50%" }}
      p={{ base: "0", md: "lg" }}
    >
      <Flex
        direction="column"
        gap="1rem"
      >
        <ThemeIcon
          variant="light"
          size={110}
          radius="xl"
          color="gray.2"
        >
          <IconQuote
            width="100%"
            height="100%"
            color="#374B47"
          />
        </ThemeIcon>
        <Text
          fw={300}
          fz={{ base: "1.125rem", sm: "1.875rem" }}
          lh="1.8"
        >
          {review}
        </Text>
        <Text
          fw={500}
          fz="0.875rem"
          lh="1.313rem"
        >
          {name}
        </Text>
      </Flex>
    </Box>
  </Flex>
);
