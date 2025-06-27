// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { artistsData } from "./data/artistsData";
import AnimatedRoutes from "./pages/AnimatedRoutes";
import Home from "./pages/Home";
import Project from "./pages/Project";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ArtistDetail2 from "./pages/ArtistDetail2";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Proyecto" element={<Project />} />
        <Route path="/Contacto" element={<Contact />} />
        <Route path="/SobreNosotros" element={<About />} />
        <Route
          path="/Artista/:id"
          element={<ArtistDetail2 artistsData={artistsData} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
