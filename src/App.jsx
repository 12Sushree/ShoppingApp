import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <div className="w-full min-h-screen bg-white text-black flex flex-col gap-5">
        <div>
          <Navbar />
        </div>
        <div className="p-3">
          <HomePage />
        </div>
      </div>
    </>
  );
}

export default App;
