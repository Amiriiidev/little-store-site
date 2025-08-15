import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { useState } from "react";

const MainLayout = function () {
  const [data, setData] = useState("");

  const getData = (value) => {
    setData(value);
  };

  return (
    <>
      <Header searchValue={getData} />
      <Outlet context={{ searchValue: data }} />
      <Footer />
    </>
  );
};

export default MainLayout;
