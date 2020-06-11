import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
//^^ our browser will cache our store depending on certain configurations options

import rootReducer from './root-reducer';

const middlewares = []
if (process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares))
export const persistor = persistStore(store);
//^^it is how we are going to create our new provider thats wrapping our application

export default { store, persistor };