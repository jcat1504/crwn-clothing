import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import {store, persistor } from './redux/store';

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
    <PersistGate persistor={persistor}>
        <App />
    </PersistGate>
    {/* //this is having the app always having access to the persistence flow itself. remember to always wrap App with PersistGate
    //this will: 1. receive the store and 2. fire off actions that will rehydrate the state whenever our application refreshes */}
    </BrowserRouter>
    </Provider>,
document.getElementById('root')
);

