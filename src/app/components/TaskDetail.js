import React from 'react';
import { connect } from "react-redux";
import {Link} from "react-router-dom";

function TaskDetail({ id, comments, task, groups, isComplete})  {
        return (
            <div>
                Task Detail
                <div>
                    <input value={task.id} />
                </div>


                <div>
                    <button>Complete / Reopen Task</button>
                </div>

                <div>
                    <select>
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

export default connect(mapStateToProps)(TaskDetail);