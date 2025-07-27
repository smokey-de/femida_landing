"use client";

import { Flex } from "@mantine/core";

import { BtnBasic, InputBasic, TextAreaBasic } from "@/shared/ui";

// import { useTranslations } from "use-intl";

export const ContactForm = () => {
  // const t = useTranslations();

  return (
    <Flex
      direction={"column"}
      gap={"lg"}
      w={"100%"}
    >
      {/* <Text
        size="xl"
        fw={"600"}
        fz={"48px"}
        h={"100%"}
        mb={"60px"} 
        w={"100%"}
      >
        Contact form
      </Text>

      {/* <SimpleGrid cols={3}> */}
      <InputBasic
        label="Name"
        placeholder="Your name"
        type="text"
      />
      {/* <InputBasic
        label="Email"
        placeholder="Your email"
        type="email"
      /> */}
      <InputBasic
        label="Phone number"
        placeholder="Your phone number"
        type="tel"
      />
      {/* <InputBasic
        label="Company"
        placeholder="Company name"
        type="text"
      /> */}
      {/* <InputBasic
        label="Reason for contacting"
        placeholder="Reason for contacting"
        type="text"
      /> */}
      <InputBasic
        label="Subject"
        placeholder="Enter here"
        type="text"
      />
      {/* </SimpleGrid> */}

      <TextAreaBasic
        label="Message"
        placeholder="Textarea"
      />
      <Flex
        w={"100%"}
        justify={"flex-end"}
      >
        <BtnBasic
          size="md"
          maw={140}
        >
          Submit
        </BtnBasic>
      </Flex>
    </Flex>
  );
};
