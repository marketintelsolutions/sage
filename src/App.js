import { Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Error from "./pages/Error";
import Patients from "./pages/Patients";
import Contact from "./pages/Contact";
import Corporate from "./pages/Corporate";
import Individual from "./pages/Individual";

function App() {
  return (
    <SharedLayout>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" index element={<About />} />
        <Route path="/services" index element={<Services />} />
        <Route path="/patients" index element={<Patients />} />
        <Route path="/contact" index element={<Contact />} />
        <Route path="/corporate" index element={<Corporate />} />
        <Route path="/individual" index element={<Individual />} />
        <Route path="*" index element={<Error />} />
      </Routes>
    </SharedLayout>
  );
}

export default App;
