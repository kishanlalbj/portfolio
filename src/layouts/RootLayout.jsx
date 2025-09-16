import Navbar from "@components/Navbar/Navbar";
import Footer from "@components/Footer/Footer";
import { useContext, useEffect } from "react";
import ThemeContext from "@contexts/ThemeContext";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const localData = localStorage.getItem("isDark");

  useEffect(() => {
    if (!localData) setIsDark(true);
    else setIsDark(localData === "false" ? false : true);
  }, [localData, setIsDark]);

  return (
    <div className={!isDark ? "light" : "dark"}>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default RootLayout;
