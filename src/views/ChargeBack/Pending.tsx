import React from "react";
import NavBar from "../../components/navbar/NavBar";
import styles from "./Balance.module.scss";

const Pending = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <NavBar name="Pending"/>
    </div>
  );
};

export default Pending;