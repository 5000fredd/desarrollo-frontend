import { SET_FORM_DATA } from './loginTypes';

export const saveFormData = (formData) => {
    return {
        type: SET_FORM_DATA,
        payload: formData,
    }
}
