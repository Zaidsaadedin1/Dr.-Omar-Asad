import React from "react";
import { Button, Group, Text, Menu, Flex } from "@mantine/core";
import {
  IconLogin,
  IconUser,
  IconCalendar,
  IconDashboard,
  IconLogout,
  IconStethoscope,
  IconInfoCircle,
  IconUsers,
  IconMedicalCross,
} from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useAuth } from "../../contexts/AuthContext";

const COLORS = {
  lightGreen: "#A8E6CF",
  darkGreenText: "#004d40",
  lightPink: "#FFEBEE",
  darkPinkText: "#880E4F",
  white: "#fff",
};

const MenuComponent = () => {
  const isMobileOrTablet = useMediaQuery("(max-width: 1200px)");
  const { t, i18n } = useTranslation(["menuComponent", "common"]);
  const currentLang = i18n.language || "en";
  const router = useRouter();
  const { isAuthenticated, user, logout } = useAuth();
  const isRTL = currentLang === "ar";

  const renderAuthMenu = () => (
    <Menu>
      <Menu.Target>
        <Button
          variant="subtle"
          ff="Oswald, sans-serif"
          style={{ backgroundColor: COLORS.lightPink }}
        >
          <Group
            gap={2}
            wrap="nowrap"
            style={{ flexDirection: isRTL ? "row-reverse" : "row" }}
          >
            <IconUser size={12} color={COLORS.darkPinkText} />
            <Text color={COLORS.darkPinkText} size="sm">{`${
              user?.firstName || ""
            } ${user?.lastName || ""}`}</Text>
          </Group>
        </Button>
      </Menu.Target>
      <Menu.Dropdown style={{ backgroundColor: COLORS.lightPink }}>
        <Menu.Item
          onClick={() => router.push(`/${currentLang}/dashboard`)}
          style={{
            direction: isRTL ? "rtl" : "ltr",
            color: COLORS.darkPinkText,
          }}
          ff="Oswald, sans-serif"
        >
          <Group gap={2}>
            <IconDashboard size={14} color={COLORS.darkPinkText} />
            <Text size="sm">{t("patient_dashboard")}</Text>
          </Group>
        </Menu.Item>
        {user?.Roles === "Admin" && (
          <Menu.Item
            onClick={() => router.push(`/${currentLang}/admin`)}
            style={{
              direction: isRTL ? "rtl" : "ltr",
              color: COLORS.darkPinkText,
            }}
            ff="Oswald, sans-serif"
          >
            <Group gap={2}>
              <IconMedicalCross size={14} color={COLORS.darkPinkText} />
              <Text size="sm">{t("clinic_management")}</Text>
            </Group>
          </Menu.Item>
        )}
        <Menu.Item
          onClick={() => router.push(`/${currentLang}/consultation`)}
          style={{
            direction: isRTL ? "rtl" : "ltr",
            color: COLORS.darkPinkText,
          }}
          ff="Oswald, sans-serif"
        >
          <Group gap={2} wrap="nowrap">
            <IconCalendar size={14} color={COLORS.darkPinkText} />
            <Text size="sm">{t("my_appointments")}</Text>
          </Group>
        </Menu.Item>
        <Menu.Item
          onClick={() => router.push(`/${currentLang}/profile`)}
          style={{
            direction: isRTL ? "rtl" : "ltr",
            color: COLORS.darkPinkText,
          }}
          ff="Oswald, sans-serif"
        >
          <Group gap={2} wrap="nowrap">
            <IconUser size={14} color={COLORS.darkPinkText} />
            <Text size="sm">{t("profile")}</Text>
          </Group>
        </Menu.Item>
        <Menu.Item
          onClick={logout}
          style={{
            direction: isRTL ? "rtl" : "ltr",
            color: COLORS.darkPinkText,
          }}
          ff="Oswald, sans-serif"
        >
          <Group gap={2}>
            <IconLogout size={14} color={COLORS.darkPinkText} />
            <Text size="sm">{t("logout")}</Text>
          </Group>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );

  const menuItems = [
    { path: "/about", icon: IconInfoCircle, text: t("about_doctor") },
    { path: "/services", icon: IconStethoscope, text: t("services") },
    { path: "/bloomMental", icon: IconUsers, text: t("bloom_mental") },
    { path: "/consultation", icon: IconCalendar, text: t("book_appointment") },
  ].filter((item) => item.path && item.icon);

  const renderMainMenu = () =>
    isMobileOrTablet ? (
      <Menu shadow="md" width={250}>
        <Menu.Target>
          <Button
            variant="subtle"
            ff="Oswald, sans-serif"
            style={{
              backgroundColor: COLORS.lightGreen,
              color: COLORS.darkGreenText,
              fontSize: "1rem", // Suitable for phones
              padding: "8px 14px", // Slightly larger touch area
            }}
          >
            {t("menu")}
          </Button>
        </Menu.Target>
        <Menu.Dropdown>
          {menuItems.map((item) => (
            <Menu.Item
              key={item.path}
              onClick={() => router.push(`/${currentLang}${item.path}`)}
              style={{
                direction: isRTL ? "rtl" : "ltr",
                color: COLORS.darkPinkText,
              }}
            >
              <Group>
                <item.icon size={12} color={COLORS.darkPinkText} />
                <Text size="sm">{item.text}</Text>
              </Group>
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>
    ) : (
      <Group
        wrap="nowrap"
        gap={5}
        style={{
          fontFamily: "Oswald, sans-serif",
          flexDirection: isRTL ? "row-reverse" : "row",
        }}
      >
        {menuItems.map((item) => (
          <Button
            key={item.path}
            variant="subtle"
            onClick={() => router.push(`/${currentLang}${item.path}`)}
            style={{
              flexDirection: isRTL ? "row-reverse" : "row",
              backgroundColor: COLORS.lightPink,
              color: COLORS.darkPinkText,
            }}
          >
            <Group
              gap={2}
              wrap="nowrap"
              style={{ flexDirection: isRTL ? "row-reverse" : "row" }}
            >
              <item.icon size={12} color={COLORS.darkPinkText} />
              <Text size="sm">{item.text}</Text>
            </Group>
          </Button>
        ))}
      </Group>
    );

  const renderAccountMenu = () =>
    isMobileOrTablet ? (
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <Button
            variant="subtle"
            ff="Oswald, sans-serif"
            style={{
              backgroundColor: COLORS.lightGreen,
              color: COLORS.darkGreenText,
              fontSize: "1rem", // Suitable for phones
              padding: "8px 14px",
            }}
          >
            {t("patient_portal")}
          </Button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item onClick={() => router.push(`/${currentLang}/signUp`)}>
            <Group
              gap={2}
              style={{
                fontFamily: "Oswald, sans-serif",
                flexDirection: isRTL ? "row-reverse" : "row",
                color: COLORS.darkPinkText,
              }}
              wrap="nowrap"
            >
              <IconUser size={12} color={COLORS.darkPinkText} />
              <Text size="sm">{t("register_patient")}</Text>
            </Group>
          </Menu.Item>
          <Menu.Item onClick={() => router.push(`/${currentLang}/login`)}>
            <Group
              gap={2}
              style={{
                fontFamily: "Oswald, sans-serif",
                flexDirection: isRTL ? "row-reverse" : "row",
                color: COLORS.darkPinkText,
              }}
            >
              <IconLogin size={12} color={COLORS.darkPinkText} />
              <Text size="sm">{t("patient_login")}</Text>
            </Group>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    ) : (
      <Group
        wrap="nowrap"
        gap={5}
        style={{
          fontFamily: "Oswald, sans-serif",
          flexDirection: isRTL ? "row-reverse" : "row",
        }}
      >
        <Button
          variant="subtle"
          onClick={() => router.push(`/${currentLang}/register`)}
          style={{
            fontFamily: "Oswald, sans-serif",
            flexDirection: isRTL ? "row-reverse" : "row",
            backgroundColor: COLORS.lightPink,
            color: COLORS.darkPinkText,
          }}
        >
          <Group gap={2}>
            <IconUser size={12} color={COLORS.darkPinkText} />
            <Text size="sm">{t("register")}</Text>
          </Group>
        </Button>
        <Button
          variant="subtle"
          onClick={() => router.push(`/${currentLang}/login`)}
          style={{
            fontFamily: "Oswald, sans-serif",
            flexDirection: isRTL ? "row-reverse" : "row",
            backgroundColor: COLORS.lightPink,
            color: COLORS.darkPinkText,
          }}
        >
          <Group gap={2} wrap="nowrap">
            <IconLogin size={12} color={COLORS.darkPinkText} />
            <Text size="sm">{t("login")}</Text>
          </Group>
        </Button>
      </Group>
    );

  return (
    <Flex
      align="center"
      justify="space-between"
      mt="xs"
      direction={isRTL ? "row-reverse" : "row"}
    >
      {/* Logo */}

      {isRTL ? (
        <Flex
          align="center"
          gap="sm"
          direction={isRTL ? "row-reverse" : "row"}
          justify="flex-start"
        >
          <LanguageSwitcher />
          {isAuthenticated ? renderAuthMenu() : renderAccountMenu()}
          {renderMainMenu()}
        </Flex>
      ) : (
        <Flex
          align="center"
          gap="md"
          justify={isRTL ? "flex-end" : "flex-start"}
          dir={isRTL ? "rtl" : "ltr"}
        >
          <Button
            onClick={() => router.push(`/${currentLang}/`)}
            color={COLORS.lightPink}
            variant="subtle"
          >
            <Text
              variant="subtle"
              fw={600}
              ff="Oswald, sans-serif"
              color={COLORS.darkPinkText}
              fs={"1.2rem"}
            >
              {t("dr_omar_asad")}
            </Text>
          </Button>
        </Flex>
      )}

      {/* Right Side Actions */}
      {isRTL ? (
        <Button
          onClick={() => router.push(`/${currentLang}/`)}
          color={COLORS.lightPink}
          variant="subtle"
        >
          <Text
            variant="subtle"
            fw={600}
            ff="Oswald, sans-serif"
            color={COLORS.darkPinkText}
            fs={"1.2rem"}
          >
            {t("dr_omar_asad")}
          </Text>
        </Button>
      ) : (
        <Flex
          align="center"
          gap="sm"
          direction={isRTL ? "row-reverse" : "row"}
          justify="flex-end"
        >
          {renderMainMenu()}
          {isAuthenticated ? renderAuthMenu() : renderAccountMenu()}
          <LanguageSwitcher />
        </Flex>
      )}
    </Flex>
  );
};

export default MenuComponent;
