import { createAction } from 'redux-actions';
import mapValues from 'lodash.mapvalues';
import updateFrames from '../../utilities/updateFrames';
import updateCumulativeScore from '../../utilities/updateCumulativeScore';
import isGameOver from '../../utilities/isGameOver';
import updateCurrentRoll from '../../utilities/updateCurrentRoll';

const types = {
  enterScore: 'Game/EnterScore',
  restart: 'Game/Restart',
};

export const actions = mapValues(types, (type) => createAction(type));

const initialState = {
  frames: [],
  cumulativeScores: [],
  gameOver: false,
  pins: [],
  rolls: 0,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.enterScore: {
      const { frames, cumulativeScores, pins, rolls } = state;
      const updatedFrames = updateFrames(rolls, action.payload, frames);
      const updatedCumulativeScores = updateCumulativeScore(
        rolls,
        frames,
        cumulativeScores,
        pins,
        action.payload
      );
      const updatedPins = pins.concat(action.payload);
      const updatedRolls = updateCurrentRoll(rolls, action.payload);
      const updatedGameOver = isGameOver(rolls, action.payload, pins);

      return {
        ...state,
        frames: updatedFrames,
        cumulativeScores: updatedCumulativeScores,
        pins: updatedPins,
        rolls: updatedRolls,
        gameOver: updatedGameOver,
      };
    }
    case types.restart: {
      return initialState;
    }
    default:
      return state;
  }
};

export default gameReducer;

/*
* This code defines a Redux reducer function for a bowling game, which handles two actions: enterScore and restart.

*The reducer initializes the state of the game with an initialState object that contains an empty array for frames, cumulativeScores, and pins, rolls is set to 0, and gameOver is set to false.

*When the enterScore action is dispatched, the reducer updates the state by calling several utility functions from the ../../utilities/ folder, which are used to calculate the updated values of frames, cumulativeScores, pins, rolls, and gameOver. Then, the updated state is returned by creating a new object using the spread operator to copy the current state and update the relevant properties.

*When the restart action is dispatched, the reducer resets the state of the game to its initial state.

*Finally, the code exports the gameReducer function as the default export of the module.
 */