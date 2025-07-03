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
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isSmallMobile = useMediaQuery("(max-width: 480px)");
  const { t, i18n } = useTranslation(["menuComponent", "common"]);
  const currentLang = i18n.language || "en";
  const router = useRouter();
  const { isAuthenticated, user, logout } = useAuth();
  const isRTL = currentLang === "ar";

  // Responsive sizing helpers
  const getIconSize = () => {
    if (isSmallMobile) return 14;
    if (isMobile) return 16;
    return 18;
  };

  const getTextSize = () => {
    if (isSmallMobile) return "xs";
    if (isMobile) return "sm";
    return "md";
  };

  const getButtonPadding = () => {
    if (isSmallMobile) return "6px 10px";
    if (isMobile) return "8px 12px";
    return "10px 16px";
  };

  const getGapSize = () => {
    if (isSmallMobile) return 4;
    if (isMobile) return 6;
    return 8;
  };

  const renderAuthMenu = () => (
    <Menu>
      <Menu.Target>
        <Button
          variant="subtle"
          ff="Oswald, sans-serif"
          style={{
            backgroundColor: COLORS.lightPink,
            padding: getButtonPadding(),
            fontSize: isSmallMobile
              ? "0.75rem"
              : isMobile
              ? "0.875rem"
              : "1rem",
          }}
        >
          <Group
            gap={getGapSize()}
            wrap="nowrap"
            style={{ flexDirection: isRTL ? "row-reverse" : "row" }}
          >
            <IconUser size={getIconSize()} color={COLORS.darkPinkText} />
            <Text
              color={COLORS.darkPinkText}
              size={getTextSize()}
              style={{
                maxWidth: isSmallMobile ? "80px" : isMobile ? "120px" : "none",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {`${user?.firstName || ""} ${user?.lastName || ""}`}
            </Text>
          </Group>
        </Button>
      </Menu.Target>
      <Menu.Dropdown style={{ backgroundColor: COLORS.lightPink }}>
        <Menu.Item
          onClick={() => router.push(`/${currentLang}/dashboard`)}
          style={{
            direction: isRTL ? "rtl" : "ltr",
            color: COLORS.darkPinkText,
            padding: getButtonPadding(),
          }}
          ff="Oswald, sans-serif"
        >
          <Group gap={getGapSize()}>
            <IconDashboard size={getIconSize()} color={COLORS.darkPinkText} />
            <Text size={getTextSize()}>{t("patient_dashboard")}</Text>
          </Group>
        </Menu.Item>
        {user?.Roles === "Admin" && (
          <Menu.Item
            onClick={() => router.push(`/${currentLang}/admin`)}
            style={{
              direction: isRTL ? "rtl" : "ltr",
              color: COLORS.darkPinkText,
              padding: getButtonPadding(),
            }}
            ff="Oswald, sans-serif"
          >
            <Group gap={getGapSize()}>
              <IconMedicalCross
                size={getIconSize()}
                color={COLORS.darkPinkText}
              />
              <Text size={getTextSize()}>{t("clinic_management")}</Text>
            </Group>
          </Menu.Item>
        )}
        <Menu.Item
          onClick={() => router.push(`/${currentLang}/consultation`)}
          style={{
            direction: isRTL ? "rtl" : "ltr",
            color: COLORS.darkPinkText,
            padding: getButtonPadding(),
          }}
          ff="Oswald, sans-serif"
        >
          <Group gap={getGapSize()} wrap="nowrap">
            <IconCalendar size={getIconSize()} color={COLORS.darkPinkText} />
            <Text size={getTextSize()}>{t("my_appointments")}</Text>
          </Group>
        </Menu.Item>
        <Menu.Item
          onClick={() => router.push(`/${currentLang}/profile`)}
          style={{
            direction: isRTL ? "rtl" : "ltr",
            color: COLORS.darkPinkText,
            padding: getButtonPadding(),
          }}
          ff="Oswald, sans-serif"
        >
          <Group gap={getGapSize()} wrap="nowrap">
            <IconUser size={getIconSize()} color={COLORS.darkPinkText} />
            <Text size={getTextSize()}>{t("profile")}</Text>
          </Group>
        </Menu.Item>
        <Menu.Item
          onClick={logout}
          style={{
            direction: isRTL ? "rtl" : "ltr",
            color: COLORS.darkPinkText,
            padding: getButtonPadding(),
          }}
          ff="Oswald, sans-serif"
        >
          <Group gap={getGapSize()}>
            <IconLogout size={getIconSize()} color={COLORS.darkPinkText} />
            <Text size={getTextSize()}>{t("logout")}</Text>
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
      <Menu shadow="md">
        <Menu.Target>
          <Button
            variant="subtle"
            ff="Oswald, sans-serif"
            style={{
              backgroundColor: COLORS.darkPinkText,
              color: COLORS.lightPink,
              fontSize: isSmallMobile
                ? "0.75rem"
                : isMobile
                ? "0.875rem"
                : "1rem",
              padding: getButtonPadding(),
              minWidth: isSmallMobile ? "60px" : "80px",
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
                padding: getButtonPadding(),
              }}
            >
              <Group gap={getGapSize()}>
                <item.icon size={getIconSize()} color={COLORS.darkPinkText} />
                <Text size={getTextSize()}>{item.text}</Text>
              </Group>
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>
    ) : (
      <Group
        wrap="nowrap"
        gap={getGapSize()}
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
              padding: getButtonPadding(),
              fontSize: isSmallMobile
                ? "0.75rem"
                : isMobile
                ? "0.875rem"
                : "1rem",
            }}
          >
            <Group
              gap={getGapSize()}
              wrap="nowrap"
              style={{ flexDirection: isRTL ? "row-reverse" : "row" }}
            >
              <item.icon size={getIconSize()} color={COLORS.darkPinkText} />
              <Text size={getTextSize()}>{item.text}</Text>
            </Group>
          </Button>
        ))}
      </Group>
    );

  const renderAccountMenu = () =>
    isMobileOrTablet ? (
      <Menu shadow="md" width={isSmallMobile ? 180 : 200}>
        <Menu.Target>
          <Button
            variant="subtle"
            ff="Oswald, sans-serif"
            style={{
              backgroundColor: COLORS.darkPinkText,
              color: COLORS.lightPink,
              fontSize: isSmallMobile
                ? "0.75rem"
                : isMobile
                ? "0.875rem"
                : "1rem",
              padding: getButtonPadding(),
              minWidth: isSmallMobile ? "70px" : "90px",
            }}
          >
            {isSmallMobile ? t("portal") : t("patient_portal")}
          </Button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item
            onClick={() => router.push(`/${currentLang}/signUp`)}
            style={{ padding: getButtonPadding() }}
          >
            <Group
              gap={getGapSize()}
              style={{
                fontFamily: "Oswald, sans-serif",
                flexDirection: isRTL ? "row-reverse" : "row",
                color: COLORS.darkPinkText,
              }}
              wrap="nowrap"
            >
              <IconUser size={getIconSize()} color={COLORS.darkPinkText} />
              <Text size={getTextSize()}>{t("register_patient")}</Text>
            </Group>
          </Menu.Item>
          <Menu.Item
            onClick={() => router.push(`/${currentLang}/login`)}
            style={{ padding: getButtonPadding() }}
          >
            <Group
              gap={getGapSize()}
              style={{
                fontFamily: "Oswald, sans-serif",
                flexDirection: isRTL ? "row-reverse" : "row",
                color: COLORS.darkPinkText,
              }}
            >
              <IconLogin size={getIconSize()} color={COLORS.darkPinkText} />
              <Text size={getTextSize()}>{t("patient_login")}</Text>
            </Group>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    ) : (
      <Group
        wrap="nowrap"
        gap={getGapSize()}
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
            padding: getButtonPadding(),
            fontSize: isSmallMobile
              ? "0.75rem"
              : isMobile
              ? "0.875rem"
              : "1rem",
          }}
        >
          <Group gap={getGapSize()}>
            <IconUser size={getIconSize()} color={COLORS.darkPinkText} />
            <Text size={getTextSize()}>{t("register")}</Text>
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
            padding: getButtonPadding(),
            fontSize: isSmallMobile
              ? "0.75rem"
              : isMobile
              ? "0.875rem"
              : "1rem",
          }}
        >
          <Group gap={getGapSize()} wrap="nowrap">
            <IconLogin size={getIconSize()} color={COLORS.darkPinkText} />
            <Text size={getTextSize()}>{t("login")}</Text>
          </Group>
        </Button>
      </Group>
    );

  return (
    <Flex
      align="center"
      justify="space-between"
      mt={isSmallMobile ? "xs" : "sm"}
      direction={isRTL ? "row-reverse" : "row"}
      style={{
        padding: isSmallMobile ? "0 8px" : isMobile ? "0 12px" : "0 16px",
        minHeight: isSmallMobile ? "48px" : isMobile ? "56px" : "64px",
      }}
    >
      {/* Logo */}
      {isRTL ? (
        <Flex
          align="center"
          gap={isSmallMobile ? "xs" : "sm"}
          direction={isRTL ? "row-reverse" : "row"}
          justify="flex-start"
          style={{ flexShrink: 0 }}
        >
          <LanguageSwitcher />
          {isAuthenticated ? renderAuthMenu() : renderAccountMenu()}
          {renderMainMenu()}
        </Flex>
      ) : (
        <Flex
          align="center"
          gap={isSmallMobile ? "xs" : "md"}
          justify={isRTL ? "flex-end" : "flex-start"}
          dir={isRTL ? "rtl" : "ltr"}
          style={{ flexShrink: 0 }}
        >
          <Button
            onClick={() => router.push(`/${currentLang}/`)}
            color={COLORS.lightPink}
            variant="subtle"
            style={{
              padding: getButtonPadding(),
              minWidth: isSmallMobile ? "60px" : "80px",
            }}
          >
            <Text
              variant="subtle"
              fw={600}
              ff="Oswald, sans-serif"
              color={COLORS.darkPinkText}
              style={{
                fontSize: isSmallMobile
                  ? "1rem"
                  : isMobile
                  ? "1.1rem"
                  : "1.2rem",
              }}
            >
              {t("bloom")}
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
          style={{
            padding: getButtonPadding(),
            minWidth: isSmallMobile ? "60px" : "80px",
            flexShrink: 0,
          }}
        >
          <Text
            variant="subtle"
            fw={600}
            ff="Oswald, sans-serif"
            color={COLORS.darkPinkText}
            style={{
              fontSize: isSmallMobile ? "1rem" : isMobile ? "1.1rem" : "1.2rem",
            }}
          >
            {t("bloom")}
          </Text>
        </Button>
      ) : (
        <Flex
          align="center"
          gap={isSmallMobile ? "xs" : "sm"}
          direction={isRTL ? "row-reverse" : "row"}
          justify="flex-end"
          style={{ flexShrink: 0 }}
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
