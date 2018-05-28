import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import reducers from './js/reducers';
import root from './js/reducers/saga';

export const addListener = createReduxBoundAddListener('root');

const createSagaMiddleWare = createSagaMiddleWare();

const store = createStore(
    reducers, 
    applyMiddleware(
        sagaMiddleware
    )
)

sagaMiddleware.run(root);

export default store; 