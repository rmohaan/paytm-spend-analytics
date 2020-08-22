import React from "react";
import {Card, Feed, Divider, Header} from 'semantic-ui-react';
import faker from 'faker';
import GenerateSpendCategories from "./GenerateSpendCategories";

import {currency} from './helper';

const SpendCategory = () => {
return (
<section>
    <Header size='medium'>Spends by Category</Header>
    <Card className="category-card">
        <Card.Content>
            <Feed>
                <GenerateSpendCategories 
                    iconName="car" 
                    categoryName="Fuel & Automobiles"
                    totalPayments={faker.random.number(10)}
                    totalAmount={faker.finance.amount(100, 1000)}
                    currency={currency}
                    className="fuel-transport-icon"
                    />
                <Divider />
                <GenerateSpendCategories 
                    iconName="user" 
                    categoryName="Services"
                    totalPayments={faker.random.number(10)}
                    totalAmount={faker.finance.amount(100, 1000)}
                    currency={currency}
                    className="user-services-icon"
                    />
                <Divider />
                <GenerateSpendCategories 
                    iconName="medkit" 
                    categoryName="Personal & Health Care"
                    totalPayments={faker.random.number(10)}
                    totalAmount={faker.finance.amount(100, 1000)}
                    currency={currency}
                    className="health-care-icon"
                    />
            </Feed>
        </Card.Content>

    </Card>
</section>
)
}


export default SpendCategory;