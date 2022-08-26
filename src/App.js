import { BrowserRouter, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { Route } from "react-router-dom";
import Crypto from "./components/Crypto.js";
import Uber from "./components/Uber.js";
import Portfolio from "./components/Portfolio.js";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
      <Routes>
        <Route exact path="/crypto" element={<Crypto />} />
      </Routes>
      <Routes>
        <Route exact path="/uber" element={<Uber />} />
      </Routes>
      <Routes>
        <Route exact path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
