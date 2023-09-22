import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Syncee from "./Pages/Syncee";
import Animal from "./Pages/Animal";
import ImageUpload from "./Pages/ImageUpload";

function App() {
  return (
    <BrowserRouter basename="/Portfolio/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Syncee" element={<Syncee />} />
        <Route path="/AnimalShelter" element={<Animal />} />
        <Route path="/ImageUpload" element={<ImageUpload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
