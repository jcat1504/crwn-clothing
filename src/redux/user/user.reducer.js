import { UserActionTypes } from './users.types';


const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
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