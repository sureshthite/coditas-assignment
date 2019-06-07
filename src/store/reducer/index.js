import userData from  './userReducer';
import userRepoDetails from  './userRepoDetails';

import {combineReducers} from 'redux';

export default combineReducers({
	userData,
	userRepoDetails,
})