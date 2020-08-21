import React from "react";

const ChartLegend = ({ textContents, colors }) => {
  return textContents.map((content, i) => {
    return (
      <li key={i} style={{ color: colors[i] }}>
        <span className="list-text">
          {content.department + " " + content.spent + "%"}
        </span>
      </li>
    );
  });
};

export default ChartLegend;
