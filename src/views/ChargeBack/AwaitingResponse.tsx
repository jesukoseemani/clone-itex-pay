import React from "react";
import NavBar from "../../components/navbar/NavBar";
import styles from "./Balance.module.scss";

const AwaitingResponse = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <NavBar name="Awaiting Response"/>
    </div>
  );
};

export default AwaitingResponse;