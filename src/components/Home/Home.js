import React, { useState } from "react";
import CloudPlatform from "../../data/CloudPlatform.json";
import {
  ERROR_MESSAGE,
  NEXT,
  SELECT_CLOUD_HEADER,
} from "../../constants/constants.js";
import "./Home.css";

const Home = ({
  selectedPlatforms,
  setSelectedPlatforms,
  setShowComparison,
}) => {
  const [showError, setShowError] = useState(false);

  const platforms = CloudPlatform.cloudPlatforms.map(
    (platform) => platform.name
  );

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setSelectedPlatforms((prev) =>
      checked ? [...prev, value] : prev.filter((platform) => platform !== value)
    );
    if (checked && showError) setShowError(false);
  };

  const handleCompare = (event) => {
    event.preventDefault(); //stop page refresh
    selectedPlatforms.length > 0 ? setShowComparison(true) : setShowError(true);
  };

  return (
    <>
      <form id="cloudForm" onSubmit={handleCompare}>
        <label>{SELECT_CLOUD_HEADER}</label>
        {platforms.map((platform) => (
          <div key={platform}>
            <input
              type="checkbox"
              id={platform}
              value={platform}
              checked={selectedPlatforms.includes(platform)}
              onChange={handleCheckboxChange}
            />
            <label htmlFor={platform}>{platform}</label>
          </div>
        ))}
        <button type="submit">{NEXT}</button>
        {showError && <div className="Error">{ERROR_MESSAGE}</div>}
      </form>
    </>
  );
};

export default Home;
