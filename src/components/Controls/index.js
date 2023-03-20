import {connect} from 'react-redux'
import {actions} from '../Game/state'

import Controls from './Controls'

const mapDispatchToProps = {
  enterScore: actions.enterScore,
  restart: actions.restart,
  updateTotalScore: actions.updateTotalScore,
}

export default connect(null, mapDispatchToProps)(Controls)

/*
This code exports a connected version of the Controls component, using the connect function provided by react-redux. The mapDispatchToProps function maps the actions defined in the ../Game/state file to props that will be passed to the Controls component. Specifically, it maps the enterScore, restart, and updateTotalScore actions to props.enterScore, props.restart, and props.updateTotalScore, respectively.

By connecting the component to the Redux store in this way, the Controls component will have access to the Redux state and actions through its props. This allows the Controls component to dispatch actions to update the Redux state and to receive updated state values from the store.

*/