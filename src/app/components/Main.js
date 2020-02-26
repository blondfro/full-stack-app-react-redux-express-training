import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import Dashboard  from "./Dashboard";

export function Main() {
    return (
        <Provider store={store}>
            <Dashboard />
        </Provider>)
}

export default Main;