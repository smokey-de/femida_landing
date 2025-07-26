"use client";

import { Box, Container, Flex, Image, SimpleGrid, Text } from "@mantine/core";

import {
  BtnBasic,
  Navbar,
  Footer,
  OtherHeader,
  OtherSplitter,
  PeopleCard,
} from "@/shared/ui";

import s from "./style.module.scss";

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
  {
    img: "https://beratung.vamtam.com/wp-content/uploads/2023/07/pexels-christina-morillo-1181695.jpg",
    title: "Nina Ray",
    subtitle: "Industries Leader",
  },
  {
    img: "https://beratung.vamtam.com/wp-content/uploads/2023/07/pexels-linkedin-sales-navigator-2182970.jpg",
    title: "Charles Haynes",
    subtitle: "Global Managing Partner",
  },
  {
    img: "https://beratung.vamtam.com/wp-content/uploads/2023/07/christina-wocintechchat-com-N_HzomQQ6bc-unsplash.jpg",
    title: "Alta Tyler",
    subtitle: "Chief People Officer",
  },
  {
    img: "https://beratung.vamtam.com/wp-content/uploads/2023/07/pexels-hai-anh-10031556.jpg",
    title: "Joseph Buchanan",
    subtitle: "Chief Financial Officer",
  },
];

const highlights = [
  {
    number: "30k",
    title: "Diverse talent & perspectives",
    description:
      "Our team includes management consultants, data scientists, engineers, venture architects, and more, operating in over 10 countries.",
  },
  {
    number: "~900",
    title: "Commitment to social impact",
    description:
      "In 2022, we successfully executed social impact consulting projects.",
  },
  {
    number: "100+",
    title: "Partnering for greater value",
    description:
      "We are proud to be a leading organization in our global partner ecosystem.",
  },
];

export const PeoplePage = () => {
  return (
    <Flex
      direction="column"
      className={s.page}
    >
      <Navbar />

      <Box>
        <OtherHeader
          aboutTitle="Our People"
          title="Building Bridges for Sustainable and Inclusive Growth"
          description="We approach every client relationship with a unique and invigorating perspective, coupled with an unwavering energy that inspires action. Our commitment to teamwork, trust, and an open-mindedness towards differing opinions creates an environment where clients can concentrate on their potential opportunities, enhance their capabilities, and ultimately succeed in shaping the future. 
        Together, we achieve remarkable results that transcend the boundaries of what is currently achievable and unlock the true potential of our clients’ visions."
        />
      </Box>

      <Box pos={"relative"}>
        <OtherSplitter backgroundUrl="https://beratung.vamtam.com/wp-content/uploads/2023/07/pexels-kindel-media-7688339.jpg" />
        <Flex
          pos={"absolute"}
          style={{ backgroundColor: "#fff" }}
          p={"30px 75px"}
          right={200}
          bottom={120}
        >
          <Image
            src={
              "https://beratung.vamtam.com/wp-content/uploads/2023/07/BPTW-logo-ENG.svg"
            }
            w={250}
            alt="Best Place to Work"
          />
        </Flex>
      </Box>

      <Container size={"xl"}>
        <Flex
          direction={"row"}
          mb={115}
          gap={160}
        >
          {/* <Flex
            direction={"column"}
            gap={40}
          >
            <Text
              ff={"Geologica"}
              fz={48}
              fw={600}
              tt={"none"}
              fs={"normal"}
              lh={"1.3em"}
              lts={"-1px"}
            >
              The values driving our culture
            </Text>
            <BtnBasic
              size="xl"
              maw={250}
            >
              Explore our open positions
            </BtnBasic>
          </Flex> */}

          <Flex
            direction={"column"}
            pos={"relative"}
          >
            <Text
              maw={625}
              c={"#5F6567"}
              fz={20}
              lh={"1.5em"}
            >
              At Beratung, we firmly believe that a robust culture built on
              well-defined values is the cornerstone of our leadership in the
              market. We are unwavering in our commitment to upholding the
              highest standards of ethics, business conduct, and company
              principles. These standards serve as our guiding compass in every
              decision we make and action we take. We recognize that our
              employees play a pivotal role in maintaining and nurturing this
              culture. Therefore, it is an essential expectation for every
              individual within our organization to uphold these standards in
              their daily interactions and professional conduct. We place great
              emphasis on frequent communication and reinforcement of our values
              to ensure that they remain ingrained in the fabric of our company.
            </Text>
          </Flex>
        </Flex>
      </Container>

      <Container
        size={"xl"}
        mb={95}
        w={1280}
        pt={35}
        pb={35}
        style={{
          borderBottom: "1px solid #00000026",
          borderTop: "1px solid #00000026",
        }}
      >
        <Flex
          direction={"column"}
          gap={40}
        >
          <Flex
            w={"100%"}
            direction={"row"}
            justify={"flex-start"}
          >
            <Flex
              className={s.aboutTitle}
              mb={0}
              gap={"4px"}
              align={"center"}
            >
              <Image
                src={
                  "https://beratung.vamtam.com/wp-content/uploads/2023/06/fav-icon-150x150.png"
                }
                h={18}
                alt="footer_icon"
              />
              <Text>Empower</Text>
            </Flex>
          </Flex>
          <Flex
            direction="row"
            gap={60}
            pr={100}
            pl={100}
          >
            {highlights.map((item, index) => (
              <Flex
                key={index}
                direction="column"
                gap={10}
                maw={295}
              >
                <Text
                  ff="Geologica"
                  fz={70}
                  fw={700}
                  tt="none"
                  fs="normal"
                  lh="1em"
                  lts="-2.8px"
                  style={{ color: "#8FD299" }}
                >
                  {item.number}
                </Text>
                <Text
                  ff="Geologica"
                  fz={16}
                  fw={500}
                  tt="none"
                  fs="normal"
                  lh="1.5em"
                  lts="-.3px"
                >
                  {item.title}
                </Text>
                <Text
                  fz={14}
                  lh="1.4em"
                  style={{ color: "#5F6567" }}
                >
                  {item.description}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Container>

      <Container
        size={"xl"}
        w={1280}
      >
        <Flex
          direction={"row"}
          justify={"space-between"}
        >
          <Flex direction={"column"}>
            <Text
              ff={"Geologica"}
              fz={48}
              fw={600}
              tt={"none"}
              fs={"normal"}
              lh={"1.3em"}
              lts={"-1px"}
            >
              Meet our leaders
            </Text>
            <Text
              fz={14}
              lh="1.4em"
              style={{ color: "#5F6567" }}
              maw={536}
            >
              Beratung’s global leadership is comprised of several key entities,
              including the managing partner, the Shareholders Council (elected
              board of directors), the Acceleration Team (global leadership
              team), and the leaders of various offices and practices. Together,
              they drive the strategic direction and operations of the
              organization.
            </Text>
          </Flex>
          <Image
            src={
              "https://beratung.vamtam.com/wp-content/uploads/2023/06/illustration-2.svg"
            }
            alt="service illustration"
            w={160}
          />
        </Flex>
      </Container>

      <Container
        size={"xl"}
        mt={"40px"}
        mb={"130px"}
      >
        <SimpleGrid
          cols={4}
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
      </Container>

      <Footer />
    </Flex>
  );
};
