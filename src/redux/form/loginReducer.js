import { SET_FORM_DATA } from './loginTypes';

const initialState = {
    FormData: {
        username: '',
        email: '',
    },
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FORM_DATA : {
            return {
                ...state,
                FormData:{
                    ...state.FormData,
                    ...action.payload,
                }
            }
        }
        default:
            return state;
    }
};

export default loginReducer;