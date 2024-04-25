import Home from "./pages/home";
import Restro from "./pages/previewRestro";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/demo"} element={<Restro />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
