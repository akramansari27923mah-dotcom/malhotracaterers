"use client";

import Image from "next/image";
import { Send, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { api } from "@/lib/axios";
import ChatMarkdownSupport from "./MarkDownSupport";
import TypingLoader from "./Loader";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [message, setMessage] = useState([]);
  const messageEnd = useRef();

  const sendMessage = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setPrompt("");
    setMessage((prev) => [...prev, { role: "user", content: prompt }]);
    try {
      const { data } = await api.post("/chatbot", { prompt });
      setMessage((prev) => [...prev, { role: "ai", content: data?.aiReply }]);
    } catch (err) {
      console.log(err?.message);
      setMessage((prev) => [...prev, { role: "ai", contect: err?.message }]);
    } finally {
      setLoading(false);
      setPrompt("");
    }
  };

  const handelKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  useEffect(() => {
    messageEnd?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [message]);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-3 right-3 z-50 "
      >
        <Image
          src="/chat.png"
          alt="Chat"
          width={70}
          height={70}
          className="hover:scale-110 transition-all duration-300 animate___animated animate__pulse animate__infinite"
        />
      </button>

      <div
        className={`
          fixed bottom-15 md:right-15 right-3 z-50
          w-[95%] max-w-95
          h-150
          rounded-3xl
          overflow-hidden
          border border-amber-500/20
          bg-black/80
          backdrop-blur-2xl
          shadow-2xl shadow-black/50
          transition-all duration-500
          ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10 pointer-events-none"
          }
        `}
      >
        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-linear-to-r from-amber-500/10 to-transparent">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Image
                src="/logo.jpg"
                alt="logo"
                width={45}
                height={45}
                className="rounded-full"
              />

              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border border-black" />
            </div>

            <div>
              <h3 className="text-white font-semibold">Malhotra Caterers</h3>

              <p className="text-xs text-green-400">
                Online • Replies instantly
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        <div className="h-115 overflow-y-auto hide-scroll p-4 space-y-4">

          {message.map((msg, ind) => (
            <div
              key={ind}
              className={`flex items-end gap-2 mb-4 ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.role !== "user" && (
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-black text-sm font-bold shrink-0">
                  <Image
                    src={"/logo.jpg"}
                    alt="aiLogo"
                    width={100}
                    height={100}
                  />
                </div>
              )}

              <div
                className={`
        max-w-[85%]
        px-4 py-3
        rounded-2xl
        text-sm md:text-base
        whitespace-pre-wrap
        wrap-break-word
        transition-all duration-300
        shadow-lg

        ${
          msg.role === "user"
            ? `
             bg-amber-400
              text-white
              rounded-br-md
              shadow-amber-500/20
            `
            : `
              bg-white/10
              backdrop-blur-md
              border border-white/10
              text-white
              rounded-bl-md
            `
        }

      `}
              >
                <ChatMarkdownSupport content={msg?.content} />
                <div ref={messageEnd} />
              </div>
            </div>
          ))}

           {loading && <TypingLoader />}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10 bg-black/50">
          <div className="flex items-center gap-2">
            <input
              type="text"
              onKeyDown={handelKeyPress}
              onChange={(e) => setPrompt(e?.target?.value)}
              value={prompt}
              placeholder="Type your message..."
              className="
                flex-1
                bg-white/5
                border border-white/10
                rounded-full
                px-4 py-3
                text-white
                placeholder:text-gray-400
                outline-none
                focus:border-amber-500
              "
            />

            <button
              className="
                w-12 h-12
                rounded-full
                bg-amber-500
                text-black
                flex items-center justify-center
                hover:scale-105
                transition-all
              "
            >
              <Send size={18} onClick={sendMessage} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
