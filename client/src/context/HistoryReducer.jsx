export const historyReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_SEARCH':
			const history = JSON.parse(
				localStorage.getItem('weather_search_history') || '[]'
			);
			const maxHistoryLength = 4;
			const isHistoryMaxed = history.length === maxHistoryLength;
			const workingHistory = isHistoryMaxed ? history.slice(1) : history;
			const updatedHistory = workingHistory.concat(action.payload);

			return {
				...state,
				searchHistory: updatedHistory,
			};
		case 'DELETE_SEARCH':
			return {
				...state,
				searchHistory: state.searchHistory.filter(
					(_, index) => index !== action.payload
				),
			};

		default:
			return state;
	}
};
