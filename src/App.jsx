import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import BackgroundMusic from "./pages/BackgroundMusic";
// import "./index.css";
import "./App.css";

function App() {
  return (
    <>
      <BackgroundMusic />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
