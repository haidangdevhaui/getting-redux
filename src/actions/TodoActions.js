import * as types from '../constants/ActionTypes';

export function addTodo(content) {
    return {
        type: types.ADD_TODO,
        content
    }
}

export function editTodo(id) {
    return {
        type: types.EDIT_TODO,
        id
    }
}

export function updateTodo(id, content) {
    return {
        type: types.UPDATE_TODO,
        id,
        content
    }
}

export function deleteTodo(id) {
    return {
        type: types.DELETE_TODO,
        id
    }
}

export function markAll() {
    return {
        type: types.MARK_ALL
    };
}

export function clearMarked() {
    return {
        type: types.CLEAR_MARKED
    };
}