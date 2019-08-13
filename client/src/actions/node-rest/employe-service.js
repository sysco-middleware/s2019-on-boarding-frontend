import { restservice } from "../../shared/restservice";
import * as AT from "../../constants/ActionTypes";
import { history } from "../../shared/history";

export const employeActions = {
  getAll,
  register,
  update,
};

function getAll() {
  return dispatch => {
    dispatch(request());

    restservice
      .getAll("/employe")
      .then(
        employes => dispatch(success(employes)),
        error => dispatch(failure(error.toString()))
      );
  };

  function request() {
    return { type: AT.GETALL_REQUEST };
  }
  function success(employes) {
    return { type: AT.GETALL_SUCCESS, employes };
  }
  function failure(error) {
    return { type: AT.GETALL_FAILURE, error };
  }
}

function register(employe) {
  return dispatch => {
    dispatch(request(employe));

    restservice.post(employe, "/employe/register").then(
      employe => {
        dispatch(success());
        history.push("/tasklist");
        //dispatch(alertActions.success('Registration successful'));
      },
      error => {
        dispatch(failure(error.toString()));
        //dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(employe) {
    return { type: AT.REGISTER_REQUEST, employe };
  }
  function success(employe) {
    return { type: AT.REGISTER_SUCCESS, employe };
  }
  function failure(error) {
    return { type: AT.REGISTER_FAILURE, error };
  }
}

function update(employe) {
  return dispatch => {
    dispatch(request(employe));
    restservice.put(employe, "/employe/").then(
      employe => {
        dispatch(success());
      },
      error => {
        dispatch(failure(error.toString()));
      }
    );
  };

  function request(employe) {
    return { type: AT.UPDATE_REQUEST, employe };
  }
  function success(employe) {
    return { type: AT.UPDATE_SUCCESS, employe };
  }
  function failure(error) {
    return { type: AT.UPDATE_FAILURE, error };
  }
}
