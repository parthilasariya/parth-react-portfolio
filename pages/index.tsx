import Head from "next/head";
{/* Importing Icons */}
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaFigma } from "react-icons/fa";
import { SiJavascript, SiSolidity, SiNextdotjs } from "react-icons/si";
{/* Importing Images */}
import Image from "next/image";
import parth from "/Users/parthilasariya/Documents/parth-react-portfolio/public/parth-wave.png";
import design from "/Users/parthilasariya/Documents/parth-react-portfolio/public/design.png";
import code from "/Users/parthilasariya/Documents/parth-react-portfolio/public/code.png";
import web1 from "/Users/parthilasariya/Documents/parth-react-portfolio/public/web1.png";
import web2 from "/Users/parthilasariya/Documents/parth-react-portfolio/public/web2.png";
import web3 from "/Users/parthilasariya/Documents/parth-react-portfolio/public/web3.png";
import web4 from "/Users/parthilasariya/Documents/parth-react-portfolio/public/web4.png";
import web5 from "/Users/parthilasariya/Documents/parth-react-portfolio/public/web5.png";
import web6 from "/Users/parthilasariya/Documents/parth-react-portfolio/public/web6.png";

{/* Importing CSS */}
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Parth Ilasariya Portfolio</title>
        <meta name="description" content="Created By Parth Ilasariya" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="p-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-xl  ">Parth Ilasariya</h1>
            <ul className="flex items-center">
              
              {/* Dark Mode Toggle Button */}

              <li>
                {darkMode ? (
                  <MdLightMode
                    onClick={() => setDarkMode(false)}
                    className="cursor-pointer text-2xl transition-all duration-500 text-yellow-400 hover:scale-125"
                    aria-label="Switch to light mode"
                  />
                ) : (
                  <MdDarkMode
                    onClick={() => setDarkMode(true)}
                    className="cursor-pointer text-2xl transition-all duration-500 text-gray-700 hover:scale-125"
                    aria-label="Switch to dark mode"
                  />
                )} 
                    
              </li>
                {/* Resume Link */}
              <li>
                <a
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-md ml-8 transition-all duration-300 hover:scale-105 hover:from-yellow-500 hover:to-orange-500"
                  href="https://drive.google.com/file/d/1Nt82bPctPxtbcH_5IM9FJMVJBvJwxskT/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          {/* Main Start Section */}

          <div className="text-center p-10 py-10">
            <h2 className="text-3xl md:text-5xl py-2 text-orange-500 font-medium dark:text-orange-500">
              Parth Ilasariya
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Technical Support Specialist | Aspiring Full-Stack Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl max-w-xl mx-auto">
              Freelancer providing services for UI/UX Design and Web Development. Join me bellow and let&apos;s get cracking!
            </p>
          </div>
              
              {/* Social Media Links */}
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-800 dark:text-gray-400 ">
            <a
            href="https://www.linkedin.com/in/parth-ilasariya/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            >
              <AiFillLinkedin />{" "}
            </a>
            <a href="https://github.com/parthilasariya"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            >
              <AiFillGithub />
            </a>
            <a
            href="mailto:parthilasariya3@gmail.com"
            aria-label="Email"
            >
              <MdEmail />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-orange-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image
              unoptimized={true}
              alt="cover"
              src={parth}
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
        </section>

        {/* About Me Section */}

        <section className="my-10">
          <h3 className="text-3xl py-1 dark:text-white">About Me</h3>
          <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200">
            I am a passionate developer and designer with experience in building modern web applications and blockchain solutions. I love solving problems and collaborating with creative minds.
          </p>
        </section>
        <section>
          <div>
          
            <h3 className="text-3xl py-1 justify-center dark:text-white">
              Things I Do!
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200">
              I have experience in UI-UX Designing, Web Development and
              Blockchain Development.{" "}
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 flex-1 rounded-xl my-10  dark:bg-slate-800 ">
              <Image
                unoptimized={true}
                alt="UI/UX Design Icon"
                src={design}
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium  dark:text-white pt-8 pb-2">
                UI-UX Design
              </h3>
              <p className=" dark:text-white">
                Creating elegant UI designs suitable for a project.
              </p>
              <h4 className="py-4 text-orange-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1  dark:text-slate-400">
                Photoshop
              </p>
              <p className="text-gray-800 py-1 dark:text-slate-400">Adobe XD</p>
              <p className="text-gray-800 py-1 dark:text-slate-400">Figma</p>
            </div>

            <div className="text-center shadow-lg p-10 flex-1 rounded-xl my-10  dark:bg-slate-800 ">
              <Image
                unoptimized={true}
                alt="Frontend Web Development Icon"
                src={code}
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Frontend Web Development
              </h3>
              <p className=" dark:text-white">
                Creating interactive frontend webpages.
              </p>
              <h4 className="py-4 text-orange-600 ">Tools I Use</h4>
              <p className="text-gray-800 py-1  dark:text-slate-400">
                HTML, CSS
              </p>
              <p className="text-gray-800 py-1  dark:text-slate-400">
                React JS
              </p>
              <p className="text-gray-800 py-1  dark:text-slate-400">
                Javascript
              </p>
            </div>

            <div className="text-center shadow-lg p-10 flex-1 rounded-xl my-10  dark:bg-slate-800 ">
              <Image
                unoptimized={true}
                src={design}
                width={100}
                height={100}
                alt="Blockchain Development Icon"
              />
              <h3 className="text-lg font-medium dark:text-white pt-8 pb-2">
                Blockchain Development
              </h3>
              <p className=" dark:text-white">
                Creating NFT Designs, DApps and working on Hyperledger Projects
              </p>
              <h4 className="py-4 text-orange-600">Tools I Use</h4>
              <p className="text-gray-800 py-1  dark:text-slate-400">
                Solidity Smart Contract
              </p>
              <p className="text-gray-800 py-1 dark:text-slate-400">
                Hyperledger Fabric
              </p>
              <p className="text-gray-800 py-1  dark:text-slate-400">
                Algorand
              </p>
            </div>
          </div>
        </section>
              
              {/* Skills & Technologies Section */}

          <section className="my-10">
          <h3 className="text-3xl py-1 dark:text-white">Skills & Technologies</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 py-6">
            <div className="flex flex-col items-center">
              <FaReact className="text-4xl text-blue-500" />
              <span className="mt-2 dark:text-white text-gray-800 text-sm">React</span>
            </div>
            <div className="flex flex-col items-center">
              <SiNextdotjs className="text-4xl text-black dark:text-white" />
              <span className="mt-2 dark:text-white text-gray-800 text-sm">Next.js</span>
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
              <SiJavascript className="text-4xl text-yellow-400" />
              <span className="mt-2 dark:text-white text-gray-800 text-sm">JavaScript</span>
            </div>
            <div className="flex flex-col items-center">
              <FaNodeJs className="text-4xl text-green-600" />
              <span className="mt-2 dark:text-white text-gray-800 text-sm">Node.js</span>
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

          {/* Portfolio Section */}

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portfolio</h3>
            <p className=" dark:text-white">
              {" "}
              Creating elegant UI designs suitade for a project.
            </p>
          </div>

          {/* Portfolio Card 1 */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
  {/* Portfolio Card 1 */}
  <div className="basis-1/3 flex-1 transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-center">
    <a
      href="https://kitikits.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full"
    >
      <div className="w-full aspect-[4/3] relative rounded-lg overflow-hidden">
        <Image
          unoptimized={true}
          alt="Project 1 - UI Design"
          src={web1}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg"
        />
      </div>
      <div className="mt-2 text-center">
        <h4 className="text-lg font-semibold dark:text-white">Kitikits</h4>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          E-commerce website for kids toys.
        </p>
      </div>
    </a>
  </div>

  {/* Portfolio Card 2 */}
  <div className="basis-1/3 flex-1 transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-center">
    <a
      href="https://github.com/parthilasariya/simplechatapp"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full"
    >
      <div className="w-full aspect-[4/3] relative rounded-lg overflow-hidden">
        <Image
          unoptimized={true}
          alt="Project 2 - Chat App"
          src={web4}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg"
        />
      </div>
      <div className="mt-2 text-center">
        <h4 className="text-lg font-semibold dark:text-white">Simple Chat App</h4>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Real-time chat application using React and Socket.io.
        </p>
      </div>
    </a>
  </div>

  {/* Portfolio Card 3 */}
  <div className="basis-1/3 flex-1 transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-center">
    <a
      href="https://github.com/parthilasariya/DropMe"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full"
    >
      <div className="w-full aspect-[4/3] relative rounded-lg overflow-hidden">
        <Image
          unoptimized={true}
          alt="Project 3 - DropMe"
          src={web6}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg"
        />
      </div>
      <div className="mt-2 text-center">
        <h4 className="text-lg font-semibold dark:text-white">DropMe</h4>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Peer to peer car pooling application concept.
        </p>
      </div>
    </a>
  </div>

  {/* Portfolio Card 4 */}
  <div className="basis-1/3 flex-1 transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-center">
    <a
      href="https://parthilasariya.github.io/tinpets/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full"
    >
      <div className="w-full aspect-[4/3] relative rounded-lg overflow-hidden">
        <Image
          unoptimized={true}
          alt="Project 4 - TinPets"
          src={web2}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg"
        />
      </div>
      <div className="mt-2 text-center">
        <h4 className="text-lg font-semibold dark:text-white">TinPets</h4>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Landing page for a pet dating platform.
        </p>
      </div>
    </a>
  </div>

  {/* Portfolio Card 5 */}
  <div className="basis-1/3 flex-1 transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-center">
    <a
      href="https://github.com/parthilasariya/UI-Designs/blob/main/Arch%20WebUI.png"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full"
    >
      <div className="w-full aspect-[4/3] relative rounded-lg overflow-hidden">
        <Image
          unoptimized={true}
          alt="Project 5 - Dashboard"
          src={web3}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg"
        />
      </div>
      <div className="mt-2 text-center">
        <h4 className="text-lg font-semibold dark:text-white">Arch WebUI</h4>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Dashboard UI concept for architecture projects.
        </p>
      </div>
    </a>
  </div>

  {/* Portfolio Card 6 */}
  <div className="basis-1/3 flex-1 transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-center">
    <a
      href="https://github.com/parthilasariya/UI-Designs/blob/main/Icon%20and%20Splash%20Screen.png"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full"
    >
      <div className="w-full aspect-[4/3] relative rounded-lg overflow-hidden">
        <Image
          unoptimized={true}
          alt="Project 6 - Portfolio"
          src={web5}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg"
        />
      </div>
      <div className="mt-2 text-center">
        <h4 className="text-lg font-semibold dark:text-white">Portfolio Splash</h4>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Custom icon and splash screen design for portfolio.
        </p>
      </div>
    </a>
  </div>
</div>
        </section>
      </main>

          {/* Footer Section */}

      <footer className="flex flex-col md:flex-row h-auto md:h-24 w-full dark:bg-gray-900 items-center justify-center border-t px-4 py-6 gap-2 text-center">
        <span className="flex items-center justify-center dark:text-white text-sm md:text-base">
          ©2025 All rights reserved | Developed by Parth Ilasariya{" "}
          <span className="ml-1">❤️</span>
        </span>

        {/* Optional: Add social links for quick access */}

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
          <a
            href="mailto:parthilasariya3@gmail.com"
            aria-label="Email"
          >
            <MdEmail className="text-xl dark:text-white hover:text-orange-500" />
          </a>
        </div>
      </footer>
    </div>
  );
}
// Note: The portfolio card example is commented out to avoid redundancy.

{/* Extra code snippet for the portfolio card example 
  <div className="basis-1/3 flex-1 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
  <a href="https://kitikits.com/" target="_blank" rel="noopener noreferrer">
    <Image ... />
    <div className="mt-2">
      <h4 className="text-lg font-semibold dark:text-white">Kitikits</h4>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        E-commerce UI built with React & Next.js. Role: Frontend Developer.
      </p>
    </div>
  </a>
</div>
*/}