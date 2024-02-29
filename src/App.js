import React, { Component } from "react";
import "./assets/styles.scss";
import { Header } from "./components/Header";
import { TeamDirectory } from "./components/TeamDirectory";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchText: "",
    };
  }

  handleChange = (e) => {
    this.setState({ searchText: e.target.value });
  };
  render() {
    return (
      <div>
        <Header value={this.state.searchText} handleChange={this.handleChange} />
        <TeamDirectory searchText={this.state.searchText} />
      </div>
    );
  }
}

export default App;
