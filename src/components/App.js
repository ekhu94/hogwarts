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
    nameSort: true,
    weightSort: true
  };

  onFilterClick = () => {
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
    const {nameSort} = this.state;
    this.setState({ nameSort: !nameSort });
    if (nameSort) {
      const sortHogs = hogs.slice().sort((a, b) => {
        let fa = a.name.toLowerCase();
        let fb = b.name.toLowerCase();
        if (fa < fb) return -1;
        if (fa > fb) return 1;
        return 0;
      });
      this.setState({ hogsList: sortHogs });
    } else {
      this.setState({ hogsList: hogs });
    }
  }

  onWeightClick = () => {
      const {weightSort} = this.state;
      this.setState({ weightSort: !weightSort });
    if (weightSort) {
      const sortHogs = hogs.slice().sort((a, b) => {
        return b.weight - a.weight
      });
      this.setState({ hogsList: sortHogs });
    } else {
      this.setState({ hogsList: hogs });
    }
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
