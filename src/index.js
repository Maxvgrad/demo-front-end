import React from 'react';
import {render} from 'react-dom';
import App from "./containers/App";
import Provider from "react-redux";

import {createStore} from "redux";
import {todoApp} from "./reducers/combineReducers";

const store = createStore(todoApp);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);