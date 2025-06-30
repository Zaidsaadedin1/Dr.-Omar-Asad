import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { i18nConfig } from "../../../i18n-config";
import Profile from "../../../app/components/Profile/Profile";
import { checkAuth } from "../../../checkIsAuthMiddleware";
import userController from "../../../app/Apis/controllers/userController";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const locale = (params?.locale as string) || i18nConfig.defaultLocale;
  const authCheck = await checkAuth(context);

  if (!authCheck.authenticated) {
    return {
      redirect: {
        destination: `/${locale || i18nConfig.defaultLocale}/unAuthorized`,
        permanent: false,
      },
    };
  }
  const res = await userController.getUserById(authCheck.user?.id);

  return {
    props: {
      ...(await serverSideTranslations(locale || i18nConfig.defaultLocale, [
        "profile",
        "menuComponent",
        "footer",
      ])),
      user: res.data,
    },
  };
};

export default Profile;
