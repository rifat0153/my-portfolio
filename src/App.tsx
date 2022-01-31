import React, { useState } from "react";
import ClientSection from "./components/ClientSection";
import Header from "./components/Header";
import HomeSection from "./components/HomeSection";
import Layout from "./components/Layout";
import ProjectSection from "./components/ProjectSection";

function App() {
  const [activeSection, setactiveSection] = useState("");

  return (
    <div className="bg-body min-h-fit font-poppins selection:text-selected-text  ">
      <Header
        activeSection="home"
        setActiveSection={setactiveSection}
      />
      <Layout>
        <div className="text-2xl text-gray-200">
          {activeSection}
          <HomeSection />
          <ProjectSection />
          <ClientSection />
        </div>
      </Layout>
    </div>
  );
}

export default App;
