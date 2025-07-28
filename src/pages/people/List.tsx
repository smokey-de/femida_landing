"use client";

import { Box, Container, SimpleGrid } from "@mantine/core";

import { redirect } from "@/i18n/navigation";
import { PeopleCard } from "@/shared/ui";

export const List = () => {
  return (
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
            onClick={() =>
              redirect({ href: `/people/${person.slug}`, locale: "uz" })
            }
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
  );
};

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
