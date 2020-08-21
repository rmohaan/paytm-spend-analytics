import React from 'react';
import {Card, Image} from 'semantic-ui-react';

const GenerateFavouriteStoreContent = ({storeName, currency, amount, imgSrc}) => {
    return (
        <Card>
            <Card.Content>
                <Image floated="left" size="mini" src={imgSrc} />
                <Card.Description>
                    {storeName}
                    <div style={{ paddingTop: 10 }}>
                        {currency} {amount}
                    </div>
                </Card.Description>
            </Card.Content>
        </Card>
    );
}

export default GenerateFavouriteStoreContent;