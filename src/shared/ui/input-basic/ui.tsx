import React, { forwardRef } from "react";
import { TextInput, TextInputProps } from "@mantine/core";
import s from "./style.module.scss";

interface InputBasicProps extends TextInputProps {
  placeholder: string;
  type: string;
}

export const InputBasic = forwardRef<HTMLInputElement, InputBasicProps>(
  ({ label, placeholder, type, ...otherProps }, ref) => {
    return (
      <TextInput
        {...otherProps}
        ref={ref}
        label={label} 
        placeholder={placeholder}
        type={type}
        classNames={{
          input: s.input,
          label: s.label,
        }}
        size="lg"
        radius="0"
      />
    );
  }
);