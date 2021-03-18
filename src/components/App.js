import hogs from "../porkers_data";
import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import HogsContainer from './HogsContainer';
import ButtonGroup from './ButtonGroup';

class App extends Component {
  state = {
    hogsList: hogs,
    greaseFilter: true,
    nameSort: false,
    weightSort: false
  };

  onFilterClick = async () => {
    const {greaseFilter, hogsList} = this.state;
    this.setState({ greaseFilter: !greaseFilter });
    if (greaseFilter) {
      const newHogs = hogsList.filter(h => h.greased);
      this.setState({ hogsList: newHogs });
    } else {
      this.setState({ hogsList: hogs })
    }
  }

  onNameClick = () => {

  }

  onWeightClick = () => {

  }

  render() {
    const { hogsList } = this.state;
    return (
      <div className="App">
        <Nav />
        <ButtonGroup 
          onFilterClick={this.onFilterClick}
          onNameClick={this.onNameClick}
          onWeightClick={this.onWeightClick}
        />
        <br />
        <br />
        <HogsContainer 
          hogs={hogsList}
        />
      </div>
    );
  }
}

export default App;
