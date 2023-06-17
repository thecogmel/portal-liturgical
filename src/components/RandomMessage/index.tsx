"use client";
import React from "react";
import Message from "../Message";
import { messages } from "@/utils/messages";

const RandomMessage: React.FC = () => {
  const randomMessage = Math.floor(Math.random() * messages.length);
  return (
    <Message
      message={messages[randomMessage].message}
      author={messages[randomMessage].author}
      image1={messages[randomMessage].image1}
      image2={messages[randomMessage].image2}
    />
  );
};

export default RandomMessage;
