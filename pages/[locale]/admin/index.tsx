import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps, GetStaticPaths } from "next";
import { i18nConfig } from "../../../i18n-config";
import Admin from "../../../app/components/Admin/Admin";
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
      ...(await serverSideTranslations(locale || i18nConfig.defaultLocale, [
        "discoverMore",
        "menuComponent",
        "footer",
      ])),
    },
  };
};

export default Admin;
