import React from "react";
import "./styles.css";
import { styles } from "./styles";
import NavBar from "./components/NavBar";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };
    this.handlerCounterUp = this.handlerCounterUp.bind(this);
  }
  handlerCounterUp() {
    this.setState({ counter: this.state.counter + 1})
  }
  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

export default App;
