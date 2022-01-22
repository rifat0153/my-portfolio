import React from "react";
import Header from "./components/Header";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="bg-body min-h-screen">
      <Header />
      <Layout>
        <div className="text-2xl text-gray-200">Helloo</div>
      </Layout>
    </div>
  );
}

export default App;
