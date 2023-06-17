import Message from "@/components/Message";
import Timeline from "@/components/Timeline";
import { messages } from "@/utils/messages";

export default function Home() {
  const randomMessage = Math.floor(Math.random() * messages.length);
  return (
    <>
      <Message
        message={messages[randomMessage].message}
        author={messages[randomMessage].author}
        image1={messages[randomMessage].image1}
        image2={messages[randomMessage].image2}
      />
      <div className="divider" />
      <Timeline />
    </>
  );
}
