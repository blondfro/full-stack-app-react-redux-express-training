import React from "react";
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import { requestTaskCreation } from "../store/mutations";


function TaskList( {tasks, name, id, createNewTask}) {
    return (
        <div>
            <h3>{name}</h3>
            {tasks.map(task =>
                <Link
                    to={"/task/" + task.id}
                    key={task.id}
                >
                    <div >
                        {task.name}
                    </div>
                </Link>)}
                <button onClick={()=> createNewTask(id)}>
                    Add New
                </button>
        </div>
    )
}

function mapStateToProps( state, ownProps) {
    let groupID = ownProps.id;
    return {
        name: ownProps.name,
        id: groupID,
        tasks: state.tasks.filter(task => task.group === groupID)
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        createNewTask: ()=> {
            console.log("Creating new task", ownProps.id);
            dispatch(requestTaskCreation(ownProps.id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)

