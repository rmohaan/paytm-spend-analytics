import React from "react";
import "./styles.css";

import Item from "./Item";

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
      <div className="ui two column grid ">
        <div className="row ">
          <div className="ui items">
            <div className="column">
              <div className="item">
                <Item
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
              </div>
              <div className="column">
                <div className="content">
                  <div className="header">Arrowhead Valley Camp</div>
                  <div className="meta">
                    <span className="price">$1200</span>
                    <span className="stay">1 Month</span>
                  </div>
                  <div className="description">
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
