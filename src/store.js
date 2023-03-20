import {createStore} from 'redux'

import reducer from './state.js'

export default createStore(reducer)

/*
1. This code creates a Redux store in a React application using the createStore function from 
the Redux library.

2. The import {createStore} from 'redux' statement imports the createStore function from the 
Redux library.

3. The import reducer from './state.js' statement imports the reducer function defined in the 
state.js file.

4. The createStore(reducer) statement creates a Redux store by passing the reducer function as 
an argument to the createStore function. The returned store object contains methods to 
retrieve the current state of the application, dispatch actions to update the state, 
and subscribe to changes in the state.

5. When an action is dispatched to the store using the dispatch method, the store will call the 
reducer function with the current state and the action object. The reducer will then return a 
new state object based on the action, and the store will update its internal state to the new 
value.

6. This allows different parts of a React application to interact with a centralized state 
management system, rather than managing state individually in each component. 
This can simplify state management and help prevent common issues like race conditions and 
inconsistent state.










*/ 