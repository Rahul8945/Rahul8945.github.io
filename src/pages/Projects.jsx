import { FaBootstrap, FaCss3Alt, FaHtml5, FaJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoFirebase, IoLogoReact } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiAuth0, SiExpress, SiJson, SiRedux, SiTypescript } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";
import { Link } from "react-router-dom";
import { VscLiveShare } from "react-icons/vsc";
import { TbJson } from "react-icons/tb";

const Projects = () => {
  const projectDetails = [
    {
      id: 1,
      image: "https://i.ibb.co/MhBM8g8/Screenshot-2024-09-19-082831.png",
      name: "DocEase",
      desc: "DocEase is a document management app inspired by Notion, enabling easy creation, organization, and collaboration on documents. With real-time editing and versioning, it streamlines managing your notes and projects.....",
      techStacks: [
        <IoLogoReact key="react" className="text-sky-500" />,
        <SiRedux key="redux" className="text-purple-600" />,
        <RiTailwindCssFill key="tailwind" className="text-blue-500" />,
        <SiExpress key="express" className="text-red-600" />,
      ],
      liveLink: "https://66d587c1d92965dc325710f8--meek-meringue-871a76.netlify.app/",
      github: "https://github.com/Mayank8683/Cloud-Climbers_045",
    },
    // {
    //   id: 2,
    //   image: "https://img.hotimg.com/Portfolio-3.png",
    //   name: "The Spicy Meal",
    //   desc: "Developed 'The Spicy Meal' demonstrates excellence in web application design, using ReactJS, JavaScript, Tailwind CSS, and Redux. The platform features seamless navigation.....",
    //   techStacks: [
    //     <IoLogoReact key="react" className="text-sky-500" />,
    //     <SiRedux key="redux" className="text-purple-600" />,
    //     <RiTailwindCssFill key="tailwind" className="text-blue-500" />,
    //     <SiAuth0 key="auth" className="text-orange-600" />,
    //   ],
    //   liveLink: "https://the-spicy-meal-app.vercel.app/",
    //   github: "https://github.com/Sahilz9/The-Spicy-Meal-App",
    // },
    {
      id: 3,
      image: "https://i.ibb.co/6PyBbYb/Screenshot-2024-09-19-082614.png",
      name: "InfoHub similar to medium",
      desc: "Infohub is an online publishing platform that blends content from amateur and professional writers, fostering social journalism. It serves as a popular destination for hosting blogs and exclusive publications......",
      techStacks: [
        <FaHtml5 key="html" className="text-white" />,
        <FaJs key="js" className="text-sky-500" />,
        <FaCss3Alt key="css" className="text-purple-600" />,
        <FaBootstrap key="bootstrap" className="text-blue-500" />,
        <TbJson key="json" className="text-orange-700" />,
      ],
      liveLink: "https://infohub123.netlify.app//",
      github: "https://github.com/rajatsah95/Tesla_Techies_038",
    },
    {
      id: 4,
      image: "https://i.ibb.co/MZKgqTf/casio-shock.png",
      name: "Casio G-Shock",
      desc: "Casio G-Shock is a trusted brand known for its durable and innovative timepieces. Built to withstand extreme conditions, G-Shock watches are perfect for adventurers, athletes, and professionals alike. Experience unparalleled toughness and reliability in every challenge......",
      techStacks: [
        <FaHtml5 key="html" className="text-yellow-400" />,
        <FaCss3Alt key="css" className="text-blue-500" />,
        <FaBootstrap key="bootstrap" className="text-slate-600" />,
      ],
      liveLink: "https://casio-india.netlify.app/",
      github: "https://github.com/vibhor121/Brahmaputra-Function-003",
    },
    {
      id: 5,
      image: "https://i.ibb.co/pXKV7Rs/Screenshot-2024-09-20-083210.png",
      name: "Shayari",
      desc: "A Shayari Generator web application that leverages Google Gemini AI to create beautiful and personalized Shayari (poetry) in Hindi based on keywords provided by the user. The app features an interactive user interface built with React and Chakra UI and includes....",
      techStacks: [
        <FaBootstrap key="bootstrap" className="text-yellow-400" />,
        <FaCss3Alt key="css" className="text-blue-500" />,
        <FaHtml5 key="html" className="text-red-500" />,
      ],
      liveLink: "https://shayari-gemini.netlify.app/",
      github: "https://github.com/Rahul8945/Shayari",
    },
  ];

  return (
    <>
      <section
        className="flex justify-center flex-col items-center gap-y-[100px] section-scroll"
        id="projects-section"
      >
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[70em] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[70em]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#FFA500] to-[#FF4500] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        <div>
          <p className="text-slate-400 text-3xl text-center sm:text-6xl hover:text-slate-300 duration-300">
            Projects
          </p>
          <p className="text-slate-500 mt-4 text-sm sm:text-xl hover:text-slate-400 duration-300">
            Here are some of my projects.
          </p>
        </div>

        {/* 1st Component */}
        <div
          className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-4xl"
          id="project-cards"
          style={{
            boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
          }}
        >
          <div className="md:flex">
            <div className="p-8">
              <div className="uppercase tracking-wide text-2xl text-indigo-500 font-semibold">
                {projectDetails[0].name}
              </div>

              <div className="flex gap-x-4 p-4">
                {projectDetails[0].techStacks.map((ele, index) => (
                  <p key={index} className="text-2xl">
                    {ele}
                  </p>
                ))}
              </div>
              <div className="flex gap-x-4">
                <Link
                  to={projectDetails[0].github}
                  target="_black"
                  className="flex items-center gap-x-2"
                >
                  <p className="text-indigo-500 text-sm">GITHUB</p>
                  <IoLogoGithub className="text-purple-400 text-2xl" />
                </Link>

                <Link
                  to={projectDetails[0].liveLink}
                  target="_black"
                  className="flex items-center gap-x-2"
                >
                  <p className="text-indigo-500 text-sm">LIVE</p>
                  <VscLiveShare className="text-red-800 text-2xl" />
                </Link>
              </div>

              <p className="mt-2 text-slate-500 hover:text-slate-300 duration-300">
                {projectDetails[0].desc}
              </p>
            </div>

            <div className="md:shrink-0 flex justify-center">
              <img
                className="h-48 w-full object-cover md:h-auto md:w-80"
                src={projectDetails[0].image}
                alt="Modern building architecture"
              />
            </div>
          </div>
        </div>

        {/* 2nd Component */}

        <div
          className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-4xl"
          id="project-cards"
          style={{
            boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
          }}
        >
          <div className="md:flex">
            <div className="md:shrink-0 flex justify-center">
              <img
                className="h-48 w-full object-cover md:h-auto md:w-80"
                src={projectDetails[1].image}
                alt="Modern building architecture"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-2xl text-indigo-500 font-semibold">
                {projectDetails[1].name}
              </div>

              <div className="flex gap-x-4 p-4">
                {projectDetails[1].techStacks.map((ele, index) => (
                  <p key={index} className="text-2xl">
                    {ele}
                  </p>
                ))}
              </div>
              <div className="flex gap-x-4">
                {/* <p className="text-2xl">
                  
                  </p> */}

                <Link
                  to={projectDetails[1].github}
                  target="_black"
                  className="flex items-center gap-x-2"
                >
                  <p className="text-indigo-500 text-sm">GITHUB</p>
                  <IoLogoGithub className="text-purple-400 text-2xl" />
                </Link>

                <Link
                  to={projectDetails[1].liveLink}
                  target="_black"
                  className="flex items-center gap-x-2"
                >
                  <p className="text-indigo-500 text-sm">LIVE</p>
                  <VscLiveShare className="text-red-800 text-2xl" />
                </Link>
              </div>

              <p className="mt-2 text-slate-500 hover:text-slate-300 duration-300">
                {projectDetails[1].desc}
              </p>
            </div>
          </div>
        </div>

        {/* 3rd Component */}

        <div
          className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-4xl"
          id="project-cards"
          style={{
            boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
          }}
        >
          <div className="md:flex">
            <div className="p-8">
              <div className="uppercase tracking-wide text-2xl text-indigo-500 font-semibold">
                {projectDetails[2].name}
              </div>

              <div className="flex gap-x-4 p-4">
                {projectDetails[2].techStacks.map((ele, index) => (
                  <p key={index} className="text-2xl">
                    {ele}
                  </p>
                ))}
              </div>
              <div className="flex gap-x-4">
                {/* <p className="text-2xl">
                  
                  </p> */}

                <Link
                  to={projectDetails[2].github}
                  target="_black"
                  className="flex items-center gap-x-2"
                >
                  <p className="text-indigo-500 text-sm">GITHUB</p>
                  <IoLogoGithub className="text-purple-400 text-2xl" />
                </Link>

                <Link
                  to={projectDetails[2].liveLink}
                  target="_black"
                  className="flex items-center gap-x-2"
                >
                  <p className="text-indigo-500 text-sm">LIVE</p>
                  <VscLiveShare className="text-red-800 text-2xl" />
                </Link>
              </div>

              <p className="mt-2 text-slate-500 hover:text-slate-300 duration-300">
                {projectDetails[2].desc}
              </p>
            </div>

            <div className="md:shrink-0 flex justify-center">
              <img
                className="h-48 w-full object-cover md:h-auto md:w-80"
                src={projectDetails[2].image}
                alt="Modern building architecture"
              />
            </div>
          </div>
        </div>

        {/* 4th Component */}
        <div
          className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-4xl"
          id="project-cards"
          style={{
            boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
          }}
        >
          <div className="md:flex">
            <div className="md:shrink-0 flex justify-center">
              <img
                className="h-48 w-full object-cover md:h-auto md:w-80"
                src={projectDetails[3].image}
                alt="Modern building architecture"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-2xl text-indigo-500 font-semibold">
                {projectDetails[3].name}
              </div>

              <div className="flex gap-x-4 p-4">
                {projectDetails[3].techStacks.map((ele, index) => (
                  <p key={index} className="text-2xl">
                    {ele}
                  </p>
                ))}
              </div>
              <div className="flex gap-x-4">
                {/* <p className="text-2xl">
                  
                  </p> */}

                <Link
                  to={projectDetails[3].github}
                  target="_black"
                  className="flex items-center gap-x-2"
                >
                  <p className="text-indigo-500 text-sm">GITHUB</p>
                  <IoLogoGithub className="text-purple-400 text-2xl" />
                </Link>

                <Link
                  to={projectDetails[3].liveLink}
                  target="_black"
                  className="flex items-center gap-x-2"
                >
                  <p className="text-indigo-500 text-sm">LIVE</p>
                  <VscLiveShare className="text-red-800 text-2xl" />
                </Link>
              </div>

              <p className="mt-2 text-slate-500 hover:text-slate-300 duration-300">
                {projectDetails[3].desc}
              </p>
            </div>
          </div>
        </div>

        {/* 5th Component */}

        {/* <div
          className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-4xl"
          id="project-cards"
          style={{
            boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
          }}
        >
          <div className="md:flex">
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {projectDetails[4].name}
              </div>

              <div className="flex gap-x-4 p-4">
                {projectDetails[4].techStacks.map((ele, index) => (
                  <p key={index} className="text-2xl">
                    {ele}
                  </p>
                ))}
              </div>
              <div className="flex gap-x-4">

                <Link
                  to={projectDetails[4].github}
                  target="_black"
                  className="flex items-center gap-x-2"
                >
                  <p className="text-indigo-500 text-sm">GITHUB</p>
                  <IoLogoGithub className="text-purple-400 text-2xl" />
                </Link>

                <Link
                  to={projectDetails[4].liveLink}
                  target="_black"
                  className="flex items-center gap-x-2"
                >
                  <p className="text-indigo-500 text-sm">LIVE</p>
                  <VscLiveShare className="text-red-800 text-2xl" />
                </Link>
              </div>

              <p className="mt-2 text-slate-500 hover:text-slate-300 duration-300">
                {projectDetails[4].desc}
              </p>
            </div>

            <div className="md:shrink-0 flex justify-center">
              <img
                className="h-48 w-full object-cover md:h-auto md:w-80"
                src={projectDetails[4].image}
                alt="Modern building architecture"
              />
            </div>
          </div>
        </div> */}

        <div
          aria-hidden="true"
          className="absolute mt-[-50px] inset-x-0 top-[calc(100%+90rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%+90rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#a8e6a0] to-[#7cb342]
 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </section>
    </>
  );
};

export default Projects;
