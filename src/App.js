import React from "react";
import Hero from "./components/Hero";
import RotatingWords from "./components/RotatingWords";
import Background from "./components/Background";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden text-white font-mono">
      <Background />
      <main className="z-10 relative flex flex-col items-center justify-center h-screen space-y-6"></main>
    </div>
  );
}

export default App;
