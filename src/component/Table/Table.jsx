import React, { Component } from "react";
import styles from "./Table.module.css";
import Search from "../Search/Search";
import Put from "../Put/Put";
import Loader from "../Loader/Loader";

class Table extends Component {
  constructor() {
    super();
    this.state = { data: [], loading: false };
  }



  async componentDidMount() {
    this.setState({ loading: true });
    const response = await fetch(`https://gostassistent.ru/api/oks`)
    const json = await response.json();
    this.setState({ data: json });
    await this.setState({ loading: false });

  }

  onClick() {
    const textariaValue = document.getElementById('description').value;
    fetch("https://gostassistent.ru/api/query-oks", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({query: [textariaValue]})
    }).then(res => {
      console.log("Request complete! response:", res);
    });
  }

  render() {

    return (
      <form className={styles.form}>
        <Search onClick={this.onClick}></Search>
        <Put></Put>
        {this.state.loading && <Loader></Loader>}
        {!this.state.loading && <div className={styles.checkmMultiple}>
          {this.state.data.map(el => (
            <label><input id={el.code} value={el.code} type="checkbox" /><span>{el.code}: {el.name}</span></label>

          ))
          }
        </div>
        }
      </form>
    );

  }
}


export default Table;