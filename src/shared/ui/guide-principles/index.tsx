import { Box, Container, Flex, SimpleGrid, Text } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

import s from "./styles.module.scss";

export const GuidePrinciples = () => (
  <Container
    size={"xl"}
    fluid
  >
    <Flex
      bg={"#E4EDF2"}
      direction={{ base: "column", sm: "row" }}
    >
      <Box
        flex={1}
        className={s.cardImage}
        visibleFrom="sm"
      />
      <Box
        className={s.cardImage}
        hiddenFrom="sm"
        h={300}
      />
      <Box
        flex={1}
        p={{ base: "20px 20px", sm: "3.62rem 4.5rem" }}
      >
        <Text
          fw={600}
          fz={"3rem"}
          lh={"3.875rem"}
          visibleFrom="md"
        >
          Наши ценности — честность, доверие и ориентация на клиента —
          определяют всё, что мы делаем.
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
    title: "Честность",
    description:
      "Соблюдаем высокие этические стандарты, действуем открыто и профессионально в каждой ситуации.",
  },
  {
    title: "Экспертиза",
    description:
      "Постоянно отслеживаем тренды, изменения в законах и лучшие практики, чтобы давать точные рекомендации.",
  },
  {
    title: "Доверие и конфиденциальность",
    description:
      "Ценим доверие клиентов и строго соблюдаем конфиденциальность.",
  },
  {
    title: "Объективность",
    description:
      "Даем взвешенные и беспристрастные советы, основываясь на анализе и фактах.",
  },
  {
    title: "Долгосрочные отношения",
    description:
      "Строим прочные связи на основе доверия, открытого общения и взаимного уважения.",
  },
  {
    title: "Ответственность",
    description:
      "Отслеживаем прогресс, корректируем стратегии и помогаем клиентам достигать целей.",
  },
];
