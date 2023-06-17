import RandomMessage from "@/components/RandomMessage";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <>
      <RandomMessage />
      <div className="divider" />
      <Timeline />
    </>
  );
}
