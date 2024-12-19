import { useEffect, useState } from "react";

const useActiveSection = (sectionIds) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";

      sectionIds.forEach((id) => {
        const sectionElement = document.getElementById(id);
        if (sectionElement) {
          const { top, bottom } = sectionElement.getBoundingClientRect();
          const isVisible = top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2;

          if (isVisible) {
            currentSection = id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize the active section on mount.

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds]);

  return activeSection;
};

export default useActiveSection;
