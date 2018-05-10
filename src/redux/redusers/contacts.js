import { CREATE_CONTACT } from '../actions/contacts';

export default (state = { contacts: [] }, action) => {
  switch(action.type) {
    case CREATE_CONTACT:
      return {
        ...state,
        contacts: [
          ...state.contacts,
          action.contact
        ]
      }
    default:
      return state;
  }
}
