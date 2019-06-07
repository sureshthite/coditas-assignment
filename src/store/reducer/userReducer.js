import actionTypes from '../../constants/constants'; 

const INITIAL_STATE = {
	data: [],
	error: null,
	loading: false,
}

function getSortedData(data) {
	data.sort((first, second) => {
		if (first.login === second.login) {
				return 0;
		}
		if (first.login > second.login) {
				return 1;
		}
		if (first.login < second.login) {
				return -1;
		}
	})
	return data;
}

function getSortedDataDsc(data) {
	data.sort((first, second) => {
		if (first.login === second.login) {
				return 0;
		}
		if (first.login > second.login) {
				return -1;
		}
		if (first.login < second.login) {
				return 1;
		}
	})
	return data;
}

function getSortedDataRankAsc(data) {
	data.sort((first, second) => {
		if (first.score === second.score) {
				return 0;
		}
		if (first.score > second.score) {
				return 1;
		}
		if (first.score < second.score) {
				return -1;
		}
	})
	return data;
}

function getSortedDataRankDsc(data) {
	data.sort((first, second) => {
		if (first.score === second.score) {
				return 0;
		}
		if (first.score > second.score) {
				return -1;
		}
		if (first.score < second.score) {
				return 1;
		}
	})
	return data;
}

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case actionTypes.USER_FETCHING:
				return ({
					...state,
					loading: true,
				})
		case actionTypes.USER_SUCCESS:
				return ({
					...state,
					data: action.payload,
					loading: false,
					error: null,
				})

		case actionTypes.USER_ERROR: 
		return ({
				...state,
				data: null,
				loading: true,
				error: action.payload
		})

		case actionTypes.SORT_ASC: 
				const { data } = state;
				const sortData = getSortedData(data);
				return({
					...state,
					data: sortData
				})

		case actionTypes.SORT_DSC:
				const sortDataDSC = getSortedDataDsc(state.data);
				return({
					...state,
					data: sortDataDSC
				})

		case actionTypes.SORT_RANK_ASC: 
				const sortDataRankASC = getSortedDataRankAsc(state.data);
				return({
					...state,
					data: sortDataRankASC
				})

		case actionTypes.SORT_RANK_DSC: 
				const sortDataRankDSC = getSortedDataRankDsc(state.data);
				return({
					...state,
					data: sortDataRankDSC
				})

		default:
				return state;
    }
}