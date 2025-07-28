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
  Footer,
  GuidePrinciples,
  HeroHeader,
  Navbar,
  SplitterBanner,
  TeamBanner,
  TrustSection,
} from "@/shared/ui";

import { ShowServices } from "./ShowService";
import s from "./style.module.scss";

export const MainPage = () => (
  <Flex
    direction="column"
    className={s.page}
  >
    <Navbar />
    <HeroHeader />
    <ShowServices />
    <SplitterBanner />
    <TrustSection />
    <GuidePrinciples />
    <ClientReviews />
    <TeamBanner />
    <ContactSection />
    <Footer />
  </Flex>
);

const ContactSection = () => (
  <Container
    size="xl"
    component="section"
    id="contact"
    mb={80}
  >
    <Space h="8.125rem" />
    <Box>
      <Text
        component="h5"
        fw={400}
        lh="1.5rem"
        fz="1.25rem"
      >
        Get started
      </Text>
      <Text
        component="h2"
        fw={600}
        lh={{ base: "2.875rem", md: "3.875rem" }}
        fz={{ base: "32px", md: "48px" }}
      >
        Schedule your personalized consultation today
      </Text>
    </Box>
    <Space h="1rem" />

    <Flex visibleFrom="md">
      <Flex
        direction="column"
        gap="0.75rem"
        flex={1}
      >
        <Image
          src="https://beratung.vamtam.com/wp-content/uploads/2023/07/GettyImages-1138996754-1024x686.jpg"
          alt="Contact Us"
        />
        <Text
          fz="0.875rem"
          fw={500}
          lh="1.313rem"
          c="rgb(95, 101, 103)"
        >
          OR REACH US AT:
        </Text>
        <Divider my="md" />
        <Text
          fz="1rem"
          fw={400}
          lh="1.375rem"
          c="rgb(95, 101, 103)"
        >
          T: 1-800-356-8933
        </Text>
        <Text
          fz="1rem"
          fw={400}
          lh="1.375rem"
          c="rgb(95, 101, 103)"
        >
          E: office@beratung.com
        </Text>
        <Text
          fz="1rem"
          fw={400}
          lh="1.375rem"
          c="rgb(95, 101, 103)"
        >
          Seventh Ave, 20th Floor New York
        </Text>
      </Flex>
      <Paper
        flex={1}
        bdrs={0}
        px="1rem"
      >
        <ContactForm />
      </Paper>
    </Flex>

    <Flex
      direction={"column"}
      hiddenFrom="md"
    >
      <Flex
        direction="column"
        gap="0.75rem"
        flex={1}
      >
        <Image
          src="https://beratung.vamtam.com/wp-content/uploads/2023/07/GettyImages-1138996754-1024x686.jpg"
          alt="Contact Us"
        />
        <Divider my="md" />

        <ContactForm />
      </Flex>
      <Flex
        flex={1}
        bdrs={0}
        px="1rem"
        direction={"column"}
        gap={"0.75rem"}
      >
        <Divider my="md" />

        <Text
          fz="0.875rem"
          fw={500}
          lh="1.313rem"
          c="rgb(95, 101, 103)"
        >
          OR REACH US AT:
        </Text>

        <Text
          fz="1rem"
          fw={400}
          lh="1.375rem"
          c="rgb(95, 101, 103)"
        >
          T: 1-800-356-8933
        </Text>
        <Text
          fz="1rem"
          fw={400}
          lh="1.375rem"
          c="rgb(95, 101, 103)"
        >
          E: office@beratung.com
        </Text>
        <Text
          fz="1rem"
          fw={400}
          lh="1.375rem"
          c="rgb(95, 101, 103)"
        >
          Seventh Ave, 20th Floor New York
        </Text>
      </Flex>
    </Flex>
  </Container>
);
