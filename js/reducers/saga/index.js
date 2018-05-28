import { all } from 'redux-saga/effects';
import StockSaga from './StockSaga';


const root = function*() {
    yield all([
        StockSaga()
    ])
}

export default root;

