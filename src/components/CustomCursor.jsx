import { useEffect, useRef } from "react";

export const CustomCursor = () => {
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = `${posX}px`;
        cursorDotRef.current.style.top = `${posY}px`;
      }

      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.animate(
          {
            left: `${posX}px`,
            top: `${posY}px`,
          },
          { duration: 300, fill: "forwards", easing: "ease-out" }
        );
      }
    };

    const handleMouseEnter = () => {
      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.style.transform = "scale(1.5)";
        cursorOutlineRef.current.style.borderColor = "rgba(255, 255, 255, 0.8)";
      }
    };

    const handleMouseLeave = () => {
      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.style.transform = "scale(1)";
        cursorOutlineRef.current.style.borderColor = "hsla(0, 0%, 100%, 0.5)";
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={cursorDotRef}></div>
      <div className="cursor-outline" ref={cursorOutlineRef}></div>
    </>
  );
};
