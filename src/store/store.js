import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

import listReducer from "../reducers/list";

const store = createStore(listReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
