import { Hero } from "@/components/home/Hero";
import { InteractiveLabPreview } from "@/components/home/InteractiveLabPreview";
import { LearningPillars } from "@/components/home/LearningPillars";
import { MaterialSimulatorPreview } from "@/components/home/MaterialSimulatorPreview";
import { TechnicalLibraryPreview } from "@/components/home/TechnicalLibraryPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <LearningPillars />
      <InteractiveLabPreview />
      <MaterialSimulatorPreview />
      <TechnicalLibraryPreview />
    </>
  );
}

