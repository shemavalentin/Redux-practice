import { legacy_createStore, compose } from "redux";
import rootReducer from './reducer'
import { sayHiOnDispatch, includeMeaningOfLife } from "./exampleAddons/enhancers";


const composedInhancer = compose(sayHiOnDispatch, includeMeaningOfLife);
const store = legacy_createStore(rootReducer, undefined, composedInhancer);

export default store;