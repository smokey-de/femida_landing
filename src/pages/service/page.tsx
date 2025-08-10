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
    linkLabel: "Разработка бизнес-стратегии",
    text: "Создание эффективных стратегий для повышения конкурентоспособности и достижения целей бизнеса.",
  },
  {
    linkLabel: "Оптимизация процессов",
    text: "Упрощение операций и повышение эффективности для максимальной продуктивности и сокращения затрат.",
  },
  {
    linkLabel: "Маркетинговые исследования и анализ",
    text: "Получите ценную информацию о целевом рынке, конкурентах и потребностях клиентов.",
  },
  {
    linkLabel: "Управление изменениями",
    text: "Плавно проходите через организационные изменения и обеспечивайте успешную реализацию.",
  },
  {
    linkLabel: "Технологические решения",
    text: "Разнообразная техническая экспертиза, командный подход и ориентация на результат.",
  },
  {
    linkLabel: "Управление талантами и HR-консалтинг",
    text: "Рекрутинговые агентства постоянно адаптируются к меняющимся условиям современного рынка труда.",
  },
  {
    linkLabel: "Оценка и управление рисками",
    text: "Наша команда консультантов по рискам помогает превратить неопределённость в новые возможности.",
  },
  {
    linkLabel: "Консалтинг по устойчивому развитию и КСО",
    text: "Наш опыт показывает, что видение и прагматизм всегда идут рука об руку.",
  },
];

const people = [
  {
    img: "https://i.ibb.co/3wQTXxN/IMG-3239-1.jpg",
    title: "Ярматова Виктория",
    subtitle: "Руководитель по развитию и юридическому сопровождению.",
  },
  {
    img: "https://i.ibb.co/s9XJRs2x/IMG-3236-1-1.jpg",
    title: "Саидибрагимова Камила",
    subtitle: "Руководитель отдела по работе с клиентами.",
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
          aboutTitle="Области практики"
          title="Профессиональные услуги бизнес-консалтинга"
          description="Наша экспертиза охватывает широкий спектр направлений, включая стратегию, маркетинг, организацию, операции, технологии, трансформацию, цифровые решения, расширенную аналитику, корпоративные финансы, слияния и поглощения, а также устойчивое развитие. 
Мы обладаем глубокими знаниями в каждой из этих сфер, но главное наше преимущество — это комплексный подход. Мы понимаем, что настоящая ценность в синергии и соединении различных направлений, в устранении разрывов между отделами компании. Оптимизируя общий результат всех компонентов, мы достигаем эффекта, превышающего простую сумму отдельных элементов."
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
              Если вы не нашли нужное направление, свяжитесь с нами
            </Text>
            <BtnBasic
              component={BaseLink}
              href="/contact"
              maw={"140px"}
              size="xl"
              visibleFrom="md"
            >
              Связаться
            </BtnBasic>
            <BtnBasic
              component={BaseLink}
              href="/contact"
              maw={"140px"}
              size="md"
              hiddenFrom="md"
            >
              Связаться
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
                Мы предоставляем практические рекомендации, основанные на
                обширном опыте работы в ведущих отраслях мира.
              </Text>
            </Flex>
            <Image
              w={"160px"}
              h={"195px"}
              src={
                "https://beratung.vamtam.com/wp-content/uploads/2023/06/illustration-3.svg"
              }
              alt="иллюстрация услуги"
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
            Смотреть ещё
          </BtnBasic>
        </Flex>
      </Container>

      <Footer />
    </Flex>
  );
};
