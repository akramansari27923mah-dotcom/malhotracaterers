import { handleGroq } from "@/lib/groq";
import { NextResponse as res } from "next/server";

export const POST = async (req) => {
  try {
    const body = await req.json();
    const { prompt } = body;

    const aiReply = await handleGroq(prompt);

    return res.json(
      {
        message: "AI Response successfully",
        success: true,
        aiReply,
      },
      { status: 200 },
    );
  } catch (err) {
    console.log(err.message);
    return res.json(
      {
        message: "Internal server error",
        success: false,
      },
      { status: 500 },
    );
  }
};
