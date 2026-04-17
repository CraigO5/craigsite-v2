import type { Metadata } from "next";
import Chatbot from "@/components/custom/Chatbot";

export const metadata: Metadata = {
  title: "Ask",
  description:
    "Ask a scripted bot trained on Craig's resume — work, stack, experience, availability.",
};

export default function AskPage() {
  return (
    <main className="overflow-x-hidden pt-24 pb-28 md:pt-32">
      <Chatbot />
    </main>
  );
}
