import React from 'react';
import {Item, Divider} from 'semantic-ui-react';

import GenerateSpentContent from './GenerateSpentContent';

const SpentContents = ({monthlySplitUp}) => {

    const subTitle1 = "Money Spent",
        subTitle3 = "Money Received",
        currency = "\u20B9",
        showLabel = false,
        colors = ["#43A19E", "#7B43A1", "#F2317A", "#ff8c00", "#58CF6C", "#ffc40c", "#1e90ff"],
        radius = 60,
        hole = 50,
        stroke = 1,
        strokeWidth = 1;

    return (
        <Item.Group>
            {
                monthlySplitUp.map( (monthlyData, i) => {
                    return (
                        <React.Fragment key={i}>
                            <GenerateSpentContent
                                data={monthlyData.spentSplit}
                                subTitle1={subTitle1}
                                subTitle2={monthlyData.totalSpent}
                                colors={colors}
                                radius={radius}
                                hole={hole}
                                stroke={stroke}
                                strokeWidth={strokeWidth}
                                showLabel={showLabel}
                                currency={currency}
                                textContents={monthlyData.areasOfExpenditure} 
                                listColors={colors} />
                            <Divider />
                            <GenerateSpentContent
                                data={monthlyData.earningSplit}
                                subTitle1={subTitle3}
                                subTitle2={monthlyData.totalReceived}
                                subTitleColor={""}
                                colors={colors}
                                radius={radius}
                                hole={hole}
                                stroke={stroke}
                                strokeWidth={strokeWidth}
                                showLabel={showLabel}
                                currency={currency}
                                textContents={monthlyData.areasOfEarning} 
                                listColors={colors} 
                                additionalContentStyle = {{paddingTop: 15}} />
                        </React.Fragment>
                    )
                })
            }
      </Item.Group>
    );
}

export default SpentContents;