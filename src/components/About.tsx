// src/components/About.tsx

export default function About() {
  return (
    <section className="w-full max-w-4xl mx-auto ">
      <div className="flex gap-8">

        {/* Left: About Text */}
        <div className="flex-1">
          <h2 className="text-base font-bold text-zinc-900 mb-4">About</h2>

          <div className="flex flex-col gap-4 text-md font-normal text-zinc-900 leading-relaxed">
            <p>
              I'm a backend developer specializing in building scalable and
              efficient server-side solutions. I work on projects including
              REST APIs, database design, authentication systems, and
              cloud infrastructure.
            </p>
            <p>
              I've helped teams deliver reliable backend systems that power
              modern web and mobile applications, focusing on clean
              architecture and performance.
            </p>
            <p>
              Lately, I've been diving deeper into integrating AI tools into
              backend workflows, building intelligent APIs and automation
              systems that streamline development and deliver smarter
              solutions.
            </p>
          </div>
        </div>

        

      </div>

    
    </section>
  );
}