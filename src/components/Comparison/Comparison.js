import CloudPlatform from "../../data/CloudPlatform.json";
import "./Comparison.css";
import {
  BACK,
  CLOUD_PLATFORM,
  COMPARISON_HEADER,
  PROVIDER,
  STRENGTHS,
} from "../../constants/constants.js";

const Comparison = ({ selectedPlatforms, setShowComparison }) => {
  const platforms = CloudPlatform.cloudPlatforms.filter((platform) =>
    selectedPlatforms.includes(platform.name)
  );
  return (
    <div>
      <h2>{COMPARISON_HEADER}</h2>
      <table className="ComparisonTable">
        <tr>
          <th>{CLOUD_PLATFORM}</th>
          <th>{PROVIDER} </th>
          <th>{STRENGTHS} </th>
        </tr>
        {platforms.map((platform) => (
          <tr>
            <td key={platform.name}>{platform.name}</td>
            <td key={platform.provider}>{platform.provider}</td>
            <td key={platform.strengths}>{platform.strengths}</td>
          </tr>
        ))}
      </table>
      <button onClick={() => setShowComparison(false)} type="button">
        {BACK}
      </button>
    </div>
  );
};

export default Comparison;
