import Footer from "./components/Footer";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Category from "./pages/Category";
import Reciept from "./components/Reciept";

function App() {
  
  return (
    <div>
      <Header />
      <main className="container  content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="category/:name" element={<Category />} />
          <Route path="meal/:id" element={<Reciept />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
