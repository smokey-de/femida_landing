"use client";

import { Flex } from "@mantine/core";
import { BtnBasic, InputBasic, TextAreaBasic } from "@/shared/ui";
import { useTranslations } from "next-intl";

export const ContactForm = () => {
  const t = useTranslations("contactForm");

  return (
    <Flex direction={"column"} gap={"lg"} w={"100%"}>
      <InputBasic
        label={t("labelName")}
        placeholder={t("placeholderName")}
        type="text"
      />
      <InputBasic
        label={t("labelPhone")}
        placeholder={t("placeholderPhone")}
        type="tel"
      />
      <InputBasic
        label={t("labelTopic")}
        placeholder={t("placeholderTopic")}
        type="text"
      />
      <TextAreaBasic
        label={t("labelMessage")}
        placeholder={t("placeholderMessage")}
      />
      <Flex w={"100%"} justify={"flex-end"}>
        <BtnBasic size="md" maw={140}>
          {t("buttonSend")}
        </BtnBasic>
      </Flex>
    </Flex>
  );
};
