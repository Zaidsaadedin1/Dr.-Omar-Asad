import React from "react";
import {
  Container,
  Title,
  Text,
  Stack,
  Group,
  Badge,
  Card,
  Image,
  List,
  Timeline,
  Grid,
  Box,
  Divider,
  Avatar,
  Paper,
} from "@mantine/core";
import {
  IconStethoscope,
  IconBrain,
  IconShield,
  IconUsers,
  IconAward,
  IconSchool,
  IconCalendar,
  IconMapPin,
  IconHeart,
} from "@tabler/icons-react";
import { useTranslation } from "next-i18next";

const AboutPage = () => {
  const { t, i18n } = useTranslation("about");
  const isRTL = i18n.language === "ar";

  return (
    <Container size="lg" py="xl" dir={isRTL ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <Paper p="xl" mb="xl" bg="gradient-to-r from-blue-50 to-blue-100">
        <Grid>
          <Grid.Col span={{ base: 12, md: 8 }}>
            <Stack gap="md">
              <Group gap="sm">
                <Avatar size="xl" color="blue">
                  <IconStethoscope size={40} />
                </Avatar>
                <Box>
                  <Title order={1} c="blue.8">
                    {t("hero.name")}
                  </Title>
                  <Text size="lg" fw={500} c="blue.6">
                    {t("hero.title")}
                  </Text>
                </Box>
              </Group>

              <Text size="md" c="dimmed">
                {t("hero.description")}
              </Text>

              <Group gap="xs">
                <Badge
                  variant="light"
                  leftSection={<IconBrain size={12} />}
                  color="blue"
                >
                  {t("hero.badges.psychiatry")}
                </Badge>
                <Badge
                  variant="light"
                  leftSection={<IconShield size={12} />}
                  color="green"
                >
                  {t("hero.badges.addiction")}
                </Badge>
                <Badge
                  variant="light"
                  leftSection={<IconUsers size={12} />}
                  color="orange"
                >
                  {t("hero.badges.family")}
                </Badge>
                <Badge
                  variant="light"
                  leftSection={<IconHeart size={12} />}
                  color="red"
                >
                  {t("hero.badges.crisis")}
                </Badge>
              </Group>
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Image
              src="/images/doctor-profile.jpg"
              alt={t("hero.imageAlt")}
              radius="md"
              h={300}
              fallbackSrc="https://via.placeholder.com/300x300?text=Dr.+Omar+Asad"
            />
          </Grid.Col>
        </Grid>
      </Paper>

      {/* Education & Qualifications */}
      <Card mb="xl" p="xl">
        <Group gap="sm" mb="lg">
          <IconSchool size={24} color="var(--mantine-color-blue-6)" />
          <Title order={2} c="blue.8">
            {t("education.title")}
          </Title>
        </Group>

        <Timeline active={4} bulletSize={24} lineWidth={2}>
          <Timeline.Item
            bullet={<IconAward size={16} />}
            title={t("education.degrees.mbbs.title")}
          >
            <Text c="dimmed" size="sm">
              {t("education.degrees.mbbs.institution")}
            </Text>
          </Timeline.Item>

          <Timeline.Item
            bullet={<IconAward size={16} />}
            title={t("education.degrees.diploma.title")}
          >
            <Text c="dimmed" size="sm">
              {t("education.degrees.diploma.institution")}
            </Text>
          </Timeline.Item>

          <Timeline.Item
            bullet={<IconAward size={16} />}
            title={t("education.degrees.fellowship.title")}
          >
            <Text c="dimmed" size="sm">
              {t("education.degrees.fellowship.institution")}
            </Text>
          </Timeline.Item>

          <Timeline.Item
            bullet={<IconAward size={16} />}
            title={t("education.degrees.cbt.title")}
          >
            <Text c="dimmed" size="sm">
              {t("education.degrees.cbt.institution")}
            </Text>
          </Timeline.Item>

          <Timeline.Item
            bullet={<IconAward size={16} />}
            title={t("education.degrees.phd.title")}
          >
            <Text c="dimmed" size="sm">
              {t("education.degrees.phd.institution")}
            </Text>
          </Timeline.Item>
        </Timeline>
      </Card>

      {/* Professional Experience */}
      <Card mb="xl" p="xl">
        <Group gap="sm" mb="lg">
          <IconCalendar size={24} color="var(--mantine-color-green-6)" />
          <Title order={2} c="green.8">
            {t("experience.title")}
          </Title>
        </Group>

        <Stack gap="md">
          <Box>
            <Text fw={600} size="lg">
              {t("experience.positions.head.title")}
            </Text>
            <Group gap="xs" mb="xs">
              <IconMapPin size={16} />
              <Text c="dimmed">
                {t("experience.positions.head.institution")}
              </Text>
              <Text c="dimmed">{t("experience.positions.head.duration")}</Text>
            </Group>
            <Text size="sm" c="dimmed">
              {t("experience.positions.head.description")}
            </Text>
          </Box>

          <Divider />

          <Box>
            <Text fw={600} size="lg">
              {t("experience.positions.consultant.title")}
            </Text>
            <Group gap="xs" mb="xs">
              <IconMapPin size={16} />
              <Text c="dimmed">
                {t("experience.positions.consultant.institution")}
              </Text>
              <Text c="dimmed">
                {t("experience.positions.consultant.duration")}
              </Text>
            </Group>
            <Text size="sm" c="dimmed">
              {t("experience.positions.consultant.description")}
            </Text>
          </Box>

          <Divider />

          <Box>
            <Text fw={600} size="lg">
              {t("experience.positions.resident.title")}
            </Text>
            <Group gap="xs" mb="xs">
              <IconMapPin size={16} />
              <Text c="dimmed">
                {t("experience.positions.resident.institution")}
              </Text>
              <Text c="dimmed">
                {t("experience.positions.resident.duration")}
              </Text>
            </Group>
            <Text size="sm" c="dimmed">
              {t("experience.positions.resident.description")}
            </Text>
          </Box>
        </Stack>
      </Card>

      {/* Specializations */}
      <Card mb="xl" p="xl">
        <Group gap="sm" mb="lg">
          <IconBrain size={24} color="var(--mantine-color-purple-6)" />
          <Title order={2} c="purple.8">
            {t("specializations.title")}
          </Title>
        </Group>

        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <List spacing="sm" size="sm" icon={<IconStethoscope size={16} />}>
              <List.Item>
                <Text fw={500}>
                  {t("specializations.items.moodDisorders.title")}
                </Text>
                <Text size="xs" c="dimmed">
                  {t("specializations.items.moodDisorders.description")}
                </Text>
              </List.Item>
              <List.Item>
                <Text fw={500}>
                  {t("specializations.items.anxietyDisorders.title")}
                </Text>
                <Text size="xs" c="dimmed">
                  {t("specializations.items.anxietyDisorders.description")}
                </Text>
              </List.Item>
              <List.Item>
                <Text fw={500}>
                  {t("specializations.items.addictionDisorders.title")}
                </Text>
                <Text size="xs" c="dimmed">
                  {t("specializations.items.addictionDisorders.description")}
                </Text>
              </List.Item>
            </List>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <List spacing="sm" size="sm" icon={<IconBrain size={16} />}>
              <List.Item>
                <Text fw={500}>
                  {t("specializations.items.psychoticDisorders.title")}
                </Text>
                <Text size="xs" c="dimmed">
                  {t("specializations.items.psychoticDisorders.description")}
                </Text>
              </List.Item>
              <List.Item>
                <Text fw={500}>
                  {t("specializations.items.personalityDisorders.title")}
                </Text>
                <Text size="xs" c="dimmed">
                  {t("specializations.items.personalityDisorders.description")}
                </Text>
              </List.Item>
              <List.Item>
                <Text fw={500}>
                  {t("specializations.items.familyTherapy.title")}
                </Text>
                <Text size="xs" c="dimmed">
                  {t("specializations.items.familyTherapy.description")}
                </Text>
              </List.Item>
            </List>
          </Grid.Col>
        </Grid>
      </Card>

      {/* Philosophy & Approach */}
      <Card p="xl" bg="blue.0">
        <Group gap="sm" mb="lg">
          <IconHeart size={24} color="var(--mantine-color-red-6)" />
          <Title order={2} c="red.8">
            {t("philosophy.title")}
          </Title>
        </Group>

        <Text size="md" mb="md">
          {t("philosophy.paragraph1")}
        </Text>

        <Text size="md">{t("philosophy.paragraph2")}</Text>
      </Card>
    </Container>
  );
};

export default AboutPage;
