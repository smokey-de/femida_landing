"use client";

import {
  Burger,
  Container,
  Divider,
  Flex,
  Paper,
  Transition,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

import { useEffect, useRef } from "react";

import Image from "next/image";

import cn from "classnames";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { mediaQueries } from "@/shared/lib/constants";

import { BtnBasic } from "../btn-basic/ui";
import { LanguageSwitcher } from "../language-switcher";
import { BaseLink } from "../link";
import s from "./styles.module.scss";

gsap.registerPlugin(ScrollTrigger);

type NavbarRoute = {
  label: string;
  href: string;
};

const LOGO_URL =
  "https://beratung.vamtam.com/wp-content/uploads/2023/07/logo-white.svg";
const navbarRoutes: NavbarRoute[] = [
  { label: "Service", href: "/service" },
  { label: "People", href: "/people" },
  { label: "About", href: "/about" },
  // { label: "Contact", href: "/contact" },
  // { label: "Call us: +1 234 567 890", href: "tel:+1234567890" },
];

export const Navbar = ({ darkMode }: { darkMode?: boolean }) => {
  const isNotMobile = useMediaQuery(mediaQueries.mobile);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nav = navRef.current;

    if (!nav) return;

    let lastScroll = 0;

    gsap.to(nav, {
      yPercent: -100,
      ease: "power2.out",
      scrollTrigger: {
        start: 0,
        end: "max",
        onUpdate: (self) => {
          const currentScroll = self.scroll();
          const scrollDown = currentScroll > lastScroll;
          gsap.to(nav, {
            yPercent: scrollDown ? -100 : 0,
            duration: 0.4,
            ease: "power2.out",
          });
          lastScroll = currentScroll;
        },
      },
    });
    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        if (!nav) return;
        if (self.scroll() > 10) {
          nav.classList.add(s.scrolled);
        } else if (!darkMode) {
          nav.classList.remove(s.scrolled);
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className={cn(s.nav, [darkMode && s.scrolled])}
    >
      <NavContainer>
        <NavElement>
          <Image
            src={LOGO_URL}
            alt="Logo"
            width={120}
            height={30}
          />
          {isNotMobile ? <DesktopNavList /> : <MobileNavList />}
        </NavElement>

        <div className={s.dividerWrapper}>
          <Divider className={s.divider} />
        </div>
      </NavContainer>
    </nav>
  );
};

const DesktopNavList = () => (
  <NavList>
    <NavItems />
    <LanguageSwitcher />
    <ContactBtn />
  </NavList>
);

const scaleY = {
  in: { opacity: 1, transform: "scaleY(1)" },
  out: { opacity: 0, transform: "scaleY(0)" },
  common: { transformOrigin: "top" },
  transitionProperty: "transform, opacity",
};

const MobileNavList = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <NavList gap={"sm"}>
      <ContactBtn />
      <Burger
        opened={opened}
        onClick={toggle}
        color="white"
      />
      <Transition
        mounted={opened}
        transition={scaleY}
        duration={200}
        timingFunction="ease"
        keepMounted
      >
        {(transitionStyle) => (
          <NavbarDropdown
            style={{ ...transitionStyle, zIndex: 1 }}
            bg={"#374B47"}
          >
            <NavList direction={"column"}>
              <NavItems />
              <LanguageSwitcher />
            </NavList>
          </NavbarDropdown>
        )}
      </Transition>
    </NavList>
  );
};

const NavItems = () =>
  navbarRoutes.map((item) => (
    <BaseLink
      key={item.label}
      href={item.href}
    >
      {item.label}
    </BaseLink>
  ));

const ContactBtn = () => (
  <BtnBasic
    component={BaseLink}
    href="/contact"
    size="sm"
    color="#fff"
    visibleFrom="md"
  >
    Contact us
  </BtnBasic>
);

const NavContainer = Container.withProps({
  h: "5rem",
  size: "xl",
});

const NavElement = Flex.withProps({
  h: "100%",
  align: "center",
  justify: "space-between",
});

const NavList = Flex.withProps({
  h: "100%",
  align: "center",
  justify: "space-between",
  gap: "2rem",
});

const NavbarDropdown = Paper.withProps({
  pos: "absolute",
  p: "xl",
  top: 80,
  left: 0,
  right: 0,
  bdrs: "0",
  bg: "transparent",
});
