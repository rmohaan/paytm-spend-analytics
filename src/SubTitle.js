import React from "react";

const SubTitle = ({
  radius,
  fill,
  textAnchor,
  subTitle1,
  subTitle2,
  subTitleColor,
  currency
}) => {
  return (
    <text x={radius} y={radius} fill={subTitleColor} textAnchor={textAnchor}>
      <tspan style={{fontSize: 10}}>{subTitle1}</tspan>
      <tspan x={radius} y={radius + 20}>
        {currency}
        {subTitle2}
      </tspan>
    </text>
  );
};

export default SubTitle;
