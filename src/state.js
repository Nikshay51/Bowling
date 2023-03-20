import {combineReducers} from 'redux'

import game from './components/Game/state.js'

export default combineReducers({
  game,
})

/*
1. This code is combining multiple reducers into a single reducer function using the combineReducers utility function from the Redux 
library, which is commonly used in React applications for managing state.

2. The import {combineReducers} from 'redux' statement imports the combineReducers function from the Redux library.

3. The import game from './components/Game/state.js' statement imports the reducer function defined in the state.js file of the Game 
component.

4. The export default combineReducers({ game }) statement combines the game reducer function into a single reducer object, 
which can then be used with the Redux createStore function to create a Redux store.

5. The combineReducers function takes an object as an argument, where the keys are the names of the individual reducers and the values 
are the reducer functions themselves. 
In this case, there is only one reducer, game, which is passed as the value to the game key in the object passed to combineReducers.

6. When the application state changes, the combined reducer function will call each individual reducer with the current state and the
action that triggered the change, and then combine the results of each reducer into a single object representing the new state of 
the application.
*/