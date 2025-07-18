import { Button, ButtonProps } from "@mantine/core";
import s from "./btn-basic.module.scss"
import React from "react";

interface BtnBasicProps extends ButtonProps {
  text: string;
}

export const BtnBasic: React.FC<BtnBasicProps> = ({ text, ...props }) => {
  return (
    <Button
      variant="outline"
      color="#161616"
      size="xl"
      radius="0px"
      {...props}
      classNames={{
        root: s.button,
      }}
    >
      {text}
    </Button>
  );
};
