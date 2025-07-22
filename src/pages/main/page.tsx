"use client";

import { Flex } from "@mantine/core";
import { Navbar, HeroHeader, IndustriesSection, SplitterBanner } from "@/shared/ui";
import s from "./style.module.scss";

export const MainPage = () => (
  <Flex direction="column" className={s.page}>
    <Navbar />
    <HeroHeader />
    <IndustriesSection />
    <SplitterBanner />
  </Flex>
);
