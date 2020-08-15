import React from "react";
import "./styles.css";
import { Item } from "semantic-ui-react";

import SpentChart from "./SpentChart";

export default function App() {
  const data = [5, 12, 8, 3, 10],
    subTitle1 = "Money Spent",
    subTitle2 = "0",
    currency = "\u20B9",
    showLabel = false,
    colors = ["#43A19E", "#7B43A1", "#F2317A", "#FF9824", "#58CF6C"],
    radius = 80,
    hole = 65,
    stroke = 1,
    strokeWidth = 10;

  return (
    <div className="App">
      <div className="ui fluid text bold container">Spend Analytics</div>
      <p> Paytm Wallet, other wallets and Paytm Gift Voucher transactions</p>
      May
      <Item.Group>
        <Item>
          <Item.Image>
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
          <Item.Content>
            <Item.Header>Arrowhead Valley Camp</Item.Header>
            <Item.Meta>
              <span className="price">$1200</span>
              <span className="stay">1 Month</span>
            </Item.Meta>
            <Item.Description>
              <p></p>
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
    </div>
  );
}
