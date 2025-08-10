"use client";

import { BaseLink, BtnBasic } from "@/shared/ui";

export const ContactUs = () => (
  <BtnBasic
    component={BaseLink}
    href="/contact"
    maw={"140px"}
    size="xl"
    visibleFrom="md"
  >
    Contact Us
  </BtnBasic>
);

export const ViewMore = () => (
  <BtnBasic
    component={BaseLink}
    href="/people"
  >
    View more
  </BtnBasic>
);
