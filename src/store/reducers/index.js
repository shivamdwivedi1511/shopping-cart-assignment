import { combineReducers } from "redux";
import { CartReducer } from './cartReducer'
import { productReducer } from './productReducer'

export default combineReducers({ CartReducer, productReducer })