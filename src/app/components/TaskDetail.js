import React from 'react';
import { connect } from "react-redux";
import {Link} from "react-router-dom";
import * as mutations from "../store/mutations";

function TaskDetail({
                        id,
                        comments,
                        task,
                        groups,
                        isComplete,
                        setTaskComplete,
                        setTaskGroup,
                        setTaskName
                    })  {
        return (
            <div>
                Task Detail
                <div>
                    <input
                        onChange={setTaskName}
                        value={task.name} />
                </div>


                <div>
                    <button
                        onClick={() => setTaskComplete(id, !isComplete)}
                    >{isComplete ? "Reopen" : "Complete"}</button>
                </div>

                <div>
                    <select
                        onChange={setTaskGroup}
                        value={task.group}
                    >
                        {groups.map(group => (
                            <option key={group.id} value={group.id}>
                                {group.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <Link to={"/dashboard"}>
                        <button>Done</button>
                    </Link>
                </div>

            </div>
        );
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.id;
    let task = state.tasks.find(task => task.id === id);
    let groups = state.groups;
    return {
        id,
        task,
        groups,
        isComplete: task.isComplete
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const id = ownProps.match.params.id;
    return {
        setTaskComplete: (id, isComplete) => {
            dispatch(mutations.setTaskComplete(id, isComplete))
        },
        setTaskGroup: (event) => {
            dispatch(mutations.setTaskGroup(id, event.target.value))
        },
        setTaskName: (event) => {
            dispatch(mutations.setTaskName(id, event.target.value))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetail);