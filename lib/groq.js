import Groq from "groq-sdk";

if (!process.env.GROQ_API_KEY) {
  throw new Error("Groq Api Not Found");
}

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});
import { systemPrompt } from "./systemPrompt";

export const handleGroq = async (prompt) => {
  try {
    const messages = [
      {
        role: "system",
        content: systemPrompt,
      },
      {
        role: "user",
        content: prompt,
      },
    ];

    const callAi = async (model) => {
      return await Promise.race([
        groq.chat.completions.create({
          model,
          messages,
        }),

        new Promise((reject, _) => {
          setTimeout(() => {
            reject(new Error("Timeout"));
          }, 20000);
        }),
      ]);
    };

    try {
      const res = await callAi("llama-3.3-70b-versatile");
      return res.choices[0].message.content || "";
    } catch (err) {
      console.log("Primary model failed, Switching...");

      try {
        const res = await callAi("llama-3.1-8b-instant");
        return res.choices[0].message.content || "";
      } catch (err) {
        console.log("Fallback also failed");
        return "Server is busy, please try again";
      }
    }
  } catch (err) {
    console.log(err.message);
  }
};
