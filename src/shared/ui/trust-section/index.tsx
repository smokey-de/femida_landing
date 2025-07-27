"use client";

import {
  Box,
  BoxProps,
  Container,
  Divider,
  Flex,
  Image,
  Space,
  Text,
} from "@mantine/core";
import { BaseLink } from "../link";

export const TrustSection = () => {
  return (
    <Container size="xl" component="section" id="trust">
      <Space h="5rem" />
      <Flex direction="column" gap="0.75rem" w={{ base: "100%", md: "60%", lg: "50%" }}>
        <Text component="h5" fw={400} lh="1.5rem" fz="1.25rem">
          Why us
        </Text>
        <Text component="h2" fw={600} lh={{base: "2.5rem", md: "3.875rem"}} fz={{ base: "2rem", sm: "2.5rem", lg: "3rem" }}>
          Trusted experts with years of experience and industry accreditations
        </Text>
      </Flex>

      <Flex
        direction={{ base: "column", lg: "row" }}
        justify="space-between"
        align="center"
        mt={{base: "1.5rem", md: "3rem"}}
        gap={{ base: "3rem", lg: 0 }}
        mb="6.25rem"
      >
        {/* Text Block */}
        <Box w={{ base: "100%", lg: "30%" }}>
          <Flex direction="column" gap="1.25rem" my="2rem">
            <Description>
              At Beratung, we are dedicated to guiding you on your financial
              journey with expertise, integrity, and a personalized approach.
              Our team of experienced financial consultants is committed to
              helping you unlock your full financial potential, one step at a
              time.
            </Description>
            <Description>
              Our mission is to empower you with the knowledge and tools to make
              informed decisions, secure your financial stability, and achieve
              lasting success.
            </Description>
          </Flex>
          <BaseLink href="/" c="black">
            About us
          </BaseLink>
        </Box>

        {/* Image Block */}
        <Box w={{ base: "85%", sm: "55%", lg: "40%" }}>
          <Image
            width="100%"
            height="auto"
            src="https://beratung.vamtam.com/wp-content/uploads/2023/07/GettyImages-1408433542.svg"
            alt="Description"
          />
        </Box>

        {/* Stats Block */}
        <Box w={{ base: "100%", lg: "25%" }}>
          <Flex direction="column" gap="1.25rem" my="1rem">
            <InfoContent
              ml={{ base: 0, md: "25%", lg: "50%" }}
              value="10"
              label="YEARS OF EXPERIENCE"
              description="A decade of proven financial expertise."
            />
            <InfoContent
              hasDivider
              ml={{ base: 0, md: "10%", lg: "25%" }}
              value="110"
              label="CUSTOMERS"
              description="Serving a thriving community of satisfied customers."
            />
            <InfoContent
              hasDivider
              ml={0}
              value="20+"
              label="SPECIALISTS"
              description="A dedicated team of financial experts at your service."
            />
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

const Description = Text.withProps({
  c: "rgb(95, 101, 103)",
  fz: "1.125rem",
  lh: "1.875rem",
  fw: 400,
});

type InfoContentProps = BoxProps & {
  hasDivider?: boolean;
  value: string;
  label: string;
  description: string;
};

const InfoContent = ({
  hasDivider,
  value,
  label,
  description,
  ...props
}: InfoContentProps) => (
  <Box {...props}>
    {hasDivider && <Divider my="md" />}
    <Text fw={600} fz={{base: "36px", md: "48px"}} lh="3.875rem">
      {value}
    </Text>
    <Text fw={500} fz="0.875rem" lh="1.125rem">
      {label}
    </Text>
    <Text c="rgb(95, 101, 103)" fz="0.875rem" lh="1.125rem" fw={400}>
      {description}
    </Text>
  </Box>
);
