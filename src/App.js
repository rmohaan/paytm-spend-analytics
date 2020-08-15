import React from "react";
import "./styles.css";
import { Item, Icon, Message, Divider, Segment, Card, Image, Button } from "semantic-ui-react";

import SpentChart from "./SpentChart";

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
    areasOfExpenditure = [
      {"department": 'Travel', "spent": '0'}, 
      {"department": 'Food & Beverages', "spent": '0'},
      {"department": 'Shopping', "spent":'0'},
      {"department": 'Entertainment', "spent":'0'},
      {"department": 'Recharge & Bill Payment', "spent":'0'},
      {"department": 'Others', "spent":'0'}
    ],
    areasOfEarning = [
      {"department": 'Cashback', "spent": '0'}, 
      {"department": 'Friends & Family', "spent": '0'},
      {"department": 'Refunds', "spent":'0'},
      {"department": 'Food Wallet', "spent":'0'}
    ],
    month = "May";

  return (
    <div className="App">
    <Segment >
      <div className="ui header">Spend Analytics</div>
      
      <p> Paytm Wallet, other wallets and Paytm Gift Voucher transactions</p>
      <Message icon>
        <Icon name="left chevron" style={{ fontSize: "14px" }} />
        <Message.Content>
          <Message.Header style={{ textAlign: "center" }}>
            {month}
          </Message.Header>
        </Message.Content>
        <Icon name="right chevron" style={{ fontSize: "14px" }} />
      </Message>
      <Item.Group>
        <Item>
          <Item.Image style={{paddingLeft: 10, width: 150}}>
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
            {areasOfExpenditure.map((area, i) => {
              return (
                <li key={i} style={{ color: colors[i] }}>
                  {" "}
                  {area.department + " " + area.spent + "%"}
                </li>
              );
            })}
          </Item.Content>
        </Item>
        <Divider />
        <Item>
          <Item.Image style={{paddingLeft: 10, width: 150}}>
            <SpentChart
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

            />
          </Item.Image>
          <Item.Content style={{ paddingTop: 15 }}>
            {areasOfEarning.map((area, i) => {
              return (
                <li key={i} style={{ color: colors[i] }}>
                  {" "}
                  {area.department + " " + area.spent + "%"}
                </li>
              );
            })}
          </Item.Content>
        </Item>
      </Item.Group>
      <div className="ui header">
        Favourite Stores
      </div>
      <Card.Group itemsPerRow={3}>
    <Card>
      <Card.Content>
        <Image
          floated='left'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
        />
        <Card.Description>
          Steve Sanders
          <div style={{paddingTop: 10}}>
          {currency} {dummyAmount}
          </div>
        </Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='left'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
        />
        <Card.Description>
          Mark Zuckerberg
          <div style={{paddingTop: 10}}>
          {currency} {dummyAmount}
          </div>
        </Card.Description>
      </Card.Content>
    </Card>
    </Card.Group>
      </Segment>
    </div>
    
  );
}
