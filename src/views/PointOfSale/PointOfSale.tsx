import React from "react";
import NavBar from "../../components/navbar/NavBar";
import styles from "./Balance.module.scss";

const PointOfSale = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <NavBar name="Point Of Sale"/>
    </div>
  );
};

export default PointOfSale;