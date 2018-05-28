import { createAction, handleActions } from 'redux-actions'

export const actions = {
    changeStockData: 'CHANGE/SINGLE_STOCK_DATA',
    grabSingleStock: 'GET/SINGLE_STOCK_DATA',
    changeSectorData: 'CHANGE/SECTOR_DATA',
    grabSectorData: 'GET/SECTOR_DATA',
    changeBatchData: 'CHANGE/BATCH_DATA',
    grabBatchData: 'GET/BATCH_DATA'
}

export const changeStockData = createAction(actions.changeStockData);
export const grabSingleStock = createAction(actions.grabSingleStock);
export const changeSectorData = createAction(actions.changeSectorData);
export const grabSectorData = createAction(actions.grabSectorData);
export const changeBatchData = createAction(actions.changeBatchData);
export const grabBatchData = createAction(actions.grabBatchData);


const INITIAL_STATE = {
    stock: {},
    sector: {},
    batch: {},
}

export default handleActions({
    [actions.changeStockData]: (state, action) => {
        const stock = action.payload;
        return {
            ...state,
            stock
        };
    },
    [actions.changeSectorData]: (state, action) => {
        const sector = action.payload;
        return {
            ...state, 
            sector
        };
    },
    [actions.changeBatchData]: (state, action) => {
        const batch = action.payload;
        return {
            ...state,
            batch
        };
    }
}, INITIAL_STATE)
