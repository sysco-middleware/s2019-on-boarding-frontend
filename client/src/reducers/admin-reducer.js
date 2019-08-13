import * as AT from '../constants/ActionTypes';

let admin = JSON.parse(localStorage.getItem('admin'));
const initialstate = admin ? {loggedIn: true, admin}: {};

export function authenticate(state = initialstate, action){
    switch(action.type) {
        case AT.LOGIN_REQUEST:
            return {
                loggingIn: true,
                admin: action.admin
            };
        case AT.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                admin: action.admin
            };
        case AT.LOGIN_FAILURE:
            return {};
        default: 
            return state
    }
}
