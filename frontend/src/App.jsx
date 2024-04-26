import Home from "./pages/home";
import Restro from "./pages/previewRestro";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";
import PaymentSuccess from "./pages/paymentsuccess";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/demo"} element={<Restro />}></Route>
        <Route path={"/paymentsuccess"} element={<PaymentSuccess />}></Route>
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
