import React from "react";
import Pie from "./Pie";

const SpentChart = ({
  data,
  subTitle1,
  subTitle2,
  radius,
  hole,
  colors,
  stroke,
  strokeWidth,
  showLabel,
  currency
}) => {
  return (
    <Pie
      data={data}
      subTitle1={subTitle1}
      subTitle2={subTitle2}
      radius={radius}
      hole={hole}
      colors={colors}
      stroke={stroke}
      strokeWidth={strokeWidth}
      showLabel={showLabel}
      currency={currency}
    />
  );
};

export default SpentChart;
