import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  Title,
  Text,
  Stack,
  Group,
  Card,
  Grid,
  Badge,
  Button,
  Paper,
  Box,
  ThemeIcon,
  Image,
  List,
  Timeline,
  Accordion,
  SimpleGrid,
  TextInput,
  Modal,
  Avatar,
  Overlay,
} from "@mantine/core";
import {
  IconUsers,
  IconHeart,
  IconCalendar,
  IconMail,
  IconStethoscope,
  IconMessageCircle,
  IconVideo,
  IconDeviceMobile,
  IconShield,
  IconClock,
  IconTrophy,
  IconBrain,
  IconHeartHandshake,
  IconUserCheck,
  IconChevronRight,
  IconChevronLeft,
  IconCheck,
  IconArrowRight,
  IconArrowLeft,
  IconSun,
  IconFlower,
  IconPlayCard,
} from "@tabler/icons-react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import ContactForm from "../../blocks/ContactForm/ContactForm";
import CallNowButton from "../../blocks/CallNowButton/CallNowButton";

const homePageVideo = "/videos/video1.mp4";

export const HomePage = () => {
  const { t, i18n } = useTranslation("home");
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const isRTL = i18n.language === "ar";
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const currentLang = i18n.language;
  // Statistics counter animation
  const [stats, setStats] = useState({
    clients: 0,
    sessions: 0,
    satisfaction: 0,
    years: 0,
  });

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.loop = true;
      video.controls = false;
      video.muted = true;

      const handlePlay = () => {
        video.play().catch((e) => {
          console.error("Play error:", e);
          document.addEventListener(
            "click",
            () => {
              video.play().catch(console.error);
            },
            { once: true }
          );
        });
      };

      video.addEventListener("canplay", handlePlay);
      return () => {
        video.removeEventListener("canplay", handlePlay);
      };
    }
  }, []);

  useEffect(() => {
    const targetStats = {
      clients: 2500,
      sessions: 15000,
      satisfaction: 98,
      years: 12,
    };

    const duration = 2000;
    const steps = 50;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setStats({
        clients: Math.floor(targetStats.clients * progress),
        sessions: Math.floor(targetStats.sessions * progress),
        satisfaction: Math.floor(targetStats.satisfaction * progress),
        years: Math.floor(targetStats.years * progress),
      });

      if (step >= steps) {
        clearInterval(timer);
        setStats(targetStats);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // RTL Helper Functions
  const getTextAlignment = (align: "left" | "right" | "center" = "left") => {
    if (align === "center") return "center";
    return isRTL ? (align === "left" ? "right" : "left") : align;
  };

  const getFlexDirection = (base: "row" | "row-reverse" = "row") => {
    return isRTL ? (base === "row" ? "row-reverse" : "row") : base;
  };

  const getChevronIcon = () => {
    return isRTL ? (
      <IconChevronLeft size={16} />
    ) : (
      <IconChevronRight size={16} />
    );
  };

  const getArrowIcon = () => {
    return isRTL ? <IconArrowLeft size={20} /> : <IconArrowRight size={20} />;
  };

  const heroFeatures = [
    {
      icon: IconBrain,
      title: t("hero_feature_1_title"),
      description: t("hero_feature_1_desc"),
    },
    {
      icon: IconHeartHandshake,
      title: t("hero_feature_2_title"),
      description: t("hero_feature_2_desc"),
    },
    {
      icon: IconShield,
      title: t("hero_feature_3_title"),
      description: t("hero_feature_3_desc"),
    },
  ];

  const services = [
    {
      icon: IconStethoscope,
      title: t("service_1_title"),
      description: t("service_1_description"),
      color: "pink",
      price: t("service_1_price"),
      duration: t("service_1_duration"),
    },
    {
      icon: IconUsers,
      title: t("service_2_title"),
      description: t("service_2_description"),
      color: "purple",
      price: t("service_2_price"),
      duration: t("service_2_duration"),
    },
    {
      icon: IconMessageCircle,
      title: t("service_3_title"),
      description: t("service_3_description"),
      color: "blue",
      price: t("service_3_price"),
      duration: t("service_3_duration"),
    },
    {
      icon: IconVideo,
      title: t("service_4_title"),
      description: t("service_4_description"),
      color: "green",
      price: t("service_4_price"),
      duration: t("service_4_duration"),
    },
    {
      icon: IconDeviceMobile,
      title: t("service_5_title"),
      description: t("service_5_description"),
      color: "orange",
      price: t("service_5_price"),
      duration: t("service_5_duration"),
    },
    {
      icon: IconHeart,
      title: t("service_6_title"),
      description: t("service_6_description"),
      color: "red",
      price: t("service_6_price"),
      duration: t("service_6_duration"),
    },
  ];

  const blogPosts = [
    {
      title: t("blog_1_title"),
      excerpt: t("blog_1_excerpt"),
      date: t("blog_1_date"),
      readTime: t("blog_1_read_time"),
      image: "images/blog1.jpg",
      category: t("blog_1_category"),
      onClick: () =>
        router.push(
          `https://www.integratedmha.com/post/5-signs-you-might-benefit-from-therapy`
        ),
    },
    {
      title: t("blog_2_title"),
      excerpt: t("blog_2_excerpt"),
      date: t("blog_2_date"),
      readTime: t("blog_2_read_time"),
      image: "images/blog2.jpg",
      category: t("blog_2_category"),
      onClick: () =>
        router.push(`https://www.apa.org/topics/stress/uncertainty`),
    },
    {
      title: t("blog_3_title"),
      excerpt: t("blog_3_excerpt"),
      date: t("blog_3_date"),
      readTime: t("blog_3_read_time"),
      image: "images/blog3.jpg",
      category: t("blog_3_category"),
      onClick: () =>
        router.push(
          `https://www.betterhealth.vic.gov.au/health/healthyliving/relationships-and-communication`
        ),
    },
  ];

  const teamMembers = [
    {
      name: t("team_2_name"),
      role: t("team_1_role"),
      bio: t("team_1_bio"),
      image: "/images/Doctor Omar Asad.jpg",
      specialties: [t("team_1_specialty_1"), t("team_1_specialty_2")],
    },
    {
      name: t("team_1_name"),
      role: t("team_2_role"),
      bio: t("team_2_bio"),
      image: "/images/dr.omar_fauri.jpg",
      specialties: [t("team_2_specialty_1"), t("team_2_specialty_2")],
    },
  ];

  const faqs = [
    {
      question: t("faq_1_question"),
      answer: t("faq_1_answer"),
    },
    {
      question: t("faq_2_question"),
      answer: t("faq_2_answer"),
    },
    {
      question: t("faq_3_question"),
      answer: t("faq_3_answer"),
    },
    {
      question: t("faq_4_question"),
      answer: t("faq_4_answer"),
    },
    {
      question: t("faq_5_question"),
      answer: t("faq_5_answer"),
    },
  ];

  const processSteps = [
    {
      icon: IconCalendar,
      title: t("process_1_title"),
      description: t("process_1_desc"),
    },
    {
      icon: IconUserCheck,
      title: t("process_2_title"),
      description: t("process_2_desc"),
    },
    {
      icon: IconStethoscope,
      title: t("process_3_title"),
      description: t("process_3_desc"),
    },
    {
      icon: IconTrophy,
      title: t("process_4_title"),
      description: t("process_4_desc"),
    },
  ];

  return (
    <Box dir={isRTL ? "rtl" : "ltr"}>
      <Box
        style={{
          position: "relative",
          minHeight: "80vh",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          preload="auto"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        >
          <source src={homePageVideo} type="video/mp4" />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              textAlign: "center",
              backgroundColor: "rgba(0,0,0,0.8)",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <Text size="xl" color="white">
              {t("video_not_supported")}
            </Text>
          </div>
        </video>
        <Overlay
          gradient="linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.5) 100%)"
          opacity={0.6}
          zIndex={1}
        />
        <Box
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.4)",
            zIndex: 1,
          }}
        />
        <Container
          p={"lg"}
          size="xl"
          style={{ position: "relative", zIndex: 2 }}
        >
          <Stack
            align="center"
            justify="center"
            style={{ minHeight: "80vh", textAlign: "center" }}
          >
            <Group mb="xl">
              <ThemeIcon size={80} radius="xl" variant="white" color="pink">
                <IconFlower size={40} />
              </ThemeIcon>
            </Group>

            <Title
              order={1}
              size={60}
              fw={900}
              c="white"
              mb="md"
              style={{ maxWidth: "800px" }}
            >
              {t("hero_title")}
            </Title>

            <Text size="xl" c="white" mb="xl" style={{ maxWidth: "600px" }}>
              {t("hero_subtitle")}
            </Text>

            <Group
              gap="lg"
              mb={60}
              style={{ flexDirection: getFlexDirection() }}
            >
              <Button
                size="xl"
                variant="white"
                color="pink"
                leftSection={<IconCalendar size={24} />}
                onClick={() => router.push(`/${currentLang}/consultation`)}
                style={{
                  fontSize: "18px",
                  padding: "16px 32px",
                  borderRadius: "50px",
                }}
              >
                {t("book_consultation")}
              </Button>
              <Button
                size="xl"
                variant="outline"
                color="white"
                leftSection={<IconPlayCard size={24} />}
                style={{
                  fontSize: "18px",
                  padding: "16px 32px",
                  borderRadius: "50px",
                }}
              >
                {t("watch_intro")}
              </Button>
            </Group>

            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl">
              {heroFeatures.map((feature, index) => (
                <Paper
                  key={index}
                  p="xl"
                  radius="xl"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    backdropFilter: "blur(10px)",
                    textAlign: getTextAlignment("left"),
                  }}
                >
                  <ThemeIcon
                    size={50}
                    radius="xl"
                    variant="light"
                    color="pink"
                    mb="md"
                  >
                    <feature.icon size={24} />
                  </ThemeIcon>
                  <Title order={4} mb="xs">
                    {feature.title}
                  </Title>
                  <Text size="sm" c="dimmed">
                    {feature.description}
                  </Text>
                </Paper>
              ))}
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>

      <Container size="xl" py={80}>
        <Paper
          p={60}
          radius="xl"
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            marginBottom: "80px",
          }}
        >
          <Title order={2} ta="center" mb={50} c="white">
            {t("stats_title")}
          </Title>
          <SimpleGrid cols={{ base: 1, md: 4 }} spacing="xl">
            <Box ta="center">
              <Title order={1} size={50} fw={900} mb="xs">
                {stats.clients.toLocaleString()}+
              </Title>
              <Text size="lg" opacity={0.9}>
                {t("stats_clients")}
              </Text>
            </Box>
            <Box ta="center">
              <Title order={1} size={50} fw={900} mb="xs">
                {stats.sessions.toLocaleString()}+
              </Title>
              <Text size="lg" opacity={0.9}>
                {t("stats_sessions")}
              </Text>
            </Box>
            <Box ta="center">
              <Title order={1} size={50} fw={900} mb="xs">
                {stats.satisfaction}%
              </Title>
              <Text size="lg" opacity={0.9}>
                {t("stats_satisfaction")}
              </Text>
            </Box>
            <Box ta="center">
              <Title order={1} size={50} fw={900} mb="xs">
                {stats.years}+
              </Title>
              <Text size="lg" opacity={0.9}>
                {t("stats_experience")}
              </Text>
            </Box>
          </SimpleGrid>
        </Paper>

        {/* About Section */}
        <Grid mb={80} align="center">
          <Grid.Col
            span={{ base: 12, md: 6 }}
            order={{ base: 1, md: isRTL ? 2 : 1 }}
          >
            <Image
              src="/images/about_image.jpg"
              alt="about image"
              style={{ cursor: "pointer" }}
              onClick={() => router.push(`/${currentLang}/about`)}
              w={"70%"}
            />
          </Grid.Col>
          <Grid.Col
            span={{ base: 12, md: 6 }}
            order={{ base: 2, md: isRTL ? 1 : 2 }}
          >
            <Badge size="lg" variant="light" color="pink" mb="md">
              {t("about_badge")}
            </Badge>
            <Title order={2} size={40} mb="lg" c="pink">
              {t("about_title")}
            </Title>
            <Text
              size="lg"
              mb="xl"
              c="dimmed"
              style={{ lineHeight: 1.8, textAlign: getTextAlignment("left") }}
            >
              {t("about_description")}
            </Text>
            <List
              spacing="md"
              size="lg"
              icon={<IconCheck size={20} color="green" />}
              mb="xl"
            >
              <List.Item>{t("about_point_1")}</List.Item>
              <List.Item>{t("about_point_2")}</List.Item>
              <List.Item>{t("about_point_3")}</List.Item>
              <List.Item>{t("about_point_4")}</List.Item>
            </List>
            <Button
              size="lg"
              variant="gradient"
              gradient={{ from: "pink", to: "purple" }}
              rightSection={getArrowIcon()}
              onClick={() => router.push(`/${currentLang}/about`)}
            >
              {t("learn_more")}
            </Button>
          </Grid.Col>
        </Grid>

        {/* Services Section */}
        <Box mb={80}>
          <Box ta="center" mb={60}>
            <Badge size="xl" variant="light" color="purple" mb="md">
              {t("services_badge")}
            </Badge>
            <Title order={2} size={40} mb="lg" c="purple">
              {t("services_title")}
            </Title>
            <Text size="xl" c="dimmed" maw={700} mx="auto">
              {t("services_subtitle")}
            </Text>
          </Box>

          <Grid>
            {services.map((service, index) => (
              <Grid.Col key={index} span={{ base: 12, md: 6, lg: 4 }}>
                <Card
                  shadow="lg"
                  radius="xl"
                  p="xl"
                  h="100%"
                  style={{
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    border: "2px solid transparent",
                    textAlign: getTextAlignment("left"),
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.boxShadow =
                      "0 20px 40px rgba(0,0,0,0.1)";
                    e.currentTarget.style.borderColor = `var(--mantine-color-${service.color}-4)`;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "";
                    e.currentTarget.style.borderColor = "transparent";
                  }}
                  onClick={() => router.push(`/${currentLang}/consultation`)}
                >
                  <Group
                    justify="space-between"
                    mb="md"
                    style={{ flexDirection: getFlexDirection() }}
                  >
                    <ThemeIcon
                      size={60}
                      radius="xl"
                      variant="light"
                      color={service.color}
                    >
                      <service.icon size={30} />
                    </ThemeIcon>
                  </Group>

                  <Title order={3} size="h3" mb="sm">
                    {service.title}
                  </Title>

                  <Text c="dimmed" mb="md" style={{ lineHeight: 1.6 }}>
                    {service.description}
                  </Text>

                  <Group
                    justify="space-between"
                    align="center"
                    style={{ flexDirection: getFlexDirection() }}
                  >
                    <Text size="sm" c="dimmed">
                      <IconClock
                        size={16}
                        style={{
                          marginRight: "5px",
                          marginLeft: isRTL ? "5px" : 0,
                        }}
                      />
                      {service.duration}
                    </Text>
                    <Button
                      variant="light"
                      color={service.color}
                      size="sm"
                      rightSection={getChevronIcon()}
                    >
                      {t("book_now")}
                    </Button>
                  </Group>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </Box>

        {/* Process Section */}
        <Paper p={60} radius="xl" bg="gray.0" mb={80}>
          <Box ta="center" mb={60}>
            <Badge size="xl" variant="light" color="blue" mb="md">
              {t("process_badge")}
            </Badge>
            <Title order={2} size={40} mb="lg" c="blue">
              {t("process_title")}
            </Title>
            <Text size="xl" c="dimmed" maw={700} mx="auto">
              {t("process_subtitle")}
            </Text>
          </Box>

          <Timeline active={3} bulletSize={60} lineWidth={4} color="blue">
            {processSteps.map((step, index) => (
              <Timeline.Item
                key={index}
                bullet={
                  <ThemeIcon
                    size={60}
                    radius="xl"
                    variant="filled"
                    color="blue"
                  >
                    <step.icon size={24} />
                  </ThemeIcon>
                }
                title={
                  <Title order={3} size="h3" mb="sm">
                    {step.title}
                  </Title>
                }
              >
                <Text
                  size="lg"
                  c="dimmed"
                  mb="xl"
                  style={{ textAlign: getTextAlignment("left") }}
                >
                  {step.description}
                </Text>
              </Timeline.Item>
            ))}
          </Timeline>
        </Paper>

        {/* Team Section */}
        <Box mb={80}>
          <Box ta="center" mb={60}>
            <Badge size="xl" variant="light" color="green" mb="md">
              {t("team_badge")}
            </Badge>
            <Title order={2} size={40} mb="lg" c="green">
              {t("team_title")}
            </Title>
            <Text size="xl" c="dimmed" maw={700} mx="auto">
              {t("team_subtitle")}
            </Text>
          </Box>

          <Grid justify="space-between" align="stretch">
            {teamMembers.map((member, index) => (
              <Grid.Col key={index} span={{ base: 12, md: 4 }}>
                <Card shadow="lg" radius="xl" p="xl" ta="center">
                  <Avatar
                    src={member.image}
                    size={120}
                    radius="xl"
                    mx="auto"
                    mb="lg"
                  />
                  <Title order={3} mb="xs">
                    {member.name}
                  </Title>
                  <Text c="green" fw={500} mb="md">
                    {member.role}
                  </Text>
                  <Text c="dimmed" mb="lg" style={{ lineHeight: 1.6 }}>
                    {member.bio}
                  </Text>
                  <Group justify="center" gap="xs">
                    {member.specialties.map((specialty, idx) => (
                      <Badge key={idx} variant="light" color="green" size="sm">
                        {specialty}
                      </Badge>
                    ))}
                  </Group>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </Box>

        {/* Blog Section */}
        <Box mb={80}>
          <Box ta="center" mb={60}>
            <Badge size="xl" variant="light" color="orange" mb="md">
              {t("blog_badge")}
            </Badge>
            <Title order={2} size={40} mb="lg" c="orange">
              {t("blog_title")}
            </Title>
            <Text size="xl" c="dimmed" maw={700} mx="auto">
              {t("blog_subtitle")}
            </Text>
          </Box>

          <Grid>
            {blogPosts.map((post, index) => (
              <Grid.Col key={index} span={{ base: 12, md: 4 }}>
                <Card
                  shadow="lg"
                  radius="xl"
                  p={0}
                  h="100%"
                  onClick={post.onClick}
                  style={{ cursor: "pointer" }}
                >
                  <Image
                    src={post.image}
                    height={200}
                    alt={post.title}
                    radius="xl xl 0 0"
                  />
                  <Box p="xl">
                    <Group
                      justify="space-between"
                      mb="md"
                      style={{ flexDirection: getFlexDirection() }}
                    >
                      <Badge variant="light" color="orange">
                        {post.category}
                      </Badge>
                      <Text size="sm" c="dimmed">
                        {post.date}
                      </Text>
                    </Group>
                    <Title
                      order={4}
                      mb="md"
                      lineClamp={2}
                      style={{ textAlign: getTextAlignment("left") }}
                    >
                      {post.title}
                    </Title>
                    <Text
                      c="dimmed"
                      mb="lg"
                      lineClamp={3}
                      style={{ textAlign: getTextAlignment("left") }}
                    >
                      {post.excerpt}
                    </Text>
                    <Group
                      justify="space-between"
                      align="center"
                      style={{ flexDirection: getFlexDirection() }}
                    >
                      <Text size="sm" c="dimmed">
                        <IconClock
                          size={16}
                          style={{
                            marginRight: isRTL ? 0 : "5px",
                            marginLeft: isRTL ? "5px" : 0,
                          }}
                        />
                        {post.readTime}
                      </Text>
                      <Button
                        variant="subtle"
                        color="orange"
                        rightSection={getArrowIcon()}
                      >
                        {t("read_more")}
                      </Button>
                    </Group>
                  </Box>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </Box>

        {/* FAQ Section */}
        <Box mb={80}>
          <Box ta="center" mb={60}>
            <Badge size="xl" variant="light" color="red" mb="md">
              {t("faq_badge")}
            </Badge>
            <Title order={2} size={40} mb="lg" c="red">
              {t("faq_title")}
            </Title>
            <Text size="xl" c="dimmed" maw={700} mx="auto">
              {t("faq_subtitle")}
            </Text>
          </Box>

          <Accordion
            variant="separated"
            radius="xl"
            defaultValue="0"
            styles={{
              item: {
                border: "2px solid #f1f3f4",
                marginBottom: "16px",
              },
              control: {
                padding: "24px",
                fontSize: "18px",
                fontWeight: 600,
                textAlign: getTextAlignment("left"),
              },
              content: {
                padding: "0 24px 24px 24px",
                fontSize: "16px",
                lineHeight: 1.6,
                textAlign: getTextAlignment("left"),
              },
            }}
          >
            {faqs.map((faq, index) => (
              <Accordion.Item key={index} value={index.toString()}>
                <Accordion.Control>{faq.question}</Accordion.Control>
                <Accordion.Panel>
                  <Text c="dimmed">{faq.answer}</Text>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </Box>

        {/* Newsletter Section */}
        <Paper
          p={60}
          radius="xl"
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            marginBottom: "80px",
            textAlign: "center",
          }}
        >
          <ThemeIcon
            size={80}
            radius="xl"
            variant="white"
            color="violet"
            mb="xl"
            mx="auto"
          >
            <IconMail size={40} />
          </ThemeIcon>
          <Title order={2} size={40} mb="lg">
            {t("newsletter_title")}
          </Title>
          <Text size="xl" mb="xl" maw={600} mx="auto" opacity={0.9}>
            {t("newsletter_subtitle")}
          </Text>
          <Group
            justify="center"
            maw={500}
            mx="auto"
            style={{ flexDirection: getFlexDirection("row") }}
          >
            <TextInput
              placeholder={t("newsletter_placeholder")}
              size="lg"
              radius="xl"
              flex={1}
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              styles={{
                input: {
                  padding: "16px 24px",
                  fontSize: "16px",
                },
              }}
            />
            <Button
              size="lg"
              variant="white"
              color="violet"
              radius="xl"
              onClick={() => setShowSuccessModal(true)}
              style={{
                padding: "16px 32px",
                fontSize: "16px",
              }}
            >
              {t("subscribe")}
            </Button>
          </Group>
        </Paper>

        {/* Contact Section */}
        <ContactForm />
      </Container>

      {/* Final CTA Section */}
      <Box
        style={{
          background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
          color: "white",
          padding: "80px 0",
          textAlign: "center",
        }}
      >
        <Container size="md">
          <ThemeIcon
            size={100}
            radius="xl"
            variant="white"
            color="pink"
            mb="xl"
            mx="auto"
          >
            <IconSun size={50} />
          </ThemeIcon>
          <Title order={1} size={50} fw={900} mb="lg">
            {t("final_cta_title")}
          </Title>
          <Text size="xl" mb="xl" maw={600} mx="auto" opacity={0.9}>
            {t("final_cta_subtitle")}
          </Text>
          <Group
            justify="center"
            gap="lg"
            style={{ flexDirection: getFlexDirection("row") }}
          >
            <Button
              size="xl"
              variant="white"
              color="pink"
              leftSection={<IconCalendar size={24} />}
              onClick={() => router.push(`/${currentLang}/consultation`)}
              style={{
                fontSize: "18px",
                padding: "20px 40px",
                borderRadius: "50px",
              }}
            >
              {t("start_journey")}
            </Button>
            <CallNowButton />
          </Group>
        </Container>
      </Box>

      {/* Success Modal */}
      <Modal
        opened={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title={t("success_modal_title")}
        centered
        radius="lg"
      >
        <Stack align="center" gap="md">
          <ThemeIcon size={60} radius="xl" color="green">
            <IconCheck size={30} />
          </ThemeIcon>
          <Text ta="center" size="lg">
            {t("success_modal_message")}
          </Text>
          <Button
            onClick={() => setShowSuccessModal(false)}
            variant="light"
            color="green"
          >
            {t("success_modal_button")}
          </Button>
        </Stack>
      </Modal>
    </Box>
  );
};
