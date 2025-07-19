import { Button } from "@mantine/core";
import s from "./style.module.scss";

export const BtnBasic = Button.withProps({
  variant: "outline",
  color: "#161616",
  size: "xl",
  radius: "0px",
  classNames: {
    root: s.button,
  },
});