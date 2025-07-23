import {
  Box,
  Container,
  Divider,
  Flex,
  Image,
  Paper,
  Space,
  Text,
} from "@mantine/core";

import { ContactForm } from "@/features/contact-form";
import {
  ClientReviews,
  GuidePrinciples,
  HeroHeader,
  IndustriesSection,
  Navbar,
  SplitterBanner,
  TrustSection,
} from "@/shared/ui";
import { TeamBanner } from "@/shared/ui/team-banner";

import s from "./style.module.scss";

export const MainPage = () => (
  <Flex
    direction="column"
    className={s.page}
  >
    <Navbar />
    <HeroHeader />
    <IndustriesSection />
    <SplitterBanner />
    <TrustSection />
    <GuidePrinciples />
    <ClientReviews />
    <TeamBanner />
    <ContactSection />
  </Flex>
);

const ContactSection = () => (
  <Container
    size={"lg"}
    component={"section"}
    id="contact"
  >
    <Space h={"8.125rem"} />
    <Flex>
      <Flex
        direction={"column"}
        gap={"0.75rem"}
        w={"70%"}
      >
        <Text
          component="h5"
          fw={400}
          lh={"1.5rem"}
          fz={"1.25rem"}
        >
          Get started
        </Text>
        <Text
          component="h2"
          fw={600}
          lh={"3.875rem"}
          fz={"3rem"}
        >
          Schedule your personalized consultation today
        </Text>
        <Space h={"1rem"} />
        <Image
          src="https://beratung.vamtam.com/wp-content/uploads/2023/07/GettyImages-1138996754-1024x686.jpg"
          alt="Contact Us"
        />
        <Text
          fz={"0.875rem"}
          fw={500}
          lh={"1.313rem"}
          c={"rgb(95, 101, 103)"}
        >
          OR REACH US AT:
        </Text>
        <Divider my="md" />
        <Text
          fz={"1rem"}
          fw={400}
          lh={"1.375rem"}
          c={"rgb(95, 101, 103)"}
        >
          T: 1-800-356-8933
        </Text>
        <Text
          fz={"1rem"}
          fw={400}
          lh={"1.375rem"}
          c={"rgb(95, 101, 103)"}
        >
          E: office@beratung.com
        </Text>
        <Text
          fz={"1rem"}
          fw={400}
          lh={"1.375rem"}
          c={"rgb(95, 101, 103)"}
        >
          Seventh Ave, 20th Floor New York
        </Text>
      </Flex>
      <Flex
        pos={"relative"}
        w={"30%"}
      >
        <Paper
          bdrs={0}
          p={"3.125rem"}
          w={832}
          pos={"absolute"}
          bottom={"-20rem"}
          right={"0"}
        >
          <ContactForm />
        </Paper>
      </Flex>
    </Flex>
  </Container>
);
