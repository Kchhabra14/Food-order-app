import { cartreducer } from "./reducer";
import { combineReducers } from "redux";

const rootreducer =  combineReducers({
    cartreducer,
});

export default rootreducer;