import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import Slideshow from "./Slideshow.jsx";
export const HomeBody = () => {
  const navigate = useNavigate();
  const Demo = () => {
    navigate("/demo");
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
      innertext: "Signup",
      onClick: "",
    },
    {
      innertext: "Login",
      onClick: "",
    },
  ];
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img
          src={"/SocialKit/zwigato.jpeg"}
          alt="logo"
          style={{ width: "auto", height: "10dvh" }}
        />
        <Navbar list={navlist} />
      </div>
      <Slideshow />
    </div>
  );
};
