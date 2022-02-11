import React, { useRef, useState } from "react";
import ClientSection from "./components/ClientSection";
import ContactSection from "./components/ContactSection";
import Header, { navItems } from "./components/Header";
import HomeSection from "./components/HomeSection";
import Layout from "./components/Layout";
import ProjectSection from "./components/ProjectSection";

function App() {
  const [activeSection, setactiveSection] = useState("");

  const homeSectionRef = useRef<HTMLDivElement>(null);
  const projectSectionRef = useRef<HTMLDivElement>(null);
  const clientSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);

  const scrollTo = (sectionName: string) => {
    console.log(sectionName);
    switch (sectionName) {
      case navItems[0]:
        homeSectionRef.current?.scrollIntoView({
          behavior: "smooth",
        });
        return;
      case navItems[1]:
        projectSectionRef.current?.scrollIntoView({
          behavior: "smooth",
        });
        return;
      case navItems[2]:
        clientSectionRef.current?.scrollIntoView({
          behavior: "smooth",
        });
        return;
      case "contact":
        contactSectionRef.current?.scrollIntoView({
          behavior: "smooth",
        });
        contactSectionRef.current?.scrollBy({
          top: 30,
        });
        return;
      default:
        homeSectionRef.current?.scrollIntoView({
          behavior: "smooth",
        });
        return;
    }
  };

  return (
    <div className="bg-body font-poppins selection:text-selected-text min-h-fit scroll-smooth">
      <Header
        activeSection="home"
        setActiveSection={setactiveSection}
        scrollTo={scrollTo}
      />
      <Layout>
        <div className="text-2xl text-gray-200">
          {/* {activeSection} */}
          <div ref={homeSectionRef}>
            <HomeSection />
          </div>
          <div ref={projectSectionRef}>
            <ProjectSection />
          </div>
          <div ref={clientSectionRef}>
            <ClientSection />
          </div>
          <div ref={contactSectionRef}>
            <ContactSection />
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default App;
