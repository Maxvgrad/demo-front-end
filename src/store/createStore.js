import { todoApp } from '../reducers/combineReducers.js';
import { createStore } from "redux";

export const store = createStore(todoApp)