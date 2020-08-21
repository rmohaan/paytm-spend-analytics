import React from "react";
import "./styles.css";
import { Item, Icon, Message, Divider, Segment, Card, Image, Button } from "semantic-ui-react";

import SpentChart from "./SpentChart";
import ChartLegend from "./ChartLegend";

import GenerateSpentContent from './GenerateSpentContent';
import FavouriteStores from './FavouriteStores';
import SpentContents from './SpentContents';

export default function App() {
  const data = [5, 12, 8, 3, 10],
    subTitle1 = "Money Spent",
    subTitle2 = "0",
    subTitle3 = "Money Received",
    currency = "\u20B9",
    dummyAmount = 50,
    showLabel = false,
    colors = ["#43A19E", "#7B43A1", "#F2317A", "#ff8c00", "#58CF6C", "#ffc40c", "#1e90ff"],
    radius = 60,
    hole = 50,
    stroke = 1,
    strokeWidth = 1,
    monthlySplitUp = [
      {
        "month": "May",
        "totalSpent": 100,
        "totalReceived": 0,
        "spentSplit": [5, 12, 8, 3, 10],
        "earningSplit": [0, 0],
        "areasOfExpenditure": [
          {"department": 'Travel', "spent": '5'}, 
          {"department": 'Food & Beverages', "spent": '12'},
          {"department": 'Shopping', "spent":'8'},
          {"department": 'Entertainment', "spent":'3'},
          {"department": 'Recharge & Bill Payment', "spent":'10'},
          {"department": 'Others', "spent":'0'}
        ],
        "areasOfEarning": [
          {"department": 'Cashback', "spent": '0'}, 
          {"department": 'Friends & Family', "spent": '0'},
          {"department": 'Refunds', "spent":'0'},
          {"department": 'Food Wallet', "spent":'0'}
        ]
      }
    ],
    favStores = [
      {
        "storeName": "Sanders, Steve",
        "storeImage": "https://react.semantic-ui.com/images/avatar/large/steve.jpg",
        "currency": currency,
        "amount": dummyAmount
      },
      {
        "storeName": "Zuckerberg, Mark",
        "storeImage": "https://react.semantic-ui.com/images/avatar/large/jenny.jpg",
        "currency": currency,
        "amount": dummyAmount
      }
    ],
    month = "May";

  return (
    <div className="App">
    <Segment >
      <div className="ui header">Spend Analytics</div>
      
      <p> Paytm Wallet, other wallets and Paytm Gift Voucher transactions</p>
      <Message icon>
        <Icon name="left chevron" style={{ fontSize: "14px" }} onClick={() => {alert("left clickckk")}}/>
        <Message.Content>
          <Message.Header style={{ textAlign: "center" }}>
            {month}
          </Message.Header>
        </Message.Content>
        <Icon name="right chevron" style={{ fontSize: "14px" }} onClick={() => {alert("right clickckk")}} />
      </Message>
      <SpentContents monthlySplitUp={monthlySplitUp}/>
      {/* <Item.Group>
        <GenerateSpentContent
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
            textContents={areasOfExpenditure} 
            listColors={colors} />
        <Divider />
        <GenerateSpentContent
            data={data}
            subTitle1={subTitle3}
            subTitle2={subTitle2}
            subTitleColor={""}
            colors={["#eee"]}
            radius={radius}
            hole={hole}
            stroke={stroke}
            strokeWidth={strokeWidth}
            showLabel={showLabel}
            currency={currency}
            textContents={areasOfExpenditure} 
            textContents={areasOfEarning} 
            listColors={colors} 
            additionalContentStyle = {{paddingTop: 15}}/>

      </Item.Group> */}
        <FavouriteStores favStores={favStores} />
      </Segment>
    </div>
    
  );
}
