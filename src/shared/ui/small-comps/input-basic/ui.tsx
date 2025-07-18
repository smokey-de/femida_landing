import { Flex, Text, Box, Input, InputProps } from "@mantine/core";

import { forwardRef } from "react";

import s from "./input-basic.module.scss";

interface InputBasicProps extends InputProps {
  label?: string;
  placeholder: string;
  type: string;
}

export const InputBasic = forwardRef<HTMLInputElement, InputBasicProps>(
  ({ label, placeholder, type, ...otherProps }, ref) => {
    return (
      <Flex
        direction="column"
        mb={"40px"}
      >
        {label && (
          <Text
            className={s.label}
            size="md"
            mb={"5px"}
          >
            {label}
          </Text>
        )}

        <Input
          {...otherProps}
          ref={ref}
          placeholder={placeholder}
          type={type}
          classNames={{
            input: s.input,
          }}
          size="lg"
          radius={"0"}
        />
      </Flex>
    );
  },
);
