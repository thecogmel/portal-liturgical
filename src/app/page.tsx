import Message from "@/components/Message";
import Timeline from "@/components/Timeline";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Message />
      <div className="divider" />
      <Timeline />
    </>
  );
}
