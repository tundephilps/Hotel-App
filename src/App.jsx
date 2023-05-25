import Effect from "./components/Effect";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Gallery from "./components/Gallery";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Homepage from "./components/Homepage";
import Rooms from "./components/Rooms";
import KnowMore from "./components/KnowMore";
import Article from "./components/Article";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/Contact" element={<Contact />} />

          <Route path="/KnowMore" element={<KnowMore />} />
          <Route path="/Rooms" element={<Rooms />} />
          <Route path="/Article" element={<Article />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
