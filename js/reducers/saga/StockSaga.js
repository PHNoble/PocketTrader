import { call, put, takeEvery } from 'redux-saga/effects'
import { hasIn } from 'lodash'
import { actions } from '../StockReducer'
import { getData } from '../../api/Stock' 

export const grabSingleStockAction = function*(action) {
    const req = {
        function: "TIME_SERIES_DAILY",
        symbol: action.payload.symbol,
    }
    const result = yield call(getData, req);
    yield put({type: actions.changeStockData, payload:  result })
}

export const grabSectorDataAction = function*(action) {
    const req = {
        function: "SECTOR",
    }
    const result = yield call(getData, req);
    yield put({type: actions.changeStockData, payload:  result })
}

export const grabBatchDataAction = function*(action) {
    const req = {
        function: "BATCH_STOCK_QUOTES",
        symbol: action.payload.symbol,
    }
    const result = yield call(getData, req);
    yield put({type: actions.changeBatchData, payload: result});
}

const StockSaga = function* Stock() {
    yield takeEvery(actions.grabSingleStock, grabSingleStockAction);
    yield takeEvery(actions.grabSectorData, grabSectorDataAction);
    yield takeEvery(actions.grabBatchData, grabBatchDataAction);
}

export default StockSaga
