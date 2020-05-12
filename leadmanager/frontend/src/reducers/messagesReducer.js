import { CREATE_MESSAGES } from '../actions/types'

const initialState = {}

export default function (state = initialState, actions) {
  switch (actions.type) {
    case CREATE_MESSAGES:
      return (state = actions.payload)

    default:
      return state
  }
}
