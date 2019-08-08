import { Restservice } from '../../shared/restservice';
import * as AT from '../../constants/ActionTypes';

export const adminActions = {
    login
};

function login(userName, password) {
    return dispatch => {
        dispatch(request({userName}));

        Restservice.login(userName, password)
        .then(
            admin => {
                dispatch(success(admin));
                history.push('/');
            },
            error => {
                dispatch(failure(error.toString()));
                // Insert dispatch for alert system here.
            }
        )
    }
    function request(admin) {return {type: AT.LOGIN_REQUEST, admin}}
    function success(admin) {return {type: AT.LOGIN_SUCCESS, admin}}
    function failure(error) {return {type: AT.LOGIN_FAILURE, error}}
}