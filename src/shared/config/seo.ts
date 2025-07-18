import { Metadata, Viewport } from "next";
import { getLocale } from "next-intl/server";
import { Geologica } from "next/font/google";

export const SystemFont = Geologica({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  fallback: ["system-ui", "sans-serif"],
  subsets: ["latin"],
});

export async function metadataBase(): Promise<Metadata> {
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

export const viewportBase: Viewport = {
  // themeColor: "#100e2a",
  // colorScheme: "dark",
  // width: "device-width",
  // initialScale: 1,
  // maximumScale: 1,
  // userScalable: true,
};
