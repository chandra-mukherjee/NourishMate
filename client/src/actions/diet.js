import * as api from '../api/index.js';
import { FETCH1, CREATE1, UPDATE1, DELETE1, LIKE1 } from '../constants/constantTypes.js';
import { setSnackBar } from './snackBar.js';

export const getDietPost = () => async (dispatch) => {
    try {
        const { data } = await api.fetchDietPost();
        console.log(data)
      
        dispatch({ type: FETCH1, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

s
export const createDietPost = (dietPost) => async (dispatch) => {
    try {
        const { data } = await api.createDietPost(dietPost);

        dispatch({ type: CREATE1, payload: data });
        dispatch(setSnackBar(true, "success", "SUCCESSFULLY CREATED DIET PLAN"));
    } catch (error) {
        console.log(error.message);
    }
};


export const updateDietPost = (id, dietPost) => async (dispatch) => {
    try {
        const { data } = await api.updateDietPost(id, dietPost);

        dispatch({ type: UPDATE1, payload: data });
        dispatch(setSnackBar(true, 'success', "SUCCESSFULLY UPDATED"));
    } catch (error) {
        console.log(error.message);
    }
};


export const likeDietPost = (id) => async (dispatch) => {

    try {
        const { data } = await api.likeDietPost(id);

        dispatch({ type: LIKE1, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};


export const deleteDietPost = (id) => async (dispatch) => {
    try {
        await api.deleteDietPost(id);

        dispatch({ type: DELETE1, payload: id });
        dispatch(setSnackBar(true, 'success', "SUCCESSFULLY DELETED"));
    } catch (error) {
        console.log(error.message);
    }
};
