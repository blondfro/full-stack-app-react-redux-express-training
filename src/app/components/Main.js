import React from "react";

import Dashboard  from "./Dashboard";
import { Route } from "react-router-dom";


export function Main() {
    return (
        <div>
            <Route exact path="/dashboard" component={Dashboard} />
            {/*<Route exact path="/dashboard" component={Dashboard} />*/}
        </div>)
}

export default Main;