"use client";

import {
  TextInput,
  Textarea,
  Select,
  Button,
  Stack,
  Title,
  Paper,
  LoadingOverlay,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useTranslation } from "next-i18next";
import { showNotification } from "@mantine/notifications";
import { z } from "zod";
import React, { useState } from "react";

// Define schema
const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email" }),
  phone: z.string().min(5, { message: "Phone number is required" }),
  service: z.string().min(1, { message: "Please select a service" }),
  message: z.string().min(1, { message: "Message is required" }),
});

export default function ContactForm() {
  const { t } = useTranslation("home");
  const [loading, setLoading] = useState(false);

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
    validate: zodResolver(schema),
  });

  // Form component
  const handleSubmit = async (values: typeof form.values) => {
    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      });

      // Handle non-JSON responses
      const contentType = response.headers.get("content-type");
      let res;

      if (contentType?.includes("application/json")) {
        res = await response.json();
      } else {
        const text = await response.text();
        throw new Error(`Unexpected response: ${text.slice(0, 100)}`);
      }

      if (!response.ok) throw new Error(res.message || "Request failed");

      showNotification({
        title: t("sendRequests.notifications.success_title"),
        message: t("sendRequests.notifications.success_message"),
        color: "green",
      });
      form.reset();
    } catch (error: unknown) {
      showNotification({
        title: t("sendRequests.notifications.error_title"),
        message:
          error instanceof Error
            ? error.message
            : t("sendRequests.notifications.error_message"),
        color: "red",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper p="xl" radius="xl" shadow="lg" pos="relative">
      <LoadingOverlay visible={loading} zIndex={1000} />
      <Title order={3} mb="lg" ta="center">
        {t("contact_form_title")}
      </Title>

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack gap="md">
          <TextInput
            label={t("form_name_label")}
            placeholder={t("form_name_placeholder")}
            {...form.getInputProps("name")}
          />
          <TextInput
            label={t("form_email_label")}
            placeholder={t("form_email_placeholder")}
            {...form.getInputProps("email")}
          />
          <TextInput
            label={t("form_phone_label")}
            placeholder={t("form_phone_placeholder")}
            {...form.getInputProps("phone")}
          />
          <Select
            label={t("form_service_label")}
            placeholder={t("form_service_placeholder")}
            data={[
              { value: "individual", label: t("service_individual") },
              { value: "couples", label: t("service_couples") },
              { value: "family", label: t("service_family") },
              { value: "group", label: t("service_group") },
            ]}
            {...form.getInputProps("service")}
          />
          <Textarea
            label={t("form_message_label")}
            placeholder={t("form_message_placeholder")}
            autosize
            minRows={3}
            {...form.getInputProps("message")}
          />
          <Button
            type="submit"
            variant="gradient"
            gradient={{ from: "pink", to: "purple" }}
            fullWidth
            mt="md"
            disabled={loading}
          >
            {t("form_submit")}
          </Button>
        </Stack>
      </form>
    </Paper>
  );
}
