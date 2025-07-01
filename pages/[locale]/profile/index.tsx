import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { i18nConfig } from "../../../i18n-config";
import Profile from "../../../app/components/Profile/Profile";
import { checkAuth } from "../../../checkIsAuthMiddleware";
import userController from "../../../app/Apis/controllers/userController";
import { GetServerSideProps } from "next";
import { GetUserDto } from "../../../app/Apis/types/userDtos/userDtos";

type Props = {
  user: GetUserDto | null;
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { locale } = context;
  const authCheck = await checkAuth(context);

  if (!authCheck.authenticated) {
    return {
      redirect: {
        destination: `/${locale || i18nConfig.defaultLocale}/unAuthorized`,
        permanent: false,
      },
    };
  }

  const userRes = await userController.getUserById(authCheck.user?.id);

  return {
    props: {
      ...(await serverSideTranslations(locale || i18nConfig.defaultLocale, [
        "profile",
        "footer",
      ])),
      user: userRes.data ?? null,
    },
  };
};

export default Profile;
