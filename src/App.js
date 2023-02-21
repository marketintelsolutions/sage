import { Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Error from "./pages/Error";

function App() {
  return (
    <SharedLayout>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" index element={<About />} />
        <Route path="/services" index element={<Services />} />
        <Route path="*" index element={<Error />} />
      </Routes>
    </SharedLayout>
  );
}

export default App;
