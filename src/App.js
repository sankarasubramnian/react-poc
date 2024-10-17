import React, { useState } from "react";
import Comparison from "./components/Comparison/Comparison";
import Home from "./components/Home/Home";
import "./App.css";

const App = () => {
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [showComparison, setShowComparison] = useState(false);

  return (
    <div className="App">
      {!showComparison && (
        <Home
          selectedPlatforms={selectedPlatforms}
          setSelectedPlatforms={setSelectedPlatforms}
          setShowComparison={setShowComparison}
        />
      )}
      {showComparison && (
        <Comparison
          selectedPlatforms={selectedPlatforms}
          setShowComparison={setShowComparison}
        />
      )}
    </div>
  );
};

export default App;
