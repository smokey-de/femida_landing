"use client";

import { Box, Container, Flex, Text } from "@mantine/core";
import s from "./style.module.scss";

export const SplitterBanner = () => (
  <Box className={s.sec_tr}>
    <Container size="xl" h="100%" className={s.vector}>
      <Flex direction="column" className={s.flexs} h="100%">
        <Text fz={{base: "36px", sm: "48px", md: "64px"}} fw={600} c="white">
          Building wealth,
        </Text>
        <Text fz={{base: "36px", sm: "48px", md: "64px"}} fw={600} c="white">
          creating futures.
        </Text>
      </Flex>
    </Container>
  </Box>
);
