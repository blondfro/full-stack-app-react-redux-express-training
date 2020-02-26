import React from "react";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { render } from "react-dom";
import Main from "./components/Main";
import {store} from "./store";
import { history } from "./store/history";

render(
    <Provider store={store}>
        <Router history={history}>
            <Main />
        </Router>
    </Provider>,
    document.getElementById("app")
);


