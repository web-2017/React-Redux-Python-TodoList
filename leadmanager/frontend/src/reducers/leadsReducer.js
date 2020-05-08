import { GET_LEADS, DELETE_LEADS, ADD_LEADS } from '../actions/types.js'

const initialState = {
  leads: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LEADS:
      return {
        ...state,
        leads: action.payload,
      }
    case DELETE_LEADS:
      return {
        ...state,
        leads: state.leads.filter((lead) => {
          return lead.id !== action.payload
        }),
      }
    case ADD_LEADS:
      return {
        ...state,
        leads: [...state.leads, action.payload],
      }

    default:
      return state
  }
}
