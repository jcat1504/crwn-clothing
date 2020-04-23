import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.collections'
import CollectionPage from '../collection/collection.component';

const  ShopPage = ({ match }) => {
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component ={CollectionsOverview} />
                <Route exact path={`${match.path}/:categoryId`} component={CollectionPage} />
            </div>
        )
    }


export default ShopPage;

