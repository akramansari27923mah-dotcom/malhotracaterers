import { NextResponse as res } from "next/server";
import nodemailer from "nodemailer";
import { emailTemplate } from "@/lib/emailTemplate";

export const POST = async (req) => {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      eventType,
      message,
      date,
      eventLocation,
      nog,
      budget,
    } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New ${eventType} Inquiry`,
      html: emailTemplate({
        name,
        email,
        phone,
        eventType,
        message,
        date,
        eventLocation,
        nog,
        budget,
      }),
    });

    return res.json(
      {
        success: true,
        message: "Email sent successfully",
      },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);

    return res.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 },
    );
  }
};
