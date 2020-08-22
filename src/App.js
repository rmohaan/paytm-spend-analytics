import React from "react";

import { Segment } from "semantic-ui-react";
import "./styles.css";

import Header from './Header';
import Spent from './Spent';
import SpendCategory from './SpendCategory';

export default function App() {
  return (
    <div className="App">
      <Segment >
        <Header />
        <Spent />
        <SpendCategory />
      </Segment>
    </div>
    
  );
}
