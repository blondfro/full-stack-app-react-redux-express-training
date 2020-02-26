export const REQUEST_TASK_CREATION = "REQUEST_TASK_CREATION ";
export const CREATE_TASK = "CREATE_TASK ";
export const SET_TASK_COMPLETE = "SET_TASK_COMPLETE";
export const SET_TASK_GROUP = "SET_TASK_GROUP";
export const SET_TASK_NAME = "SET_TASK_NAME";


export function requestTaskCreation(groupID) {
    return {
        type: REQUEST_TASK_CREATION,
        groupID
    }
}

export function createTask(taskID, groupID, ownerID) {
    return {
        type: CREATE_TASK,
        taskID,
        groupID,
        ownerID
    }
}

export function setTaskComplete(taskID, isComplete) {
    return {
        type: SET_TASK_COMPLETE,
        taskID,
        isComplete
    }
}

export function setTaskGroup(taskID, groupID) {
    return {
        type: SET_TASK_GROUP,
        taskID,
        groupID
    }
}

export function setTaskName(taskID, name) {
    return {
        type: SET_TASK_NAME,
        taskID,
        name
    }
}