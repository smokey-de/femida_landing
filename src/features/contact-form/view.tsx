"use client";

import { Flex, SimpleGrid, Text } from "@mantine/core";

import { BtnBasic, InputBasic, TextAreaBasic } from "@/shared/ui";

// import { useTranslations } from "use-intl";

export const ContactForm = () => {
  // const t = useTranslations();

  return (
    <Flex direction={"column"}>
      {/* <Text
        size="xl"
        fw={"600"}
        fz={"48px"}
        h={"100%"}
        mb={"60px"}
      >
        Contact form
      </Text> */}

      <SimpleGrid cols={3}>
        <InputBasic
          label="Name"
          placeholder="Your name"
          type="text"
        />
        <InputBasic
          label="Email"
          placeholder="Your email"
          type="email"
        />
        <InputBasic
          label="Phone number"
          placeholder="Your phone number"
          type="tel"
        />
        <InputBasic
          label="Company"
          placeholder="Company name"
          type="text"
        />
        <InputBasic
          label="Reason for contacting"
          placeholder="Reason for contacting"
          type="text"
        />
        <InputBasic
          label="Subject"
          placeholder="Enter here"
          type="text"
        />
      </SimpleGrid>

      <TextAreaBasic
        label="Message"
        placeholder="Textarea"
      ></TextAreaBasic>

      <Flex
        justify={"flex-start"}
        w={"100%"}
      >
        <BtnBasic size="xl">Submit</BtnBasic>
      </Flex>
    </Flex>
  );
};
