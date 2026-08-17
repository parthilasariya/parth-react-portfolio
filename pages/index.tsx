import Head from "next/head";
import { useState, useEffect } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { MdLightMode, MdDarkMode, MdEmail } from "react-icons/md";
import { FaReact, FaHtml5, FaCss3Alt, FaFigma } from "react-icons/fa";
import {
  SiJavascript,
  SiSolidity,
  SiPhp,
  SiMysql,
  SiBootstrap,
  SiLaravel,
  SiTailwindcss,
  SiRedis,
} from "react-icons/si";
import Image from "next/image";
import parth from "../public/parth-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

const portfolioProjects = [
  {
    title: "Kitikits",
    image: web1,
    summary: "E-commerce website for kids toys.",
    description:
      "Designed and implemented a tailored storefront experience for a toy brand, combining product discovery, category merchandising, and mobile-friendly browsing.",
    tech: ["React", "Next.js", "Tailwind CSS"],
    role: "Frontend Developer",
    outcome: "Shipped a clean storefront focused on product discoverability and conversion on mobile devices.",
    href: "https://kitikits.com/",
  },
  {
    title: "Simple Chat App",
    image: web4,
    summary: "Real-time chat application using React and Socket.io.",
    description:
      "Built a lightweight messaging interface with real-time updates, clean state management, and responsive layout patterns for a shared-room experience.",
    tech: ["React", "Socket.io", "Node.js"],
    role: "Full-Stack Developer",
    outcome: "Delivered a functioning real-time chat prototype with instant message updates and interactive room-based communication.",
    href: "https://github.com/parthilasariya/simplechatapp",
  },
  {
    title: "DropMe",
    image: web6,
    summary: "Peer-to-peer car pooling application concept.",
    description:
      "Explored a concept platform for ride-sharing coordination, emphasizing trust, route visibility, and user-friendly trip management flows.",
    tech: ["React", "Laravel", "MySQL"],
    role: "Full-Stack Developer",
    outcome: "Created a usable concept for multi-user ride matching and trip coordination with a streamlined UX.",
    href: "https://github.com/parthilasariya/DropMe",
  },
  {
    title: "TinPets",
    image: web2,
    summary: "Landing page for a pet dating platform.",
    description:
      "Designed a product-focused marketing page with conversion-oriented sections, bold imagery, and clear calls-to-action for a pet matchmaking brand.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    role: "UI Designer & Frontend Developer",
    outcome: "Produced a polished landing experience with stronger brand storytelling and clearer user flow.",
    href: "https://parthilasariya.github.io/tinpets/",
  },
  {
    title: "Dashboard Arch WebUI",
    image: web3,
    summary: "Dashboard UI concept for architecture projects.",
    description:
      "Crafted a more structured dashboard concept for project data, balancing visual hierarchy, reporting widgets, and design consistency for architectural workflows.",
    tech: ["Figma", "UI Design", "Design Systems"],
    role: "Product Designer",
    outcome: "Improved the readability of key project metrics and created a cleaner layout for complex information-heavy dashboards.",
    href: "",
  },
  {
    title: "Portfolio Splash",
    image: web5,
    summary: "Custom icon and splash screen design for portfolio.",
    description:
      "Developed a cohesive branding concept with a custom icon and splash treatment that aligned with a personal portfolio identity and visual style.",
    tech: ["Figma", "Adobe XD", "Brand Design"],
    role: "Visual Designer",
    outcome: "Created a branded launch screen that strengthened the portfolio’s identity and presentation quality.",
    href: "",
  },
] as const;

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const [activeProject, setActiveProject] = useState<(typeof portfolioProjects)[number] | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("darkMode");
      if (saved !== null) setDarkMode(saved === "true");
    } catch (e) {
      // ignore (SSR safety)
    }
    const t = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
      try {
        localStorage.setItem("darkMode", String(next));
      } catch (e) {}
      return next;
    });
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <a
        href="#main"
        className="sr-only focus:absolute focus:top-4 focus:left-4 focus:px-3 focus:py-2 focus:bg-white dark:focus:bg-gray-800 focus:text-sm focus:rounded focus:z-50"
      >
        Skip to content
      </a>
      <Head>
        <title>Parth Ilasariya Portfolio</title>
        <meta
          name="description"
          content="Full-Stack Web Developer specializing in PHP, Laravel, and React — portfolio of Parth Ilasariya."
        />
        <meta property="og:title" content="Parth Ilasariya | Full-Stack Web Developer" />
        <meta
          property="og:description"
          content="Full-Stack Web Developer specializing in PHP, Laravel, and React — portfolio of Parth Ilasariya."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://parthilasariya.github.io/parth-wave.png" />
        <meta property="og:url" content="https://parthilasariya.github.io/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Parth Ilasariya | Full-Stack Web Developer" />
        <meta
          name="twitter:description"
          content="Full-Stack Web Developer specializing in PHP, Laravel, and React — portfolio of Parth Ilasariya."
        />
        <meta name="twitter:image" content="https://parthilasariya.github.io/parth-wave.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id="main" className="bg-white px-6 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="sticky top-0 z-40 p-4 md:p-10 mb-4 md:mb-12 flex justify-between items-center dark:text-white transition-colors duration-300 bg-white/70 dark:bg-gray-900/70 backdrop-blur">
            <h1 className="text-xl">Parth Ilasariya</h1>
            <ul className="flex items-center">
              <li>
                {darkMode ? (
                  <MdLightMode
                    onClick={toggleDarkMode}
                    className="cursor-pointer text-2xl transition-all duration-500 text-yellow-400 hover:scale-125"
                    aria-label="Switch to light mode"
                  />
                ) : (
                  <MdDarkMode
                    onClick={toggleDarkMode}
                    className="cursor-pointer text-2xl transition-all duration-500 text-gray-700 hover:scale-125"
                    aria-label="Switch to dark mode"
                  />
                )}
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-md ml-8 transition-all duration-300 hover:scale-105 hover:from-yellow-500 hover:to-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  href="https://drive.google.com/file/d/1Nt82bPctPxtbcH_5IM9FJMVJBvJwxskT/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div
            className={`text-center p-10 py-10 transition-transform duration-700 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <h2 className="text-3xl md:text-5xl py-2 text-orange-500 font-medium dark:text-orange-500">
              Parth Ilasariya
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Full-Stack Web Developer | UX-Focused Problem Solver
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl max-w-xl mx-auto">
              Building scalable, user-centric products and transforming legacy systems into maintainable digital experiences.
            </p>
          </div>

          <div className="text-4xl md:text-5xl flex justify-center gap-16 py-3 text-gray-800 dark:text-gray-400">
            <a
              href="https://www.linkedin.com/in/parth-ilasariya/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://github.com/parthilasariya"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <AiFillGithub />
            </a>
            <a href="mailto:parthilasariya3@gmail.com" aria-label="Email">
              <MdEmail />
            </a>
          </div>

          <div className="flex justify-center py-8">
            <a
              href="mailto:parthilasariya3@gmail.com?subject=Project%20Inquiry"
              className="inline-flex items-center justify-center rounded-md bg-orange-500 px-6 py-3 text-base font-medium text-white shadow-sm transition-transform duration-300 hover:scale-[1.02] hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
            >
              Get in Touch
            </a>
          </div>

          <div className="relative mx-auto bg-gradient-to-b from-orange-500 rounded-full w-64 h-64 mt-6 overflow-hidden md:h-96 md:w-96">
            <Image
              unoptimized={true}
              alt="Parth Ilasariya portrait"
              src={parth}
              fill
              style={{ objectFit: "cover" }}
              className="w-full h-full"
            />
          </div>
        </section>

        <section className="my-10">
          <h3 className="text-3xl py-1 dark:text-white">About Me</h3>
          <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200">
            I am a Full-Stack Web Developer who enjoys building robust systems, modernizing legacy applications, and creating seamless user experiences. I specialize in backend architecture, database optimization, and clean, modular code that supports long-term maintainability.
          </p>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 justify-center dark:text-white">Things I Do!</h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200">
              I develop web experiences, shape interfaces that feel intuitive, and bring modern product thinking into practical builds.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 flex-1 rounded-xl my-10 dark:bg-slate-800">
              <div className="flex justify-center">
                <Image
                  unoptimized={true}
                  alt="Full-Stack Development Icon"
                  src={code}
                  width={100}
                  height={100}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">Full-Stack Development</h3>
              <p className="dark:text-white">Building end-to-end web applications from concept to deployment.</p>
              <h4 className="py-4 text-orange-600">Tech Stack</h4>
              <p className="text-gray-800 py-1 dark:text-slate-400">PHP, Laravel, React</p>
              <p className="text-gray-800 py-1 dark:text-slate-400">Tailwind CSS, Bootstrap</p>
              <p className="text-gray-800 py-1 dark:text-slate-400">MySQL, MongoDB</p>
            </div>

            <div className="text-center shadow-lg p-10 flex-1 rounded-xl my-10 dark:bg-slate-800">
              <div className="flex justify-center">
                <Image
                  unoptimized={true}
                  alt="UI/UX Design Icon"
                  src={design}
                  width={100}
                  height={100}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-lg font-medium dark:text-white pt-8 pb-2">UI-UX Design</h3>
              <p className="dark:text-white">Creating elegant interfaces that balance clarity, usability, and business goals.</p>
              <h4 className="py-4 text-orange-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1 dark:text-slate-400">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-slate-400">Adobe XD</p>
              <p className="text-gray-800 py-1 dark:text-slate-400">Figma</p>
            </div>
          </div>
        </section>

        <section className="my-10">
          <h3 className="text-3xl py-1 dark:text-white">Work Experience</h3>
          <div className="flex flex-col gap-6 py-6">
            <article className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                <div>
                  <h4 className="text-xl font-semibold dark:text-white">Full Stack Web Application Developer</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Sep 2025 - Present</p>
                </div>
                <div className="text-sm text-orange-500">Moncton, New Brunswick, Canada</div>
              </div>
              <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Checklist Tool | Web App (May 2026 - Jul 2026)</p>
                  <ul className="mt-2 list-disc list-inside space-y-1 pl-2">
                    <li>Built a web-based checklist system with advanced routing and conditional logic to dynamically guide back-office agents through workflows, improving accuracy and reducing task completion time.</li>
                    <li>Developed a configurable, self-serve admin panel to create and manage logic-driven templates, enabling scalability and reducing dependency on manual support.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Issue Management System | Web App</p>
                  <ul className="mt-2 list-disc list-inside space-y-1 pl-2">
                    <li>Migrated and rebuilt a legacy application into a scalable, full-stack Issue Management System, enabling agents to efficiently track and manage ongoing issues through a centralized web platform.</li>
                    <li>Developed complex workflows including admin self-serve capabilities, automated notifications, and email reminder systems, while collaborating with product owners and cross-functional teams.</li>
                  </ul>
                </div>
              </div>
            </article>

            <article className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                <div>
                  <h4 className="text-xl font-semibold dark:text-white">Technical Support Specialist</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Oct 2024 - Sep 2025 · 1 yr</p>
                </div>
                <div className="text-sm text-orange-500">Moncton, New Brunswick, Canada</div>
              </div>
              <ul className="mt-4 text-gray-700 dark:text-gray-300 list-disc list-inside space-y-2">
                <li>Provided remote technical support for residential and business customers, troubleshooting network and device issues.</li>
                <li>Worked closely with engineering to escalate complex incidents and validate fixes.</li>
              </ul>
            </article>

            <article className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                <div>
                  <h4 className="text-xl font-semibold dark:text-white">Technical Support Specialist</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Apr 2023 - Sep 2024 · 1 yr 6 mos</p>
                </div>
                <div className="text-sm text-orange-500">Toronto, Ontario, Canada</div>
              </div>
              <ul className="mt-4 text-gray-700 dark:text-gray-300 list-disc list-inside space-y-2">
                <li>Achieved one of the lowest tech/truck roll rates in the department (under 14%), significantly reducing operational costs, and created a comprehensive support guide to assist fellow agents.</li>
                <li>Resolved 90% of technical issues on first contact, reducing repeat customer support tickets by 25%.</li>
                <li>Conducted client education sessions, improving user understanding of products and reducing support calls by an estimated 15%.</li>
                <li>Adhered to company SOPs for home phone, internet, and TV services, and maintained detailed records of client interactions and technical issues to ensure swift resolution during outage incidents.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="my-10">
          <h3 className="text-3xl py-1 dark:text-white">Skills & Technologies</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 py-6">
            <div className="flex flex-col items-center">
              <SiLaravel className="text-4xl text-red-600" />
              <span className="mt-2 dark:text-white text-gray-800 text-sm">Laravel</span>
            </div>
            <div className="flex flex-col items-center">
              <SiPhp className="text-4xl text-blue-500" />
              <span className="mt-2 dark:text-white text-gray-800 text-sm">PHP</span>
            </div>
            <div className="flex flex-col items-center">
              <SiMysql className="text-4xl text-blue-600" />
              <span className="mt-2 dark:text-white text-gray-800 text-sm">MySQL</span>
            </div>
            <div className="flex flex-col items-center">
              <SiRedis className="text-4xl text-red-600" />
              <span className="mt-2 dark:text-white text-gray-800 text-sm">Redis</span>
            </div>
            <div className="flex flex-col items-center">
              <SiBootstrap className="text-4xl text-purple-500" />
              <span className="mt-2 dark:text-white text-gray-800 text-sm">Bootstrap</span>
            </div>
            <div className="flex flex-col items-center">
              <FaHtml5 className="text-4xl text-orange-600" />
              <span className="mt-2 dark:text-white text-gray-800 text-sm">HTML5</span>
            </div>
            <div className="flex flex-col items-center">
              <FaCss3Alt className="text-4xl text-blue-700" />
              <span className="mt-2 dark:text-white text-gray-800 text-sm">CSS3</span>
            </div>
            <div className="flex flex-col items-center">
              <SiTailwindcss className="text-4xl text-teal-400" />
              <span className="mt-2 dark:text-white text-gray-800 text-sm">Tailwind CSS</span>
            </div>
            <div className="flex flex-col items-center">
              <SiJavascript className="text-4xl text-yellow-400" />
              <span className="mt-2 dark:text-white text-gray-800 text-sm">JavaScript</span>
            </div>
            <div className="flex flex-col items-center">
              <FaReact className="text-4xl text-blue-500" />
              <span className="mt-2 dark:text-white text-gray-800 text-sm">React</span>
            </div>
            <div className="flex flex-col items-center">
              <FaFigma className="text-4xl text-purple-500" />
              <span className="mt-2 dark:text-white text-gray-800 text-sm">Figma</span>
            </div>
            <div className="flex flex-col items-center">
              <SiSolidity className="text-4xl text-gray-700 dark:text-white" />
              <span className="mt-2 dark:text-white text-gray-800 text-sm">Solidity</span>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
            <p className="dark:text-white">
              I create polished interfaces that align product goals with a thoughtful, user-first experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
            {portfolioProjects.map((project) => {
              const projectContent = (
                <>
                  <div className="w-full aspect-[4/3] relative rounded-lg overflow-hidden min-h-[180px]">
                    <Image
                      unoptimized={true}
                      alt={project.title}
                      src={project.image}
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="mt-2 text-center">
                    <h4 className="text-lg font-semibold dark:text-white">{project.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{project.summary}</p>
                  </div>
                </>
              );

              if (project.href) {
                return (
                  <div
                    key={project.title}
                    className="basis-1/3 flex-1 transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-center"
                  >
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
                    >
                      {projectContent}
                    </a>
                  </div>
                );
              }

              return (
                <div
                  key={project.title}
                  className="basis-1/3 flex-1 transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-center"
                >
                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="w-full cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
                  >
                    {projectContent}
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        <div className="flex justify-center py-10">
          <a
            href="mailto:parthilasariya3@gmail.com?subject=Project%20Inquiry"
            className="inline-flex items-center justify-center rounded-md bg-orange-500 px-6 py-3 text-base font-medium text-white shadow-sm transition-transform duration-300 hover:scale-[1.02] hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
          >
            Get in Touch
          </a>
        </div>
      </main>

      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-2xl rounded-xl bg-white p-5 shadow-2xl dark:bg-slate-800">
            <div className="mb-4 flex items-center justify-between gap-4">
              <h4 className="text-xl font-semibold dark:text-white">{activeProject.title}</h4>
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="rounded-full border border-gray-300 px-3 py-1 text-sm text-gray-600 transition hover:bg-gray-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-700"
              >
                Close
              </button>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                unoptimized={true}
                alt={activeProject.title}
                src={activeProject.image}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            <p className="mt-4 text-sm text-gray-700 dark:text-slate-200">{activeProject.description}</p>

            <div className="mt-4 rounded-md border border-orange-100 bg-orange-50 p-3 text-sm text-gray-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200">
              <p>
                <span className="font-medium dark:text-white">Stack:</span> {activeProject.tech.join(", ")}
              </p>
              <p className="mt-1">
                <span className="font-medium dark:text-white">Role:</span> {activeProject.role}
              </p>
              <p className="mt-1">
                <span className="font-medium dark:text-white">Outcome:</span> {activeProject.outcome}
              </p>
            </div>
          </div>
        </div>
      )}

      <footer className="flex flex-col md:flex-row h-auto md:h-24 w-full dark:bg-gray-900 items-center justify-center border-t px-4 py-6 gap-2 text-center">
        <span className="flex items-center justify-center dark:text-white text-sm md:text-base">
          ©{new Date().getFullYear()} All rights reserved | Design and Developed by Parth Ilasariya 💛
        </span>

        <div className="flex justify-center gap-4 mt-2 md:mt-0">
          <a
            href="https://www.linkedin.com/in/parth-ilasariya/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <AiFillLinkedin className="text-xl dark:text-white hover:text-orange-500" />
          </a>
          <a
            href="https://github.com/parthilasariya"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <AiFillGithub className="text-xl dark:text-white hover:text-orange-500" />
          </a>
          <a href="mailto:parthilasariya3@gmail.com" aria-label="Email">
            <MdEmail className="text-xl dark:text-white hover:text-orange-500" />
          </a>
        </div>
      </footer>
    </div>
  );
}
