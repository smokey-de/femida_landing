import { Textarea, TextareaProps } from "@mantine/core";
import React from "react";
import s from "./style.module.scss";

interface TextAreaBasicProps extends TextareaProps {
  label: string; 
}

export const TextAreaBasic: React.FC<TextAreaBasicProps> = ({
  label,
  placeholder,
  ...props
}) => {
  return (
    <Textarea
      label={label} 
      placeholder={placeholder}
      classNames={{
        input: s.input,
        label: s.label,
      }}
      {...props} 
    />
  );
};