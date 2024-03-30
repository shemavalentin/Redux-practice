import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './store';
// import './index.css'
// import App from './App'
//import './api/server'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
  </React.StrictMode>
);
/*
console.log('Initial state', store.getState());

const unsubscribe = store.subscribe(() =>
  console.log('State after dispatch:', store.getState())
);

// Now dispatch some actions

console.log('Dispatching action')
store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' })
console.log('Dispatch complete')

// store.dispatch({type:'todos/todoAdded', payload: ' Learn about action'})
// store.dispatch({type:'todos/todoAdded', payload: ' Learn about Reducers'})
// store.dispatch({ type: 'todos/todoAdded', payload: ' Learn about stores' })

// store.dispatch({type:'todos/todoAdded', payload: 0})
// store.dispatch({ type: 'todos/todoAdded', payload: 1 })

// store.dispatch({type:'filters/statusFilterChange', payload: 'Active'})
// store.dispatch({
//   type: 'filters/colorsFilterChange', payload: { color: 'red', changeType: 'added' }
// });

// Stop listening to state updates
unsubscribe();

// Dispact one more action to see what happens
*/
store.dispatch({ type: 'todos/todoAdded', payload: 'Try creating a store' });
console.log('State after dispatch: ', store.getState())


  