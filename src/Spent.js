import React, {useState} from 'react';
import { Icon, Message } from "semantic-ui-react";
import faker from 'faker';

import FavouriteStores from './FavouriteStores';
import SpentContents from './SpentContents';
import {getAreasOfExpenditure, getAreasOfReceiving, simulateSplit, getRandomStore, getMonthName} from './helper';
 
const Spent = () => {
    const initialMonth = new Date().getMonth(),
        intialSplitArr = [5, 12, 8, 3],
        intialMonthlySplit = [
            {
            "month": getMonthName(initialMonth),
            "totalSpent": 100,
            "totalReceived": 100,
            "spentSplit": intialSplitArr,
            "earningSplit": intialSplitArr,
            "areasOfExpenditure": getAreasOfExpenditure(intialSplitArr, 100),
            "areasOfEarning": getAreasOfReceiving(intialSplitArr, 100)
            }
        ],
        intialFavStores = [getRandomStore(), getRandomStore(), getRandomStore()];

    const [monthlySplit, updateMonthlySplit] = useState(intialMonthlySplit);
    const [favouriteStores, updatefavouriteStores] = useState(intialFavStores);
    const [month, updateMonth] = useState(initialMonth);

      const handleClick = (monthId) => {
          let spent = faker.random.number(1000),
                received = faker.random.number(1000),
                splitS = simulateSplit(spent, 6),
                splitR = simulateSplit(received, 4);

         const newMonthlySplit = [
            {
            "month": getMonthName(monthId),
            "totalSpent": faker.random.number(1000),
            "totalReceived": faker.random.number(1000),
            "spentSplit": splitS,
            "earningSplit": splitR,
            "areasOfExpenditure": getAreasOfExpenditure(splitS, spent),
            "areasOfEarning": getAreasOfReceiving(splitR, received),
            }
        ],
        newFavStores = [getRandomStore(), getRandomStore(), getRandomStore()];
        updateMonthlySplit(newMonthlySplit);
        updateMonth(monthId);
        updatefavouriteStores(newFavStores);
      }


    return (
        <section>
            <Message icon>
            {month === 0 ? "" : <Icon name="left chevron" style={{ fontSize: "14px" }} onClick={() => handleClick(month - 1)}/>}
            <Message.Content>
                <Message.Header style={{ textAlign: "center" }}>
                {getMonthName(month)}
                </Message.Header>
            </Message.Content>
            {month === 11 ? "" : <Icon name="right chevron" style={{ fontSize: "14px" }} onClick={() => handleClick(month + 1)} />}
            </Message>
            <SpentContents monthlySplitUp={monthlySplit} />
            <FavouriteStores favStores={favouriteStores} />
        </section>
    );
}
export default Spent;