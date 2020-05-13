import { createStore } from "redux";
import redusers from "./reducers/toggleLight";

export default createStore(redusers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());