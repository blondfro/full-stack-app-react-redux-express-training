export const REQUEST_TASK_CREATION = "REQUEST_TASK_CREATION ";
export const CREATE_TASK = "CREATE_TASK ";

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