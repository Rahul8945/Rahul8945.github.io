const Education = () => {
  const techStacksGU = [
    "Java",
    "DSA",
    "Databases",
    "Html",
    "css",
    "JavaScript",
    "React",
    "Node Js",
  ];

  const vidyaKnowledge = [
    "Auto CAD",
    "Construction Managment",
    "Site Planning",
    "Material Science",
    "Regulatory Knowledge",
  ];

  const school = ["Strong Foundational Knowledge", "Badminton", "Chess"];

  return (
    <section
      className="flex justify-center flex-col items-center mt-[10em] gap-y-20 relative"
      id="education-section"
    >
      <div className="flex justify-center gap-x-10 flex-row sm:flex-col">
        <div>
          <p className="text-slate-400 text-3xl text-center sm:text-6xl hover:text-slate-300 duration-300">
            Education
          </p>
          <p className="text-slate-500 mt-4 text-sm sm:text-xl text-center hover:text-slate-400 duration-300">
            My time in education has led to significant personal growth and a
            deeper understanding of myself.
            <br />
            My educational details are as follows.
          </p>
        </div>
      </div>

      <div
        className="flex justify-center items-center w-full"
        id="details-container"
      >
        <div className="w-full max-w-4xl">
          <div className="ps-2 my-2 first:mt-0">
            <button className="text-xs font-medium uppercase text-gray-400">
              Feb 2024 - Present
            </button>
          </div>

          <div className="flex gap-x-3">
            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
              <div className="relative z-10 size-10 flex justify-center items-center">
                <img
                  className="shrink-0 rounded-full hover:scale-125 duration-500"
                  src="https://media.licdn.com/dms/image/v2/C560BAQHdxMHntX6Z8Q/company-logo_200_200/company-logo_200_200/0/1650372038758/masai_school_logo?e=1734566400&v=beta&t=zqb5vcQZ_lfYg5WxRAheZjvD0Zc38LNuINyOn1GP-90"
                  alt="Avatar"
                />
              </div>
            </div>
            <div className="grow pt-0.5 pb-8">
              <h3 className="flex gap-x-1.5 uppercase font-semibold text-xl text-orange-700 hover:text-orange-500 duration-300">
                Masai School
              </h3>
              <h3 className="flex gap-x-1.5 font-semibold text-slate-400 text-lg">
                Full Stack Web Development
              </h3>
              <p className="mt-2 w-full">
                <ul className="list-disc text-base sm:text-base	text-gray-400">
                  <li className="hover:text-gray-300 duration-300">
                    I completed my Full Stack Web Development course at Masai
                    School, Bangalore, an innovative institution focused on
                    transforming students into skilled developers. The program
                    provided hands-on experience with Git, RESTful APIs,
                    MongoDB, and responsive design, equipping me with the skills
                    to build dynamic, user-friendly web applications from the
                    ground up.
                  </li>
                </ul>
              </p>
              <div className="flex flex-wrap gap-x-4 mt-2">
                {techStacksGU.map((ele, index) => (
                  <button
                    key={index}
                    type="button"
                    className="mt-1 -ms-1 p-1  inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent border-slate-800 text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100  duration-300 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {ele}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex justify-center items-center w-full mt-[-3em]"
        id="details-container"
      >
        <div className="w-full max-w-4xl">
          <div className="ps-2 my-2 first:mt-0">
            <button className="text-xs font-medium uppercase text-gray-400">
              Aug 2019 - june 2023
            </button>
          </div>

          <div className="flex gap-x-3">
            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
              <div className="relative z-10 size-10 flex justify-center items-center">
                <img
                  className="shrink-0 rounded-full hover:scale-125 duration-500"
                  src="https://media.licdn.com/dms/image/v2/C4D0BAQEtiVh8srsdVw/company-logo_200_200/company-logo_200_200/0/1657280050049/shri_shankaracharya_institute_of_professional_management_and_technology_raipur_logo?e=1734566400&v=beta&t=0PDVlGjmd4ILAWvBukuxRIp9ROIxboQKqugaRdx26XU"
                  alt="Avatar"
                />
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-[10em] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[2em]"
            >
              <div
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ffe0e0] to-[#f44336]
                opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              />
            </div>
            <div className="grow pt-0.5 pb-8">
              <h3 className="flex gap-x-1.5 uppercase font-semibold text-xl text-orange-700 hover:text-orange-500 duration-300">
                SSIPMT College
              </h3>
              <h3 className="flex gap-x-1.5 font-semibold text-slate-400 text-lg">
                Bachelor of Technology
              </h3>
              <p className="mt-2 w-full">
                <ul className="list-disc text-base sm:text-base	text-gray-400">
                  <li className="hover:text-gray-300 duration-300">
                    I completed my B.Tech in Civil Engineering at SSIPMT Raipur,
                    where I studied essential topics such as structural
                    analysis, fluid mechanics, and construction management,
                    equipping me with a solid foundation in civil engineering
                    principles.
                  </li>
                </ul>
              </p>
              <div className="flex flex-wrap gap-x-4 mt-2">
                {vidyaKnowledge.map((ele, index) => (
                  <button
                    key={index}
                    type="button"
                    className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent border-slate-800 text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 duration-300 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {ele}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex justify-center items-center w-full mt-[-3em]"
        id="details-container"
      >
        <div className="w-full max-w-4xl">
          <div className="ps-2 my-2 first:mt-0">
            <button className="text-xs font-medium uppercase text-gray-400">
              2013 - 2019
            </button>
          </div>

          <div className="flex gap-x-3">
            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
              <div className="relative z-10 size-10 flex justify-center items-center">
                <img
                  className="shrink-0 rounded-full hover:scale-125 duration-500"
                  src="https://content.jdmagicbox.com/comp/raipur-chhattisgarh/m8/9999px771.x771.180529134641.c8m8/catalogue/dav-mukhyamantri-public-school-raipur-chhattisgarh-schools-qpm23hwbzo.jpg"
                  alt="Avatar"
                />
              </div>
            </div>
            <div className="grow pt-0.5 pb-8">
              <h3 className="flex gap-x-1.5 uppercase font-semibold text-xl text-orange-700 hover:text-orange-500 duration-300">
                D.A.V School
              </h3>
              <h3 className="flex gap-x-1.5 font-semibold text-slate-400 text-lg">
                6th grade - HSC
              </h3>
              <ul className="list-disc text-base mt-2 w-full sm:text-base	text-gray-400">
                <li className="hover:text-gray-300 duration-300">
                  I built a strong educational foundation and learned valuable
                  lessons throughout my studies. Additionally, I actively
                  engaged in various extracurricular activities, which
                  contributed significantly to my overall development.
                </li>
              </ul>
              <div className="flex flex-wrap gap-x-4 mt-2">
                {school.map((ele, index) => (
                  <button
                    key={index}
                    type="button"
                    className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent border-slate-800 text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 duration-300 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {ele}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
