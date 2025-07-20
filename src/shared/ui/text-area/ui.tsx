"use client";

import { Textarea } from "@mantine/core";

import s from "./styles.module.scss";

export const TextAreaBasic = Textarea.withProps({
  classNames: {
    input: s.input,
    label: s.label,
  },
  size: "lg",
  radius: "0",
  placeholder: "Enter your message",
  autosize: true,
  minRows: 3,
  mb: "60px",
});
