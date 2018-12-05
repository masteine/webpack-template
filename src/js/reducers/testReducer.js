import * as types from '../constants/types';

count = 0;

const initialState = {
	testState: [],
};

export function testReducer(state = initialState, action) {
	switch ( action.type ) {
		case types.DEFAULT_CONST:
			return {
				...state, testState: [...state.testState, 1]
			};
		default:
			return state
	}
}
