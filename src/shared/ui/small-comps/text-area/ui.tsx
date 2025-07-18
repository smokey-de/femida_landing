import { Textarea, Text, Flex } from "@mantine/core";

import React from "react";

import s from "./text-basic.module.scss";

interface TextAreaProps {
  label: string;
  placeholder?: string;
}

export const TextAreaBasic: React.FC<TextAreaProps> = ({
  label,
  placeholder,
  ...props
}) => {
  return (
    <Flex
      direction="column"
      gap="xs"
      w={"100%"}
      h={"100%"}
      mb={"40px"}
    >
      <Text
        size="md"
        mb={"5px"}
        className={s.label}
      >
        {label}
      </Text>

      <Textarea
        placeholder={placeholder}
        size="lg"
        classNames={{
          input: s.input,
          wrapper: s.wrapper,
        }}
        {...props}
      />
    </Flex>
  );
};
