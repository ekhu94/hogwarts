import hogs from "../porkers_data";
import React, { useState, useEffect } from "react";
import "../App.css";
import Nav from "./Nav";
import HogsContainer from './HogsContainer';

const App = () => {
  const [hogsList, setHogsList] = useState(hogs);
  
  return (
    <div className="App">
      <Nav />
      <HogsContainer hogs={hogsList} />
    </div>
  );
};

export default App;
