
// import Random from "./random";

import { useAboutTypingEffect } from "../typing/useAboutTyping";
import Resume from "./Resume";

const About = () => {
  const lines = [
    "Background: Transitioned from Civil Engineering to Web Development #",
    "Education: 35-week Full-Stack Web Development course at Masai School",
    "Approach: Solve problems, create value, continuous learning",
    "Goal: Turning ideas into impactful digital solutions $",
    "Let’s collaborate: Ready to build amazing projects together! $",
  ];
  const typedLines = useAboutTypingEffect(lines, 50, 1000);

  return (
    <section
      className="flex justify-center items-center flex-col gap-y-8 h-[100vh] mt-[5em] sm:mt-[5em] mb-[4em] section-scroll"
      id="about-section"
    >
      <div>
        <p className="text-slate-400 text-3xl text-center sm:text-6xl hover:text-slate-300 duration-300">
          About Me
        </p>
      </div>
      <div>
        <img
          src="https://i.ibb.co/Qb7jzZn/rahul-official-preview.png"
          className="h-[100px] w-[100px] object-cover rounded-full sm:h-[200px] sm:w-[200px] sm:object-cover"
          alt=""
        />
      </div>
      <aside className="bg-black text-white p-6 rounded-lg w-full max-w-md font-mono ">
        <div className="flex justify-between items-center">
          <div className="flex space-x-2  text-white px-2  py-1 rounded-xl">
            {/* <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div> */}
          <p className="">click👉 </p>
          </div>
            <Resume animate={true}/>
        </div>
        <div className="mt-4 ">
          {typedLines.map((line, index) => (
            <p
              key={index}
              className={line.includes("$") ? "text-green-400" : line.includes("#") ? "text-orange-500" : "text-white"}
            >
              {line}
            </p>
          ))}
        </div>
      </aside>
        
    </section>
  );
};

export default About;
