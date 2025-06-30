import { Button, Stack, Text } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { IconHome } from "@tabler/icons-react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { i18nConfig } from "../../../i18n-config";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

const UnAuthorized = () => {
  const { t } = useTranslation("common");
  const { locale } = useRouter();
  const isRTL = locale === "ar";

  return (
    <Stack p="2rem" ta="center" dir={isRTL ? "rtl" : "ltr"}>
      <Text>{t("unauthorized.title")}</Text>
      <Link href="/login" passHref legacyBehavior>
        <Button component="a" variant="subtle">
          <IconHome size={16} />
          {t("unauthorized.login_button")}
        </Button>
      </Link>
    </Stack>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: i18nConfig.locales.map((locale) => ({
      params: { locale },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const locale = (params?.locale as string) || i18nConfig.defaultLocale;

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "footer",
        "menuComponent",
      ])),
    },
  };
};

export default UnAuthorized;
