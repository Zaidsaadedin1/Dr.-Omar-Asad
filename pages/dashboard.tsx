// pages/login.tsx
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import Dashboard from "../app/components/Dashboard/Dashboard";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", [
        "dashboard",
        "menuComponent",
        "footer",
      ])),
    },
  };
};

export default Dashboard;
