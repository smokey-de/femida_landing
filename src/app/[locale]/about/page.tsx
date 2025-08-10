"use client";

import {
  Box,
  Container,
  Flex,
  Image,
  SimpleGrid,
  Text,
} from "@mantine/core";

import {
  Navbar,
  Footer,
  OtherHeader,
  SplitSection,
} from "@/shared/ui";

import s from "@/pages/about/style.module.scss";

const values = [
  {
    title: "От понимания к действию",
    description:
      "ставя под сомнение традиционное мышление и подходы, а также предлагая новые перспективы для решения самых сложных задач",
  },
  {
    title: "Стремление к вдохновляющему результату",
    description:
      "смотря дальше ближайшего дедлайна — на десятилетия вперёд, и тесно сотрудничая с клиентами для укрепления и вдохновения их организаций",
  },
  {
    title: "Преодоление сложности",
    description:
      "находя уникальные источники конкурентного преимущества и скрытые истины в динамичных и сложных системах",
  },
  {
    title: "Лидерство с честностью",
    description:
      "решая трудные вопросы, оставаясь верными своим ценностям и открыто высказывая свою позицию",
  },
  {
    title: "Развитие через развитие других",
    description:
      "помогая клиентам, коллегам и всему сообществу достигать успеха и раскрывать свой потенциал",
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
          aboutTitle="О нас"
          title="Строим мосты для устойчивого и инклюзивного роста"
          description={`В FEMIDA FINANCE мы — молодая и амбициозная компания, предоставляющая бухгалтерские и юридические услуги для бизнеса. 
          Наш успех основан на глубоком сотрудничестве и создании сообщества квалифицированных специалистов, объединённых целью помогать предпринимателям эффективно решать финансовые и правовые задачи и достигать успеха.`}
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
            title="Личный подход в глобальном масштабе"
            description="Наш опыт"
            linkTitle="Познакомьтесь с нами"
            subtitle={`FEMIDA FINANCE работает с бизнесом по всему Узбекистану, обеспечивая уникальную гибкость и оперативность в решении задач клиентов. Такой подход отличает нас от традиционных компаний, делая сотрудничество более персонализированным и эффективным. Наша главная цель — помочь вам преодолевать самые серьёзные вызовы и воплощать ваши бизнес-идеи в реальность.
  Мы стремимся к долгосрочному партнерству, выстраивая доверие и поддерживая ваш успех на каждом этапе. Наши специалисты тесно интегрируются с вашей командой, активно делясь опытом и знаниями в ходе всего сотрудничества.`}
            imageSrc="https://beratung.vamtam.com/wp-content/uploads/2023/07/pexels-yan-krukau-7794093.jpg"
            imagePosition="right"
            showButton={true}
          />

          <SplitSection
            title="Всегда делать то, что правильно"
            description="Наши ценности"
            linkTitle="Познакомьтесь с нашей командой"
            subtitle={`Мы строим свою работу на балансе между профессиональной деятельностью и личной жизнью, ценим важность семьи и участия в значимых проектах, поддерживая развитие предпринимателей и сообществ по всему Узбекистану.
  Мы инвестируем в людей и успех наших клиентов, создавая комфортную рабочую атмосферу, где каждый может реализовать свой потенциал. FEMIDA FINANCE гордится сотрудничеством с разнообразными клиентами — от стартапов до крупных компаний, оказывая юридическую и бухгалтерскую поддержку.`}
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
              alt=""
            />
            <Text>Наша миссия</Text>
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
          Как мы работаем
        </Text>
        <Text
          style={{ color: "#5F6567" }}
          fz={{ base: 16, md: 20 }}
          lh={"1.5em"}
          maw={800}
          ta={"center"}
        >
          Мы трансформируем организации устойчиво, раскрываем их потенциал и
          создаём эффективные команды для долгосрочного успеха. Сотрудничайте с
          нами — и достигайте выдающихся результатов.
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
              gap={50}
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
                  Инновации и технологии
                </Text>
                <Text
                  ff={"Helvetica"}
                  fz={16}
                  fw={400}
                  lh={"1.4em"}
                  lts={0}
                  style={{ color: "#5F6567" }}
                >
                  В быстро меняющемся мире постоянный прогресс необходим для
                  удовлетворения новых потребностей.
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
                  Экономьте деньги
                </Text>
                <Text
                  ff={"Helvetica"}
                  fz={16}
                  fw={400}
                  lh={"1.4em"}
                  lts={0}
                  style={{ color: "#5F6567" }}
                >
                  Выбирайте качество с самого начала. Экономьте время и деньги,
                  делая всё правильно вместе с нами.
                </Text>
              </Flex>
            </Flex>

            <Flex>
              <Image
                src={
                  "https://beratung.vamtam.com/wp-content/uploads/2023/06/illustration-1.svg"
                }
                alt=""
              ></Image>
            </Flex>

            <Flex
              direction={"column"}
              pt={80}
              pb={90}
              pl={20}
              justify={"space-between"}
              gap={50}
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
                  Сеть возможностей клиентов
                </Text>
                <Text
                  ff={"Helvetica"}
                  fz={16}
                  fw={400}
                  lh={"1.4em"}
                  lts={0}
                  style={{ color: "#5F6567" }}
                >
                  Благодаря нашему опыту и передовым компетенциям мы
                  обеспечиваем значимые и устойчивые изменения.
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
                  Постоянная поддержка
                </Text>
                <Text
                  ff={"Helvetica"}
                  fz={16}
                  fw={400}
                  lh={"1.4em"}
                  lts={0}
                  style={{ color: "#5F6567" }}
                >
                  Мы не только планируем, но и реализуем. Наша команда
                  профессионалов поддерживает вас на этапе внедрения — будь то в
                  составе вашей основной команды или на проектной основе.
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Container>
      </Flex>

      <Footer />
    </Flex>
  );
};

export default AboutPage;