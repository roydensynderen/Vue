import * as types from './types'

export default {
	[types.MUTATE_UPDATE_VALUE]: (state, payload) => {
		types.MUTATE_UPDATE_VALUE = payload
	}
}
