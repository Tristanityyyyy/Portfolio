// src/components/About.tsx

export default function About() {
  return (
    <section className="w-full max-w-4xl mx-auto ">
      <div className="flex gap-8">

        {/* Left: About Text */}
        <div className="flex-1">
          <h2 className="text-lg font-bold text-zinc-900 mb-4">About</h2>

          <div className="flex flex-col gap-4 text-md font-normal text-zinc-900 leading-relaxed">
            <p>
             I'm a backend developer specializing in C# and .NET, building scalable APIs, 
             authentication systems, and cloud-ready server-side solutions. 
             I focus on clean architecture, performance, and writing code that teams can actually maintain.
            </p>
            <p>
              Beyond backend, I'm comfortable working across the full stack — from designing databases 
              and REST APIs to building responsive frontends with React and Next.js. 
              I enjoy owning features end-to-end when the project calls for it.
            </p>
            <p>
              Lately, I've been integrating AI tooling into backend 
              workflows, building intelligent APIs and automation 
              systems that speed up development and deliver smarter, more efficient solutions.
            </p>
          </div>
        </div>

        

      </div>

    
    </section>
  );
}