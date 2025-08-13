import { Anchor, Flex, Image, Text } from "@mantine/core";

import s from "./style.module.scss";

type PeopleCardProps = {
  img: string;
  title: string;
  subtitle: string;
};

export const PeopleCard = ({ img, title, subtitle }: PeopleCardProps) => {
  return (
    <Flex
      className={s.card}
      direction={"column"}
      gap={"20px"}
    >
      <Flex align={"center"} justify={"center"}   miw={{base: "100%", md: "200px"}} mih={{base: "100%", md: "400px"}}>
      <Image
        src={img || "https://www.vecteezy.com/png/19879186-user-icon-on-transparent-background"}
        alt={title}
        className={s.image}

      />
      </Flex>

      <Flex
        direction={"column"}
        gap={"5px"}
      >
        <Anchor
          unstyled
          className={s.title}
          ff={"Geologica"}
          fz={"20px"}
          fw={400}
          tt={"none"}
          fs={"normal"}
          lh={"1.3em"}
          lts={"-.4px"}
        >
          {title}
        </Anchor>
        <Text
          className={s.subtitle}
          ff={"Geologica"}
          fz={"14px"}
          fw={300}
          tt={"none"}
          fs={"normal"}
          lh={"1.5em"}
          lts={"-.4px"}
        >
          {subtitle}
        </Text>
      </Flex>
    </Flex>
  );
};
