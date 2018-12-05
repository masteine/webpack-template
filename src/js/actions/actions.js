import * as types from '../constants/types';

export function addActions() {
	return dispatch => {
		dispatch({
			type: types.DEFAULT_CONST,
			payload: '1',
		})
	}
}