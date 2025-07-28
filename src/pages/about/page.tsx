import {
  Anchor,
  Box,
  Container,
  Flex,
  Image,
  SimpleGrid,
  Text,
} from "@mantine/core";

import {
  BaseLink,
  Footer,
  Navbar,
  OtherHeader,
  SplitSection,
} from "@/shared/ui";

import s from "./style.module.scss";

const values = [
  {
    title: "Insight to light",
    description:
      "by challenging traditional thinking and ways of operating and bringing new perspectives to the toughest problems",
  },
  {
    title: "Drive inspired impact",
    description:
      "by looking beyond the next deadline to the next decade and by collaborating closely with our clients to enable and energize their organizations.",
  },
  {
    title: "Conquer complexity",
    description:
      "by discovering unique sources of competitive advantage and hidden truths in dynamic, complex systems.",
  },
  {
    title: "Lead with integrity",
    description:
      "by confronting the hard issues, staying true to our values, and stating our views candidly and directly.",
  },
  {
    title: "Grow by growing others",
    description:
      "enabling our clients, colleagues, and the broader community to build success and achieve their full potential.",
  },
];

export const AboutPage = () => {
  return (
    <Flex
      direction="column"
      className={s.page}
    >
      <Navbar darkMode />

      <Box
        mb={"40px"}
        style={{ borderBottom: "1px solid #00000026" }}
      >
        <OtherHeader
          aboutTitle="About"
          title="Building Bridges for Sustainable and Inclusive Growth"
          description="At Breatung, we are a renowned global consulting firm committed to collaborating with business and societal leaders in overcoming their most critical challenges and seizing their greatest opportunities. 
            Our achievements are rooted in fostering deep collaboration and cultivating a global community of diverse individuals who are dedicated to making positive contributions to the world and to one another on a daily basis."
        />
      </Box>

      <Container
        size={"xl"}
        mb={130}
      >
        <Flex
          direction={"column"}
          gap={"130px"}
        >
          <SplitSection
            title="Personal connection at global scale"
            description="Our expertise"
            linkTitle="Get to know us"
            subtitle="Across 45 global markets, Beratung operates with a unique level of autonomy, allowing us to swiftly adapt and prioritize what best serves our clients. This distinctive approach sets us apart from traditional consulting firms, making us more personalized and agile. Our unwavering commitment lies in assisting you in overcoming your most significant challenges and transforming your vision into a tangible reality.
                At Beratung, our dedication extends far beyond the immediate project. We place great emphasis on establishing trust and fostering your long-term success. We meet you at your current stage, seamlessly integrating our talented professionals with your team, and actively sharing our expertise throughout the entire journey."
            imageSrc="https://beratung.vamtam.com/wp-content/uploads/2023/07/pexels-yan-krukau-7794093.jpg"
            imagePosition="right"
            showButton={true}
          />

          <SplitSection
            title="Do what is right, always"
            description="What we believe"
            linkTitle="Get to Know Our People"
            subtitle="We embarked on our journey with a distinct approach. Instead of adhering to a demanding, all-or-nothing career path, we prioritized balance and well-being. We provided an opportunity to find fulfillment in both your professional and personal life, placing importance on family and engaging in impactful projects alongside companies within your community.
                Our core principle was to invest in people, communities, and the success of our clients. Consistently recognized as a top workplace, Beratung has garnered a reputation for creating an environment where individuals thrive. We proudly serve more than half of the Fortune 100 companies and a third of the Fortune 500, while also collaborating with startups, not-for-profit organizations, and a myriad of innovative entities."
            imageSrc="https://beratung.vamtam.com/wp-content/uploads/2023/06/pexels-karolina-grabowska-7876781.jpg"
            imagePosition="left"
          />
        </Flex>
      </Container>

      <Container
        size={"xl"}
        mb={115}
      >
        <Flex
          direction={"column"}
          gap={30}
        >
          <Flex>
            <Image
              src={
                "https://beratung.vamtam.com/wp-content/uploads/2023/06/fav-icon-150x150.png"
              }
              h={18}
              w={22}
              alt="favicon"
            />
            <Text>Our purpose</Text>
          </Flex>

          <SimpleGrid
            cols={{ base: 2, sm: 3, md: 5 }}
            spacing={20}
          >
            {values.map((item, index) => (
              <Flex
                key={index}
                direction="column"
                pt="30px"
                style={{ borderTop: "1px solid #00000026" }}
                gap={10}
              >
                <Text
                  fz={16}
                  ff="Geologica"
                  tt="none"
                  fw={500}
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
          </SimpleGrid>
        </Flex>
      </Container>

      <Box
        className={`${s.vector} ${s.sec_tr}`}
        mb={"120px"}
      ></Box>

      <Flex
        w={"100%"}
        direction={"column"}
        align={"center"}
        justify={"center"}
        mb={60}
      >
        <Text
          ff={"Geologica"}
          fz={{ base: 32, md: 48 }}
          fw={600}
          tt={"none"}
          fs={"normal"}
          lh={"1.3em"}
          lts={"-1px"}
        >
          How we work
        </Text>
        <Text
          style={{ color: "#5F6567" }}
          fz={{ base: 16, md: 20 }}
          lh={"1.5em"}
          maw={800}
          ta={"center"}
        >
          Transforming organizations sustainably. Unlocking performance
          excellence. Nurturing thriving workforces for generations. Partner
          with us for success.
        </Text>
      </Flex>

      <Flex
        style={{ backgroundColor: "#E4EDF4" }}
        pb={80}
        pt={80}
        mb={130}
      >
        <Container
          size={"xl"}
          maw={1280}
          w={"100%"}
        >
          <Flex
            w={"100%"}
            direction={{ base: "column", md: "row" }}
            justify={{ base: "center", md: "space-between" }}
            align={"center"}
          >
            <Flex
              direction={"column"}
              pt={80}
              pb={90}
              pr={20}
              justify={"space-between"}
            >
              <Flex
                direction={"column"}
                gap={15}
                pb={50}
                style={{ borderBottom: "1px solid #00000026" }}
                maw={405}
              >
                <Text
                  ff={"Geologica"}
                  fz={24}
                  fw={500}
                  tt={"none"}
                  fs={"normal"}
                  lh={"1.4em"}
                  lts={"-.5px"}
                >
                  Innovation & Technology
                </Text>
                <Text
                  ff={"Helvetica"}
                  fz={16}
                  fw={400}
                  lh={"1.4em"}
                  lts={0}
                  style={{ color: "#5F6567" }}
                >
                  In a rapidly changing world, continuous progress is imperative
                  to meet evolving demands.
                </Text>
              </Flex>

              <Flex
                direction={"column"}
                gap={15}
                pb={50}
                style={{ borderBottom: "1px solid #00000026" }}
                maw={405}
              >
                <Text
                  ff={"Geologica"}
                  fz={24}
                  fw={500}
                  tt={"none"}
                  fs={"normal"}
                  lh={"1.4em"}
                  lts={"-.5px"}
                >
                  Save Money
                </Text>
                <Text
                  ff={"Helvetica"}
                  fz={16}
                  fw={400}
                  lh={"1.4em"}
                  lts={0}
                  style={{ color: "#5F6567" }}
                >
                  Choose quality from the start. Save time and money by getting
                  it right with us.
                </Text>
              </Flex>
            </Flex>

            <Flex>
              <Image
                src={
                  "https://beratung.vamtam.com/wp-content/uploads/2023/06/illustration-1.svg"
                }
                alt="illustration"
              />
            </Flex>

            <Flex
              direction={"column"}
              pt={80}
              pb={90}
              pl={20}
              justify={"space-between"}
            >
              <Flex
                direction={"column"}
                gap={15}
                pb={50}
                style={{ borderBottom: "1px solid #00000026" }}
                maw={405}
              >
                <Text
                  ff={"Geologica"}
                  fz={24}
                  fw={500}
                  tt={"none"}
                  fs={"normal"}
                  lh={"1.4em"}
                  lts={"-.5px"}
                >
                  Client Capabilities Network
                </Text>
                <Text
                  ff={"Helvetica"}
                  fz={16}
                  fw={400}
                  lh={"1.4em"}
                  lts={0}
                  style={{ color: "#5F6567" }}
                >
                  With our expertise and cutting-edge competencies, we drive
                  impactful and enduring change.
                </Text>
              </Flex>

              <Flex
                direction={"column"}
                gap={15}
                pb={50}
                style={{ borderBottom: "1px solid #00000026" }}
                maw={405}
              >
                <Text
                  ff={"Geologica"}
                  fz={24}
                  fw={500}
                  tt={"none"}
                  fs={"normal"}
                  lh={"1.4em"}
                  lts={"-.5px"}
                >
                  Ongoing Support
                </Text>
                <Text
                  ff={"Helvetica"}
                  fz={16}
                  fw={400}
                  lh={"1.4em"}
                  lts={0}
                  style={{ color: "#5F6567" }}
                >
                  We don&apos;t just plan, we execute. Our talented team
                  supports your implementation, as part of your founding team or
                  on project basis.
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Container>
      </Flex>

      <Container size={"xl"}>
        <Flex
          direction={{ base: "column", md: "row" }}
          align={"center"}
          mb={130}
          gap={70}
        >
          <Flex
            direction={"column"}
            style={{ borderRight: "1px solid #00000026" }}
            visibleFrom="md"
          >
            <Flex>
              <Image
                src={
                  "https://beratung.vamtam.com/wp-content/uploads/2023/06/fav-icon-150x150.png"
                }
                h={18}
                w={22}
                alt="favicon"
              />
              <Text>We are honored</Text>
            </Flex>

            <Text
              style={{ color: "#5F6567" }}
              fz={20}
              lh={"1.5em"}
              maw={800}
            >
              5 years on Fortune 100 Best Companies to Work For list
            </Text>

            <BaseLink style={{ color: "#161616" }}>Learn more</BaseLink>
          </Flex>

          <Flex
            direction={"column"}
            style={{ borderBottom: "1px solid #00000026" }}
            pb={30}
            hiddenFrom="md"
          >
            <Flex>
              <Image
                src={
                  "https://beratung.vamtam.com/wp-content/uploads/2023/06/fav-icon-150x150.png"
                }
                h={18}
                w={22}
                alt="favicon"
              />
              <Text>We are honored</Text>
            </Flex>

            <Text
              style={{ color: "#5F6567" }}
              fz={20}
              lh={"1.5em"}
              maw={800}
            >
              5 years on Fortune 100 Best Companies to Work For list
            </Text>

            <BaseLink style={{ color: "#161616" }}>Learn more</BaseLink>
          </Flex>

          <SimpleGrid
            cols={{ base: 1, sm: 2, md: 4 }}
            verticalSpacing={30}
            pl={{ base: 0, md: 70 }}
          >
            <Flex
              direction={"column"}
              ml={20}
              mr={20}
              gap={20}
            >
              <Text
                ff={"Helvetica"}
                fz={16}
                fw={400}
                lh={"1.4em"}
                lts={0}
                style={{ color: "#5F6567" }}
              >
                2022
              </Text>
              <Anchor
                unstyled
                className={s.linkAn}
              >
                Forbes World’s Best Management Consulting Firms
              </Anchor>
            </Flex>
            <Flex
              direction={"column"}
              ml={20}
              mr={20}
            >
              <Text
                ff={"Helvetica"}
                fz={16}
                fw={400}
                lh={"1.4em"}
                lts={0}
                style={{ color: "#5F6567" }}
              >
                2022
              </Text>
              <Anchor
                unstyled
                className={s.linkAn}
              >
                100 Best Companies To Work For 2022, FORTUNE
              </Anchor>
            </Flex>
            <Flex
              direction={"column"}
              ml={20}
              mr={20}
            >
              <Text
                ff={"Helvetica"}
                fz={16}
                fw={400}
                lh={"1.4em"}
                lts={0}
                style={{ color: "#5F6567" }}
              >
                2022
              </Text>
              <Anchor
                unstyled
                className={s.linkAn}
              >
                Glassdoor Best Places to Work
              </Anchor>
            </Flex>
            <Flex
              direction={"column"}
              ml={20}
              mr={20}
            >
              <Text
                ff={"Helvetica"}
                fz={16}
                fw={400}
                lh={"1.4em"}
                lts={0}
                style={{ color: "#5F6567" }}
              >
                2022
              </Text>
              <Anchor
                unstyled
                className={s.linkAn}
              >
                Human Rights Campaign Best Places to Work for LGBTQ Equality
              </Anchor>
            </Flex>
          </SimpleGrid>
        </Flex>
      </Container>

      <Footer />
    </Flex>
  );
};
