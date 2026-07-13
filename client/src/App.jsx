import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ClassesPage from "./pages/ClassPage";
import Contact from "./pages/Contact";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/classes" element={<ClassesPage />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;