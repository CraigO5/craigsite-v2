import type { Metadata } from "next";
import ScreenHeader from "@/components/custom/ScreenHeader";
import SettingsPanel from "@/components/custom/SettingsPanel";

export const metadata: Metadata = {
  title: "Settings",
  description: "Personalize your visit — themes, display, and more.",
};

export default function SettingsPage() {
  return (
    <main className="overflow-x-hidden pt-24 pb-28 md:pt-32">
      <section className="mx-auto max-w-3xl px-6 pb-20">
        <ScreenHeader title="Settings." subtitle="Make it yours." />
        <SettingsPanel />
      </section>
    </main>
  );
}
