import { Box, Container, Flex, Image, Text } from "@mantine/core";

import { List } from "@/entities/people";
// import { List } from "./List";
import s from "@/pages/people/style.module.scss";
import {
  BtnBasic,
  Footer,
  Navbar,
  OtherHeader,
  OtherSplitter,
} from "@/shared/ui";

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

const PeoplePage = () => {
  return (
    <Flex
      direction="column"
      className={s.page}
    >
      <Navbar darkMode />

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
          visibleFrom="md"
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
          direction={{ base: "column", md: "row" }}
          mb={115}
          gap={160}
        >
          <Flex
            direction={"column"}
            gap={40}
          >
            <Text
              ff={"Geologica"}
              fz={{ base: "32px", md: "48px" }}
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
              visibleFrom="md"
            >
              Explore our open positions
            </BtnBasic>
            <BtnBasic
              size="md"
              maw={250}
              hiddenFrom="md"
            >
              Explore our open positions
            </BtnBasic>
          </Flex>

          <Flex
            direction={"column"}
            pos={"relative"}
          >
            <Text
              maw={625}
              c={"#5F6567"}
              fz={{ base: 16, md: 20 }}
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
        maw="1280px"
        w={"100%"}
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
            direction={{ base: "column", md: "row" }}
            align={"center"}
            justify={"center"}
            gap={60}
            pr={{ base: 0, md: 100 }}
            pl={{ base: 0, md: 100 }}
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
                  fz={{ base: 52, md: 70 }}
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
        w={"100%"}
        maw={1280}
      >
        <Flex
          direction={"row"}
          justify={"space-between"}
        >
          <Flex direction={"column"}>
            <Text
              ff={"Geologica"}
              fz={{ base: 32, md: 48 }}
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
            visibleFrom="md"
          />
        </Flex>
      </Container>

      <List />

      <Footer />
    </Flex>
  );
};

export default PeoplePage;
