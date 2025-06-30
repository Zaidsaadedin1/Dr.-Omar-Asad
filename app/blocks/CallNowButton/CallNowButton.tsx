import { useState } from "react";
import { Button, Modal, Text, Notification } from "@mantine/core";
import { IconPhone, IconCheck } from "@tabler/icons-react";
import { t } from "i18next";
import { useTranslation } from "next-i18next";

export default function CallNowButton() {
  const [opened, setOpened] = useState(false);
  const [copied, setCopied] = useState(false);
  const phoneNumber = "+1 (555) 123-4567"; // Replace with the actual doctor phone number
  const { t } = useTranslation("home");
  const copyToClipboard = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // reset notification after 2 seconds
  };

  return (
    <>
      <Button
        size="xl"
        variant="outline"
        color="white"
        leftSection={<IconPhone size={24} />}
        style={{
          fontSize: "18px",
          padding: "20px 40px",
          borderRadius: "50px",
        }}
        onClick={() => setOpened(true)}
      >
        {t("call_now")}
      </Button>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={t("doctor_phone_number")}
        centered
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            cursor: "pointer",
            userSelect: "none",
          }}
          onClick={copyToClipboard}
          aria-label="Copy phone number"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              copyToClipboard();
            }
          }}
        >
          {phoneNumber}
        </Text>

        {copied && (
          <Notification
            icon={<IconCheck size={16} />}
            color="teal"
            title="Copied"
            withCloseButton={false}
            style={{ marginTop: 20 }}
          >
            {t("phone_number_copied")}
          </Notification>
        )}
      </Modal>
    </>
  );
}
