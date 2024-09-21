import * as api from '../api/index.js';
import { FETCH2, DELETE2 } from '../constants/constantTypes.js';
import { setSnackBar } from './snackBar.js';

export const getUser = () => async (dispatch) => {
    try {
        const { data } = await api.fetchUser();

       
        dispatch({ type: FETCH2, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};


export const deleteUser = (id) => async (dispatch) => {
    try {
        await api.deleteUser(id);

        dispatch({ type: DELETE2, payload: id });
        dispatch(setSnackBar(true, 'success', "SUCCESSFULLY DELETED"));
    } catch (error) {
        console.log(error.message);
    }
};
