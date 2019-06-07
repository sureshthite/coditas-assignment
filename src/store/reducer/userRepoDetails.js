import actionTypes from '../../constants/constants'; 

const INITIAL_STATE = {
  data: [],
  error: null,
  loading: false,
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
      case actionTypes.USER_REPO_FECHING:
          return ({
              ...state,
              loading: true,
          })
      case actionTypes.USER_REPO_SUCCESS:
          return ({
              ...state,
              data: action.payload,
              loading: false,
              error: null,
          })

      case actionTypes.USER_REPO_ERROR: 
      return ({
          ...state,
          data: null,
          loading: true,
          error: action.payload
      })

      default:
         return state;
  }
}