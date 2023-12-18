import './App.css';
import Navbar from './Navbar';
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
// FIXME: implement this import ContactForm from './pages/ContactForm';

function App() {
    return (
        <>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/team-cartographer-site" element={<Home />} />
              <Route path="/about" element={<About />} />

              {/* FIXME: implement this <Route path="/contact" element={<ContactForm />} /> */}

            </Routes>
          </div>
        </>
      )
}

export default App;


