import React from 'react';
import {Card, Header} from 'semantic-ui-react';
import GenerateFavouriteStoreContent from './GenerateFavouriteStoreContent';

const FavouriteStores = ({favStores}) => {
    return (
        <React.Fragment>
            <Header size='medium'>Favourite Stores</Header>
            <Card.Group itemsPerRow={3}>
                { favStores.map((store, i) => {
                    return (
                        <GenerateFavouriteStoreContent 
                            imgSrc={store.storeImage}
                            storeName={store.storeName}
                            currency={store.currency}
                            amount={store.amount} 
                            key={i}/>
                    );
                  })
                }
            </Card.Group>
        </React.Fragment>
    );
}
export default FavouriteStores;