import { createAction, handleActions } from 'redux-actions';
import { PropTypes } from 'react';

const initialState = {
  websites: '',
  blacklist: true, //if false, then whitelist
  hourlyStepsMode: true,
  timeStepsMode: false,
  stepGoal: 250,
  totalStepsTime: '18:00',
  timeExerciseMode: false,
  exerciseTime: '18:00',
  exerciseMinutes: 30,
  timeFoodMode: false,
  foodTime: [],
  timeWaterMode: false,
  waterTime: [],
  timeSleepMode: false,
  sleepTime: ['22:00', '6:00']

}

export const SET_WEBSITES = 'SET_WEBSITES';
export const setWebsites = createAction(SET_WEBSITES);

export const TOGGLE_BLACKLIST = 'TOGGLE_BLACKLIST';
export const toggleBlacklist = createAction(TOGGLE_BLACKLIST);

// export const TOGGLE_HRLY_STEP = 'TOGGLE_HRLY_STEP';
// export const toggleHrlyStep = create

export default handleActions({
	SET_WEBSITES: (state, { payload }) => {
    console.log('payload: ', payload)
		return {...state, websites: payload};
	},
  TOGGLE_BLACKLIST: (state, { payload }) => {
    return {...state, blacklist: !state.blacklist}
  },

}, initialState);



