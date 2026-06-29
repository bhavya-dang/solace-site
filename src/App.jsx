import React from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MobileEditorPreview from "../components/MobileEditorPreview";
import Ports from "../components/Ports";
import ScrollReveal from "../components/ScrollReveal";

function App() {
  return (
    <main className="min-h-screen overflow-hidden font-sans text-solace-text">
      <Header />
      <Hero />
      <ScrollReveal>
        <div className="flex justify-center px-5 py-4 lg:hidden">
          <MobileEditorPreview />
        </div>
      </ScrollReveal>
      <Ports />
      <Footer />
    </main>
  );
}

export default App;
