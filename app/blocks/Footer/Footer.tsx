import React from "react";
import {
  Group,
  Text,
  Title,
  Stack,
  Divider,
  ActionIcon,
  List,
  Anchor,
  Box,
  Flex,
  Badge,
} from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandTwitter,
  IconMail,
  IconPhone,
  IconMapPin,
  IconClock,
  IconStethoscope,
  IconBrain,
  IconUsers,
  IconShield,
  IconCalendar,
  IconEmergencyBed,
} from "@tabler/icons-react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const Footer = () => {
  const { t, i18n } = useTranslation("footer");
  const router = useRouter();
  const isRTL = i18n.language === "ar";
  const currentLang = i18n.language;

  return (
    <Box mt={50} py="xl" dir={isRTL ? "rtl" : "ltr"} bg="#f5f7fa">
      {" "}
      {/* replaced gray.50 with #f5f7fa from navy.0 */}
      <Divider my="xl" opacity={1} />
      <Flex
        gap="xl"
        justify="space-between"
        direction={{ base: "column", md: "row" }}
        wrap="wrap"
      >
        <Stack gap="md" flex={1} maw={350}>
          <Group gap="sm">
            <IconStethoscope size={24} color="#357ae8" /> {/* brand.5 */}
            <Title order={3} c="dark">
              {isRTL ? "الدكتور عمر أسعد" : "Dr. Omar Asad"}
            </Title>
          </Group>
          <Text size="sm" c="dimmed" fw={500}>
            {t("doctor_title")}
          </Text>
          <Text size="sm" c="dimmed">
            {t("doctor_description")}
          </Text>

          {/* Specializations */}
          <Group gap="xs">
            <Badge
              variant="light"
              leftSection={<IconBrain size={12} color="#2563eb" />}
            >
              {" "}
              {/* brand.6 */}
              {t("psychiatry")}
            </Badge>
            <Badge
              variant="light"
              leftSection={<IconShield size={12} color="#2563eb" />}
            >
              {t("addiction_treatment")}
            </Badge>
            <Badge
              variant="light"
              leftSection={<IconUsers size={12} color="#2563eb" />}
            >
              {t("crisis_management")}
            </Badge>
          </Group>

          {/* Social Media */}
          <Group gap="md" aria-label={t("follow_us_aria")}>
            <Text size="sm" fw={500}>
              {t("follow_us")}
            </Text>
            <Anchor
              href="https://www.instagram.com/bloom.mental"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <ActionIcon size="lg" variant="light" color="pink">
                <IconBrandInstagram size={18} />
              </ActionIcon>
            </Anchor>
            <Anchor
              href="https://www.linkedin.com/in/dr-omar-asad"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <ActionIcon size="lg" variant="light" color="blue">
                <IconBrandLinkedin size={18} />
              </ActionIcon>
            </Anchor>
            <Anchor
              href="https://www.facebook.com/dr.omar.asad"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <ActionIcon size="lg" variant="light" color="blue">
                <IconBrandFacebook size={18} />
              </ActionIcon>
            </Anchor>
            <Anchor
              href="https://twitter.com/dr_omar_asad"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <ActionIcon size="lg" variant="light" color="blue">
                <IconBrandTwitter size={18} />
              </ActionIcon>
            </Anchor>
          </Group>
        </Stack>

        {/* Contact Information */}
        <Stack gap="sm" flex={1} maw={300}>
          <Title order={4} c="dark">
            {t("contact_information")}
          </Title>
          <List spacing="md" size="sm" style={{ listStyleType: "none" }}>
            <List.Item>
              <Group gap="sm" wrap="nowrap">
                <IconMapPin size={16} color="#357ae8" /> {/* brand.5 */}
                <Text size="sm">{t("clinic_address")}</Text>
              </Group>
            </List.Item>
            <List.Item>
              <Group gap="sm" wrap="nowrap">
                <IconPhone size={16} color="#357ae8" />
                <Text size="sm">{t("clinic_phone")}</Text>
              </Group>
            </List.Item>
            <List.Item>
              <Group gap="sm" wrap="nowrap">
                <IconMail size={16} color="#357ae8" />
                <Text size="sm">{t("clinic_email")}</Text>
              </Group>
            </List.Item>
            <List.Item>
              <Group gap="sm" wrap="nowrap">
                <IconEmergencyBed size={16} color="#fa5252" />
                <Text size="sm" c="red">
                  {t("emergency_phone")}
                </Text>
              </Group>
            </List.Item>
          </List>
        </Stack>

        {/* Working Hours */}
        <Stack gap="sm" flex={1} maw={300}>
          <Group gap="xs">
            <IconClock size={18} color="#357ae8" />
            <Title order={4} c="dark">
              {t("working_hours")}
            </Title>
          </Group>
          <List spacing="xs" size="sm" style={{ listStyleType: "none" }}>
            <List.Item>
              <Group justify="space-between">
                <Text size="sm">{t("sunday_thursday")}</Text>
                <Text size="sm" fw={500}>
                  9:00 AM - 8:00 PM
                </Text>
              </Group>
            </List.Item>
            <List.Item>
              <Group justify="space-between">
                <Text size="sm">{t("friday")}</Text>
                <Text size="sm" fw={500}>
                  2:00 PM - 8:00 PM
                </Text>
              </Group>
            </List.Item>
            <List.Item>
              <Group justify="space-between">
                <Text size="sm">{t("saturday")}</Text>
                <Text size="sm" fw={500}>
                  10:00 AM - 6:00 PM
                </Text>
              </Group>
            </List.Item>
            <List.Item>
              <Group justify="space-between">
                <Text size="sm" c="red">
                  {t("emergency")}
                </Text>
                <Text size="sm" fw={500} c="red">
                  24/7
                </Text>
              </Group>
            </List.Item>
          </List>

          {/* Quick Actions */}
          <Group gap="xs" mt="sm" align="center">
            <ActionIcon
              variant="filled"
              color="blue"
              size="lg"
              onClick={() => router.push(`/${currentLang}/appointments`)}
              aria-label={t("book_appointment")}
              style={{ cursor: "pointer" }}
            >
              <IconCalendar size={22} />
            </ActionIcon>
            <ActionIcon
              variant="filled"
              color="teal"
              size="lg"
              onClick={() => router.push(`/${currentLang}/contact`)}
              aria-label={
                t("contact_us") || (isRTL ? "تواصل معنا" : "Contact Us")
              }
              style={{ cursor: "pointer" }}
            >
              <IconMail size={22} />
            </ActionIcon>
          </Group>
        </Stack>
      </Flex>
      <Divider my="xl" opacity={0.7} />
      <Text ta="center" size="sm" c="dimmed" mb={10}>
        {t("footer_copyright") ||
          (isRTL
            ? "© 2025 د. عمر أسعد. جميع الحقوق محفوظة."
            : "© 2025 Dr. Omar Asad. All rights reserved.")}
      </Text>
    </Box>
  );
};

export default Footer;
