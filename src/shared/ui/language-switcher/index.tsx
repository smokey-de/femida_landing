"use client";

import { Select } from "@mantine/core";

import { useState, useTransition } from "react";

import { Locale } from "next-intl";
import { useParams } from "next/navigation";

import { usePathname, useRouter } from "@/i18n/navigation";

import s from "./styles.module.scss";

const languageOptions = [
  { value: "uz", label: "Uz" },
  { value: "en", label: "En" },
  { value: "ru", label: "Ru" },
];

export const LanguageSwitcher = () => {
  const params: { locale: Locale } | null = useParams();

  const router = useRouter();
  const pathname = usePathname();

  const [isPending, startTransition] = useTransition();
  const [value, setValue] = useState<null | Locale>(params && params.locale);

  function onSelectChange(value: string | null) {
    const nextLocale = value as Locale;
    setValue(nextLocale);
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale },
      );
    });
  }

  return (
    <Select
      w={70}
      classNames={{ input: s.languageSwitcher }}
      allowDeselect={false}
      disabled={isPending}
      data={languageOptions}
      onChange={onSelectChange}
      value={value}
    />
  );
};
