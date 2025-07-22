"use client";

import { TextInput } from "@mantine/core";

import s from "./styles.module.scss";

export const InputBasic = TextInput.withProps({
  classNames: {
    input: s.input,
    label: s.label,
  },
  size: "lg",
  radius: "0",
  placeholder: "Enter text",
  type: "text",
  mb: "60px",
});
