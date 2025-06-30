import React from "react";
import {
  Container,
  Title,
  Text,
  Stack,
  Group,
  Card,
  Grid,
  List,
  Button,
  Paper,
  Box,
  ThemeIcon,
  Divider,
} from "@mantine/core";
import {
  IconStethoscope,
  IconBrain,
  IconShield,
  IconUsers,
  IconHeart,
  IconClock,
  IconPhone,
  IconCalendar,
  IconEmergencyBed,
  IconHome,
  IconUserCheck,
} from "@tabler/icons-react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const ServicesPage = () => {
  const { t } = useTranslation("services");
  const router = useRouter();
  const currentLang = router.locale || "en"; // locale from Next.js router
  const isRTL = currentLang === "ar";

  const services = [
    {
      id: "psychiatric-consultation",
      icon: IconStethoscope,
      color: "blue",
      title: t("psychiatric_consultation_title"),
      description: t("psychiatric_consultation_description"),
      features: [
        t("psychiatric_consultation_feature_1"),
        t("psychiatric_consultation_feature_2"),
        t("psychiatric_consultation_feature_3"),
        t("psychiatric_consultation_feature_4"),
      ],
      duration: t("psychiatric_consultation_duration"),
    },
    {
      id: "addiction-treatment",
      icon: IconShield,
      color: "green",
      title: t("addiction_treatment_title"),
      description: t("addiction_treatment_description"),
      features: [
        t("addiction_treatment_feature_1"),
        t("addiction_treatment_feature_2"),
        t("addiction_treatment_feature_3"),
        t("addiction_treatment_feature_4"),
      ],
      duration: t("addiction_treatment_duration"),
    },
    {
      id: "family-therapy",
      icon: IconUsers,
      color: "orange",
      title: t("family_therapy_title"),
      description: t("family_therapy_description"),
      features: [
        t("family_therapy_feature_1"),
        t("family_therapy_feature_2"),
        t("family_therapy_feature_3"),
        t("family_therapy_feature_4"),
      ],
      duration: t("family_therapy_duration"),
    },
    {
      id: "crisis-management",
      icon: IconEmergencyBed,
      color: "red",
      title: t("crisis_management_title"),
      description: t("crisis_management_description"),
      features: [
        t("crisis_management_feature_1"),
        t("crisis_management_feature_2"),
        t("crisis_management_feature_3"),
        t("crisis_management_feature_4"),
      ],
      duration: t("crisis_management_duration"),
    },
    {
      id: "cognitive-therapy",
      icon: IconBrain,
      color: "purple",
      title: t("cognitive_therapy_title"),
      description: t("cognitive_therapy_description"),
      features: [
        t("cognitive_therapy_feature_1"),
        t("cognitive_therapy_feature_2"),
        t("cognitive_therapy_feature_3"),
        t("cognitive_therapy_feature_4"),
      ],
      duration: t("cognitive_therapy_duration"),
    },
    {
      id: "group-therapy",
      icon: IconUsers,
      color: "teal",
      title: t("group_therapy_title"),
      description: t("group_therapy_description"),
      features: [
        t("group_therapy_feature_1"),
        t("group_therapy_feature_2"),
        t("group_therapy_feature_3"),
        t("group_therapy_feature_4"),
      ],
      duration: t("group_therapy_duration"),
    },
  ];

  const emergencyServices = [
    {
      icon: IconEmergencyBed,
      title: t("emergency_consultation"),
      description: t("emergency_consultation_description"),
      contact: t("emergency_phone"),
    },
    {
      icon: IconPhone,
      title: t("crisis_hotline"),
      description: t("crisis_hotline_description"),
      contact: t("crisis_hotline_number"),
    },
    {
      icon: IconHome,
      title: t("home_visits"),
      description: t("home_visits_description"),
      contact: t("home_visits_contact"),
    },
  ];

  return (
    <Container size="lg" py="xl" dir={isRTL ? "rtl" : "ltr"}>
      {/* Header */}
      <Paper
        dir={isRTL ? "rtl" : "ltr"}
        p="xl"
        mb="xl"
        bg="gradient-to-r from-blue-50 to-blue-100"
      >
        <Stack align="center" gap="md">
          <ThemeIcon size={60} variant="light" color="blue">
            <IconStethoscope size={30} />
          </ThemeIcon>
          <Title order={1} ta="center" c="blue.8">
            {t("page_title")}
          </Title>
          <Text size="lg" ta="center" c="dimmed" maw={600}>
            {t("page_description")}
          </Text>
        </Stack>
      </Paper>

      {/* Main Services */}
      <Stack gap="xl" dir={isRTL ? "rtl" : "ltr"}>
        <Box>
          <Title order={2} mb="lg" c="dark">
            {t("main_services_title")}
          </Title>
          <Grid>
            {services.map((service) => (
              <Grid.Col
                dir={isRTL ? "rtl" : "ltr"}
                key={service.id}
                span={{ base: 12, md: 6, lg: 4 }}
              >
                <Card p="lg" h="100%" shadow="sm" withBorder>
                  <Stack gap="md" h="100%">
                    <Group>
                      <ThemeIcon
                        size={40}
                        variant="light"
                        color={service.color}
                      >
                        <service.icon size={20} />
                      </ThemeIcon>
                      <Box flex={1}>
                        <Title order={4} c={`${service.color}.8`}>
                          {service.title}
                        </Title>
                      </Box>
                    </Group>

                    <Text size="sm" c="dimmed" flex={1}>
                      {service.description}
                    </Text>

                    <Box>
                      <Text size="sm" fw={600} mb="xs">
                        {t("service_features")}:
                      </Text>
                      <List spacing="xs" size="sm">
                        {service.features.map((feature, index) => (
                          <List.Item key={index}>{feature}</List.Item>
                        ))}
                      </List>
                    </Box>

                    <Group justify="space-between" mt="auto">
                      <Group gap="xs">
                        <IconClock size={16} />
                        <Text size="xs" c="dimmed">
                          {service.duration}
                        </Text>
                      </Group>
                    </Group>

                    <Button
                      variant="light"
                      color={service.color}
                      fullWidth
                      onClick={() =>
                        router.push(
                          `/${currentLang}/appointments?service=${service.id}`
                        )
                      }
                    >
                      {t("book_appointment")}
                    </Button>
                  </Stack>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </Box>

        <Divider />

        {/* Emergency Services */}
        <Box dir={isRTL ? "rtl" : "ltr"}>
          <Group mb="lg">
            <ThemeIcon size={32} variant="light" color="red">
              <IconEmergencyBed size={18} />
            </ThemeIcon>
            <Title order={2} c="red.8">
              {t("emergency_services_title")}
            </Title>
          </Group>

          <Text size="md" mb="lg" c="dimmed">
            {t("emergency_services_description")}
          </Text>

          <Grid dir={isRTL ? "rtl" : "ltr"}>
            {emergencyServices.map((service, index) => (
              <Grid.Col
                dir={isRTL ? "rtl" : "ltr"}
                key={index}
                span={{ base: 12, md: 4 }}
              >
                <Card p="md" bg="red.0" withBorder>
                  <Group mb="sm">
                    <ThemeIcon size={32} variant="light" color="red">
                      <service.icon size={16} />
                    </ThemeIcon>
                    <Text fw={600} c="red.8">
                      {service.title}
                    </Text>
                  </Group>
                  <Text size="sm" c="dimmed" mb="sm">
                    {service.description}
                  </Text>
                  <Text size="sm" fw={600} c="red.7">
                    {service.contact}
                  </Text>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </Box>

        <Divider />

        {/* Service Process */}
        <Box>
          <Title dir={isRTL ? "rtl" : "ltr"} order={2} mb="lg" c="dark">
            {t("service_process_title")}
          </Title>
          <Grid dir={isRTL ? "rtl" : "ltr"}>
            <Grid.Col dir={isRTL ? "rtl" : "ltr"} span={{ base: 12, md: 3 }}>
              <Card p="md" ta="center" bg="blue.0">
                <ThemeIcon
                  size={40}
                  variant="light"
                  color="blue"
                  mx="auto"
                  mb="sm"
                >
                  <IconCalendar size={20} />
                </ThemeIcon>
                <Text fw={600} mb="xs">
                  {t("step_1_title")}
                </Text>
                <Text size="sm" c="dimmed">
                  {t("step_1_description")}
                </Text>
              </Card>
            </Grid.Col>
            <Grid.Col dir={isRTL ? "rtl" : "ltr"} span={{ base: 12, md: 3 }}>
              <Card p="md" ta="center" bg="green.0">
                <ThemeIcon
                  size={40}
                  variant="light"
                  color="green"
                  mx="auto"
                  mb="sm"
                >
                  <IconUserCheck size={20} />
                </ThemeIcon>
                <Text fw={600} mb="xs">
                  {t("step_2_title")}
                </Text>
                <Text size="sm" c="dimmed">
                  {t("step_2_description")}
                </Text>
              </Card>
            </Grid.Col>
            <Grid.Col dir={isRTL ? "rtl" : "ltr"} span={{ base: 12, md: 3 }}>
              <Card p="md" ta="center" bg="orange.0">
                <ThemeIcon
                  size={40}
                  variant="light"
                  color="orange"
                  mx="auto"
                  mb="sm"
                >
                  <IconStethoscope size={20} />
                </ThemeIcon>
                <Text fw={600} mb="xs">
                  {t("step_3_title")}
                </Text>
                <Text size="sm" c="dimmed">
                  {t("step_3_description")}
                </Text>
              </Card>
            </Grid.Col>
            <Grid.Col dir={isRTL ? "rtl" : "ltr"} span={{ base: 12, md: 3 }}>
              <Card p="md" ta="center" bg="purple.0">
                <ThemeIcon
                  size={40}
                  variant="light"
                  color="purple"
                  mx="auto"
                  mb="sm"
                >
                  <IconHeart size={20} />
                </ThemeIcon>
                <Text fw={600} mb="xs">
                  {t("step_4_title")}
                </Text>
                <Text size="sm" c="dimmed">
                  {t("step_4_description")}
                </Text>
              </Card>
            </Grid.Col>
          </Grid>
        </Box>

        {/* Call to Action */}
        <Paper
          dir={isRTL ? "rtl" : "ltr"}
          p="xl"
          bg="blue.6"
          c="white"
          ta="center"
        >
          <Stack dir={isRTL ? "rtl" : "ltr"} gap="md" align="center">
            <Title order={3}>{t("cta_title")}</Title>
            <Text size="lg" maw={600}>
              {t("cta_description")}
            </Text>
            <Group dir={isRTL ? "rtl" : "ltr"}>
              <Button
                size="lg"
                variant="white"
                color="blue"
                onClick={() => router.push(`/${currentLang}/appointments`)}
              >
                {t("book_appointment")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                color="white"
                onClick={() => router.push(`/${currentLang}/contact`)}
              >
                {t("contact_us")}
              </Button>
            </Group>
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
};

export default ServicesPage;
