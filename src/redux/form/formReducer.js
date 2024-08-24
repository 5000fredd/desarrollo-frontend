import { SET_FORM_DATA, CLEAR_FORM_DATA } from './formTypes';

const initialState = {
    formData: {
        username: '',
        email: '',
        password: '',
    },
    modalMessage: '', // Mensaje que se mostrará en el modal
    isPasswordValid: true // Añadido para manejar la validez del password
};

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FORM_DATA: {
            if (action.payload.password === 'mod7ReactUSIP') {
                return {
                    ...state,
                    formData: {
                        ...state.formData,
                        ...action.payload,
                    },
                    modalMessage: 'Bienvenidos al Modulo 7',
                    isPasswordValid: true // Password es válido
                };
            }
            
            // Password incorrecto
            return {
                ...state,
                modalMessage: 'Password incorrecto, intente nuevamente.',
                isPasswordValid: false // Password no es válido
            };
        }
        case CLEAR_FORM_DATA: {
            return {
                ...state,
                formData: {
                    username: '',
                    email: '',
                    password: ''
                },
                modalMessage: '', 
                isPasswordValid: true 
            };
        }
        default:
            return state;
    }
};

export default formReducer;
