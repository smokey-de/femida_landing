import { Flex } from "@mantine/core";

import {
  GuidePrinciples,
  HeroHeader,
  IndustriesSection,
  Navbar,
  SplitterBanner,
  TrustSection,
} from "@/shared/ui";

import s from "./style.module.scss";

export const MainPage = () => (
  <Flex
    direction="column"
    className={s.page}
  >
    <Navbar />
    <HeroHeader />
    <IndustriesSection />
    <SplitterBanner />
    <TrustSection />
    <GuidePrinciples />
  </Flex>
);
