import React from "react";
import { Menu, Button } from "@mantine/core";
import { IconLanguage } from "@tabler/icons-react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const COLORS = {
  lightGreen: "#A8E6CF",
  darkGreenText: "#004d40",
  lightPink: "#FFEBEE",
  darkPinkText: "#880E4F",
  white: "#fff",
};

export default function LanguageSwitcher() {
  const router = useRouter();
  const { locale, pathname, query } = router;
  const { t } = useTranslation("common");
  const languages = [
    { code: "en", label: t("common:English") },
    { code: "ar", label: t("Arabic") },
  ];
  const changeLocale = (newLocale: string) => {
    if (newLocale === locale) return;

    // Set the cookie for middleware
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/`;

    // Use Next.js routing API with locale option
    router.push({ pathname, query }, undefined, { locale: newLocale });
  };

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button
          color={COLORS.darkPinkText}
          variant="subtle"
          leftSection={<IconLanguage size={16} />}
        >
          {languages.find((lang) => lang.code === locale)?.label ?? "Language"}
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label color={COLORS.darkPinkText}>
          {t("select_language")}
        </Menu.Label>
        {languages.map((lang) => (
          <Menu.Item
            color={COLORS.darkPinkText}
            key={lang.code}
            onClick={() => changeLocale(lang.code)}
          >
            {lang.label}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}
