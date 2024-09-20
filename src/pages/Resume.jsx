import React from "react";
import rahul from "../assets/rahul.pdf";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";

const Resume = ({animate}) => {
  const resumeUrl = rahul;

  const handleClick = () => {
    // Trigger download
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.setAttribute("download", "RahulGupta_resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Open resume in new tab
    window.open(resumeUrl, "_blank");
  };

  return (
    <div
      className={`resume-container text-black flex items-center justify-center ${animate ? 'bg-violet-500 animate-pulse text-black px-2 py-1 rounded-xl ' : 'border-transparent text-green-400 hover:bg-green-400 hover:text-black px-2 hover:rounded-lg'} transition-all duration-300`}
      id="#resume-section "
    >
      <HiOutlineDocumentArrowDown />

      <button onClick={handleClick}>Resume</button>
    </div>
  );
};

export default Resume;
