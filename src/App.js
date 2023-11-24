import { BrowserRouter, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { Route } from "react-router-dom";
import Sidepage from "./pages/Sidepage";
import Sidepage2 from "./pages/Sidepage2";
import Sidepage3 from "./pages/Sidepage3";
import Sidepage4 from "./pages/Sidepage4";
import Sidepage5 from "./pages/Sidepage5";
import Sidepage6 from "./pages/Sidepage6";





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/crypto" element={<Sidepage/>} />
        <Route exact path="/uber" element={<Sidepage2/>} />
        <Route exact path="/portfolio" element={<Sidepage3/>} />
        <Route exact path="/talk" element={<Sidepage4/>} />
        <Route exact path="/dev" element={<Sidepage5/>} />
        <Route exact path="/ecomm" element={<Sidepage6/>} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;
