import * as AT from '../constants/ActionTypes';

export function employes(state = {}, action) {
  switch (action.type) {
    case AT.GETALL_REQUEST:
      return {
        loading: true
      };
    case AT.GETALL_SUCCESS:
      return {
        items: action.employes
      };
    case AT.GETALL_FAILURE:
      return { 
        error: action.error
      };

      /* 
    case AT.DELETE_REQUEST:
      // add 'deleting:true' property to employe being deleted
      return {
        ...state,
        items: state.items.map(employe =>
          employe.id === action.id
            ? { ...employe, deleting: true }
            : employe
        )
      };
    case AT.DELETE_SUCCESS:
      // remove deleted employe from state
      return {
        items: state.items.filter(employe => employe.id !== action.id)
      };
    case AT.DELETE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to employe 
      return {
        ...state,
        items: state.items.map(employe => {
          if (employe.id === action.id) {
            // make copy of employe without 'deleting:true' property
            const { deleting, ...employeCopy } = employe;
            // return copy of employe with 'deleteError:[error]' property
            return { ...employeCopy, deleteError: action.error };
          }

          return employe;
        })
      }; */
    default:
      return state
  }
}

export function registration(state = {}, action) {
  switch (action.type) {
    case AT.REGISTER_REQUEST:
      return { registering: true };
    case AT.REGISTER_SUCCESS:
      return {};
    case AT.REGISTER_FAILURE:
      return {};
    default:
      return state
  }
}