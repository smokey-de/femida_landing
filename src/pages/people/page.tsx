"use client";

import { Box, Container, Flex, Image, SimpleGrid, Text } from "@mantine/core";

import { useRouter } from "next/navigation";

import {
  BtnBasic,
  Navbar,
  Footer,
  OtherHeader,
  OtherSplitter,
  PeopleCard,
} from "@/shared/ui";

import s from "./style.module.scss";

export const people = [
  {
    slug: "franklin-grant",
    img: "https://beratung.vamtam.com/wp-content/uploads/2023/07/pexels-kampus-production-8353841.jpg",
    title: "Franklin Grant",
    subtitle: "Founder & CEO",
    about:
      "Prior to founding Beratung in early 2001, Frankiln’s entrepreneurial journey began with the establishment of two Internet companies in Silicon Valley. Following that, Frankiln held various management positions at Salomon in New York, including Vice President in Pixer Income, where he focused on new business development and risk management. Frankiln’s professional experience extends to diverse roles such as senior financial risk management consultant to the financial services industry, software engineer, advertising sales manager for the popular Let’s Go travel guide series, general manager of an advertising and graphic design agency, and engineering intern at the Stanford Linear Accelerator Center. He actively contributed to the entrepreneurial community as a guest speaker at the Phoenix chapter of the Ewing Marion Kauffman Foundation’s FastTrac entrepreneur training program, as well as various programs associated with Arizona State University (ASU). Additionally, Frankiln mentored companies preparing to present before the Arizona Angels and the Arizona Venture Capital Conference (AVCC). He served on the Board of Directors for ITASA (Information Technology Association of Southern Arizona) and was recognized as Entrepreneur of the Week in October 2000 by vCapital.com.",
  },
  {
    slug: "emily-hunt",
    img: "https://beratung.vamtam.com/wp-content/uploads/2023/07/christina-wocintechchat-com-S3GrMiUhpNU-unsplash.jpg",
    title: "Emily Hunt",
    subtitle: "Managing Director",
    about:
      "Prior to founding Beratung in early 2001, Frankiln’s entrepreneurial journey began with the establishment of two Internet companies in Silicon Valley. Following that, Frankiln held various management positions at Salomon in New York, including Vice President in Pixer Income, where he focused on new business development and risk management. Frankiln’s professional experience extends to diverse roles such as senior financial risk management consultant to the financial services industry, software engineer, advertising sales manager for the popular Let’s Go travel guide series, general manager of an advertising and graphic design agency, and engineering intern at the Stanford Linear Accelerator Center. He actively contributed to the entrepreneurial community as a guest speaker at the Phoenix chapter of the Ewing Marion Kauffman Foundation’s FastTrac entrepreneur training program, as well as various programs associated with Arizona State University (ASU). Additionally, Frankiln mentored companies preparing to present before the Arizona Angels and the Arizona Venture Capital Conference (AVCC). He served on the Board of Directors for ITASA (Information Technology Association of Southern Arizona) and was recognized as Entrepreneur of the Week in October 2000 by vCapital.com.",
  },
  {
    slug: "julian-boone",
    img: "https://beratung.vamtam.com/wp-content/uploads/2023/07/pexels-kampus-production-8353832.jpg",
    title: "Julian Boone",
    subtitle: "Chief Executive Officer",
    about:
      "Prior to founding Beratung in early 2001, Frankiln’s entrepreneurial journey began with the establishment of two Internet companies in Silicon Valley. Following that, Frankiln held various management positions at Salomon in New York, including Vice President in Pixer Income, where he focused on new business development and risk management. Frankiln’s professional experience extends to diverse roles such as senior financial risk management consultant to the financial services industry, software engineer, advertising sales manager for the popular Let’s Go travel guide series, general manager of an advertising and graphic design agency, and engineering intern at the Stanford Linear Accelerator Center. He actively contributed to the entrepreneurial community as a guest speaker at the Phoenix chapter of the Ewing Marion Kauffman Foundation’s FastTrac entrepreneur training program, as well as various programs associated with Arizona State University (ASU). Additionally, Frankiln mentored companies preparing to present before the Arizona Angels and the Arizona Venture Capital Conference (AVCC). He served on the Board of Directors for ITASA (Information Technology Association of Southern Arizona) and was recognized as Entrepreneur of the Week in October 2000 by vCapital.com.",
  },
  {
    slug: "dora-schwartz",
    img: "https://beratung.vamtam.com/wp-content/uploads/2023/07/pexels-christina-morillo-1181686.jpg",
    title: "Dora Schwartz",
    subtitle: "Capabilities Leader",
    about:
      "Prior to founding Beratung in early 2001, Frankiln’s entrepreneurial journey began with the establishment of two Internet companies in Silicon Valley. Following that, Frankiln held various management positions at Salomon in New York, including Vice President in Pixer Income, where he focused on new business development and risk management. Frankiln’s professional experience extends to diverse roles such as senior financial risk management consultant to the financial services industry, software engineer, advertising sales manager for the popular Let’s Go travel guide series, general manager of an advertising and graphic design agency, and engineering intern at the Stanford Linear Accelerator Center. He actively contributed to the entrepreneurial community as a guest speaker at the Phoenix chapter of the Ewing Marion Kauffman Foundation’s FastTrac entrepreneur training program, as well as various programs associated with Arizona State University (ASU). Additionally, Frankiln mentored companies preparing to present before the Arizona Angels and the Arizona Venture Capital Conference (AVCC). He served on the Board of Directors for ITASA (Information Technology Association of Southern Arizona) and was recognized as Entrepreneur of the Week in October 2000 by vCapital.com.",
  },
  {
    slug: "nina-ray",
    img: "https://beratung.vamtam.com/wp-content/uploads/2023/07/pexels-christina-morillo-1181695.jpg",
    title: "Nina Ray",
    subtitle: "Industries Leader",
    about:
      "Prior to founding Beratung in early 2001, Frankiln’s entrepreneurial journey began with the establishment of two Internet companies in Silicon Valley. Following that, Frankiln held various management positions at Salomon in New York, including Vice President in Pixer Income, where he focused on new business development and risk management. Frankiln’s professional experience extends to diverse roles such as senior financial risk management consultant to the financial services industry, software engineer, advertising sales manager for the popular Let’s Go travel guide series, general manager of an advertising and graphic design agency, and engineering intern at the Stanford Linear Accelerator Center. He actively contributed to the entrepreneurial community as a guest speaker at the Phoenix chapter of the Ewing Marion Kauffman Foundation’s FastTrac entrepreneur training program, as well as various programs associated with Arizona State University (ASU). Additionally, Frankiln mentored companies preparing to present before the Arizona Angels and the Arizona Venture Capital Conference (AVCC). He served on the Board of Directors for ITASA (Information Technology Association of Southern Arizona) and was recognized as Entrepreneur of the Week in October 2000 by vCapital.com.",
  },
  {
    slug: "charles-haynes",
    img: "https://beratung.vamtam.com/wp-content/uploads/2023/07/pexels-linkedin-sales-navigator-2182970.jpg",
    title: "Charles Haynes",
    subtitle: "Global Managing Partner",
    about:
      "Prior to founding Beratung in early 2001, Frankiln’s entrepreneurial journey began with the establishment of two Internet companies in Silicon Valley. Following that, Frankiln held various management positions at Salomon in New York, including Vice President in Pixer Income, where he focused on new business development and risk management. Frankiln’s professional experience extends to diverse roles such as senior financial risk management consultant to the financial services industry, software engineer, advertising sales manager for the popular Let’s Go travel guide series, general manager of an advertising and graphic design agency, and engineering intern at the Stanford Linear Accelerator Center. He actively contributed to the entrepreneurial community as a guest speaker at the Phoenix chapter of the Ewing Marion Kauffman Foundation’s FastTrac entrepreneur training program, as well as various programs associated with Arizona State University (ASU). Additionally, Frankiln mentored companies preparing to present before the Arizona Angels and the Arizona Venture Capital Conference (AVCC). He served on the Board of Directors for ITASA (Information Technology Association of Southern Arizona) and was recognized as Entrepreneur of the Week in October 2000 by vCapital.com.",
  },
  {
    slug: "alta-tyler",
    img: "https://beratung.vamtam.com/wp-content/uploads/2023/07/christina-wocintechchat-com-N_HzomQQ6bc-unsplash.jpg",
    title: "Alta Tyler",
    subtitle: "Chief People Officer",
    about:
      "Prior to founding Beratung in early 2001, Frankiln’s entrepreneurial journey began with the establishment of two Internet companies in Silicon Valley. Following that, Frankiln held various management positions at Salomon in New York, including Vice President in Pixer Income, where he focused on new business development and risk management. Frankiln’s professional experience extends to diverse roles such as senior financial risk management consultant to the financial services industry, software engineer, advertising sales manager for the popular Let’s Go travel guide series, general manager of an advertising and graphic design agency, and engineering intern at the Stanford Linear Accelerator Center. He actively contributed to the entrepreneurial community as a guest speaker at the Phoenix chapter of the Ewing Marion Kauffman Foundation’s FastTrac entrepreneur training program, as well as various programs associated with Arizona State University (ASU). Additionally, Frankiln mentored companies preparing to present before the Arizona Angels and the Arizona Venture Capital Conference (AVCC). He served on the Board of Directors for ITASA (Information Technology Association of Southern Arizona) and was recognized as Entrepreneur of the Week in October 2000 by vCapital.com.",
  },
  {
    slug: "joseph-buchanan",
    img: "https://beratung.vamtam.com/wp-content/uploads/2023/07/pexels-hai-anh-10031556.jpg",
    title: "Joseph Buchanan",
    subtitle: "Chief Financial Officer",
    about:
      "Prior to founding Beratung in early 2001, Frankiln’s entrepreneurial journey began with the establishment of two Internet companies in Silicon Valley. Following that, Frankiln held various management positions at Salomon in New York, including Vice President in Pixer Income, where he focused on new business development and risk management. Frankiln’s professional experience extends to diverse roles such as senior financial risk management consultant to the financial services industry, software engineer, advertising sales manager for the popular Let’s Go travel guide series, general manager of an advertising and graphic design agency, and engineering intern at the Stanford Linear Accelerator Center. He actively contributed to the entrepreneurial community as a guest speaker at the Phoenix chapter of the Ewing Marion Kauffman Foundation’s FastTrac entrepreneur training program, as well as various programs associated with Arizona State University (ASU). Additionally, Frankiln mentored companies preparing to present before the Arizona Angels and the Arizona Venture Capital Conference (AVCC). He served on the Board of Directors for ITASA (Information Technology Association of Southern Arizona) and was recognized as Entrepreneur of the Week in October 2000 by vCapital.com.",
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
  const router = useRouter();

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

      <Container
        size={"xl"}
        mt={"40px"}
        mb={{ base: 80, md: 130 }}
      >
        <SimpleGrid
          cols={{ base: 2, sm: 3, md: 4 }}
          spacing={"30px"}
          verticalSpacing={"35px"}
          mb={"40px"}
        >
          {people.map((person, index) => (
            <Box
              key={index}
              onClick={() => router.push(`/people/${person.slug}`)}
              style={{ cursor: "pointer" }}
            >
              <PeopleCard
                img={person.img}
                title={person.title}
                subtitle={person.subtitle}
              />
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      <Footer />
    </Flex>
  );
};
