import Hero from "@/components/Hero";
import About from "@/components/About";
import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import TechStack from "@/components/TechStack";
import SocialMedia from "@/components/SocialMedia";
import Gallery from "@/components/Gallery";
import Card from "@/components/ui/Card";

export default function Home() {
  return (
    <main className="w-full max-w-4xl mx-auto flex flex-col gap-4 py-6 px-4 bg-white dark:bg-zinc-950 min-h-screen">
      <Card>
        <Hero />
      </Card>
      <div className="flex flex-col md:flex-row gap-4">
        <Card className="flex-1">
          <About />
        </Card>
        <Card className="w-full md:w-72 shrink-0">
          <ExperienceCard />
        </Card>
      </div>
      <Card>
        <ProjectCard />
      </Card>
      <div className="flex flex-col md:flex-row gap-4">
        <Card className="flex-1">
          <TechStack />
        </Card>
        <Card className="w-full md:w-72 shrink-0">
          <SocialMedia />
        </Card>
      </div>
      <Card>
        <Gallery />
      </Card>
    </main>
  );
}