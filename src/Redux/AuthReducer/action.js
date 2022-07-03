//Create ActionCreator functions here
import * as types from './actionTypes';
import axios from 'axios';
const checklogin = (payload) => (dispatch) => {
    dispatch({ type: types.LOGIN_REQUEST });
console.log("payload",payload)
    return axios({
        method:"post",
        url:"/api/login",
        baseURL:"https://reqres.in",
    email: "eve.holt@reqres.in",
    password: "cityslicka",

        data:payload
    }).then(r=>dispatch({type:types.LOGIN_SUCCESS,payload:r.data})).catch(e=>dispatch({type:types.LOGIN_FAILURE,payload:e}));
}
export {checklogin};