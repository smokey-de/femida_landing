"use client";

import { Anchor, AnchorProps } from "@mantine/core";

import { FC, PropsWithChildren } from "react";

import { Link } from "@/i18n/navigation";

import s from "./styles.module.scss";

const defaultProps: AnchorProps = {
  fz: "0.875rem",
  lh: "1.25rem",
  fw: 500,
};

interface LinkProps extends AnchorProps, PropsWithChildren {
  href?: string;
}

export const BaseLink: FC<LinkProps> = (props) => {
  return (
    <Anchor
      component={Link}
      href={props.href || "#"}
      className={s.link}
      unstyled
      {...defaultProps}
      {...props}
    >
      {props.children}
    </Anchor>
  );
};
