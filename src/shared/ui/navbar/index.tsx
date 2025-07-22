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

import Image from "next/image";

import { mediaQueries } from "@/shared/lib/constants";

import { BtnBasic } from "../btn-basic/ui";
import { LanguageSwitcher } from "../language-switcher";
import { BaseLink } from "../link";
import s from "./styles.module.scss";

type NavbarRoute = {
  label: string;
  href: string;
};

const LOGO_URL =
  "https://beratung.vamtam.com/wp-content/uploads/2023/07/logo-white.svg";
const navbarRoutes: NavbarRoute[] = [
  { label: "Service", href: "/#service" },
  { label: "People", href: "/#people" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
  // { label: "Call us: +1 234 567 890", href: "tel:+1234567890" },
];

export const Navbar = () => {
  const isNotMobile = useMediaQuery(mediaQueries.mobile);
  return (
    <nav className={s.nav}>
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
        <Divider />
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
      />
      <Transition
        mounted={opened}
        transition={scaleY}
        duration={200}
        timingFunction="ease"
        keepMounted
      >
        {(transitionStyle) => (
          <NavbarDropdown style={{ ...transitionStyle, zIndex: 1 }}>
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

const ContactBtn = () => <BtnBasic size="sm">Contact us</BtnBasic>;

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
