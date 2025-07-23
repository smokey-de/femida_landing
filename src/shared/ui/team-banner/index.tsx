import { Box, Flex, Text } from "@mantine/core";

import { BtnBasic } from "../btn-basic/ui";
import s from "./styles.module.scss";

export const TeamBanner = () => (
  <Box
    component="section"
    mt={"7.5rem"}
    pos={"relative"}
  >
    <Box className={s.overly} />
    <Box
      h={720}
      className={s.banner}
    >
      <Flex
        w={"45%"}
        mx={"2rem"}
        direction={"column"}
        gap={"1rem"}
        pos={"absolute"}
        bottom={0}
        style={{ zIndex: 2 }}
        mb={"3.438rem"}
      >
        <Text
          fz={"1.25rem"}
          lh={"1.625rem"}
          fw={400}
          c={"white"}
        >
          Team
        </Text>
        <Text
          fz={"4.375rem"}
          lh={"4.375rem"}
          fw={400}
          c={"white"}
        >
          Get to know the incredible individuals behind our company
        </Text>
        <Box>
          <BtnBasic
            variant="filled"
            size="lg"
          >
            Our People
          </BtnBasic>
        </Box>
      </Flex>
    </Box>
  </Box>
);
