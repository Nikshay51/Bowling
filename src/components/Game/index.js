import Game from './Game'
import {connect} from 'react-redux'

const mapStateToProps = game => ({
  ...game,
})

export default connect(mapStateToProps)(Game)

/*
* This code exports a connected version of the Game component that is connected to the Redux store using the connect function from the react-redux library. The mapStateToProps function is used to map the state properties of the Redux store to props that can be accessed within the Game component.

*In this particular case, the mapStateToProps function simply returns the entire game object as props, which means that all properties of the game object will be available within the Game component as props.

*The connect function takes the mapStateToProps function as an argument and returns a new function that takes the Game component as an argument and returns a new connected component. This connected component has access to the Redux store and can dispatch actions to update the store.
*/