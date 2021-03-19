import hogs from "../porkers_data";
import React, { useState } from "react";
import "../App.css";
import Nav from "./Nav";
import HogsContainer from './HogsContainer';

const App = () => {
  const [hogsList, setHogsList] = useState(hogs);
  const [grease, setGrease] = useState(false);
  const [name, setName] = useState(false);
  const [weight, setWeight] = useState(false);
  const [best, setBest] = useState(false);

  const onBestChange = () => {
    setBest(!best);
    if (!best) {
      const bestHogs = hogsList.filter(h => {
        return h['highest medal achieved'] === 'gold' || h['highest medal achieved'] === 'platinum';
      });
      setHogsList(bestHogs);
    } else {
      setHogsList(hogs);
    }
  }

  const onGreaseClick = () => {
    setGrease(!grease);
    if (!grease) {
      const greasedHogs = hogsList.filter(h => h.greased);
      setHogsList(greasedHogs);
    } else {
      setName(false);
      setWeight(false);
      setHogsList(hogs);
    }
  };

  const onNameClick = () => {
    setName(!name);
    if (!name) {
      const sortedNames = hogsList.slice().sort((a, b) => {
        let na = a.name.toLowerCase();
        let nb = b.name.toLowerCase();
        if (na < nb) return -1;
        if (na > nb) return 1;
        return 0;
      });
      setHogsList(sortedNames);
    } else {
      setGrease(false);
      setWeight(false);
      setHogsList(hogs);
    }
  };

  const onWeightClick = () => {
    setWeight(!weight);
    if (!weight) {
      const sortedWeights = hogsList.slice().sort((a, b) => b.weight - a.weight);
      setHogsList(sortedWeights);
    } else {
      setGrease(false);
      setName(false);
      setHogsList(hogs);
    }
  }
  
  return (
    <div className="App">
      <Nav 
        onGreaseClick={onGreaseClick}
        onNameClick={onNameClick}
        onWeightClick={onWeightClick}
        onBestChange={onBestChange}
      />
      <HogsContainer hogs={hogsList} />
    </div>
  );
};

export default App;
