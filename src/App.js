import { Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Error from "./pages/Error";
import Packages from "./pages/Packages";
import Patients from "./pages/Patients";

function App() {
  return (
    <SharedLayout>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" index element={<About />} />
        <Route path="/services" index element={<Services />} />
        <Route path="/packages" index element={<Packages />} />
        <Route path="/patients" index element={<Patients />} />
        <Route path="*" index element={<Error />} />
      </Routes>
    </SharedLayout>
  );
}

export default App;
