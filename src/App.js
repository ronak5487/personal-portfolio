import { BrowserRouter, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
