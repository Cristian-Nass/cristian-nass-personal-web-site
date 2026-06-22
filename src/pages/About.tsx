import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';

const stack = [
  'React',
  'TypeScript',
  'Next.js',
  'Vue',
  'Angular',
  'Node.js',
  'Firebase',
  'TailwindCSS',
  'Redux / Zustand',
  'Docker',
  'REST APIs',
  'GitHub Actions',
];

const About = () => {
  return (
    <div className="relative">
      <div className="section-shell">
        <SectionHeading index="01" eyebrow="About" title="A bit about me" />

        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <p className="text-xl leading-relaxed text-cloud md:text-2xl">
                I'm an experienced software engineer with a strong programming
                background and a proven track record of shipping a diverse range
                of applications — both in teams and on my own.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 leading-relaxed text-muted">
                In recent years I've specialized in front-end development with
                React, Angular and Vue, backed by complementary tools like
                Node.js, Firebase and Docker. Earlier in my career I built
                Android apps in Java and Windows apps in C#, and sharpened my
                fundamentals with HTML, CSS, jQuery and vanilla JavaScript.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 leading-relaxed text-muted">
                Today my focus is going deeper into front-end engineering and
                TypeScript, exploring Next.js, micro-frontends and React Native.
                I'm committed to continuous learning and staying close to the
                latest in the field.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-5">
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-line bg-ink-card/60 p-7">
                <p className="eyebrow mb-5">Tech I work with</p>
                <div className="flex flex-wrap gap-2.5">
                  {stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-line px-3.5 py-1.5 font-mono text-xs text-cloud transition-colors duration-300 hover:border-accent hover:text-accent">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
