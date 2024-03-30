import {  legacy_createStore, applyMiddleware } from "redux";
import rootReducer from './reducer'
//import { sayHiOnDispatch, includeMeaningOfLife } from "./exampleAddons/enhancers";
import { print1,  print2,  print3 } from './exampleAddons/middleware';


const middlewareEnhancer = applyMiddleware(print1,  print2,  print3);
//const composedInhancer = compose(sayHiOnDispatch, includeMeaningOfLife);
const store = legacy_createStore(rootReducer, middlewareEnhancer);

export default store;