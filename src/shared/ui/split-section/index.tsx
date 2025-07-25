import { Anchor, Box, Button, Flex, Image, Text } from "@mantine/core";
import { IconPlayerPlayFilled } from "@tabler/icons-react";

import { BtnBasic } from "../btn-basic/ui";
import { BaseLink } from "../link";
import s from "./style.module.scss";

type SplitSectionProps = {
  title: string;
  subtitle: string;
  description: string;
  linkTitle: string;
  imageSrc: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
  showButton?: boolean;
};

export const SplitSection = ({
  title,
  subtitle,
  linkTitle,
  description,
  imageSrc,
  imagePosition = "right",
  showButton = false,
}: SplitSectionProps) => {
  const isImageLeft = imagePosition === "left";

  return (
    <Flex
      direction={"row"}
      gap={150}
      justify="space-between"
    >
      {isImageLeft && (
        <Box>
          <Image
            src={imageSrc}
            w={625}
            h={600}
          />
        </Box>
      )}

      <Flex
        direction="column"
        justify={"space-between"}
      >
        <Flex
          direction={"column"}
          gap={20}
        >
          <Flex
            gap={"4px"}
            align={"center"}
          >
            <Image
              src={
                "https://beratung.vamtam.com/wp-content/uploads/2023/06/fav-icon-150x150.png"
              }
              h={18}
              w={22}
            />
            <Text>{description}</Text>
          </Flex>

          <Text
            ff={"Geologica"}
            fz={48}
            fw={600}
            tt={"none"}
            fs={"normal"}
            lh={"1.3em"}
            lts={"-1px"}
          >
            {title}
          </Text>

          <Text
            ff={"Helvetica"}
            fz={16}
            fw={400}
            tt={"none"}
            fs={"normal"}
            lh={"1.4em"}
            lts={0}
            style={{ color: "#5F6567" }}
          >
            {subtitle}
          </Text>
        </Flex>

        <Flex
          align={"center"}
          gap={20}
        >
          {showButton && (
            <BtnBasic
              size="md"
              variant="outline"
              className={s.outLine}
            >
              <IconPlayerPlayFilled />
            </BtnBasic>
          )}

          <BaseLink style={{ color: "#161616" }}>{linkTitle}</BaseLink>
        </Flex>
      </Flex>

      {!isImageLeft && (
        <Box>
          <Image
            src={imageSrc}
            w={625}
            h={600}
          />
        </Box>
      )}
    </Flex>
  );
};
