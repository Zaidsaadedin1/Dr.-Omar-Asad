import React from "react";
import { Menu } from "@mantine/core";
import { IconLanguage } from "@tabler/icons-react";
import { useRouter } from "next/router";

const languages = [
  { code: "en", label: "English" },
  { code: "ar", label: "العربية" },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const { locale, asPath } = router;

  const changeLocale = (newLocale: string) => {
    if (locale === newLocale) return;

    const pathWithoutLocale = asPath.replace(/^\/(en|ar)/, ""); // Remove current locale
    const newPath = `/${newLocale}${pathWithoutLocale || "/"}`; // Add new locale

    router.push(newPath);
  };

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <IconLanguage size={16}>
          {languages.find((lang) => lang.code === locale)?.label ?? "Language"}
        </IconLanguage>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Select language</Menu.Label>
        {languages.map((lang) => (
          <Menu.Item key={lang.code} onClick={() => changeLocale(lang.code)}>
            {lang.label}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}
