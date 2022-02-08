import React from "react";
import NavBar from "../../components/navbar/NavBar";
import styles from "./Balance.module.scss";

const Customers = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <NavBar name="Customers"/>
      {/* <h1>Balance</h1> */}
    </div>
  );
};

export default Customers;