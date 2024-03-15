import React, { Component } from "react";
import styles from "./Search.module.css";
function Search({...props}) {
  
  return (
    <>
      <textarea className={styles.textarea} cols="50" id="description" name="description" placeholder="Описание"></textarea><br />
      <button onClick={props.onClick} className={styles.button} id="oks-button">Подобрать ОКС на основе текста объявления</button><br />
    </>
  );
}
export default Search;