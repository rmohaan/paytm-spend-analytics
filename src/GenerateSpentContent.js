import React from "react";
import { Item } from "semantic-ui-react";

import SpentChart from "./SpentChart";
import ChartLegend from "./ChartLegend";

const GenerateSpentContent = ({
  additionalContentStyle,
  data,
  subTitle1,
  subTitle2,
  colors,
  radius,
  hole,
  stroke,
  strokeWidth,
  showLabel,
  currency,
  textContents,
  listColors
}) => {
  return (
    <Item>
      <Item.Image className="spent-content">
        <SpentChart
          data={data}
          subTitle1={subTitle1}
          subTitle2={subTitle2}
          colors={colors}
          radius={radius}
          hole={hole}
          stroke={stroke}
          strokeWidth={strokeWidth}
          showLabel={showLabel}
          currency={currency}
        />
      </Item.Image>
      <Item.Content style={additionalContentStyle ? additionalContentStyle : {}}>
        <ChartLegend textContents={textContents} colors={listColors} />
      </Item.Content>
    </Item>
  );
};

export default GenerateSpentContent;
