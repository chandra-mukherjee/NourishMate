import * as api from '../api/index.js';
import { AUTH } from '../constants/constantTypes.js';
import { setSnackBar } from './snackBar.js';


// Sign In action
export const signin = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);
       
        dispatch({ type: AUTH, payload: data });

        const user = JSON.parse(localStorage.getItem('userProfile'));

        if (user?.userInfo?.role === "USER") {
          
            history.push('/dashboard');
        } else {
           
            history.push('/admin');
        }

      
        dispatch(setSnackBar(true, "success", "SUCCESSFULLY SIGNED IN"));

    } catch (error) {
        console.log(error.message);
        dispatch(setSnackBar(true, "error", "USER OR PASSWORD NOT CORRECT"));
    }
};


export const signup = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, payload: data });
       
        history.push('/authentication');
       
        dispatch(setSnackBar(true, "success", "SUCCESSFULLY SIGNED UP"));
    } catch (error) {
        console.log(error.message);
        dispatch(setSnackBar(true, "error", "USER ALLREADY EXIST, PLEASE SIGN IN OR SIGN UP ANOTHER ACCOUNT"));
    }
};
