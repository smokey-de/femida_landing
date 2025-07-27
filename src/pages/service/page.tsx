"use client";

import { Box, Container, Flex, Image, SimpleGrid, Text } from "@mantine/core";

import {
  BaseLink,
  BtnBasic,
  Navbar,
  Footer,
  OtherHeader,
  OtherSplitter,
  PeopleCard,
  ServiceContact,
} from "@/shared/ui";

import s from "./style.module.scss";

const services = [
  {
    linkLabel: "Business Strategy Development",
    text: "Craft effective strategies to drive competitiveness and achieve business objectives.",
  },
  {
    linkLabel: "Process Optimization",
    text: "Streamline operations and improve efficiency to maximize productivity and reduce costs.",
  },
  {
    linkLabel: "Market Research and Analysis",
    text: "Gain valuable insights into your target market, competitors, and customer needs.",
  },
  {
    linkLabel: "Change Management",
    text: "Navigate organizational change smoothly and ensure successful implementation.",
  },
  {
    linkLabel: "Technology Solutions",
    text: "Diverse technological expertise, collaborative focus, and a results-driven approach.",
  },
  {
    linkLabel: "Talent Management and HR Consulting",
    text: "Recruitment consultancies are constantly responding to the changing demands of today’s workplace.",
  },
  {
    linkLabel: "Risk Assessment and Management",
    text: "Our risk and compliance consulting team helps clients turn uncertainty into opportunity.",
  },
  {
    linkLabel:
      "Sustainability & Corporate Social Responsibility (CSR) Consulting",
    text: "Our experience shows that vision and pragmatism go hand in hand.",
  },
];

const people = [
  {
    img: "https://beratung.vamtam.com/wp-content/uploads/2023/07/pexels-kampus-production-8353841.jpg",
    title: "Franklin Grant",
    subtitle: "Founder & CEO",
  },
  {
    img: "https://beratung.vamtam.com/wp-content/uploads/2023/07/christina-wocintechchat-com-S3GrMiUhpNU-unsplash.jpg",
    title: "Emily Hunt",
    subtitle: "Managing Director",
  },
  {
    img: "https://beratung.vamtam.com/wp-content/uploads/2023/07/pexels-kampus-production-8353832.jpg",
    title: "Julian Boone",
    subtitle: "Chief Executive Officer",
  },
  {
    img: "https://beratung.vamtam.com/wp-content/uploads/2023/07/pexels-christina-morillo-1181686.jpg",
    title: "Dora Schwartz",
    subtitle: "Capabilities Leader",
  },
];

export const ServicePage = () => {
  return (
    <Flex
      direction="column"
      className={s.page}
    >
      <Navbar darkMode />

      <Box style={{ borderBottom: "1px solid #00000026" }}>
        <OtherHeader
          aboutTitle="Practice Аreas"
          title="Expert Business Consulting Services"
          description="Our expertise spans a wide range of areas, including strategy, marketing, organization, operations, technology, transformation, digital, advanced analytics, corporate finance, mergers & acquisitions, and sustainability. 
      We bring deep and specialized knowledge in these fields, but what truly sets us apart is our holistic perspective. We understand that true value lies in capturing synergies and connections across boundaries, bridging the gaps between different parts of an organization. By optimizing the collective impact of all components, we unleash a multiplier effect that goes beyond the sum of individual elements."
        />
      </Box>

      <Container
        size={"xl"}
        my={"130px"}
      >
        <SimpleGrid
          cols={{ base: 1, sm: 2, md: 3 }}
          spacing={"20px"}
          verticalSpacing={"50px"}
        >
          {services.map((service, index) => (
            <ServiceContact
              key={index}
              linkLabel={service.linkLabel}
              text={service.text}
            />
          ))}

          <Flex
            direction={"column"}
            p={"25px"}
            style={{ backgroundColor: "#e4edf3" }}
            align-items={"center"}
            justify={"center"}
          >
            <Text
              fz={{ base: "16px", md: "20px" }}
              fw={400}
              fs={"normal"}
              lh={"1.3em"}
              lts={"-.4px"}
              mb={"15px"}
            >
              If you do not see your specific practice areas, please contact us
            </Text>
            <BtnBasic
              component={BaseLink}
              href="/contact"
              maw={"140px"}
              size="xl"
              visibleFrom="md"
            >
              Contact Us
            </BtnBasic>
            <BtnBasic
              component={BaseLink}
              href="/contact"
              maw={"140px"}
              size="md"
              hiddenFrom="md"
            >
              Contact Us
            </BtnBasic>
          </Flex>
        </SimpleGrid>
      </Container>

      <OtherSplitter backgroundUrl="https://beratung.vamtam.com/wp-content/uploads/2023/07/pexels-vlada-karpovich-7433853.jpg" />

      <Box style={{ borderBottom: "1px solid #00000026" }}>
        <Container
          size={"xl"}
          pb={"120px"}
        >
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={"130px"}
            align={"center"}
            justify={"center"}
          >
            <Flex
              direction={"column"}
              gap={"30px"}
            >
              <Text
                fz={{ base: "26px", md: "30px" }}
                fw={500}
                fs={"normal"}
                lh={"1.3em"}
                lts={"-1px"}
                maw={600}
              >
                We provide actionable insights that stem from our extensive
                in-market experience in the world’s major industries.
              </Text>
            </Flex>
            <Image
              w={"160px"}
              h={"195px"}
              src={
                "https://beratung.vamtam.com/wp-content/uploads/2023/06/illustration-3.svg"
              }
              alt="service illustration"
            />
          </Flex>
        </Container>
      </Box>

      <Container
        size={"xl"}
        mt={"40px"}
        mb={"130px"}
      >
        <SimpleGrid
          cols={{ base: 1, sm: 2, md: 4 }}
          spacing={"30px"}
          verticalSpacing={"35px"}
          mb={"40px"}
        >
          {people.map((person, index) => (
            <PeopleCard
              key={index}
              img={person.img}
              title={person.title}
              subtitle={person.subtitle}
            />
          ))}
        </SimpleGrid>
        <Flex
          align-content={"center"}
          justify={"center"}
        >
          <BtnBasic
            component={BaseLink}
            href="/people"
          >
            View more
          </BtnBasic>
        </Flex>
      </Container>

      <Footer />
    </Flex>
  );
};
