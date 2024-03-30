const initialState = [
        // { id: 0, text: 'Learn React', completed: true },
        // { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
        // { id: 2, text: ' Build something fun!', completed: false, color: 'blue'}
] 
const nextTodoId = (todos) => {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1;
}

// Using the initialState as a default value

export const todosReducer = (state = initialState, action) => {
    // Normally the reducer looks at the action type to decide what happens
    switch (action.type) {
        case 'todos/todoAdded': {
            return [
                ...state,
                {
                    id: nextTodoId(state),
                    text: action.payload,
                    completed: false
                }
            ]
        } 
            
        case 'todos/toggled': {
            return state.map(todo => {
                // If this isn't the item we are looking for, leave it alone
                if (todo.id !== action.payload) {
                    return todo
                }
                // Already found the todo that has to change. Return a copy
                return {
                    ...todo,
                    // Flip the completed flag
                    completed: !todo.completed
                }
            })
        }
        default:
            return state;
    }
}