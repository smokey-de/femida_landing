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
      size={"xl"}
      component="section"
      mt={"7.5rem"}
    >
      <Flex
        align={"center"}
        direction={"column"}
        gap={"1rem"}
      >
        <Text
          lh={"1.625rem"}
          fz={"1.25rem"}
          fw={400}
        >
          Testimonials
        </Text>
        <Text
          lh={"3.875rem"}
          fz={"3rem"}
          fw={400}
        >
          Those who trust us
        </Text>

        <Flex align={"center"}>
          <ActionIcon
            bg={"transparent"}
            onClick={() => carouselRef.current?.scrollNext()}
          >
            <IconArrowBadgeLeftFilled color="gray" />
          </ActionIcon>
          <Carousel
            w={1280}
            mb={"2.5rem"}
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
            bg={"transparent"}
            onClick={() => carouselRef.current?.scrollNext()}
          >
            <IconArrowBadgeRightFilled color="gray" />
          </ActionIcon>
        </Flex>
      </Flex>
    </Container>
  );
};

const client: ReviewProps[] = [
  {
    url: "https://beratung.vamtam.com/wp-content/uploads/2023/07/GettyImages-1412591716-reviews.jpg",
    name: "Mark H",
    review:
      "The financial advice and support I received have been invaluable. They have a deep understanding of my needs and have helped me navigate complex financial decisions with ease.",
  },
  {
    url: "https://beratung.vamtam.com/wp-content/uploads/2023/07/GettyImages-475566446-reviews.jpg",
    name: "Robert G",
    review:
      "Working with Beratung has been a game-changer for my financial future. Their expertise and personalized guidance have helped me achieve my goals with confidence.",
  },
  {
    url: "	https://beratung.vamtam.com/wp-content/uploads/2023/07/GettyImages-1138997324-reviews.jpg",
    name: "Jennifer P",
    review:
      "I have been a client for years, and they consistently exceed my expectations. Their professionalism, integrity, and commitment to my financial success are unmatched.",
  },
];

type ReviewProps = {
  url: string;
  name: string;
  review: string;
};

const Review = ({ url, name, review }: ReviewProps) => (
  <Flex align={"flex-end"}>
    <Box flex={1}>
      <Image
        height={"100%"}
        width={"100%"}
        src={url}
        alt="Client Review"
      />
    </Box>
    <Box
      flex={1}
      p={"2.5rem"}
    >
      <Flex
        direction={"column"}
        gap={"1rem"}
      >
        <ThemeIcon
          bg={"transparent"}
          size={70}
        >
          <IconQuote
            width={"100%"}
            height={"100%"}
            color="#374B47"
          />
        </ThemeIcon>
        <Text
          fw={300}
          fz={"1.875rem"}
          lh={"2.438rem"}
          fs={"normal"}
        >
          {review}
        </Text>
        <Text
          fw={500}
          fz={"0.875rem"}
          lh={"1.313rem"}
        >
          {name}
        </Text>
      </Flex>
    </Box>
  </Flex>
);
