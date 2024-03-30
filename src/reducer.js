import { combineReducers } from 'redux';

import { todosReducer } from './features/todos/todosSlice';

import { filtersReducer } from './features/filters/filtersSlice';

const rootReducer = combineReducers({
    // Define a top-level state filed named `todos`, handled by ` todosReducer`

    todos: todosReducer,
    filter: filtersReducer
});

export default rootReducer;
  
    
    
