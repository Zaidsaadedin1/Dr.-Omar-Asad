import React, { useEffect } from "react";
import {
  Container,
  Title,
  TextInput,
  Button,
  Text,
  Grid,
  Textarea,
  Select,
  NumberInput,
  Checkbox,
  Divider,
  Anchor,
  Input,
} from "@mantine/core";
import { z } from "zod";
import { useForm } from "@mantine/form";
import { IconUser, IconMail, IconDeviceLaptop } from "@tabler/icons-react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { keyframes } from "@emotion/react";
import orderController from "../../Apis/controllers/orderControllers";
import { CreateOrderDto } from "../../Apis/types/orderDtos/orderDtos";
import { showNotification } from "@mantine/notifications";
import { useAuth } from "../../contexts/AuthContext";

const fadeIn = keyframes({
  from: { opacity: 0, transform: "translateY(20px)" },
  to: { opacity: 1, transform: "translateY(0)" },
});

export default function consultation() {
  const router = useRouter();
  const { t, i18n } = useTranslation("requestService");
  const currentLang = i18n.language;
  const isRTL = currentLang === "ar";
  const { user } = useAuth();

  const schema = z.object({
    firstName: z
      .string()
      .min(1, { message: t("validation.firstName_required") }),
    lastName: z.string().min(1, { message: t("validation.lastName_required") }),
    email: z
      .string()
      .min(1, { message: t("validation.email_required") })
      .email({ message: t("validation.email_invalid") }),
    phone: z
      .string()
      .min(1, { message: t("validation.phone_required") })
      .regex(/^\+?[0-9]{10,15}$/, {
        message: t("validation.phone_invalid"),
      }),
    companyName: z.string().optional(),
    projectType: z
      .string()
      .min(1, { message: t("validation.projectType_required") }),
    serviceType: z
      .string()
      .min(1, { message: t("validation.serviceType_required") }),
    budget: z
      .number({
        required_error: t("validation.budget_required"),
        invalid_type_error: t("validation.budget_number"),
      })
      .min(1, { message: t("validation.budget_min") }),
    timeline: z.string().min(1, { message: t("validation.timeline_required") }),
    projectDescription: z
      .string()
      .min(10, { message: t("validation.projectDescription_min") })
      .max(1000, { message: t("validation.projectDescription_max") }),
    additionalRequirements: z.string().optional(),
    termsAccepted: z.boolean().refine((value) => value === true, {
      message: t("validation.terms_required"),
    }),
  });

  const form = useForm({
    initialValues: {
      userId: user?.id || "",
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      email: user?.email || "",
      phone: user?.phoneNumber || "",
      companyName: "",
      projectType: "",
      serviceType: "",
      budget: 1000,
      timeline: "",
      projectDescription: "",
      additionalRequirements: "",
      termsAccepted: false,
    },
    validate: (values) => {
      try {
        schema.parse(values);
        return {};
      } catch (error) {
        const formattedErrors: Record<string, string> = {};
        if (error instanceof z.ZodError) {
          error.errors.forEach((err) => {
            if (err.path.length > 0) {
              formattedErrors[err.path[0]] = err.message;
            }
          });
        }
        return formattedErrors;
      }
    },
    validateInputOnChange: true,
    validateInputOnBlur: true,
  });

  useEffect(() => {
    if (user) {
      form.setValues({
        userId: user.id || "",
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        phone: user.phoneNumber || "",
        companyName: "",
        projectType: "",
        serviceType: "",
        budget: 1000,
        timeline: "",
        projectDescription: "",
        additionalRequirements: "",
        termsAccepted: false,
      });
    }
  }, [user]);

  const handleSubmit = async (values: CreateOrderDto) => {
    try {
      const res = await orderController.CreateOrderAsync(values);
      if (res.success) {
        showNotification({
          title: t("sendRequests.notifications.success_title"),
          message: t("sendRequests.notifications.success_message"),
          color: "green",
          autoClose: 2000,
        });
        form.reset();
        router.push(`/${currentLang}/`);
      } else {
        showNotification({
          title: t("sendRequests.notifications.error_title"),
          message: res.message || t("sendRequests.notifications.error_message"),
          color: "red",
          autoClose: 2000,
        });
      }
    } catch {
      showNotification({
        title: t("sendRequests.notifications.error_title"),
        message: t("sendRequests.notifications.error_message"),
        color: "red",
        autoClose: 2000,
      });
    }
  };

  const getProjectTypeOptions = () => {
    return Object.entries(t("projectTypes", { returnObjects: true })).map(
      ([value, label]) => ({ value, label })
    );
  };

  const getServiceTypeOptions = (projectType: string) => {
    const serviceTypes =
      t(`serviceTypes.${projectType}`, { returnObjects: true }) ||
      t("serviceTypes.default", { returnObjects: true });

    return Object.entries(serviceTypes).map(([value, label]) => ({
      value,
      label,
    }));
  };

  const timelineOptions = Object.entries(
    t("timelines", { returnObjects: true })
  ).map(([value, label]) => ({ value, label }));

  const handleProjectTypeChange = (value: string | null) => {
    form.setFieldValue("projectType", value || "");
    form.setFieldValue("serviceType", "");
  };

  return (
    <>
      <Container size="md" py="xl" dir={isRTL ? "rtl" : "ltr"}>
        <Title
          order={2}
          mb="md"
          style={{
            animation: `${fadeIn} 0.8s ease-out`,
            textAlign: isRTL ? "right" : "left",
          }}
        >
          {t("title")}
        </Title>

        <Text
          size="sm"
          color="dimmed"
          mb="xl"
          style={{
            animation: `${fadeIn} 1s ease-out`,
            textAlign: isRTL ? "right" : "left",
          }}
        >
          {t("subtitle")}
        </Text>

        {/* Use proper form element instead of Box */}
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Divider
            label={t("fields.contactInfo")}
            labelPosition="center"
            mb="md"
          />

          <Grid>
            <Grid.Col span={6}>
              <TextInput
                label={t("fields.firstName")}
                placeholder={t("placeholders.firstName")}
                leftSection={<IconUser size={16} />}
                mb="md"
                required
                value={form.values.firstName}
                disabled={!!user?.firstName}
                {...form.getInputProps("firstName")}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                label={t("fields.lastName")}
                placeholder={t("placeholders.lastName")}
                mb="md"
                required
                value={form.values.lastName}
                disabled={!!user?.lastName}
                {...form.getInputProps("lastName")}
              />
            </Grid.Col>
          </Grid>

          <Grid>
            <Grid.Col span={6}>
              <TextInput
                label={t("fields.email")}
                placeholder={t("placeholders.email")}
                leftSection={<IconMail size={16} />}
                mb="md"
                required
                type="email"
                value={form.values.email}
                disabled={!!user?.email}
                {...form.getInputProps("email")}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Input.Wrapper
                label={t("fields.phoneNumber")}
                error={form.errors.phone}
                {...form.getInputProps("phone")}
              />
            </Grid.Col>
          </Grid>

          <TextInput
            label={t("fields.companyName")}
            placeholder={t("placeholders.companyName")}
            mb="md"
            {...form.getInputProps("companyName")}
          />

          <Divider
            label={t("fields.projectRequirements")}
            labelPosition="center"
            mt="xl"
            mb="md"
          />

          <Grid>
            <Grid.Col span={6}>
              <Select
                label={t("fields.projectType")}
                placeholder={t("placeholders.projectType")}
                data={getProjectTypeOptions()}
                mb="md"
                required
                onChange={handleProjectTypeChange}
                value={form.values.projectType}
                error={form.errors.projectType}
                leftSection={<IconDeviceLaptop size={16} />}
                dir={isRTL ? "rtl" : "ltr"}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Select
                label={t("fields.serviceType")}
                placeholder={t("placeholders.serviceType")}
                data={getServiceTypeOptions(form.values.projectType)}
                mb="md"
                required
                disabled={!form.values.projectType}
                {...form.getInputProps("serviceType")}
                dir={isRTL ? "rtl" : "ltr"}
              />
            </Grid.Col>
          </Grid>

          <Grid>
            <Grid.Col span={6}>
              <NumberInput
                label={t("fields.budget")}
                placeholder={t("placeholders.budget")}
                min={100}
                mb="md"
                required
                {...form.getInputProps("budget")}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Select
                label={t("fields.timeline")}
                placeholder={t("placeholders.timeline")}
                data={timelineOptions}
                mb="md"
                required
                {...form.getInputProps("timeline")}
                dir={isRTL ? "rtl" : "ltr"}
              />
            </Grid.Col>
          </Grid>

          <Textarea
            label={t("fields.projectDescription")}
            placeholder={t("placeholders.projectDescription")}
            minRows={4}
            mb="md"
            required
            {...form.getInputProps("projectDescription")}
          />

          <Textarea
            label={t("fields.additionalRequirements")}
            placeholder={t("placeholders.additionalRequirements")}
            minRows={2}
            mb="md"
            {...form.getInputProps("additionalRequirements")}
          />

          <Checkbox
            label={
              <>
                <Anchor
                  target="_blank"
                  size="sm"
                  href={`/${currentLang}/termsOfService`}
                >
                  {t("links.agree")} <strong>{t("links.terms")}</strong>
                </Anchor>
                <Anchor
                  target="_blank"
                  size="sm"
                  href={`/${currentLang}/privacyPolicy`}
                >
                  {t("links.and")} <strong>{t("links.privacy")}</strong>
                </Anchor>
              </>
            }
            mb="xl"
            required
            {...form.getInputProps("termsAccepted", { type: "checkbox" })}
          />

          <Button
            type="submit"
            fullWidth
            size="md"
            color="blue"
            mt="xl"
            loading={form.submitting}
            style={{ animation: `${fadeIn} 1.4s ease-out` }}
          >
            {t("buttons.submit")}
          </Button>
        </form>
      </Container>
      <style>
        {`
      .PhoneInputCountryIcon img {
        width: 24px !important;
        height: 18px !important;
        object-fit: contain !important;
      }
    `}
      </style>
    </>
  );
}
