import React from "react";

import Dashboard  from "./Dashboard";
import { Route } from "react-router-dom";
import Navigation from "./Navigation";
import TaskDetail from "./TaskDetail";


export function Main() {
    return (
        <div>
            <Navigation/>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/task/:id" component={TaskDetail} />
            {/*<Route exact path="/dashboard" component={Dashboard} />*/}
        </div>)
}

export default Main;