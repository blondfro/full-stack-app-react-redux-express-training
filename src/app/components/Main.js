import React from "react";

import Dashboard  from "./Dashboard";
import { Route } from "react-router-dom";
import Navigation from "./Navigation";


export function Main() {
    return (
        <div>
            <Navigation/>
            <Route exact path="/dashboard" component={Dashboard} />
            {/*<Route exact path="/dashboard" component={Dashboard} />*/}
        </div>)
}

export default Main;