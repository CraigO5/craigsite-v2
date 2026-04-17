import type { Metadata } from "next";
import Achievements from "@/components/custom/Achievements";

export const metadata: Metadata = {
  title: "Badges",
  description:
    "Achievements and milestones — Kapwa Codefest winner, solo-built Euno, 25+ encrypted endpoints, and more.",
};

export default function AchievementsPage() {
  return (
    <main className="overflow-x-hidden pt-24 pb-28 md:pt-32">
      <Achievements />
    </main>
  );
}
