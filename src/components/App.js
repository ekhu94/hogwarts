import hogs from "../porkers_data";
import React from "react";
import "../App.css";
import Nav from "./Nav";
import HogsContainer from './HogsContainer';

const App = () => {
  
  return (
    <div className="App">
      <Nav />
      <HogsContainer hogs={hogs} />
    </div>
  );
};

export default App;
