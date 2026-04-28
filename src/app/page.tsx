import Hero from "@/components/Hero";
import About from "@/components/About";
import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import TechStack from "@/components/TechStack";
import SocialMedia from "@/components/SocialMedia";
import Gallery from "../components/Gallery";
import CertCard from "@/components/CertCard";

export default function Home() {
  return (
    <main className="w-full max-w-4xl mx-auto flex flex-col gap-4 py-6 px-4 bg-white dark:bg-zinc-950 min-h-screen">
      <Hero />
      <div className="flex flex-col md:flex-row md:items-stretch gap-4">
        <div className="flex-1"><About /></div>
        <div className="w-full md:w-72 shrink-0"><ExperienceCard /></div>
      </div>
      <div className="flex flex-col md:flex-row md:items-stretch gap-4">
       <ProjectCard />
        <div className="w-full md:w-72 shrink-0"><CertCard /></div>
      </div>
      <div className="flex flex-col md:flex-row md:items-stretch gap-4">
        <div className="flex-1"><TechStack /></div>
        <div className="w-full md:w-72 shrink-0"><SocialMedia /></div>
      </div>
      <Gallery />
    </main>
  );
}
