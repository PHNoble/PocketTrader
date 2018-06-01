import { createAction, handleActions } from 'redux-actions'

export const actions = {
    saveUserData: 'SAVE/USER_DATA',
}

export const saveUserData = createAction(actions.saveUserData);


const INITIAL_STATE = {
    user: {},
}

export default handleActions({
    [actions.saveUserData]: (state, action) => {
        const user = action.payload;
        return {
            user
        };
    },
}, INITIAL_STATE)
