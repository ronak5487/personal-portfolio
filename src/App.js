import { BrowserRouter, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { Route } from "react-router-dom";
import Sidepage from "./pages/Sidepage";
import Sidepage2 from "./pages/Sidepage2";
import Sidepage3 from "./pages/Sidepage3";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/crypto" element={<Sidepage/>} />
        <Route exact path="/uber" element={<Sidepage2/>} />
        <Route exact path="/portfolio" element={<Sidepage3/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
