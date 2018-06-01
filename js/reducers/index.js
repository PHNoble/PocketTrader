import { combineReducers } from 'redux';
import StockReducer from './StockReducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
    stock: StockReducer,
    auth: AuthReducer
});