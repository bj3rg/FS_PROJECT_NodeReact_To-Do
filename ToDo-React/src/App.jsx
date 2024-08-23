import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
