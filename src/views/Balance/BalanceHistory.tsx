import React from "react";
import NavBar from "../../components/navbar/NavBar";
import styles from "./Balance.module.scss";

const BalanceHistory = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <NavBar name="Balance History"/>
      {/* <h1>Balance</h1> */}
    </div>
  );
};

export default BalanceHistory;
