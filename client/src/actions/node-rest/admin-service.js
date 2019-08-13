import { restservice } from '../../shared/restservice';
import * as AT from '../../constants/ActionTypes';
import { history } from '../../shared/history';

export const adminActions = {
    login,
    logout
};

function login(username, password) {
    return dispatch => {
        dispatch(request({username}));

        restservice.login(username, password)
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

function logout() {
    restservice.logout();
    return { type: AT.LOGOUT };
}