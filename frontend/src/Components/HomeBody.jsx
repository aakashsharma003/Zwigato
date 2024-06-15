import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import Slideshow from "./Slideshow.jsx";
import { useState } from "react";
import Login from "./Login.jsx";
export const HomeBody = () => {
  // const [isContactUs, setIsContactUs] = useState(false);
  const [renderLogin, setRenderLogin] = useState(false);
  const navigate = useNavigate();
  const Demo = () => {
    navigate("/demo");
  };
  const LoginHandler = () => {
    setRenderLogin(true);
  };
  const navlist = [
    { innertext: "Home", onClick: "" },
    {
      innertext: "Demo",
      onClick: Demo,
    },
    {
      innertext: "Contact Us",
      onClick: "",
    },
    {
      innertext: "Login",
      onClick: LoginHandler,
    },
  ];
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img src={"/SocialKit/zwigato.jpeg"} alt="logo" className="logo" />
        <Navbar list={navlist} />
      </div>
      {!renderLogin && <Slideshow />}
      {/* {isContactUs && <ContactUs/>} */}
      {renderLogin && <Login />}
    </div>
  );
};
