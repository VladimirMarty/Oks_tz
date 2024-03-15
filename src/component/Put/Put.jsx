import React, { Component } from "react";
import  styles from "./Put.module.css";
function Put () {
    return (
      <>
        <input className={styles.input} placeholder="Название объявления" required></input><br/> 
        <button className={styles.button} id="oks-button">Разместить объявление</button><br/> 
    </> 
    );
  }
export default Put;