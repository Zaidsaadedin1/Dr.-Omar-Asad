import React from "react";
import {
  Container,
  Title,
  Text,
  Stack,
  Group,
  Card,
  Grid,
  Button,
  Paper,
  Box,
  ThemeIcon,
  ActionIcon,
} from "@mantine/core";
import {
  IconFlower,
  IconUsers,
  IconHeart,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconMoodHappy,
  IconCalendar,
  IconPhone,
  IconMail,
  IconMapPin,
  IconStethoscope,
  IconMessageCircle,
  IconVideo,
  IconDeviceMobile,
  IconShield,
  IconClock,
  IconStar,
} from "@tabler/icons-react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const BloomMentalPage = () => {
  const { t } = useTranslation("bloomMental");
  const router = useRouter();

  const services = [
    {
      icon: IconStethoscope,
      title: t("service_1_title"),
      description: t("service_1_description"),
      color: "pink",
    },
    {
      icon: IconUsers,
      title: t("service_2_title"),
      description: t("service_2_description"),
      color: "purple",
    },
    {
      icon: IconMessageCircle,
      title: t("service_3_title"),
      description: t("service_3_description"),
      color: "blue",
    },
    {
      icon: IconVideo,
      title: t("service_4_title"),
      description: t("service_4_description"),
      color: "green",
    },
    {
      icon: IconDeviceMobile,
      title: t("service_5_title"),
      description: t("service_5_description"),
      color: "orange",
    },
    {
      icon: IconHeart,
      title: t("service_6_title"),
      description: t("service_6_description"),
      color: "red",
    },
  ];

  const features = [
    {
      title: t("feature_1_title"),
      description: t("feature_1_description"),
      icon: IconMoodHappy,
    },
    {
      title: t("feature_2_title"),
      description: t("feature_2_description"),
      icon: IconShield,
    },
    {
      title: t("feature_3_title"),
      description: t("feature_3_description"),
      icon: IconClock,
    },
    {
      title: t("feature_4_title"),
      description: t("feature_4_description"),
      icon: IconStar,
    },
  ];

  const testimonials = [
    {
      name: t("testimonial_1_name"),
      text: t("testimonial_1_text"),
      rating: 5,
    },
    {
      name: t("testimonial_2_name"),
      text: t("testimonial_2_text"),
      rating: 5,
    },
    {
      name: t("testimonial_3_name"),
      text: t("testimonial_3_text"),
      rating: 5,
    },
  ];

  const contactInfo = {
    phone: t("contact_phone"),
    email: t("contact_email"),
    address: t("contact_address"),
    hours: t("contact_hours"),
  };

  return (
    <Container size="xl" py="xl">
      {/* Hero Section */}
      <Box
        style={{
          background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
          borderRadius: "20px",
          padding: "60px 40px",
          textAlign: "center",
          color: "white",
          marginBottom: "60px",
        }}
      >
        <Group justify="center" mb="lg">
          <ThemeIcon size={60} radius="xl" variant="white" color="pink">
            <IconFlower size={32} />
          </ThemeIcon>
        </Group>
        <Title order={1} size="h1" mb="md" fw={700}>
          {t("hero_title")}
        </Title>
        <Text size="xl" mb="xl" maw={600} mx="auto">
          {t("hero_subtitle")}
        </Text>
        <Group justify="center" gap="md">
          <Button
            size="lg"
            variant="white"
            color="pink"
            leftSection={<IconCalendar size={20} />}
            onClick={() => router.push("/book-appointment")}
          >
            {t("book_appointment")}
          </Button>
          <Button
            size="lg"
            variant="outline"
            color="white"
            leftSection={<IconPhone size={20} />}
          >
            {t("call_now")}
          </Button>
        </Group>
      </Box>

      {/* Services Section */}
      <Stack gap="xl" mb="xl">
        <Box ta="center">
          <Title order={2} mb="md" c="pink">
            {t("services_title")}
          </Title>
          <Text size="lg" c="dimmed" maw={600} mx="auto">
            {t("services_subtitle")}
          </Text>
        </Box>

        <Grid>
          {services.map((service, index) => (
            <Grid.Col key={index} span={{ base: 12, md: 6, lg: 4 }}>
              <Card
                shadow="md"
                radius="lg"
                p="xl"
                h="100%"
                style={{
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(0,0,0,0.1)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <Group mb="md">
                  <ThemeIcon
                    size={50}
                    radius="xl"
                    variant="light"
                    color={service.color}
                  >
                    <service.icon size={24} />
                  </ThemeIcon>
                </Group>
                <Title order={3} size="h4" mb="sm">
                  {service.title}
                </Title>
                <Text c="dimmed" size="sm">
                  {service.description}
                </Text>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Stack>

      {/* Features Section */}
      <Paper p="xl" radius="lg" bg="gray.0" mb="xl">
        <Box ta="center" mb="xl">
          <Title order={2} mb="md" c="pink">
            {t("features_title")}
          </Title>
          <Text size="lg" c="dimmed" maw={600} mx="auto">
            {t("features_subtitle")}
          </Text>
        </Box>

        <Grid>
          {features.map((feature, index) => (
            <Grid.Col key={index} span={{ base: 12, md: 6 }}>
              <Group align="flex-start" gap="md">
                <ThemeIcon size={40} radius="xl" variant="light" color="pink">
                  <feature.icon size={20} />
                </ThemeIcon>
                <Box flex={1}>
                  <Title order={4} mb="xs">
                    {feature.title}
                  </Title>
                  <Text c="dimmed" size="sm">
                    {feature.description}
                  </Text>
                </Box>
              </Group>
            </Grid.Col>
          ))}
        </Grid>
      </Paper>

      {/* Testimonials Section */}
      <Stack gap="xl" mb="xl">
        <Box ta="center">
          <Title order={2} mb="md" c="pink">
            {t("testimonials_title")}
          </Title>
          <Text size="lg" c="dimmed" maw={600} mx="auto">
            {t("testimonials_subtitle")}
          </Text>
        </Box>

        <Grid>
          {testimonials.map((testimonial, index) => (
            <Grid.Col key={index} span={{ base: 12, md: 4 }}>
              <Card shadow="sm" radius="lg" p="lg" h="100%">
                <Group mb="md">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <IconStar key={i} size={16} fill="gold" color="gold" />
                  ))}
                </Group>
                <Text mb="md" style={{ fontStyle: "italic" }}>
                  {testimonial.text}
                </Text>
                <Text fw={500} c="pink">
                  - {testimonial.name}
                </Text>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Stack>

      {/* Contact Section */}
      <Paper p="xl" radius="lg" bg="pink.0">
        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Title order={2} mb="md" c="pink">
              {t("contact_title")}
            </Title>
            <Text mb="xl" c="dimmed">
              {t("contact_subtitle")}
            </Text>

            <Stack gap="md">
              <Group gap="md">
                <ThemeIcon size={32} radius="xl" variant="light" color="pink">
                  <IconPhone size={18} />
                </ThemeIcon>
                <Text>{contactInfo.phone}</Text>
              </Group>

              <Group gap="md">
                <ThemeIcon size={32} radius="xl" variant="light" color="pink">
                  <IconMail size={18} />
                </ThemeIcon>
                <Text>{contactInfo.email}</Text>
              </Group>

              <Group gap="md">
                <ThemeIcon size={32} radius="xl" variant="light" color="pink">
                  <IconMapPin size={18} />
                </ThemeIcon>
                <Text>{contactInfo.address}</Text>
              </Group>

              <Group gap="md">
                <ThemeIcon size={32} radius="xl" variant="light" color="pink">
                  <IconClock size={18} />
                </ThemeIcon>
                <Text>{contactInfo.hours}</Text>
              </Group>
            </Stack>

            <Group mt="xl" gap="md">
              <ActionIcon size="lg" variant="light" color="pink">
                <IconBrandInstagram size={20} />
              </ActionIcon>
              <ActionIcon size="lg" variant="light" color="pink">
                <IconBrandFacebook size={20} />
              </ActionIcon>
              <ActionIcon size="lg" variant="light" color="pink">
                <IconBrandLinkedin size={20} />
              </ActionIcon>
            </Group>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Box
              style={{
                background: "white",
                borderRadius: "12px",
                padding: "30px",
                height: "100%",
                minHeight: "300px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text c="dimmed" ta="center">
                {t("map_placeholder")}
              </Text>
            </Box>
          </Grid.Col>
        </Grid>
      </Paper>

      {/* CTA Section */}
      <Box
        ta="center"
        py="xl"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          borderRadius: "20px",
          color: "white",
          marginTop: "60px",
        }}
      >
        <Title order={2} mb="md">
          {t("cta_title")}
        </Title>
        <Text size="lg" mb="xl" maw={500} mx="auto">
          {t("cta_subtitle")}
        </Text>
        <Button
          size="lg"
          variant="white"
          color="violet"
          leftSection={<IconCalendar size={20} />}
          onClick={() => router.push("/book-appointment")}
        >
          {t("start_journey")}
        </Button>
      </Box>
    </Container>
  );
};

export default BloomMentalPage;
