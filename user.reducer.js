import UserActionTypes from './users.types';


const INITIAL_STATE = {
    currentUser: null,
    error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        //if either of these actions are the case, this is what will be returned. it can be stacked
        case UserActionTypes.GOOGLE_SIGN_IN_SUCCESS:
        case UserActionTypes.EMAIL_SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null
            };
        case UserActionTypes.GOOGLE_SIGN_IN_FAILURE:
        case UserActionTypes.EMAIL_SIGN_IN_FAILURE:
            return {
                ...state,
                error: action.payload
            }

            default:
                return state;
    }
}
//basically, we are creating a function that takes state and action
// we want to make two cases: if case relates to set_current_user,
//we shall return the new object regarding state and action
//if not, return initial state

export default userReducer;