import React from "react";
import { connect } from "react-redux";
import { Link} from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <Link to="/dashboard">
                My Application
            </Link>
        </nav>
    )
}

export default connect(state=>state)(Navigation);