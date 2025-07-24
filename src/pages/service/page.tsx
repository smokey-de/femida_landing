"use client";

import { Box, Flex } from "@mantine/core";

import { Navbar } from "@/shared/ui";

import s from "./style.module.scss";

export const ServicePage = () => (
  <Flex
    direction="column"
    className={s.page}
  >
    <Navbar />

    

  </Flex>
);
