"use client";

import { Button } from "@mantine/core";

import s from "./styles.module.scss";

export const BtnBasic = Button.withProps({
  variant: "outline",
  color: "#161616",
  fz: ".875rem",
  lh: "1.25rem",
  fw: 500,
  radius: "0px",
  classNames: {
    root: s.button,
    label: s.label
  },
});
