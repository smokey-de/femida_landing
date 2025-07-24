import { Box, Container, Flex, SimpleGrid, Text } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

import s from "./styles.module.scss";

export const GuidePrinciples = () => (
  <Container
    size={"xl"}
    fluid
  >
    <Flex bg={"#E4EDF2"}>
      <Box
        flex={1}
        className={s.cardImage}
      />
      <Box
        flex={1}
        p={"3.62rem 4.5rem"}
      >
        <Text
          fw={600}
          fz={"3rem"}
          lh={"3.875rem"}
        >
          Guided by integrity, trust, and client-centricity, our values drive
          everything we do.
        </Text>
        <SimpleGrid
          cols={2}
          spacing="1.68rem"
          verticalSpacing="2.5rem"
          mt={"3.25rem"}
        >
          {principleItems.map((item, index) => (
            <PrincipleItem
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Flex>
  </Container>
);

const PrincipleItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <Flex
    direction={"column"}
    gap={"0.5rem"}
  >
    <Text component="span">
      <IconCheck />
    </Text>
    <Text
      fw={500}
      fz={"1rem"}
      lh={"1.5rem"}
      component="h6"
    >
      {title}
    </Text>
    <Text
      c={"rgb(95, 101, 103)"}
      fz={"0.875rem"}
      lh={"1.25rem"}
      fw={400}
    >
      {description}
    </Text>
  </Flex>
);

const principleItems = [
  {
    title: "Integrity",
    description:
      "Uphold high ethical standards and act with honesty, transparency, and professionalism in all your interactions.",
  },
  {
    title: "Expertise",
    description:
      "Stay up-to-date with industry trends, regulations, and best practices to offer informed advice to your clients.",
  },
  {
    title: "Trust and Confidentiality",
    description:
      "Understand the importance of trust and confidentiality in your client relationships.",
  },
  {
    title: "Objectivity",
    description:
      "Provide unbiased advice that is based on thorough analysis, research, and a comprehensive understanding of your clients' financial situations.",
  },
  {
    title: "Long-Term Relationships",
    description:
      "Build long-term relationships with your clients based on trust, open communication, and mutual respect.",
  },
  {
    title: "Accountability",
    description:
      "Monitor progress, review strategies, and make adjustments as needed to help clients stay on track towards their financial goals.",
  },
];
