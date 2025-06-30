// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, email, phone, service, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !service || !message) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Invalid email format",
      });
    }

    // Validate phone format (basic validation)
    const phoneRegex = /^[0-9+-\s]{7,15}$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({
        message: "Invalid phone format",
      });
    }

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.CONTACT_EMAIL,
      subject: `New Contact: ${service} Consultation`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p>Sent on: ${new Date().toLocaleString()}</p>
      `,
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error: any) {
    console.error("Email sending error:", error);
    res.status(500).json({
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Failed to send email. Please try again later.",
    });
  }
}
