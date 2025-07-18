import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

import type { Metadata, Viewport } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import "next-intl/server";
import { getLocale, getTranslations } from "next-intl/server";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";

import { routing } from "@/i18n/routing";

import "../globals.css";

export function generateStaticParams() {
  return [{ locale: "uz" }, { locale: "en" }, { locale: "ru" }];
}

const interSans = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  // const t = await getTranslations();
  const locale = await getLocale();

  return {
    title: "Femida",
    description: "Femida - Your Trusted Legal Partner",
    keywords: [],
    // metadataBase: new URL("example.com"),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "uz-UZ": "/uz",
        "en-US": "/en",
        "ru-RU": "/ru",
      },
    },
    // openGraph: {
    // title: t("seo.title"),
    // description: t("seo.description"),
    // url: "https://example.com",
    // type: "website",
    // images: "/android-chrome-192x192.png",
    // siteName: "Femida",
    // locale: locale === "en" ? "en_US" : locale === "ru" ? "ru_RU" : "uz_UZ",
    // },
    // icons: {
    //   icon: "/favicon-16x16.png",
    //   shortcut: "/favicon-32x32.png",
    //   apple: "/apple-touch-icon.png",
    //   other: {
    //     rel: "icon",
    //     url: "/android-chrome-192x192.png",
    //   },
    // },
    // manifest: "/manifest.json",
    // verification: {
    //   google: "google-site-verification-code",
    //   yandex: "yandex-verification-code",
    // },
    category: "business",
    pinterest: {
      richPin: true,
    },
  };
}

export const viewport: Viewport = {
  // themeColor: "#100e2a",
  // colorScheme: "dark",
  // width: "device-width",
  // initialScale: 1,
  // maximumScale: 1,
  // userScalable: true,
};

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default async function Layout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={interSans.className}
        cz-shortcut-listen="true"
      >
        <NextIntlClientProvider>
          <MantineProvider theme={theme}>{children}</MantineProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
