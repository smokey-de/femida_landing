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
    number: "200+",
    title: "Клиенты по всему Узбекистану",
    description:
      "Сотрудничаем с ИП, ООО, стартапами и малым бизнесом, предоставляя бухгалтерские и юридические услуги в разных регионах страны.",
  },
  {
    number: "10+",
    title: "Лет опыта в команде",
    description:
      "Наши специалисты имеют практический опыт в бухгалтерском и налоговом учёте, юридическом сопровождении и развитии бизнеса.",
  },
  {
    number: "100%",
    title: "Приверженность интересам клиента",
    description:
      "Мы работаем прозрачно, соблюдаем конфиденциальность и подбираем решения, которые помогают бизнесу развиваться без лишних рисков.",
  },
];

export const PeoplePage = () => {
  return (
    <Flex
      direction="column"
      className={s.page}
    >
      <Navbar darkMode />

      <Box>
        <OtherHeader
          aboutTitle="Наша команда"
          title="Строим мосты для устойчивого и инклюзивного роста"
          description={`В FEMIDA FINANCE мы — молодая и амбициозная команда профессионалов, которые помогают бизнесу преодолевать финансовые и юридические вызовы, обеспечивая надёжное сопровождение на пути к развитию и успеху. 
          Наш подход основан на глубоком сотрудничестве и индивидуальном внимании к каждому клиенту, объединённых общей целью — поддерживать и развивать предпринимателей в Узбекистане.`}
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
              Ценности, формирующие нашу культуру
            </Text>
            <BtnBasic
              size="xl"
              maw={250}
              visibleFrom="md"
            >
              Ознакомьтесь с открытыми вакансиями
            </BtnBasic>
            <BtnBasic
              size="md"
              maw={250}
              hiddenFrom="md"
            >
              Ознакомьтесь с открытыми вакансиями
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
              В FEMIDA FINANCE мы твёрдо убеждены, что крепкая корпоративная
              культура, основанная на чётко сформулированных ценностях, является
              фундаментом нашего лидерства на рынке. Мы неизменно придерживаемся
              высоких стандартов этики, делового поведения и корпоративных
              принципов. Эти стандарты служат нам путеводной звездой в каждом
              решении и действии. Мы понимаем, что сотрудники играют ключевую
              роль в поддержании и развитии этой культуры, поэтому от каждого
              ожидается соблюдение этих стандартов в повседневном взаимодействии
              и профессиональной деятельности. Мы придаём большое значение
              регулярному общению и укреплению наших ценностей, чтобы они были
              неотъемлемой частью ДНК нашей компании.
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
              <Text>Возможности</Text>
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
          <Flex
            direction={"column"}
            gap={10}
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
              Наше руководство
            </Text>
            <Text
              fz={14}
              lh="1.4em"
              style={{ color: "#5F6567" }}
              maw={536}
            >
              Руководящий состав FEMIDA FINANCE включает ключевых специалистов:
              директора компании, совет учредителей, управленческую команду и
              руководителей отделов. Вместе они формируют стратегическое
              направление и обеспечивают эффективное функционирование
              организации.
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
