"use client";

import { Container, Grid, Text } from "@mantine/core";

import { BaseLink } from "@/shared/ui";

import s from "./style.module.scss";

const links = [
  { title: "Financial Services", href: "/#" },
  { title: "Financial Institutions", href: "/#" },
  { title: "Healthcare & Pharmaceuticals", href: "/#" },
  { title: "Education", href: "/#" },
  { title: "Medical Devices & Technology", href: "/#" },
  { title: "Energy and Utilities", href: "/#" },
  { title: "Retail & E-commerce", href: "/#" },
  { title: "Hospitality and Tourism", href: "/#" },
  { title: "Automotive & Transportation", href: "/#" },
];

export const IndustriesSection = () => (
  <Container size="xl">
    <Grid
      columns={3}
      mb={100}
      mt={100}
    >
      <Grid.Col
        span={1}
        className={s.wrapAbout}
      >
        <Text
          size="xl"
          fw={700}
        >
          Industries
        </Text>
      </Grid.Col>

      <Grid.Col span={2}>
        <Grid columns={2}>
          {links.map((link, index) => (
            <Grid.Col
              span={1}
              key={index}
            >
              <BaseLink
                href={link.href}
                style={{ color: "black" }}
              >
                {link.title}
              </BaseLink>
            </Grid.Col>
          ))}
        </Grid>
      </Grid.Col>
    </Grid>
  </Container>
);
