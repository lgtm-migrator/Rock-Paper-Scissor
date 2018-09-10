import React, { Component } from "react";
// import logo from "./logo.svg";
// import classes from "./App.css";
import Header from "./components/Header/Header";
import Aux from "./hoc/Aux";
import Controles from "./components/Controles/Controles";

class App extends Component {
  render() {
    return (
      <Aux>
        <Header />
        <main>Main Game</main>
        <Controles />
      </Aux>
    );
  }
}

export default App;
