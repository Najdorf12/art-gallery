import ArtistDetail from "./pages/ArtistDetail";
import ArtistDetail2 from "./pages/ArtistDetail2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { artistsData } from "./data/artistsData";

import Home from "./pages/Home";
import Project from "./pages/Project";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  console.log("DESIGN BY NAJDORF");
  return (
    <>
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Home /* artistsData={artistsData} */ />} />
          <Route path="/Proyecto" element={<Project />} />
          <Route path="/Contacto" element={<Contact />} />
          <Route path="/SobreNosotros" element={<About />} />
          <Route
            path="/Artista/:id"
            element={<ArtistDetail2 artistsData={artistsData} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
