// pages/login.tsx
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import BloomMentalPage from "../app/components/BloomMentalPage/BloomMentalPage";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", [
        "bloomMental",
        "menuComponent",
        "footer",
      ])),
    },
  };
};

export default BloomMentalPage;
