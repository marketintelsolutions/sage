import { Routes, Route, Navigate } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Error from "./pages/Error";
import Patients from "./pages/Patients";
import Contact from "./pages/Contact";
import Corporate from "./pages/Corporate";
import Individual from "./pages/Individual";
import Faq from "./pages/Faq";

function App() {
  return (
    <SharedLayout>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" index element={<About />} />
        <Route path="/services" index element={<Services />} />
        <Route path="/book-a-test" index element={<Patients />} />
        <Route path="/contact" index element={<Contact />} />
        <Route
          path="/corporate-health-screening-services-nigeria"
          index
          element={<Corporate />}
        />
        <Route
          path="/corporate"
          index
          element={
            <Navigate
              to="/corporate-health-screening-services-nigeria"
              replace
            />
          }
        />
        <Route
          path="/individual-health-screening-packages-nigeria"
          index
          element={<Individual />}
        />
        <Route
          path="/individual"
          index
          element={
            <Navigate
              to="/individual-health-screening-packages-nigeria"
              replace
            />
          }
        />
        <Route path="/faq" index element={<Faq />} />
        <Route path="*" index element={<Error />} />
      </Routes>
    </SharedLayout>
  );
}

export default App;
