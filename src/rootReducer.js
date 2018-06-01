// This will can combine one or more Reducer functions and export it through Redux's combineReducer helper.
import { combineReducers } from "redux";

import { homeReducer } from "./modules/home";
// import secondCounter from './exampleReducer';

export default combineReducers({ homeReducer });

// Example for combining multiple reducers:
// export default combineReducers({ count, secondCounter });
